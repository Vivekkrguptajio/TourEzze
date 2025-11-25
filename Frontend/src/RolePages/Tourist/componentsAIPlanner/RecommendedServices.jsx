const items = [
  { title: "Nearby Hotels", price: "From ₹1,500/night" },
  { title: "Local Guide", price: "₹800/day" },
  { title: "Cab Service", price: "₹12/km" },
  { title: "Handicraft Shop", price: "Browse items" },
  { title: "Cultural Events", price: "₹200/person" },
];

export default function RecommendedServices() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-lg font-semibold mb-1">Recommended for You</h2>
      <p className="text-sm text-gray-500 mb-4">
        Enhance your journey with these services
      </p>

      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item.title}
            className="flex justify-between items-center p-4 border rounded-xl bg-gray-50"
          >
            <div>
              <h3 className="font-medium">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.price}</p>
            </div>
            <button className="bg-green-600 text-white px-4 py-1 rounded-lg">
              Add
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
