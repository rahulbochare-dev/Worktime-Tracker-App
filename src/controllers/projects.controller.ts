import { createProjectQuery, getProjectQuery, deleteProjectQuery } from "../db/queries/project.queries";
import { db } from "../db/index";
import { projects } from "@/db/schema";
import { eq } from "drizzle-orm";

export const createProject = async (projectName: string, description: string) => {
  try {
    if (!projectName.trim() || !description.trim()) {
      return {
        message: "Project name and Description are required!",
        success: false
      }
    }

    const response = await createProjectQuery(projectName, description)

    const createdProject = await db.select().from(projects).where(eq(projects.id, Number(response.lastInsertRowId)))

    if (!response) {
      return {
        message: "There is a problem while creating project!",
        success: false
      }
    }

    return ({
      response,
      message: "Project created successfully.",
      success: true,
      createdProject: createdProject[0]
    })
  } catch (error) {
    console.log(error)
  }
}

export const getProjects = async () => {
  try {
    let message = ""
    let success = true

    const response = await getProjectQuery()

    if (!response) {
      return {
        message: "Projects not found!",
        success: false
      }
    }

    return ({
      response,
      message: "Projects fetched successfully.",
      success: true,
      projects: response
    })
  } catch (error) {
    console.log(error)
  }
}

export const deleteProject = async (id: number) => {
  try {
    const response = await deleteProjectQuery(id)
    console.log(response)

    if (!response) {
      return {
        message: "There is a problem while deleting project!",
        success: false
      }
    }

    return ({
      response,
      message: "Projects deleted successfully.",
      success: true,
      project: response
    })
  } catch (error) {
    console.log(error)
  }
}