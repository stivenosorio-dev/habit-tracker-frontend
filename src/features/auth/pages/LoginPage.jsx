import { useAuthStore } from '../store/authStore.js'

function LoginPage() {
  const isInitializing = useAuthStore((state) => state.isInitializing)
  const error = useAuthStore((state) => state.error)

  if (isInitializing) {
    return <main className="mx-auto w-full max-w-md px-4 py-12">Cargando sesión...</main>
  }

  return (
    <main className="mx-auto w-full max-w-md px-4 py-12">
      <h1 className="text-3xl font-bold text-ink-900">Iniciar sesión</h1>
      <p className="mt-2 text-ink-600">El formulario llegará después.</p>
      {error && <p role="alert" className="mt-4 text-danger-600">{error}</p>}
    </main>
  )
}

export default LoginPage