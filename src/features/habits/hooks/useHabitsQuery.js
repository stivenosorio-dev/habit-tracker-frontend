import { useQuery } from '@tanstack/react-query'
import { getHabits } from '../../../lib/api/habitApi.js'
import { getCurrentIdToken } from '../../../lib/firebase/authService.js'

export function useHabitsQuery() {
  return useQuery({
    queryKey: ['habits'],
    queryFn: async () => {
      const token = await getCurrentIdToken()

      if (!token) {
        throw new Error('No existe una sesión activa')
      }

      return getHabits(token)
    },
  })
}