import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import AuthForm from '../components/AuthForm.jsx'
import { getAuthMessage } from '../authMessages.js'
import { registerAndSignIn } from '../../../lib/firebase/authService.js'
import { useAuthStore } from '../store/authStore.js'

function RegisterPage() {
  const navigate = useNavigate()
  const firebaseUser = useAuthStore((state) => state.firebaseUser)
  const isInitializing = useAuthStore((state) => state.isInitializing)
  const [error, setError] = useState('')
  const [isPending, setIsPending] = useState(false)

  if (isInitializing) {
    return <p className="p-8 text-center text-ink-600">Cargando sesión...</p>
  }

  if (firebaseUser) {
    return <Navigate to="/" replace />
  }

  async function handleRegister(values) {
    setError('')
    setIsPending(true)

    try {
      await registerAndSignIn(values)
      navigate('/', { replace: true })
    } catch (authError) {
      console.error('[RegisterPage] Error al registrar usuario:', authError)
      setError(getAuthMessage(authError))
    } finally {
      setIsPending(false)
    }
  }

  return (
    <main className="mx-auto w-full max-w-md px-4 py-12">
      <p className="text-sm font-medium text-brand-600">Comienza hoy</p>
      <h1 className="mt-2 text-3xl font-bold text-ink-900">Crear cuenta</h1>
      <p className="mt-2 mb-6 text-ink-600">Construye hábitos y observa tu progreso.</p>
      <AuthForm mode="register" onSubmit={handleRegister} isPending={isPending} error={error} />
      <p className="mt-6 text-center text-sm text-ink-600">
        ¿Ya tienes cuenta?{' '}
        <Link to="/login" className="font-semibold text-brand-600 hover:text-brand-500">
          Inicia sesión
        </Link>
      </p>
    </main>
  )
}

export default RegisterPage