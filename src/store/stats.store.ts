import { create } from 'zustand'
import { getCurrentWeekSessionsTime, getCurrentMonthSessionsTime, todayGoalPercentComplete } from '../db/queries/stats.queries'

export const useStatsStore = create((set) => ({
  weekTotalTime: null,
  monthTotalTime: null,
  goalCompletePerecnt: null,
  loading: true,
  error: null,

  getWeekTotalTime: async () => {
    try {
      const response = await getCurrentWeekSessionsTime()
      set({weekTotalTime: response})
      return response
    } catch (error) {
      set({ error: error })
    }
  },

  getMonthTotalTime: async () => {
    try {
      const response = await getCurrentMonthSessionsTime()
      set({monthTotalTime: response})
      return response
    } catch (error) {
      set({ error: error })
    }
  },

  getGoalPercent: async () => {
    try {
      const response = await todayGoalPercentComplete()
      set({goalCompletePerecnt: response})
      return response
    } catch (error) {
      set({ error: error })
    }
  }
}))