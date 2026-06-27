import { eq } from "drizzle-orm";
import { db } from "../index";
import { projects, sessions } from "../schema";

export const createSessionQuery = async (projectId: number, time: number) => {
  const response = await db.insert(sessions).values({
    projectId: projectId,
    totalTime: time,
    createdAt: new Date(),
    updatedAt: new Date()
  })

  return response;
}

export const getAllSessionQuery = async () => {
  const response = await db.query.sessions.findMany({
    with: {
      project: true
    }
  })

  return response;
}