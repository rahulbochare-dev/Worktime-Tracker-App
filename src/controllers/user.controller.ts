import { createUserQuery, getUserQuery } from "../db/queries/user.queries";
import { db } from "../db/index";
import { user } from "@/db/schema";
import { eq } from "drizzle-orm";

export const createUser = async (firstName: string, lastName: string) => {
  let message = ""
  let success = true

  if(!firstName || !lastName){
    message = "Firstname and Lastname are required!"
    success = false
    return
  }

  const response = await createUserQuery(firstName, lastName)

  const registeredUser = await db.select().from(user).where(eq(user.id, Number(response.lastInsertRowId)))

  if(!response){
    message = "There is a problem while creating user!"
    success = false
    return
  }

  return ({
    response,
    message: "User created successfully",
    success: true,
    registeredUser: registeredUser[0]
})
}

export const getUser = async () => {
  let message = ""
  let success = true

  const response = await getUserQuery()

  if(!response){
    message = "User not found!"
    success = false
    return
  }

  return ({
    response,
    message: "User created successfully",
    success: true,
    user: response[0]
})
}