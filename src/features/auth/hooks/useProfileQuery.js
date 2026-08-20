import { useQuery } from '@tanstack/react-query'
import { getAuthenticatedProfile } from '../../../lib/api/sessionApi.js'

export function useProfileQuery(enabled = true) {
  return useQuery({
    queryKey: ['profile'],
    queryFn: getAuthenticatedProfile,
    enabled,
    staleTime: 60_000,
  })
}