import { useAuthStore } from "../store/authStore";
import { useEffect } from "react";

function AuthBootstrap({ children }) {
  const initialize = useAuthStore((state) => state.initialize);

  useEffect(() => {
    initialize();
  }, [initialize]);

  return children;
}

export default AuthBootstrap;
