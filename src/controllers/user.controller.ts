import { createUserQuery, getUserQuery } from "../db/queries/user.queries";
import { db } from "../db/index";
import { user } from "@/db/schema";
import { eq } from "drizzle-orm";

export const createUser = async (firstName: string, lastName: string) => {
  try {
    if (!firstName || !lastName) {
      return {
        message: "First name and last name are required!",
        success: false
      }
    }

    const response = await createUserQuery(firstName, lastName)

    const registeredUser = await db.select().from(user).where(eq(user.id, Number(response.lastInsertRowId)))

    if (!response) {
      return {
        message: "There is a problem while creating user!",
        success: false
      }
    }

    return ({
      response,
      message: "User created successfully.",
      success: true,
      registeredUser: registeredUser[0]
    })
  } catch (error) {
    console.log(error)
  }
}

export const getUser = async () => {
  try {
    let message = ""
    let success = true

    const response = await getUserQuery()

    if (!response) {
      return {
        message: "User not found!",
        success: false
      }
    }

    return ({
      response,
      message: "User fetched successfully.",
      success: true,
      user: response[0]
    })
  } catch (error) {
    console.log(error)
  }
}