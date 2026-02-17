import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const loggedIn = localStorage.getItem("vendorLogin") === "true";

  return loggedIn ? children : <Navigate to="/role/vendor/login" replace />;
}
