export default function PackageDetails({ pkg, onClose }) {
  if (!pkg) return null;

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

          <button
            className="w-full mt-4 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
