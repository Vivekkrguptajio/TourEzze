import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
<<<<<<< HEAD
import { API_URL } from "../../../../../src/api.js";
=======
>>>>>>> 8fc040de90414307da0fa677067b8a8dd1cdea0e

export default function BookingPage() {
  const { id } = useParams();
  const [pkg, setPkg] = useState(null);

  const fetchPackage = async () => {
    try {
<<<<<<< HEAD
      const res = await axios.get(`${API_URL}/api/admin/tour-packages/${id}`);
=======
      const res = await axios.get(
        `http://localhost:5000/api/admin/tour-packages/${id}`
      );
>>>>>>> 8fc040de90414307da0fa677067b8a8dd1cdea0e
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
<<<<<<< HEAD
      <p>
        <strong>Duration:</strong> {pkg.duration}
      </p>
      <p>
        <strong>Price:</strong> ₹{pkg.price}
      </p>
=======
      <p><strong>Duration:</strong> {pkg.duration}</p>
      <p><strong>Price:</strong> ₹{pkg.price}</p>
>>>>>>> 8fc040de90414307da0fa677067b8a8dd1cdea0e

      <hr style={{ margin: "20px 0" }} />

      <h3>Your Details</h3>
<<<<<<< HEAD

=======
      
>>>>>>> 8fc040de90414307da0fa677067b8a8dd1cdea0e
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
<<<<<<< HEAD
          marginTop: "10px",
=======
          marginTop: "10px"
>>>>>>> 8fc040de90414307da0fa677067b8a8dd1cdea0e
        }}
      >
        Proceed to Payment
      </button>
    </div>
  );
}
