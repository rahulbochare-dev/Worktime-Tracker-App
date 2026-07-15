import { db } from "../index";
import { settings } from "../schema";

export const createGoalQuery = async (timeMS) => {
  const response = await db.insert(settings).values({
    dailyGoal: timeMS
  })

  return response;
}