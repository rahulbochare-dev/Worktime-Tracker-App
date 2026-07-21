import { createGoalQuery } from "../db/queries/settings.queries";
import { convertToMS } from "../utils/convertToMS";

export const setGoal = async (hours: number, minutes: number) => {
  try {
    if (!hours || !minutes) {
      return {
        message: "Hours and Minutes are required!",
        success: false
      }
    }

    const timeMS = convertToMS(hours, minutes)

    const response = await createGoalQuery(timeMS)

    return ({
      response,
      message: "Goal set successfully.",
      success: true,
    })
  } catch (error) {
    console.log(error)
  }
}