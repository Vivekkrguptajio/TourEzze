export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition">
      <img src={product.image} alt={product.title} className="h-40 w-full object-cover" />

      <div className="p-4 space-y-2">
        <span className="px-2 py-1 text-xs bg-gray-100 rounded-full">
          {product.tag}
        </span>

        <h3 className="font-semibold text-gray-900 line-clamp-2">
          {product.title}
        </h3>

        <p className="text-sm text-gray-600">{product.location}</p>

        <p className="text-orange-600 font-bold">{product.price}</p>

        <div className="flex gap-2 mt-3">
          <button className="w-full border rounded-lg py-1 text-sm">View Details</button>
          <button className="w-full bg-orange-500 text-white rounded-lg py-1 text-sm">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
