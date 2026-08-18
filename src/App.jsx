import "./App.css";
import DashboardHeader from "./features/habits/components/DashboardHeader";
import HabitList from "./features/habits/components/HabitList";

import { useState } from "react";

const demoUser = {
  id: "user-demo",
  displayName: "Ana",
  email: "ana@example.com",
  xpTotal: 40,
  level: 1,
  createdAt: "2026-08-17T20:00:00Z",
};

const demoHabits = [
  {
    id: "habit-1",
    name: "Leer",
    description: "Leer 20 páginas",
    category: "Estudio",
    currentStreak: 3,
    longestStreak: 7,
    active: true,
  },
  {
    id: "habit-2",
    name: "Caminar",
    description: "Caminar durante 30 minutos",
    category: "Salud",
    currentStreak: 1,
    longestStreak: 4,
    active: true,
  },
];


function App() {

  const [message, setMessage] = useState("");

  function handleDemoAction(){
    setMessage("La acción local funcionó. Todavía no se ha enviado al backend.");
  }

  return (
    <main>
      <DashboardHeader user={demoUser} />
      <button type="button" onClick={handleDemoAction}>Probar interaccion</button>
      {message && <p role="status">{message}</p>}
      <HabitList habits={demoHabits} />
    

    </main>
  );
}

export default App;
