import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function GovLogout() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("govLogin");
    navigate("/role/government/login", { replace: true });
  }, []);

  return null;
}
