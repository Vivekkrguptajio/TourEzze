import { Navigate } from "react-router-dom";

export default function HotelProtectedRoute({ children }) {
  const loggedIn = localStorage.getItem("hotelLogin") === "true";
  return loggedIn ? children : <Navigate to="/role/hotel-owner/login" replace />;
}
