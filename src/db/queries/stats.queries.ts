import { and, eq, gte, lt } from "drizzle-orm";
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