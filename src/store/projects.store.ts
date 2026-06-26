import { create } from 'zustand'
import { createProject, getProjects, deleteProject } from '../controllers/projects.controller'

export const useProjectStore = create((set) => ({
  projects: null,
  loading: true,
  error: null,

  createProject: async (projectName: string, description: string) => {
    try {
      const response = await createProject(projectName, description)
      set({ loading: false })
      return response
    } catch (error) {
      set({ error: error })
    }
  },

  getProjects: async () => {
    try {
      const response = await getProjects()
      set({ projects: response?.projects, loading: false })
      return response
    } catch (error) {
      set({ error: error })
    }
  },

  deleteProjects: async (id: number) => {
    try {
      const response = await deleteProject(id)
      set({ loading: false })
      return response
    } catch (error) {
      set({ error: error })
    }
  }
}))