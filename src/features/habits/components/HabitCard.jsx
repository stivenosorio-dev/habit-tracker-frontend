import { Link, useNavigate } from 'react-router-dom';

function HabitCard({ habito }) {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/habits/${habito.id}`)}>
      {/* o, la forma declarativa preferida cuando es un simple enlace: */}
      <Link to={`/habits/${habito.id}`}>{habito.name}</Link>
    </div>
  );
}