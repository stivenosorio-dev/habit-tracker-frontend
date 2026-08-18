import EmptyHabitsState from './EmptyHabitsState.jsx'
import HabitCard from './HabitCard.jsx'

function HabitList({ habits }) {
  if (habits.length === 0) {
    return <EmptyHabitsState />
  }

  return (
    <section aria-labelledby="habits-title">
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-brand-600">Constancia diaria</p>
          <h2 id="habits-title" className="mt-1 text-2xl font-bold text-ink-900">
            Hábitos activos
          </h2>
        </div>
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