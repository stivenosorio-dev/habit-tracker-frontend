import { apiRequest } from './apiClient.js'

export function getCurrentUser(token) {
  return apiRequest('/api/users/me', {
    method: 'GET',
    token,
  })
}