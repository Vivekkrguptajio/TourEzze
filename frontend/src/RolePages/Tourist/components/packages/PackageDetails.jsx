import { useNavigate } from "react-router-dom";

export default function PackageDetails({ pkg, onClose }) {
  const navigate = useNavigate();

  if (!pkg) return null;

  // ⭐ Add to Cart Function
  const handleAddToCart = () => {
    let cart = JSON.parse(localStorage.getItem("tour_cart")) || [];

    const item = {
      id: pkg.id,
      title: pkg.title,
      price: pkg.price,
      duration: pkg.duration,
      image: pkg.image,
      highlights: pkg.highlights,
      quantity: 1,
    };

    const exists = cart.some((d) => d.id === pkg.id);

    if (!exists) {
      cart.push(item);
      localStorage.setItem("tour_cart", JSON.stringify(cart));
    }

    // Close modal first
    onClose();

    // Redirect to Cart
    navigate("/role/tourist/cart");
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden">
        
        <img src={pkg.image} alt={pkg.title} className="w-full h-60 object-cover" />

        <div className="p-6 space-y-3">
          <h2 className="text-2xl font-bold text-green-900">{pkg.title}</h2>
          <p className="text-gray-600">{pkg.duration}</p>

          <h3 className="text-lg font-semibold mt-2">Highlights</h3>
          <ul className="list-disc ml-6 text-gray-700">
            {pkg.highlights.map((h, index) => (
              <li key={index}>{h}</li>
            ))}
          </ul>

          <p className="text-xl font-bold text-green-700 mt-4">
            Price: ₹ {pkg.price.toLocaleString()}
          </p>

          {/* ⭐ Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="w-full py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition font-semibold"
          >
            Add to Cart
          </button>

          {/* Close Button */}
          <button
            className="w-full mt-3 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition"
            onClick={onClose}
          >
            Close
          </button>

        </div>
      </div>
    </div>
  );
}
