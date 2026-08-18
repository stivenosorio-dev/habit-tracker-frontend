import { useParams } from "react-router-dom";

function HabitFormPage() {
  const { id } = useParams();
  const isEditing = Boolean(id);

  return (
    <main>
      <h1 className="text-3xl font-bold text-ink-900">
        {isEditing ? "Editar hábito" : "Crear hábito"}
      </h1>
      <p className="mt-2 text-ink-600">
        {isEditing ? "Habito ${id}" : "Nuevo Habito"}
      </p>
    </main>
  );
}

export default HabitFormPage;
