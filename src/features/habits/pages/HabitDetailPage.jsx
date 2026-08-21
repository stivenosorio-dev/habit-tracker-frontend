import { Link, useParams } from 'react-router-dom'
import DeleteHabitButton from '../components/DeleteHabitButton.jsx'
import HabitStats from '../components/HabitStats.jsx'
import { useHabitsQuery } from '../hooks/useHabitsQuery.js'

function HabitDetailPage() {
  const { id } = useParams()
  const { data: habits = [], isLoading, isError, error } = useHabitsQuery()

  if (isLoading) {
    return <p className="py-8 text-center text-ink-600">Cargando hábito...</p>
  }

  if (isError) {
    return (
      <main className="rounded-2xl bg-red-50 p-6 text-red-700">
        <h1 className="text-xl font-bold">No se pudo cargar el hábito</h1>
        <p className="mt-2">{error.message}</p>
      </main>
    )
  }

  const habit = habits.find((item) => item.id === id)

  if (!habit) {
    return (
      <main className="space-y-4">
        <h1 className="text-3xl font-bold text-ink-900">Hábito no encontrado</h1>
        <p className="text-ink-600">
          Puede que haya sido eliminado o que no pertenezca a tu cuenta.
        </p>
        <Link to="/" className="font-semibold text-brand-600 hover:text-brand-500">
          Volver al dashboard
        </Link>
      </main>
    )
  }

  return (
    <main className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-medium text-brand-600">{habit.category || 'General'}</p>
          <h1 className="mt-1 text-3xl font-bold text-ink-900">{habit.name}</h1>
          <p className="mt-2 text-ink-600">
            {habit.description || 'Sin descripción'}
          </p>
        </div>

        <div className="flex gap-3">
          <Link
            to={`/habits/${habit.id}/edit`}
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-ink-900 hover:bg-slate-50"
          >
            Editar
          </Link>
          <DeleteHabitButton habitId={habit.id} />
        </div>
      </div>

      <HabitStats habit={habit} />

      <section className="rounded-2xl bg-surface p-6 ring-1 ring-slate-200">
        <h2 className="text-xl font-bold text-ink-900">Historial</h2>
        <p className="mt-2 text-ink-600">
          El calendario de cumplimiento se construirá en la siguiente clase.
        </p>
      </section>
    </main>
  )
}

export default HabitDetailPage