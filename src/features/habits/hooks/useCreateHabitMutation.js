import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createHabit } from '../../../lib/api/habitApi.js'
import { getCurrentIdToken } from '../../../lib/firebase/authService.js'

export function useCreateHabitMutation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (payload) => {
      const token = await getCurrentIdToken()

      if (!token) {
        throw new Error('No existe una sesión activa')
      }

      return createHabit(payload, token)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['habits'] })
    },
  })
}