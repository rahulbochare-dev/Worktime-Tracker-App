import { createSessionQuery } from "../db/queries/session.queries";
import { db } from "../db/index";
import { sessions } from "@/db/schema";
import { eq } from "drizzle-orm";

export const createSession = async (projectId: number, time: number) => {
  let message = ""
  let success = true

  if(!projectId || !time){
    message = "Cannot get project id or time!"
    success = false
    return
  }

  const response = await createSessionQuery(projectId, time)

  const createdSession = await db.select().from(sessions).where(eq(sessions.id, Number(response.lastInsertRowId)))

  if(!response){
    message = "There is a problem while creating session!"
    success = false
    return
  }

  return ({
    response,
    message: "Session created successfully",
    success: true,
    createdSession: createdSession[0]
})
}