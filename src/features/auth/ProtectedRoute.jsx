import { Outlet, useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../auth/store/authStore";

function ProtectedRoute() {
  const location = useLocation();
  const firebaseUser = useAuthStore((state) => state.firebaseUser);
  const isInitializing = useAuthStore((state) => state.isInitializing);

  if (isInitializing) {
    return <p className="p-8 text-center text-ink-600">Cargando sesión...</p>;
  }

  if (!firebaseUser) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
