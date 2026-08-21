import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteHabit } from '../../../lib/api/habitApi.js'
import { getCurrentIdToken } from '../../../lib/firebase/authService.js'

export function useDeleteHabitMutation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (habitId) => {
      const token = await getCurrentIdToken()

      if (!token) {
        throw new Error('No existe una sesión activa')
      }

      return deleteHabit(habitId, token)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['habits'] })
    },
  })
}