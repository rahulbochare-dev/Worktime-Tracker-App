import { createUserQuery } from "../db/queries/user.queries";

export const createUser = async (firstName: string, lastName: string) => {
  let message = ""

  if(!firstName || !lastName){
    message = "Firstname and Lastname are required!"
    return
  }

  const response = await createUserQuery(firstName, lastName)

  if(!response){
    message = "There is a problem while creating user!"
    return
  }

  return ({
    response,
    message: "User created successfully",
    success: true
})
}