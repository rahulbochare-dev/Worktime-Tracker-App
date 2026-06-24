import { create } from 'zustand'
import { createProject } from '../controllers/projects.controller'

export const useProjectStore = create((set) => ({
  projects: null,
  loading: true,
  error: null,

  createProject: async (projectName: string, description: string) => {
    try {
      const response = await createProject(projectName, description)
      set({loading: false})
      return response
    } catch (error) {
      set({error: error})
    }
  }
}))