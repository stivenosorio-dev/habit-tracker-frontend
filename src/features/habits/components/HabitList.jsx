import EmptyHabitsState from './EmptyHabitsState.jsx'
import HabitCard from './HabitCard.jsx'

function HabitList({ habits }) {
  if (habits.length === 0) {
    return <EmptyHabitsState />
  }

  return (
    <section aria-labelledby="habits-title">
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <h2 id="habits-title" className="text-2xl font-bold text-ink-900">
          Hábitos activos
        </h2>
        <p className="text-sm text-ink-600">{habits.length} en seguimiento</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {habits.map((habit) => (
          <HabitCard key={habit.id} habit={habit} />
        ))}
      </div>
    </section>
  )
}

export default HabitList