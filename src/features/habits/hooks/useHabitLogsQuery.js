import { useQuery } from '@tanstack/react-query'
import { getHabitLogs } from '../../../lib/api/habitApi.js'
import { getCurrentIdToken } from '../../../lib/firebase/authService.js'

export function useHabitLogsQuery(habitId) {
  return useQuery({
    queryKey: ['habit-logs', habitId],
    queryFn: async () => {
      const token = await getCurrentIdToken()

      if (!token) {
        throw new Error('No existe una sesión activa')
      }

      return getHabitLogs(habitId, token)
    },
    enabled: Boolean(habitId),
  })
}