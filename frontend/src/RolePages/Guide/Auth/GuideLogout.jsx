import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function GuideLogout() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("guideLogin");
    navigate("/role/guide/login", { replace: true });
  }, []);

  return null;
}
