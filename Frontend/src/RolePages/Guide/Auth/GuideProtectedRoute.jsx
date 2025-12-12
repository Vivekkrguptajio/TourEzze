import { Navigate } from "react-router-dom";

export default function GuideProtectedRoute({ children }) {
  const token = localStorage.getItem("guide_token");

  return token ? children : <Navigate to="/role/guide/login" replace />;
}
