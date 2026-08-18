import { Link, Outlet } from 'react-router-dom'

function AppLayout() {
  return (
    <div className="min-h-screen bg-page text-ink-900">
      <header className="border-b border-slate-200 bg-surface">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="text-lg font-semibold tracking-tight">
            Habit Tracker
          </Link>
          <nav aria-label="Navegación principal" className="flex gap-4 text-sm">
            <Link to="/" className="text-ink-600 hover:text-brand-600">Dashboard</Link>
            <Link to="/profile" className="text-ink-600 hover:text-brand-600">Perfil</Link>
          </nav>
        </div>
      </header>

      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </div>
  )
}

export default AppLayout