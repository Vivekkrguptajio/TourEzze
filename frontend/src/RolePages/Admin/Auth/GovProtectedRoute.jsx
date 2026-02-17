import { Navigate } from "react-router-dom";

export default function GovProtectedRoute({ children }) {
  const loggedIn = localStorage.getItem("govLogin") === "true";

  return loggedIn ? children : <Navigate to="/role/government/login" replace />;
}
