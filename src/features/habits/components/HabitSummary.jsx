function HabitSummary({ habits }) {
  const activeCount = habits.filter((habit) => habit.active).length
  const longestStreak = habits.reduce(
    (longest, habit) => Math.max(longest, habit.longestStreak),
    0,
  )

  return (
    <section aria-labelledby="summary-title">
      <h2 id="summary-title">Resumen</h2>
      <p>Hábitos activos: {activeCount}</p>
      <p>Mejor racha visible: {longestStreak} días</p>
    </section>
  )
}

export default HabitSummary