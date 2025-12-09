export default function PaymentSuccess() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "#f0fdf4"
      }}
    >
      <h1 style={{ color: "green", fontSize: "32px" }}>
        ✅ Payment Successful!
      </h1>
      <p>Your tour package has been booked successfully.</p>
      <a href="/role/tourist/packages" style={{ marginTop: "20px" }}>
        Go back to Packages
      </a>
    </div>
  );
}
