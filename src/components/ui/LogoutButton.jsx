import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../features/auth/store/authStore";
import Button from "./Button";

function LogoutButton() {
  const navigate = useNavigate();
  const singOut = useAuthStore((state) => state.singOut);

  async function handleLogout() {
    await singOut();
    navigate("/login", { replace: true });
  }

  return (
    <Button variant="secondary" onClick={handleLogout}>
      Cerrar sesión
    </Button>
  );
}

export default LogoutButton;


