import { useState } from "react";
import Button from "../../../components/ui/Button";

function HabitCard({ habit }) {
  const [markedLocally, setMarkedLocally] = useState(false)

  return (
    <article aria-labelledby={`habit-title-${habit.id}`}>
      <h2 id={`habit-title-${habit.id}`}>{habit.name}</h2>
      <p>{habit.description || 'Sin descripción'}</p>
      <p>Racha actual: {habit.currentStreak} días</p>
      <Button
        onClick={() => setMarkedLocally(true)}
        disabled={markedLocally}
      >
        {markedLocally ? 'Marcado localmente' : 'Marcar como hecho'}
      </Button>
    </article>
  )
}

export default HabitCard