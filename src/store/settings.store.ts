import { create } from 'zustand'
import { setGoal } from '../controllers/settings.controller'

export const useSettingsStore = create((set) => ({
  dailyGoal: {
    hours: null,
    minutes: null
  },
  loading: true,
  error: null,

  setGoal: async (hours: number, minutes: number) => {
    try {
      const response = await setGoal(hours, minutes)
      set((state) => ({
        dailyGoal: {
          ...state.dailyGoal,
          hours,
          minutes,
        },
      }));
      return response
    } catch (error) {
      set({ error: error })
    }
  }
}))