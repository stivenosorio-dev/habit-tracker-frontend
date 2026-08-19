import { apiRequest } from './apiClient.js'

export function getHabits(token) {
  return apiRequest('/api/habits', {
    method: 'GET',
    token,
  })
}

export function createHabit(payload, token) {
  return apiRequest('/api/habits', {
    method: 'POST',
    body: payload,
    token,
  })
}

export function updateHabit(id, payload, token) {
  return apiRequest(`/api/habits/${id}`, {
    method: 'PUT',
    body: payload,
    token,
  })
}

export function deleteHabit(id, token) {
  return apiRequest(`/api/habits/${id}`, {
    method: 'DELETE',
    token,
  })
}

export function completeHabit(id, token) {
  return apiRequest(`/api/habits/${id}/complete`, {
    method: 'POST',
    token,
  })
}

export function getHabitLogs(id, token) {
  return apiRequest(`/api/habits/${id}/logs`, {
    method: 'GET',
    token,
  })
}