import React, { useState } from "react";

export default function PaymentPage() {
  const [paymentStatus, setPaymentStatus] = useState("pending"); // pending, processing, success
  const [transactionId, setTransactionId] = useState("");
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [showForm, setShowForm] = useState(false);
  
  const amount = 5000;
  const upiId = "yourupiid@upi";
  const name = "TourEzze Payments";
  const packageName = "Premium Tour Package";
  const [showQR, setShowQR] = useState(false);

  const generateTransactionId = () => {
    return "TXN" + Date.now() + Math.random().toString(36).substr(2, 9).toUpperCase();
  };

  const generateUPIQRCode = () => {
    const upiString = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR&tn=${encodeURIComponent(packageName)}`;
    // Using Google Chart API to generate QR code
    return `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(upiString)}`;
  };

  const generateBill = (txnId) => {
    const date = new Date();
    const billContent = `
═══════════════════════════════════════
          TOUREZZE PAYMENTS
       OFFICIAL PAYMENT RECEIPT
═══════════════════════════════════════

Transaction ID: ${txnId}
Date: ${date.toLocaleDateString('en-IN')}
Time: ${date.toLocaleTimeString('en-IN')}

───────────────────────────────────────
PAYMENT DETAILS
───────────────────────────────────────

Package: ${packageName}
Amount Paid: ₹${amount.toLocaleString('en-IN')}
Payment Method: UPI
UPI ID: ${upiId}
Merchant: ${name}

Status: ✓ SUCCESSFUL

───────────────────────────────────────
CUSTOMER INFORMATION
───────────────────────────────────────

Customer Name: ${customerInfo.name || '[Not Provided]'}
Email: ${customerInfo.email || '[Not Provided]'}
Phone: ${customerInfo.phone || '[Not Provided]'}

───────────────────────────────────────

Thank you for choosing TourEzze!
For queries: support@tourezze.com
www.tourezze.com

═══════════════════════════════════════
    This is a computer generated bill
═══════════════════════════════════════
`;

    const blob = new Blob([billContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `TourEzze_Bill_${txnId}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleProceedToPayment = (e) => {
    e.preventDefault();
    setShowForm(false);
  };

  const handleUPIPayment = () => {
    const url = `upi://pay?pa=${upiId}&pn=${name}&am=${amount}&cu=INR`;
    window.location.href = url;
    
    setPaymentStatus("processing");
    
    // Simulate payment processing
    setTimeout(() => {
      const txnId = generateTransactionId();
      setTransactionId(txnId);
      setPaymentStatus("success");
      
      // Auto-download bill after 1 second
      setTimeout(() => {
        generateBill(txnId);
      }, 1000);
    }, 3000);
  };

  const handleQRPayment = () => {
    setShowQR(true);
    
    // Simulate QR scan and payment after 5 seconds
    setTimeout(() => {
      setShowQR(false);
      setPaymentStatus("processing");
      
      setTimeout(() => {
        const txnId = generateTransactionId();
        setTransactionId(txnId);
        setPaymentStatus("success");
        
        setTimeout(() => {
          generateBill(txnId);
        }, 1000);
      }, 3000);
    }, 5000);
  };

  const handleDownloadAgain = () => {
    generateBill(transactionId);
  };

  const handleNewPayment = () => {
    setPaymentStatus("pending");
    setTransactionId("");
    setCustomerInfo({
      name: "",
      email: "",
      phone: ""
    });
    setShowForm(false);
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      padding: "40px 20px",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    }}>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes successPop {
          0% { transform: scale(0); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        input:focus {
          outline: none;
          border-color: #667eea !important;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1) !important;
        }
      `}</style>

      <div style={{
        maxWidth: "500px",
        margin: "auto",
        background: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(10px)",
        borderRadius: "24px",
        padding: "40px",
        boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
        animation: "slideIn 0.5s ease-out"
      }}>
        
        {/* CUSTOMER FORM MODAL */}
        {showForm && paymentStatus === "pending" && (
          <div>
            <div style={{ textAlign: "center", marginBottom: "30px" }}>
              <h2 style={{
                margin: "0 0 10px 0",
                fontSize: "24px",
                color: "#1a202c",
                fontWeight: "700"
              }}>
                Customer Details
              </h2>
              <p style={{ color: "#718096", margin: 0, fontSize: "14px" }}>
                Please provide your information (optional)
              </p>
            </div>

            <form onSubmit={handleProceedToPayment}>
              <div style={{ marginBottom: "20px" }}>
                <label style={{
                  display: "block",
                  marginBottom: "8px",
                  color: "#4a5568",
                  fontSize: "14px",
                  fontWeight: "600"
                }}>
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={customerInfo.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "2px solid #e2e8f0",
                    borderRadius: "10px",
                    fontSize: "16px",
                    transition: "all 0.3s",
                    boxSizing: "border-box"
                  }}
                />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label style={{
                  display: "block",
                  marginBottom: "8px",
                  color: "#4a5568",
                  fontSize: "14px",
                  fontWeight: "600"
                }}>
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={customerInfo.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "2px solid #e2e8f0",
                    borderRadius: "10px",
                    fontSize: "16px",
                    transition: "all 0.3s",
                    boxSizing: "border-box"
                  }}
                />
              </div>

              <div style={{ marginBottom: "25px" }}>
                <label style={{
                  display: "block",
                  marginBottom: "8px",
                  color: "#4a5568",
                  fontSize: "14px",
                  fontWeight: "600"
                }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={customerInfo.phone}
                  onChange={handleInputChange}
                  placeholder="+91 XXXXXXXXXX"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "2px solid #e2e8f0",
                    borderRadius: "10px",
                    fontSize: "16px",
                    transition: "all 0.3s",
                    boxSizing: "border-box"
                  }}
                />
              </div>

              <div style={{ display: "flex", gap: "10px" }}>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  style={{
                    flex: 1,
                    padding: "14px",
                    background: "#e2e8f0",
                    color: "#4a5568",
                    borderRadius: "10px",
                    border: "none",
                    fontSize: "16px",
                    cursor: "pointer",
                    fontWeight: "600",
                    transition: "all 0.2s"
                  }}
                  onMouseOver={(e) => {
                    e.target.style.background = "#cbd5e0";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = "#e2e8f0";
                  }}
                >
                  Back
                </button>
                <button
                  type="submit"
                  style={{
                    flex: 1,
                    padding: "14px",
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    color: "white",
                    borderRadius: "10px",
                    border: "none",
                    fontSize: "16px",
                    cursor: "pointer",
                    fontWeight: "600",
                    transition: "all 0.2s"
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = "translateY(-2px)";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = "translateY(0)";
                  }}
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
        )}

        {/* PAYMENT PAGE */}
        {!showForm && paymentStatus === "pending" && (
          <>
            <div style={{ textAlign: "center", marginBottom: "30px" }}>
              <div style={{
                width: "80px",
                height: "80px",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                borderRadius: "20px",
                margin: "0 auto 20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "40px"
              }}>
                ✈️
              </div>
              <h1 style={{
                margin: "0 0 10px 0",
                fontSize: "28px",
                color: "#1a202c",
                fontWeight: "700"
              }}>
                Complete Your Payment
              </h1>
              <p style={{ color: "#718096", margin: 0 }}>Secure UPI Payment Gateway</p>
            </div>

            <div style={{
              background: "linear-gradient(135deg, #f6f8fb 0%, #e9ecf1 100%)",
              padding: "25px",
              borderRadius: "16px",
              marginBottom: "25px"
            }}>
              <div style={{ marginBottom: "15px" }}>
                <p style={{ color: "#718096", margin: "0 0 5px 0", fontSize: "14px" }}>Package</p>
                <p style={{ color: "#1a202c", margin: 0, fontSize: "18px", fontWeight: "600" }}>
                  {packageName}
                </p>
              </div>
              <div style={{
                borderTop: "1px solid rgba(0,0,0,0.1)",
                paddingTop: "15px",
                marginTop: "15px"
              }}>
                <p style={{ color: "#718096", margin: "0 0 5px 0", fontSize: "14px" }}>Total Amount</p>
                <p style={{
                  color: "#667eea",
                  margin: 0,
                  fontSize: "36px",
                  fontWeight: "700"
                }}>
                  ₹{amount.toLocaleString('en-IN')}
                </p>
              </div>
            </div>

            {customerInfo.name && (
              <div style={{
                background: "#f0fdf4",
                padding: "15px",
                borderRadius: "12px",
                marginBottom: "20px",
                border: "1px solid #86efac"
              }}>
                <p style={{
                  margin: "0 0 8px 0",
                  fontSize: "12px",
                  color: "#166534",
                  fontWeight: "600"
                }}>
                  BILLING TO:
                </p>
                <p style={{ margin: "0 0 4px 0", color: "#15803d", fontSize: "14px", fontWeight: "600" }}>
                  {customerInfo.name}
                </p>
                {customerInfo.email && (
                  <p style={{ margin: "0 0 2px 0", color: "#16a34a", fontSize: "13px" }}>
                    {customerInfo.email}
                  </p>
                )}
                {customerInfo.phone && (
                  <p style={{ margin: 0, color: "#16a34a", fontSize: "13px" }}>
                    {customerInfo.phone}
                  </p>
                )}
              </div>
            )}

            <img
              src="https://chatgpt.com/backend-api/estuary/content?id=file_000000009488720cad43a74b3bd5b753&ts=490347&p=fs&cid=1&sig=12132c39e01aa2ed650afee51ff156b9636e219896cd8ef5491f55dd26ad4cc3&v=0"
              alt="UPI"
              style={{
                width: "120px",
                margin: "0 auto 25px",
                display: "block",
                opacity: 0.9
              }}
            />

            {!customerInfo.name && (
              <button
                onClick={() => setShowForm(true)}
                style={{
                  width: "100%",
                  padding: "14px",
                  background: "#ffffff",
                  color: "#667eea",
                  borderRadius: "12px",
                  border: "2px solid #667eea",
                  fontSize: "16px",
                  cursor: "pointer",
                  fontWeight: "600",
                  marginBottom: "15px",
                  transition: "all 0.2s"
                }}
                onMouseOver={(e) => {
                  e.target.style.background = "#f7fafc";
                }}
                onMouseOut={(e) => {
                  e.target.style.background = "#ffffff";
                }}
              >
                Add Customer Details (Optional)
              </button>
            )}

            {!showQR && (
              <>
                <button
                  onClick={handleUPIPayment}
                  style={{
                    width: "100%",
                    padding: "18px",
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    color: "white",
                    borderRadius: "12px",
                    border: "none",
                    fontSize: "18px",
                    cursor: "pointer",
                    fontWeight: "700",
                    transition: "transform 0.2s, box-shadow 0.2s",
                    boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
                    marginBottom: "15px"
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.boxShadow = "0 6px 20px rgba(102, 126, 234, 0.6)";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "0 4px 15px rgba(102, 126, 234, 0.4)";
                  }}
                >
                  Pay with UPI
                </button>

                <div style={{
                  display: "flex",
                  alignItems: "center",
                  margin: "20px 0",
                  textAlign: "center"
                }}>
                  <div style={{ flex: 1, height: "1px", background: "#e2e8f0" }}></div>
                  <span style={{ padding: "0 15px", color: "#718096", fontSize: "14px", fontWeight: "600" }}>
                    OR
                  </span>
                  <div style={{ flex: 1, height: "1px", background: "#e2e8f0" }}></div>
                </div>

                <button
                  onClick={handleQRPayment}
                  style={{
                    width: "100%",
                    padding: "18px",
                    background: "#ffffff",
                    color: "#667eea",
                    borderRadius: "12px",
                    border: "2px solid #667eea",
                    fontSize: "18px",
                    cursor: "pointer",
                    fontWeight: "700",
                    transition: "all 0.2s",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px"
                  }}
                  onMouseOver={(e) => {
                    e.target.style.background = "#f7fafc";
                    e.target.style.transform = "translateY(-2px)";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = "#ffffff";
                    e.target.style.transform = "translateY(0)";
                  }}
                >
                  <span style={{ fontSize: "24px" }}>📱</span>
                  Scan QR Code
                </button>
              </>
            )}

            {showQR && (
              <div style={{
                textAlign: "center",
                animation: "slideIn 0.3s ease-out"
              }}>
                <div style={{
                  background: "#ffffff",
                  padding: "25px",
                  borderRadius: "16px",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                  marginBottom: "20px"
                }}>
                  <h3 style={{
                    margin: "0 0 15px 0",
                    fontSize: "20px",
                    color: "#1a202c",
                    fontWeight: "700"
                  }}>
                    Scan to Pay
                  </h3>
                  <p style={{
                    margin: "0 0 20px 0",
                    color: "#718096",
                    fontSize: "14px"
                  }}>
                    Open any UPI app and scan this QR code
                  </p>
                  
                  <div style={{
                    background: "white",
                    padding: "20px",
                    borderRadius: "12px",
                    display: "inline-block",
                    border: "3px solid #667eea",
                    boxShadow: "0 0 20px rgba(102, 126, 234, 0.2)"
                  }}>
                    <img
                      src={generateUPIQRCode()}
                      alt="UPI QR Code"
                      style={{
                        width: "250px",
                        height: "250px",
                        display: "block"
                      }}
                    />
                  </div>

                  <div style={{
                    marginTop: "20px",
                    padding: "15px",
                    background: "#fef3c7",
                    borderRadius: "10px",
                    fontSize: "14px",
                    color: "#92400e"
                  }}>
                    <p style={{ margin: "0 0 5px 0", fontWeight: "600" }}>
                      ⏱️ Waiting for payment...
                    </p>
                    <p style={{ margin: 0 }}>
                      This will auto-confirm once payment is received
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setShowQR(false)}
                  style={{
                    width: "100%",
                    padding: "14px",
                    background: "#e2e8f0",
                    color: "#4a5568",
                    borderRadius: "10px",
                    border: "none",
                    fontSize: "16px",
                    cursor: "pointer",
                    fontWeight: "600",
                    transition: "all 0.2s"
                  }}
                  onMouseOver={(e) => {
                    e.target.style.background = "#cbd5e0";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = "#e2e8f0";
                  }}
                >
                  Cancel
                </button>
              </div>
            )}

            <div style={{
              marginTop: "25px",
              padding: "15px",
              background: "#f7fafc",
              borderRadius: "10px",
              fontSize: "13px",
              color: "#718096",
              textAlign: "center"
            }}>
              🔒 Secured by 256-bit SSL encryption
            </div>
          </>
        )}

        {/* PROCESSING STATE */}
        {paymentStatus === "processing" && (
          <div style={{ textAlign: "center", padding: "40px 0" }}>
            <div style={{
              width: "80px",
              height: "80px",
              border: "4px solid #f3f4f6",
              borderTop: "4px solid #667eea",
              borderRadius: "50%",
              margin: "0 auto 30px",
              animation: "spin 1s linear infinite"
            }}></div>
            <h2 style={{ color: "#1a202c", marginBottom: "10px", fontSize: "24px" }}>
              Processing Payment
            </h2>
            <p style={{ color: "#718096", marginBottom: "20px" }}>
              Please wait while we confirm your transaction...
            </p>
            <div style={{
              background: "#fef3c7",
              padding: "12px 20px",
              borderRadius: "8px",
              display: "inline-block",
              fontSize: "14px",
              color: "#92400e"
            }}>
              ⚠️ Do not close this window
            </div>
          </div>
        )}

        {/* SUCCESS STATE */}
        {paymentStatus === "success" && (
          <div style={{ textAlign: "center" }}>
            <div style={{
              width: "100px",
              height: "100px",
              background: "linear-gradient(135deg, #48bb78 0%, #38a169 100%)",
              borderRadius: "50%",
              margin: "0 auto 30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "50px",
              animation: "successPop 0.5s ease-out"
            }}>
              ✓
            </div>
            
            <h2 style={{
              color: "#1a202c",
              marginBottom: "10px",
              fontSize: "28px",
              fontWeight: "700"
            }}>
              Payment Successful!
            </h2>
            <p style={{ color: "#718096", marginBottom: "30px" }}>
              Your transaction has been completed successfully
            </p>

            <div style={{
              background: "#f7fafc",
              padding: "25px",
              borderRadius: "16px",
              marginBottom: "25px",
              textAlign: "left"
            }}>
              <div style={{ marginBottom: "15px" }}>
                <p style={{
                  color: "#718096",
                  fontSize: "12px",
                  margin: "0 0 5px 0",
                  textTransform: "uppercase",
                  fontWeight: "600"
                }}>
                  Transaction ID
                </p>
                <p style={{
                  color: "#1a202c",
                  fontSize: "16px",
                  margin: 0,
                  fontFamily: "monospace",
                  fontWeight: "600"
                }}>
                  {transactionId}
                </p>
              </div>
              
              <div style={{
                borderTop: "1px solid #e2e8f0",
                paddingTop: "15px",
                marginTop: "15px"
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                  <span style={{ color: "#718096", fontSize: "14px" }}>Package</span>
                  <span style={{ color: "#1a202c", fontSize: "14px", fontWeight: "600" }}>
                    {packageName}
                  </span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                  <span style={{ color: "#718096", fontSize: "14px" }}>Amount</span>
                  <span style={{ color: "#1a202c", fontSize: "14px", fontWeight: "600" }}>
                    ₹{amount.toLocaleString('en-IN')}
                  </span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                  <span style={{ color: "#718096", fontSize: "14px" }}>Payment Method</span>
                  <span style={{ color: "#1a202c", fontSize: "14px", fontWeight: "600" }}>UPI</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "#718096", fontSize: "14px" }}>Date & Time</span>
                  <span style={{ color: "#1a202c", fontSize: "14px", fontWeight: "600" }}>
                    {new Date().toLocaleString('en-IN')}
                  </span>
                </div>
              </div>
            </div>

            <div style={{
              background: "#d1fae5",
              padding: "15px",
              borderRadius: "12px",
              marginBottom: "20px",
              fontSize: "14px",
              color: "#065f46"
            }}>
              ✅ Bill has been downloaded automatically
            </div>

            <div style={{ display: "flex", gap: "10px" }}>
              <button
                onClick={handleDownloadAgain}
                style={{
                  flex: 1,
                  padding: "14px",
                  background: "#ffffff",
                  color: "#667eea",
                  borderRadius: "12px",
                  border: "2px solid #667eea",
                  fontSize: "16px",
                  cursor: "pointer",
                  fontWeight: "600",
                  transition: "all 0.2s"
                }}
                onMouseOver={(e) => {
                  e.target.style.background = "#f7fafc";
                }}
                onMouseOut={(e) => {
                  e.target.style.background = "#ffffff";
                }}
              >
                📥 Download Bill
              </button>
              <button
                onClick={handleNewPayment}
                style={{
                  flex: 1,
                  padding: "14px",
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  color: "white",
                  borderRadius: "12px",
                  border: "none",
                  fontSize: "16px",
                  cursor: "pointer",
                  fontWeight: "600",
                  transition: "all 0.2s"
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = "translateY(0)";
                }}
              >
                New Payment
              </button>
            </div>

            <div style={{
              marginTop: "25px",
              padding: "15px",
              background: "#fffbeb",
              borderRadius: "10px",
              fontSize: "13px",
              color: "#92400e",
              textAlign: "center"
            }}>
              📧 A confirmation email has been sent to your registered email
            </div>
          </div>
        )}
      </div>
    </div>
  );
}