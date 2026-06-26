import { eq } from "drizzle-orm";
import { db } from "../index";
import { projects } from "../schema";

export const createProjectQuery = async (projectName: string, description: string) => {
  const response = await db.insert(projects).values({
    name: projectName,
    description: description,
    createdAt: new Date(),
    updatedAt: new Date()
  })

  return response;
}

export const getProjectQuery = async () => {
  const response = await db.select().from(projects)
  return response;
}

export const deleteProjectQuery = async (id: number) => {
  const response = await db.delete(projects).where(eq(projects.id, id))
  return response;
}