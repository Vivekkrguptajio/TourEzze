import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("vendorLogin"); // login हटाओ
    navigate("/role/vendor/login", { replace: true }); // redirect to login
  }, []);

  return null;
}
