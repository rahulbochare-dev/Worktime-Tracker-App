import { db } from "../index";
import { eq } from "drizzle-orm";
import { settings } from "../schema";

export const createGoalQuery = async (timeMS: number) => {
  const existing = await db.select().from(settings)

  if(existing.length > 0){
    return await db.update(settings).set({
      dailyGoal: timeMS
    })
  }

  const response = await db.insert(settings).values({
    dailyGoal: timeMS
  })

  return response;
}

export const getGoalQuery = async () => {
  const response = await db.select().from(settings)

  return response;
}