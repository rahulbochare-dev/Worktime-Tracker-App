import { db } from "../index";
import { projects } from "../schema";

export const createProjectQuery = async (projectName: string, description: string) => {
  const response = await db.insert(projects).values({
    name: projectName,
    description: description
  })

  return response;
}