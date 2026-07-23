import { and, desc, eq, gte, lt, sql } from "drizzle-orm";
import { db } from "../index";
import { sessions } from "../schema";
import { getGoalQuery } from "./settings.queries";

const getCurrentWeek = () => {
  const now = new Date()
  
  const day = now.getDay()
  const difference = day === 0 ? -6 : 1 - day
  const start = new Date(now)
  start.setDate(now.getDate() + difference)
  start.setHours(0, 0, 0, 0)
  const end = new Date(start)
  end.setDate(start.getDate() + 7)

  return {
    start,
    end
  }
}

export const getCurrentWeekSessionsTime = async () => {
  const {start, end} = getCurrentWeek()

  const currentWeekSessions = await db.select().from(sessions).where(
    and(
      gte(sessions.startTime, start),
      lt(sessions.endTime, end)
    )
  )

  return currentWeekSessions.reduce(
    (total, session) => total + session.totalTime,
    0
  )
}

export const getCurrentMonthSessionsTime = async () => {
  const now = new Date()

  const start = new Date(now.getFullYear(), now.getMonth(), 1)
  const end = new Date(now.getFullYear(), now.getMonth() + 1, 1)

  const totalTimeThisMonth = await db.select({
    totalTime: sql<number>`COALESCE(SUM(${sessions.totalTime}), 0)`
  })
  .from(sessions)
  .where(
    and(
      gte(sessions.startTime, start),
      lt(sessions.endTime, end)
    )
  )

  return totalTimeThisMonth[0].totalTime
}

export const getTodaySessionsTime = async () => {
  const start = new Date();
  start.setHours(0, 0, 0, 0);

  const end = new Date(start);
  end.setDate(end.getDate() + 1);

  const todaySessions = await db.select().from(sessions).where(
    and(
      gte(sessions.startTime, start),
      lt(sessions.endTime, end)
    )
  )

  return todaySessions.reduce(
    (total, session) => total + session.totalTime,
    0
  )
}

export const getAllSessionsTime = async () => {
  const allSessions = await db.select().from(sessions)

  return allSessions.reduce(
    (total, session) => total + session.totalTime,
    0
  )
}

export const todayGoalPercentComplete = async () => {
  const dailyGoal = await getGoalQuery()
  const todayTotalTime = await getTodaySessionsTime()

  const goalCompletePercent = Math.min((todayTotalTime / dailyGoal) * 100, 100)  

  return goalCompletePercent
}

export const getCurrentStreak = async () => {
  const allSessions = await db.select({
    startTime: sessions.startTime,
  })
  .from(sessions)
  .orderBy(desc(sessions.startTime))

  const uniqueDates = [
    ...new Set(
      allSessions.map((session) => {
        const date = new Date(session.startTime)
        date.setHours(0, 0, 0, 0)
        return date.getTime()
      })
    )
  ]

  if(uniqueDates.length === 0) return 0

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const yesterday = new Date(today)
  yesterday.setDate(yesterday.getDate() - 1)

  if(
    uniqueDates[0] !== today.getTime() &&
    uniqueDates[0] !== yesterday.getTime()
  ){
    return 0
  }

  let streak = 1

  for (let i = 1; i < uniqueDates.length; i++){
    const previous = uniqueDates[i - 1]
    const current = uniqueDates[i]

    const diffDays = (previous - current) / (1000 * 60 * 60 * 24)

    if(diffDays === 1){
      streak++
    } else {
      break
    }
  }

  return streak
}