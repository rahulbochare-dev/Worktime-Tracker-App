import { create } from 'zustand'
import { createUser } from '../controllers/user.controller'

export const useUser = create((set) => ({
  user: null,
  loading: true,
  error: null,

  createUser: async (firstName: string, lastName: string) => {
    try {
      const response = await createUser(firstName, lastName)
      set({user: response, loading: false})
      return response
    } catch (error) {
      set({error: error})
    }
  }
}))