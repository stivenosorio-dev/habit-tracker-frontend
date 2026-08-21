import { useMutation, useQueryClient } from '@tanstack/react-query'
import { completeHabit } from '../../../lib/api/habitApi.js'
import { getCurrentIdToken } from '../../../lib/firebase/authService.js'
import { useAuthStore } from '../../auth/store/authStore.js'

export function useCompleteHabitMutation() {
  const queryClient = useQueryClient()
  const setProfile = useAuthStore((state) => state.setProfile)

  return useMutation({
    mutationFn: async (habitId) => {
      const token = await getCurrentIdToken()

      if (!token) {
        throw new Error('No existe una sesión activa')
      }

      return completeHabit(habitId, token)
    },
    onSuccess: async (result) => {
      setProfile((currentProfile) => {
        if (!currentProfile) {
          return currentProfile
        }

        return {
          ...currentProfile,
          xpTotal: result.userXpTotal,
          level: result.userLevel,
        }
      })

      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ['habits'] }),
        queryClient.invalidateQueries({ queryKey: ['profile'] }),
      ])
    },
  })
}
