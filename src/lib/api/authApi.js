import { apiRequest } from './apiClient.js'

export function registerUser(payload) {
  return apiRequest('/api/auth/register', {
    method: 'POST',
    body: payload,
  })
}