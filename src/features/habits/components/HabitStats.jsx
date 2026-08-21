function HabitStats({ habit }) {
  return (
    <section aria-labelledby="habit-stats-title" className="grid gap-4 sm:grid-cols-2">
      <h2 id="habit-stats-title" className="sr-only">Estadísticas del hábito</h2>

      <div className="rounded-2xl bg-surface p-5 ring-1 ring-slate-200">
        <p className="text-sm text-ink-600">Racha actual</p>
        <p className="mt-1 text-3xl font-bold text-brand-600">
          {habit.currentStreak} días
        </p>
      </div>

      <div className="rounded-2xl bg-surface p-5 ring-1 ring-slate-200">
        <p className="text-sm text-ink-600">Racha más larga</p>
        <p className="mt-1 text-3xl font-bold text-ink-900">
          {habit.longestStreak} días
        </p>
      </div>
    </section>
  )
}

export default HabitStats