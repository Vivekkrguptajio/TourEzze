import { Navigate } from "react-router-dom";

export default function HotelProtectedRoute({ children }) {
  const token = localStorage.getItem("hotel_token");

  return token ? children : <Navigate to="/role/hotel-owner/login" replace />;
}
