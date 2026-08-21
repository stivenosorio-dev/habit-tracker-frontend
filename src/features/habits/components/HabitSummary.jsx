function HabitSummary({ habits }) {
  const activeCount = habits.filter((habit) => habit.active).length
  const longestStreak = habits.reduce(
    (longest, habit) => Math.max(longest, habit.longestStreak),
    0,
  )

  return (
    <section aria-labelledby="summary-title" className="grid gap-4 sm:grid-cols-2">
      <div className="rounded-2xl bg-surface p-5 ring-1 ring-slate-200">
        <p className="text-sm text-ink-600">Hábitos activos</p>
        <p className="mt-1 text-3xl font-bold text-ink-900">{activeCount}</p>
      </div>
      <div className="rounded-2xl bg-surface p-5 ring-1 ring-slate-200">
        <p id="summary-title" className="text-sm text-ink-600">Mejor racha visible</p>
        <p className="mt-1 text-3xl font-bold text-brand-600">{longestStreak} días</p>
      </div>
    </section>
  )
}

export default HabitSummary