import React from "react";

export default function PaymentPage() {
  const amount = 5000; // Package Price
  const upiId = "yourupiid@upi"; // YOUR UPI ID
  const name = "TourEzze Payments";

  const handleUPIPayment = () => {
    const url = `upi://pay?pa=${upiId}&pn=${name}&am=${amount}&cu=INR`;

    window.location.href = url;
  };

  return (
    <div style={{ padding: "30px", maxWidth: "600px", margin: "auto" }}>
      <h1 style={{ marginBottom: "10px" }}>Complete Your Payment</h1>

      <p>Payable Amount: <strong>₹{amount}</strong></p>

      <img
        src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/upi-icon.png"
        alt="UPI"
        style={{ width: "150px", margin: "20px auto", display: "block" }}
      />

      <button
        onClick={handleUPIPayment}
        style={{
          width: "100%",
          padding: "15px",
          background: "#2b7cff",
          color: "white",
          borderRadius: "8px",
          border: "none",
          fontSize: "18px",
          cursor: "pointer",
          fontWeight: "bold",
          marginTop: "20px",
        }}
      >
        Pay with UPI
      </button>
    </div>
  );
}
