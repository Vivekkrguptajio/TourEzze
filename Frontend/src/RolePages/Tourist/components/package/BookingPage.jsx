import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function BookingPage() {
  const { id } = useParams();
  const navigate = useNavigate();   // ✅ React Router navigation
  const [pkg, setPkg] = useState(null);

  const fetchPackage = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/admin/tour-packages/${id}`
      );
      setPkg(res.data.data);
    } catch (err) {
      console.error("Failed to fetch package:", err);
    }
  };

  useEffect(() => {
    fetchPackage();
  }, []);

  if (!pkg) return <h2>Loading...</h2>;

  // ✅ FINAL CORRECT Stripe Payment Navigation
  const goToPayment = () => {
    navigate("/role/tourist/packages/payment", {
      state: {
        selectedPackage: pkg,   // ✅ full package data sent safely
      },
    });
  };

  return (
    <div style={{ padding: "30px", maxWidth: "600px", margin: "auto" }}>
      <h1>Book: {pkg.packageName}</h1>
      <p>📍 {pkg.location}</p>

      <p>
        <strong>Duration:</strong> {pkg.duration}
      </p>

      <p>
        <strong>Price:</strong> ₹{pkg.price}
      </p>

      <hr style={{ margin: "20px 0" }} />

      <h3>Your Details</h3>

      <input
        type="text"
        placeholder="Full Name"
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />

      <input
        type="text"
        placeholder="Phone Number"
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />

      <input
        type="date"
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />

      <button
        onClick={goToPayment}
        style={{
          width: "100%",
          padding: "12px",
          background: "#2b7cff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          fontSize: "18px",
          cursor: "pointer",
          marginTop: "10px",
        }}
      >
        Proceed to Payment
      </button>
    </div>
  );
}
