import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../../../../src/api.js";

export default function BookingPage() {
  const { id } = useParams();
  const [pkg, setPkg] = useState(null);

  const fetchPackage = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/admin/tour-packages/${id}`);
      setPkg(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPackage();
  }, []);

  if (!pkg) return <h2>Loading...</h2>;

  const goToPayment = () => {
    // Pass package ID + price
    window.location.href = `/role/tourist/payment/${pkg._id}?amount=${pkg.price}`;
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
