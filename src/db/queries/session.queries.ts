import { db } from "../index";
import { sessions } from "../schema";

export const createSessionQuery = async (projectId: number, time: number) => {
  const response = await db.insert(sessions).values({
    projectId: projectId,
    totalTime: time,
    createdAt: new Date(),
    updatedAt: new Date()
  })

  return response;
}