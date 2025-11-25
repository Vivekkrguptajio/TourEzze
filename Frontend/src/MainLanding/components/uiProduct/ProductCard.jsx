import { Link } from "react-router-dom";

export default function ProductCard({ item }) {
  return (
    <Link
      to={`/product/${item.id}`}
      className="group bg-white border rounded-xl shadow-sm hover:shadow-lg transition-all overflow-hidden"
    >
      {/* IMAGE */}
      <div className="relative w-full h-52 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />

        {/* TAG */}
        <span className="
          absolute bottom-2 left-2 
          bg-black/70 text-white text-xs 
          px-2 py-1 rounded
        ">
          {item.tag}
        </span>

        {/* OUT OF STOCK BADGE */}
        {!item.available && (
          <span className="
            absolute top-2 right-2 
            bg-red-500 text-white text-xs 
            px-2 py-1 rounded
          ">
            Out of Stock
          </span>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-4">
        {/* TITLE */}
        <h3 className="font-semibold text-lg mb-1">{item.title}</h3>

        {/* CATEGORY */}
        <p className="text-sm text-gray-500">{item.category}</p>

        {/* PRICE */}
        <p className="text-green-700 font-bold mt-2">{item.price}</p>

        {/* LOCATION */}
        <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
          📍 {item.location}
        </p>

        {/* RATING */}
        <p className="flex items-center gap-1 mt-2 text-sm text-gray-700">
          ⭐ {item.rating}  
          <span className="text-gray-500">({item.reviews} reviews)</span>
        </p>
      </div>
    </Link>
  );
}
