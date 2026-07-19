import { db } from "../index";
import { eq } from "drizzle-orm";
import { settings } from "../schema";

export const createGoalQuery = async (timeMS) => {
  const response = await db.insert(settings).values({
    dailyGoal: timeMS
  })

  return response;
}

export const getGoalQuery = async () => {
  const response = await db.select().from(settings)

  return response;
}