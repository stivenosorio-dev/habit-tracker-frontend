import { Link, useParams } from 'react-router-dom'
import DeleteHabitButton from '../components/DeleteHabitButton.jsx'
import HabitCalendar from '../components/HabitCalendar.jsx'
import HabitStats from '../components/HabitStats.jsx'
import { useHabitsQuery } from '../hooks/useHabitsQuery.js'
import { useHabitLogsQuery } from '../hooks/useHabitLogsQuery.js'

function HabitDetailPage() {
  const { id } = useParams()
  const habitsQuery = useHabitsQuery()
  const logsQuery = useHabitLogsQuery(id)

  if (habitsQuery.isLoading) {
    return <p className="py-8 text-center text-ink-600">Cargando hábito...</p>
  }

  if (habitsQuery.isError) {
    return <p className="text-danger-600">{habitsQuery.error.message}</p>
  }

  const habit = habitsQuery.data?.find((item) => item.id === id)

  if (!habit) {
    return (
      <main className="space-y-4">
        <h1 className="text-3xl font-bold text-ink-900">Hábito no encontrado</h1>
        <Link to="/" className="font-semibold text-brand-600">Volver al dashboard</Link>
      </main>
    )
  }

  return (
    <main className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-medium text-brand-600">{habit.category || 'General'}</p>
          <h1 className="mt-1 text-3xl font-bold text-ink-900">{habit.name}</h1>
          <p className="mt-2 text-ink-600">{habit.description || 'Sin descripción'}</p>
        </div>
        <div className="flex gap-3">
          <Link
            to={`/habits/${habit.id}/edit`}
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold hover:bg-slate-50"
          >
            Editar
          </Link>
          <DeleteHabitButton habitId={habit.id} />
        </div>
      </div>

      <HabitStats habit={habit} />

      {logsQuery.isLoading && (
        <p className="text-ink-600">Cargando historial...</p>
      )}

      {logsQuery.isError && (
        <p role="alert" className="text-danger-600">
          No se pudo cargar el historial: {logsQuery.error.message}
        </p>
      )}

      {logsQuery.data && (
        <HabitCalendar
          logs={logsQuery.data}
          year={new Date().getFullYear()}
          monthIndex={new Date().getMonth()}
        />
      )}
    </main>
  )
}

export default HabitDetailPage
