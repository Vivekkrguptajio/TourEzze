import { useNavigate } from "react-router-dom";

export default function PackageCard({ pkg }) {
  const navigate = useNavigate();

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

    const exists = cart.some((c) => c.id === pkg.id);

    if (!exists) {
      cart.push(item);
      localStorage.setItem("tour_cart", JSON.stringify(cart));
    }

    navigate("/role/tourist/cart");
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition cursor-pointer overflow-hidden border border-green-100">

      <img
        src={pkg.image}
        alt={pkg.title}
        className="w-full h-48 object-cover"
        onClick={() => navigate(`/role/tourist/packages/${pkg.id}`)}
      />

      <div className="p-4 space-y-2">
        <h3 className="text-lg font-bold text-green-900">{pkg.title}</h3>
        <p className="text-sm text-gray-600">{pkg.duration}</p>
        <p className="text-green-800 font-semibold">₹ {pkg.price.toLocaleString()}</p>

        <div className="flex items-center gap-3 mt-3">
          <button
            onClick={() => navigate(`/role/tourist/packages/${pkg.id}`)}
            className="flex-1 px-3 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition"
          >
            View Details
          </button>

          <button
            onClick={handleAddToCart}
            className="flex-1 px-3 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>

    </div>
  );
}
