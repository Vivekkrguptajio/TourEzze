import { Star, Filter, X } from "lucide-react";

export default function HotelsFiltersSidebar({
  price,
  setPrice,
  propertyType,
  setPropertyType,
  amenity,
  setAmenity,
  minRating,
  setMinRating,
  show,
  onClose,
}) {
  const propertyTypes = ["Hotel", "Homestay", "Resort", "Lodge"];
  const amenities = ["WiFi", "Parking", "AC", "Breakfast", "Pet-friendly", "Pool"];
  const ratings = [
    { label: "4.5★ & above", value: 4.5 },
    { label: "4★ & above", value: 4 },
    { label: "3.5★ & above", value: 3.5 },
    { label: "3★ & above", value: 3 },
  ];

  return (
    <>
      {/* Backdrop (appear on all sizes when shown) */}
      {show && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar (overlay) */}
      <aside
        id="filters-sidebar"
        className={`
          fixed top-6 left-6 z-50 w-72
          bg-white/95 backdrop-blur p-6 rounded-2xl border border-gray-200 shadow-xl
          transition-transform transition-opacity duration-300
          ${show ? "translate-x-0 translate-y-0 opacity-100" : "-translate-x-full translate-y-6 opacity-0"}
        `}
        style={{ willChange: "transform, opacity" }}
      >
        {/* Close Button */}
        <button className="absolute top-3 right-3 bg-gray-100 p-2 rounded-full" onClick={onClose} aria-label="Close filters">
          <X />
        </button>

        <div className="flex items-center gap-2 mb-3">
          <Filter className="text-orange-600" />
          <h3 className="text-lg font-semibold">Filters</h3>
        </div>

        {/* Price */}
        <div className="mb-4">
          <p className="text-sm font-semibold text-gray-700">Price Range (per night)</p>
          <input type="range" min={500} max={10000} step={500} value={price}
            onChange={(e) => setPrice(Number(e.target.value))} className="w-full mt-3" />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>₹500</span><span>₹10,000</span>
          </div>
          <div className="mt-2 text-xs text-gray-600 font-medium bg-orange-50 px-2 py-1 rounded-lg inline-block">
            Selected: ₹{price.toLocaleString("en-IN")}
          </div>
        </div>

        {/* Property Type */}
        <div className="mb-4">
          <p className="text-sm font-semibold text-gray-700 mb-2">Property Type</p>
          <div className="grid grid-cols-2 gap-2">
            {propertyTypes.map(pt => {
              const active = propertyType === pt;
              return (
                <button key={pt} onClick={() => setPropertyType(pt)}
                  className={`px-3 py-2 rounded-xl text-sm ${active ? "bg-orange-600 text-white" : "bg-gray-50"}`}>
                  {pt}
                </button>
              );
            })}
            <button onClick={() => setPropertyType("")} className="col-span-2 px-3 py-2 rounded bg-gray-50 text-sm">Clear</button>
          </div>
        </div>

        {/* Amenities */}
        <div className="mb-4">
          <p className="text-sm font-semibold text-gray-700 mb-2">Amenities</p>
          <div className="grid grid-cols-2 gap-2">
            {amenities.map(a => {
              const active = amenity === a;
              return (
                <button key={a} onClick={() => setAmenity(a)}
                  className={`px-3 py-2 rounded-xl text-sm ${active ? "bg-orange-600 text-white" : "bg-gray-50"}`}>
                  {a}
                </button>
              );
            })}
            <button onClick={() => setAmenity("")} className="col-span-2 px-3 py-2 rounded bg-gray-50 text-sm">Clear</button>
          </div>
        </div>

        {/* Ratings */}
        <div>
          <p className="text-sm font-semibold text-gray-700 mb-2">Minimum Rating</p>
          <div className="space-y-2">
            {ratings.map(r => {
              const active = minRating === r.value;
              return (
                <button key={r.value} onClick={() => setMinRating(r.value)}
                  className={`w-full px-3 py-2 rounded ${active ? "bg-yellow-100" : "bg-gray-100"}`}>
                  <div className="flex justify-between items-center">
                    <span>{r.label}</span>
                    <Star className="text-yellow-500" />
                  </div>
                </button>
              );
            })}
            <button onClick={() => setMinRating(0)} className="w-full px-3 py-2 rounded bg-gray-50 mt-2 text-sm">Clear rating</button>
          </div>
        </div>
      </aside>
    </>
  );
}
