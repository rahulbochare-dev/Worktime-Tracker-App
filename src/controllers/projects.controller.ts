import { createProjectQuery, getProjectQuery, deleteProjectQuery } from "../db/queries/project.queries";
import { db } from "../db/index";
import { projects } from "@/db/schema";
import { eq } from "drizzle-orm";

export const createProject = async (projectName: string, description: string) => {
  let message = ""
  let success = true

  if(!projectName.trim() || !description.trim()){
    return {
      message: "Project name and Description are required!",
      success: false
    }
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

export const getProjects = async () => {
  let message = ""
  let success = true

  const response = await getProjectQuery()

  if(!response){
    message = "Projects not found!"
    success = false
    return
  }

  return ({
    response,
    message: "Projects fetched successfully",
    success: true,
    projects: response
})
}

export const deleteProject = async (id: number) => {
  let message = ""
  let success = true

  const response = await deleteProjectQuery(id)

  if(!response){
    message = "Project not deleted!"
    success = false
    return
  }

  return ({
    response,
    message: "Projects deleted successfully",
    success: true,
    projects: response
})
}