import { useParams } from "react-router-dom";

function HabitDetailPage() {
  const { id } = useParams();

  return (
    <main>
      <h1 className="text-3xl font-bold text-ink-900">Detalle de hábito</h1>
      <p>Habito seleccionado: {id}</p>
    </main>
  );
}

export default HabitDetailPage;
