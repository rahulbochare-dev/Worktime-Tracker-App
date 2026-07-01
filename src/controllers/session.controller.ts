import { createSessionQuery, getAllSessionQuery, getSessionDetailsQuery, deleteSessionQuery } from "../db/queries/session.queries";
import { db } from "../db/index";
import { sessions } from "@/db/schema";
import { eq } from "drizzle-orm";

export const createSession = async (projectId: number, time: number, from: number) => {
  try {
    if (!projectId) {
      return {
        message: "Project not selected, please select a project by clicking on start new session.",
        success: false
      }
    }

    const response = await createSessionQuery(projectId, time, from)

    const createdSession = await db.select().from(sessions).where(eq(sessions.id, Number(response.lastInsertRowId)))

    if (!response) {
      return {
        message: "There is a problem while creating session!",
        success: false
      }
    }

    return ({
      response,
      message: "Session created successfully.",
      success: true,
      createdSession: createdSession[0]
    })
  } catch (error) {
    console.log(error)
  }
}

export const getAllSessions = async () => {
  try {
    const response = await getAllSessionQuery()

    if (!response) {
      return {
        message: "There is a problem while fetching sessions!",
        success: false
      }
    }

    return ({
      response,
      message: "Session fetched successfully.",
      success: true,
    })
  } catch (error) {
    console.log(error)
  }
}

export const getSessionDetails = async (id: number) => {
  try {
    const response = await getSessionDetailsQuery(id)

    if (!response) {
      return {
        message: "There is a problem while fetching session details!",
        success: false
      }
    }

    return ({
      response,
      message: "Session details fetched successfully.",
      success: true,
    })
  } catch (error) {
    console.log(error)
  }
}

export const deleteSession = async (id: number) => {
  try {
    const response = await deleteSessionQuery(id)

    if (!response) {
      return {
        message: "There is a problem while deleting session!",
        success: false
      }
    }

    return ({
      response,
      message: "Session deleted successfully.",
      success: true,
    })
  } catch (error) {
    console.log(error)
  }
}