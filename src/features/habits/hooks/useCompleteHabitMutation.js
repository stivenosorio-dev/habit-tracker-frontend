import { useMutation, useQueryClient } from '@tanstack/react-query'
import { completeHabit } from '../../../lib/api/habitApi.js'
import { getCurrentIdToken } from '../../../lib/firebase/authService.js'

export function useCompleteHabitMutation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (habitId) => {
      const token = await getCurrentIdToken()

      if (!token) {
        throw new Error('No existe una sesión activa')
      }

      return completeHabit(habitId, token)
    },
    onSuccess: (result) => {
      queryClient.invalidateQueries({ queryKey: ['habits'] })
      queryClient.invalidateQueries({ queryKey: ['profile'] })
      return result
    },
  })
}