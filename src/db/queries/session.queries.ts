import { desc, eq } from "drizzle-orm";
import { db } from "../index";
import { projects, sessions } from "../schema";

export const createSessionQuery = async (projectId: number, time: number, from: number) => {
  const response = await db.insert(sessions).values({
    projectId: projectId,
    totalTime: time,
    startTime: from,
    endTime: new Date(),
    createdAt: new Date(),
    updatedAt: new Date()
  })

  return response;
}

export const getAllSessionQuery = async () => {
  const response = await db.query.sessions.findMany({
    with: {
      project: true
    },
    orderBy: [desc(sessions.createdAt)]
  })

  return response;
}

export const getSessionDetailsQuery = async (id: number) => {
  const response = await db.query.sessions.findFirst({
    where: eq(sessions.id, id),
    with: {
      project: true
    }
  })

  return response;
}

export const deleteSessionQuery = async (id: number) => {
  const response = await db.delete(sessions).where(eq(sessions.id, id))
  return response;
}