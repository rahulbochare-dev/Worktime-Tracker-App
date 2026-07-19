import { and, eq, gte, lt, sql } from "drizzle-orm";
import { db } from "../index";
import { sessions } from "../schema";

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