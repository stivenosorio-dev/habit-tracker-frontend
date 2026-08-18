import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';

export default function ProtectedRoute() {
  const { usuario, cargando } = useAuth();

  if (cargando) return <div>Cargando...</div>;
  if (!usuario) return <Navigate to="/login" replace />;

  return <Outlet />; // renderiza la ruta hija si está autenticado
}