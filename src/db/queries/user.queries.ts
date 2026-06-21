import { db } from "../index";
import { user } from "../schema";

export const createUserQuery = async (firstName: string, lastName: string) => {
  const response = await db.insert(user).values({
    firstName,
    lastName,
    createdAt: new Date(),
    updatedAt: new Date()
  })

  return response;
}