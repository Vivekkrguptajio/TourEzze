import { Navigate } from "react-router-dom";

export default function GuideProtectedRoute({ children }) {
  const loggedIn = localStorage.getItem("guideLogin") === "true";
  return loggedIn ? children : <Navigate to="/role/guide/login" replace />;
}
