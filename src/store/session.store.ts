import { create } from 'zustand'
import { createSession, getAllSessions, getSessionDetails, deleteSession } from '../controllers/session.controller'

export const useSessionStore = create((set) => ({
  sessions: null,
  sessionDetails: null,
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
      set({ sessions: response?.response, loading: false })
      return response
    } catch (error) {
      set({ error: error })
    }
  },

  getSessionDetails: async (id: number) => {
    try {
      const response = await getSessionDetails(id)
      set({ sessionDetails: response?.response, loading: false })
      return response
    } catch (error) {
      set({ error: error })
    }
  },

  deleteSession: async (id: number) => {
    try {
      const response = await deleteSession(id)
      set((state) => {
        const updated = state.sessions.filter(session => session.id !== id);
        return { sessions: updated };
      });
      return response
    } catch (error) {
      set({ error: error })
    }
  }
}))