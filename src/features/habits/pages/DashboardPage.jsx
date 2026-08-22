import { Link } from 'react-router-dom'
import StatusMessage from '../../../components/ui/StatusMessage.jsx'
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
      <main className="py-12" aria-busy="true" aria-live="polite">
        <StatusMessage title="Cargando tus hábitos">
          Estamos consultando tu progreso.
        </StatusMessage>
      </main>
    )
  }

  if (isError) {
    return (
      <main className="py-12">
        <StatusMessage
          variant="error"
          title="No se pudieron cargar los hábitos"
          action={(
            <button
              type="button"
              onClick={() => refetch()}
              className="font-semibold underline"
            >
              Reintentar
            </button>
          )}
        >
          {error.message}
        </StatusMessage>
      </main>
    )
  }

  return (
    <main>
      {profile && <DashboardHeader user={profile} />}

      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium text-brand-600">Tu rutina</p>
          <h1 className="mt-1 text-3xl font-bold text-ink-900">Mis hábitos</h1>
        </div>
        <Link
          to="/habits/new"
          className="inline-flex justify-center rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
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