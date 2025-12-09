export default function PaymentCancel() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "#fff1f2"
      }}
    >
      <h1 style={{ color: "red", fontSize: "32px" }}>
        ❌ Payment Cancelled
      </h1>
      <p>Your payment was not completed.</p>
      <a href="/role/tourist/packages" style={{ marginTop: "20px" }}>
        Try Again
      </a>
    </div>
  );
}
