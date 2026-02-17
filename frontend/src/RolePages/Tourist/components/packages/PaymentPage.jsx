import { useEffect, useState } from "react";
import { CreditCard, Lock, Shield, CheckCircle, AlertCircle } from "lucide-react";

export default function PaymentPage() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentFailed, setPaymentFailed] = useState(false);

  // ⬇️ AUTO REDIRECT ON SUCCESS (5 seconds)
  useEffect(() => {
    if (paymentSuccess) {
      const timer = setTimeout(() => {
        window.location.href = "/";
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [paymentSuccess]);

  // ⬇️ AUTO REDIRECT ON FAILED (5 seconds)
  useEffect(() => {
    if (paymentFailed) {
      const timer = setTimeout(() => {
        window.location.href = "/role/tourist/cart";
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [paymentFailed]);

  // Load real data from cart
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("tour_cart")) || [];

    const updated = stored.map((item) => ({
      ...item,
      serviceType: item.serviceType || "normal",
      premiumPrice: item.price + Math.round(item.price * 0.45),
    }));

    const totalPrice = updated.reduce((sum, item) => {
      return sum + (item.serviceType === "premium" ? item.premiumPrice : item.price);
    }, 0);

    setCartItems(updated);
    setTotal(totalPrice);
  }, []);

  // Load Razorpay SDK
  const loadRazorpayScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // Pay Now
  const handleRazorpayPay = async () => {
    if (!total || total <= 0) return;
    setLoading(true);

    const res = await loadRazorpayScript("https://checkout.razorpay.com/v1/checkout.js");
    if (!res) {
      alert("Failed to load Razorpay. Try again.");
      setLoading(false);
      return;
    }

    // Fake API simulation
    await new Promise((resolve) => setTimeout(resolve, 800));

    const orderData = {
      id: "order_" + Math.random().toString(36).substring(2, 10),
      amount: total * 100,
      currency: "INR",
    };

    const options = {
      key: "rzp_test_xxxxxxxx", // Replace with test key
      amount: orderData.amount,
      currency: orderData.currency,
      name: "TourEzze",
      description: "Tour Package Payment",
      order_id: orderData.id,

      handler: function () {
        setPaymentSuccess(true);
        setLoading(false);
      },

      modal: {
        ondismiss: function () {
          setPaymentFailed(true);
          setLoading(false);
        },
      },

      prefill: {
        name: "Guest User",
        email: "guest@example.com",
        contact: "9999999999",
      },

      theme: { color: "#166534" },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

 // ---------------------------------------------------------
// ❌ PAYMENT FAILED SCREEN (Auto Redirect + BILL)
// ---------------------------------------------------------
if (paymentFailed) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-rose-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-lg w-full text-center border-t-4 border-red-600">

        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-5">
          <AlertCircle className="w-12 h-12 text-red-600" />
        </div>

        <h2 className="text-3xl font-bold text-red-700 mb-3">Payment Failed</h2>
        <p className="text-gray-600">Your transaction was not completed.</p>
        <p className="text-red-700 font-semibold mb-4">⚠ Ticket was NOT generated.</p>

        <p className="text-gray-500 text-sm mb-5">(Redirecting in 5 seconds...)</p>

        {/* FAILED BILL / INVOICE */}
        <div className="bg-white border border-red-300 rounded-xl shadow-inner p-5 text-left">

          <h3 className="text-xl font-bold text-gray-900 mb-3">🧾 Invoice (Not Paid)</h3>

          <div className="space-y-3">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-start pb-2 border-b border-gray-200"
              >
                <div>
                  <p className="font-semibold text-gray-800">{item.title}</p>
                  <p className="text-xs text-gray-500">
                    {item.serviceType === "premium" ? "⭐ Premium Service" : "Standard Service"}
                  </p>
                </div>

                <div className="text-right">
                  <p className="font-semibold text-gray-900">
                    ₹{(
                      item.serviceType === "premium" ? item.premiumPrice : item.price
                    ).toLocaleString()}
                  </p>

                  {item.serviceType === "premium" && (
                    <p className="line-through text-xs text-gray-400">
                      ₹{item.price.toLocaleString()}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* TOTAL SECTION */}
          <div className="flex justify-between mt-4 pt-4 border-t border-gray-300">
            <span className="text-lg font-bold text-gray-800">Grand Total:</span>
            <span className="text-lg font-bold text-red-700">₹{total.toLocaleString()}</span>
          </div>

          <p className="text-xs text-red-600 font-semibold mt-2">
            * Payment Failed – This Invoice is Not Valid
          </p>
          <p className="text-xs text-gray-500">
            No amount has been deducted from your bank.
          </p>
        </div>

        <button
          onClick={() => setPaymentFailed(false)}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg mt-6 transition"
        >
          Retry Payment
        </button>

        <button
          onClick={() => (window.location.href = "/role/tourist/cart")}
          className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 rounded-lg mt-3 transition"
        >
          Back to Cart
        </button>

      </div>
    </div>
  );
}


  // ---------------------------------------------------------
  // ✅ PAYMENT SUCCESS SCREEN (Auto Redirect)
  // ---------------------------------------------------------
  if (paymentSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center">

          <div className="w-20 h-20 bg-green-100 rounded-full flex justify-center items-center mx-auto mb-4">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>

          <h2 className="text-3xl font-bold text-gray-900">Payment Successful!</h2>
          <p className="mt-2 text-gray-600">Your booking has been confirmed.</p>

          <p className="text-gray-500 mt-2 text-sm">(Redirecting in 5 seconds...)</p>

          <div className="mt-6 p-3 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-gray-700">Transaction ID</p>
            <p className="font-mono text-green-700 font-semibold">
              TXN{Math.random().toString(36).substring(2, 12).toUpperCase()}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // ---------------------------------------------------------
  // 💳 PAYMENT PAGE UI
  // ---------------------------------------------------------
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Secure Checkout</h1>
          <p className="text-gray-600">Complete your booking safely</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {/* SUMMARY */}
          <div className="md:col-span-2 bg-white p-6 rounded-2xl shadow border">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Shield className="w-6 h-6 text-green-600" />
              Order Summary
            </h2>

            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="p-4 bg-gray-50 border rounded-lg flex justify-between">
                  <div>
                    <p className="font-semibold text-gray-800">{item.title}</p>
                    <span className={`mt-1 inline-block px-2 py-1 text-xs rounded-full ${
                      item.serviceType === "premium"
                        ? "bg-purple-100 text-purple-700"
                        : "bg-blue-100 text-blue-700"
                    }`}>
                      {item.serviceType === "premium" ? "⭐ Premium" : "Standard"}
                    </span>
                  </div>

                  <div className="text-right">
                    <p className="font-bold">
                      ₹{(item.serviceType === "premium" ? item.premiumPrice : item.price).toLocaleString()}
                    </p>
                    {item.serviceType === "premium" && (
                      <p className="text-xs text-gray-500 line-through">
                        ₹{item.price.toLocaleString()}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 bg-green-50 border border-green-200 p-4 mt-6 rounded-lg">
              <Lock className="w-5 h-5 text-green-600" />
              <p className="text-sm text-gray-700">Your payment is 100% secure & encrypted.</p>
            </div>
          </div>

          {/* PAYMENT PANEL */}
          <div className="md:col-span-1">
            <div className="bg-white p-6 rounded-2xl shadow border sticky top-4">

              <p className="text-sm text-gray-600">Total Amount</p>
              <p className="text-4xl font-bold text-gray-900 mt-1">₹{total.toLocaleString()}</p>

              <button
                onClick={handleRazorpayPay}
                disabled={loading}
                className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl text-lg font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <CreditCard className="w-5 h-5" />
                    Pay Now
                  </>
                )}
              </button>

              <div className="mt-4 text-xs text-center text-gray-500">
                Powered by Razorpay
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
