export default function PackageCard({ pkg, onClick }) {
  return (
    <div 
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition cursor-pointer overflow-hidden border border-green-100"
      onClick={onClick}
    >
      <img
        src={pkg.image}
        alt={pkg.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4 space-y-2">
        <h3 className="text-lg font-bold text-green-900">{pkg.title}</h3>

        <p className="text-sm text-gray-600">{pkg.duration}</p>

        <p className="text-green-800 font-semibold">
          ₹ {pkg.price.toLocaleString()}
        </p>

        <button className="mt-2 px-3 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition text-sm">
          View Details
        </button>
      </div>
    </div>
  );
}
