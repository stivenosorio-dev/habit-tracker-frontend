import { Link } from "react-router-dom";
import Button from "../../../components/ui/Button";

function HabitCard({ habit }) {
  return (
    <article className="flex flex-col gap-5 rounded-2xl bg-surface p-5 shadow-sm ring-1 ring-slate-200">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
            {habit.category || 'General'}
          </p>
          <h2 className="mt-1 text-xl font-bold text-ink-900">{habit.name}</h2>
          <p className="mt-2 text-sm text-ink-600">
            {habit.description || 'Sin descripción'}
          </p>
        </div>
        <span className="rounded-full bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-600">
          {habit.currentStreak} días
        </span>
      </div>

      <div className="flex items-center justify-between gap-4 border-t border-slate-100 pt-4">
        <p className="text-sm text-ink-600">
          Mejor racha: <strong className="text-ink-900">{habit.longestStreak}</strong>
        </p>
        <div className="flex items-center gap-3">
          <Link
            to={`/habits/${habit.id}`}
            className="text-sm font-semibold text-brand-600 hover:text-brand-500"
          >
            Ver detalle
          </Link>
          <Button>Completar</Button>
        </div>
      </div>
    </article>
  )
}

export default HabitCard