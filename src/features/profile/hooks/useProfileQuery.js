import { useQuery } from '@tanstack/react-query'
import { getAuthenticatedProfile } from '../../../lib/api/sessionApi.js'

export function useProfileQuery() {
  return useQuery({
    queryKey: ['profile'],
    queryFn: getAuthenticatedProfile,
    staleTime: 60_000,
  })
}