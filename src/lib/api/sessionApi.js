import { getCurrentUser } from './userApi.js'
import { getCurrentIdToken } from '../firebase/authService.js'

export async function getAuthenticatedProfile() {
  const token = await getCurrentIdToken()

  if (!token) {
    return null
  }

  return getCurrentUser(token)
}

