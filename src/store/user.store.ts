import { create } from 'zustand'
import { createUser } from '../controllers/user.controller'

export const useUserStore = create((set) => ({
  firstName: null,
  lastName: null,
  loading: true,
  error: null,

  createUser: async (firstName: string, lastName: string) => {
    try {
      const response = await createUser(firstName, lastName)
      set({firstName: response?.registeredUser.firstName, lastName: response?.registeredUser.lastName, loading: false})
      return response
    } catch (error) {
      set({error: error})
    }
  }
}))