import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function TourCart() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  // Load cart when page opens
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("tour_cart")) || [];

    const updated = stored.map((item) => ({
      ...item,
      serviceType: item.serviceType || "normal",
      premiumPrice: item.price + Math.round(item.price * 0.45), // Premium = +45%
    }));

    setCartItems(updated);
    updateTotal(updated);
  }, []);

  // Calculate total amount
  const updateTotal = (items) => {
    const totalPrice = items.reduce((sum, item) => {
      return sum + (item.serviceType === "premium" ? item.premiumPrice : item.price);
    }, 0);

    setTotal(totalPrice);
  };

  // When user switches Normal ↔ Premium
  const handleServiceChange = (id, type) => {
    const updated = cartItems.map((item) =>
      item.id === id ? { ...item, serviceType: type } : item
    );

    setCartItems(updated);
    localStorage.setItem("tour_cart", JSON.stringify(updated));
    updateTotal(updated);
  };

  // Remove from cart
  const removeItem = (id) => {
    const updated = cartItems.filter((item) => item.id !== id);
    setCartItems(updated);

    localStorage.setItem("tour_cart", JSON.stringify(updated));
    updateTotal(updated);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">

      <h1 className="text-3xl font-bold text-green-900 mb-6">
        🛒 Your Cart
      </h1>

      {/* IF CART EMPTY */}
      {cartItems.length === 0 ? (
        <div className="text-center py-10">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Your cart is empty!
          </h2>

          <Link
            to="/role/tourist/packages"
            className="px-6 py-3 bg-green-700 text-white rounded-md hover:bg-green-800 transition"
          >
            Browse Packages
          </Link>
        </div>
      ) : (

        <div className="space-y-6">

          {/* CART ITEMS */}
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg p-4 border border-green-100 space-y-3"
            >
              <div className="flex items-center gap-4">

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-32 h-24 object-cover rounded-md"
                />

                <div className="flex-1">
                  <h2 className="text-lg font-bold text-green-900">{item.title}</h2>
                  <p className="text-sm text-gray-600">{item.duration}</p>

                  {/* PRICE */}
                  <p className="font-semibold text-green-700 mt-1">
                    Price: ₹{" "}
                    {item.serviceType === "premium"
                      ? item.premiumPrice.toLocaleString()
                      : item.price.toLocaleString()}
                  </p>
                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  className="px-3 py-1.5 bg-red-600 text-white rounded-md hover:bg-red-700"
                >
                  Remove
                </button>
              </div>

              {/* NORMAL / PREMIUM SELECT */}
              <div className="flex items-center gap-3 mt-2">
                <label className="font-medium text-gray-700">Select Service:</label>

                <select
                  value={item.serviceType}
                  onChange={(e) => handleServiceChange(item.id, e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-1 text-sm"
                >
                  <option value="normal">
                    Normal — ₹{item.price.toLocaleString()}
                  </option>
                  <option value="premium">
                    Premium — ₹{item.premiumPrice.toLocaleString()}
                  </option>
                </select>
              </div>

              {/* INFORMATION SECTION */}
              <div className="bg-gray-50 p-3 rounded-md border text-sm">
                {item.serviceType === "normal" ? (
                  <ul className="list-disc ml-5 text-gray-700 space-y-1">
                    <li>Standard sightseeing & timing</li>
                    <li>No priority entry</li>
                    <li>Normal waiting time</li>
                    <li>Standard transport</li>
                    <li>No dedicated guide</li>
                  </ul>
                ) : (
                  <ul className="list-disc ml-5 text-purple-700 space-y-1 font-medium">
                    <li>Priority entry everywhere</li>
                    <li>Fast-track darshan / safari / sightseeing</li>
                    <li>Dedicated personal guide</li>
                    <li>Private cab anytime</li>
                    <li>Special premium timings</li>
                    <li>Faster trip completion</li>
                  </ul>
                )}
              </div>
            </div>
          ))}

          {/* TOTAL + PAYMENT BUTTON */}
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">

            <h3 className="text-xl font-semibold text-green-900 mb-4">
              Total Amount: ₹ {total.toLocaleString()}
            </h3>

            {/* ⭐ PAYMENT BUTTON WITH LINK */}
            <Link
              to="/role/tourist/payment"
              className="block text-center w-full px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition"
            >
              Proceed to Payment
            </Link>

            <p className="text-sm text-gray-600 mt-3">
              Normal + Premium services will be billed together in one payment.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
