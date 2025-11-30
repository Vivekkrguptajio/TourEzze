export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border overflow-hidden w-72 hover:shadow-md transition">
      
      <img src={product.image} className="w-full h-44 object-cover" />

      <div className="p-4">
        <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded">
          {product.category}
        </span>

        <h3 className="mt-2 font-semibold">{product.name}</h3>

        <p className="text-sm text-gray-500 mt-1">{product.seller}</p>
        <p className="text-xs mt-1 text-gray-500">⭐ {product.rating}</p>
        <p className="text-lg font-semibold mt-2 text-orange-700">
          ₹{product.price}
        </p>

        <div className="flex gap-2 mt-4">
          <button className="flex-1 py-2 text-sm bg-gray-50 border rounded-lg hover:bg-gray-100">
            View Details
          </button>
          <button className="flex-1 py-2 text-sm bg-orange-600 text-white rounded-lg">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
