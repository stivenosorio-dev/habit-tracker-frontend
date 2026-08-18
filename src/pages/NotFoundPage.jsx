import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <main className="mx-auto w-full max-w-xl px-4 py-16 text-center">
      <p className="text-sm font-semibold text-brand-600">404</p>
      <h1 className="mt-2 text-3xl font-bold text-ink-900">
        Página no encontrada
      </h1>
      <Link
        to="/"
        className="mt-6 inline-flex rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-500"
      >
        Volver al dashboard
      </Link>
    </main>
  )
}

export default NotFoundPage