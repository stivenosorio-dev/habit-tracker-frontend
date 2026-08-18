import { useState } from "react";

function HabitCFard({ habit }) {

  const [markedLocally, setMarketLocally] = useState(false);

  function handleMarketLocally(){
    setMarketLocally(true);
  }


  return (
    <article>
      <h2>{habit.name}</h2>
      <p>{habit.description}</p>
      <span>Racha actual: {habit.currentStreak} dias</span>

      <button type="button" onClick={handleMarketLocally} disabled={markedLocally}>
        {markedLocally ? "Marcado localmente" : "Marcar como hecho"}
      </button>
    </article>
  );
}

export default HabitCFard;
