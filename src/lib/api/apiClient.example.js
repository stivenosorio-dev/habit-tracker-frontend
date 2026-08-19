import { getHabits } from './habitApi.js'

export async function exampleLoadHabits(token) {
  try {
    return await getHabits(token)
  } catch (error) {
    console.error(error.status, error.message)
    throw error
  }
}