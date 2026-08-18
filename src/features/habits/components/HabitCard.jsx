function HabitCFard({ habit }) {
  return (
    <article>
      <h2>{habit.name}</h2>
      <p>{habit.description}</p>
      <span>Racha actual: {habit.currentStreak} dias</span>
    </article>
  );
}

export default HabitCFard;
