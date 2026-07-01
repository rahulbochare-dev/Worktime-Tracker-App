import { createSessionQuery, getAllSessionQuery, getSessionDetailsQuery } from "../db/queries/session.queries";
import { db } from "../db/index";
import { sessions } from "@/db/schema";
import { eq } from "drizzle-orm";

export const createSession = async (projectId: number, time: number, from: number) => {
  try {
    if (!projectId || !time) {
      return {
        message: "Cannot get project id or time!",
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

export const getSessionDetails = async (id: string) => {
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