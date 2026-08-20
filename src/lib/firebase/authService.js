import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { firebaseAuth } from './firebaseClient.js'
import { registerUser } from '../api/authApi.js'

export async function registerAndSignIn({ email, password, displayName }) {
  await registerUser({ email, password, displayName })
  return signInWithEmailAndPassword(firebaseAuth, email, password)
}

export function signInUser(email, password) {
  return signInWithEmailAndPassword(firebaseAuth, email, password)
}

export function signOutUser() {
  return signOut(firebaseAuth)
}

export function subscribeToAuthState(callback) {
  return onAuthStateChanged(firebaseAuth, callback)
}

export async function getCurrentIdToken() {
  const currentUser = firebaseAuth.currentUser

  if (!currentUser) {
    return null
  }

  return currentUser.getIdToken()
}