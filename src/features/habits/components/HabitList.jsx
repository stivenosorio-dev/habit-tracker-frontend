import HabitCard from './HabitCard.jsx'

function HabitList({ habits }) {
  return (
    <section aria-labelledby="habits-title">
      <h2 id="habits-title">Hábitos activos</h2>

      <div>
        {habits.map((habit) => (
          <HabitCard key={habit.id} habit={habit} />
        ))}
      </div>
    </section>
  )
}

export default HabitList