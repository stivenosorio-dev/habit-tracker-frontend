import { Link } from 'react-router-dom'

function EmptyHabitsState() {
  return (
    <section className="rounded-2xl bg-surface p-8 text-center shadow-sm ring-1 ring-slate-200">
      <p className="text-sm font-medium text-brand-600">Comienza pequeño</p>
      <h2 className="mt-2 text-2xl font-bold text-ink-900">
        Todavía no tienes hábitos
      </h2>
      <p className="mx-auto mt-2 max-w-md text-ink-600">
        Crea una actividad concreta y empieza a construir tu primera racha.
      </p>
      <Link
        to="/habits/new"
        className="mt-6 inline-flex rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-500"
      >
        Crear primer hábito
      </Link>
    </section>
  )
}

export default EmptyHabitsState