import { Link } from 'react-router-dom'
import { useAuthStore } from '../../auth/store/authStore.js'
import DashboardHeader from '../components/DashboardHeader.jsx'
import HabitList from '../components/HabitList.jsx'
import HabitSummary from '../components/HabitSummary.jsx'
import { useHabitsQuery } from '../hooks/useHabitsQuery.js'

function DashboardPage() {
  const profile = useAuthStore((state) => state.profile)
  const {
    data: habits = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useHabitsQuery()

  if (isLoading) {
    return (
      <main className="py-12 text-center" aria-live="polite">
        <p className="text-ink-600">Cargando tus hábitos...</p>
      </main>
    )
  }

  if (isError) {
    return (
      <main className="rounded-2xl bg-red-50 p-6 text-red-700">
        <h1 className="text-xl font-bold">No se pudieron cargar los hábitos</h1>
        <p className="mt-2">{error.message}</p>
        <button
          type="button"
          onClick={() => refetch()}
          className="mt-4 font-semibold underline"
        >
          Reintentar
        </button>
      </main>
    )
  }

  return (
    <main>
      {profile && <DashboardHeader user={profile} />}

      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-brand-600">Tu rutina</p>
          <h1 className="mt-1 text-3xl font-bold text-ink-900">Mis hábitos</h1>
        </div>
        <Link
          to="/habits/new"
          className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-500"
        >
          Nuevo hábito
        </Link>
      </div>

      <div className="space-y-8">
        <HabitSummary habits={habits} />
        <HabitList habits={habits} />
      </div>
    </main>
  )
}

export default DashboardPage