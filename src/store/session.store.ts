import { create } from 'zustand'
import { createSession, getAllSessions } from '../controllers/session.controller'

export const useSessionStore = create((set) => ({
  sessions: null,
  loading: true,
  error: null,

  createSession: async (projectId: number, time: number, from: number) => {
    try {
      const response = await createSession(projectId, time, from)
      set({ loading: false })
      return response
    } catch (error) {
      set({ error: error })
    }
  },

  getAllSessions: async () => {
    try {
      const response = await getAllSessions()
      set({ sessions: response?.response ,loading: false })
      return response
    } catch (error) {
      set({ error: error })
    }
  }
}))