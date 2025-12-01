import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function HotelLogout() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("hotelLogin");
    navigate("/role/hotel-owner/login", { replace: true });
  }, []);

  return null;
}
