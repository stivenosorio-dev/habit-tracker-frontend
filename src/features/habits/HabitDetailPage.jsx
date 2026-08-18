import { useParams } from 'react-router-dom';

function HabitDetailPage() {
  const { id } = useParams(); // extrae ':id' de la URL /habits/:id
}