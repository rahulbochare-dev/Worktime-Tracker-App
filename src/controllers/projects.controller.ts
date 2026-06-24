import { createProjectQuery } from "../db/queries/project.queries";
import { db } from "../db/index";
import { projects } from "@/db/schema";
import { eq } from "drizzle-orm";

export const createUser = async (projectName: string, description: string) => {
  let message = ""
  let success = true

  if(!projectName || !description){
    message = "Project name and Description are required!"
    success = false
    return
  }

  const response = await createProjectQuery(projectName, description)

  const createdProject = await db.select().from(projects).where(eq(projects.id, Number(response.lastInsertRowId)))

  if(!response){
    message = "There is a problem while creating project!"
    success = false
    return
  }

  return ({
    response,
    message: "Project created successfully",
    success: true,
    createdProject: createdProject[0]
})
}