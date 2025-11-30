export default function HotelsFiltersSidebar({
  price,
  setPrice,
  propertyType,
  setPropertyType,
  amenity,
  setAmenity,
  minRating,
  setMinRating,
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
    <div className="bg-white rounded-xl shadow-sm border p-5 h-fit w-64">

      <h3 className="text-sm font-semibold mb-4">Filters</h3>

      {/* Price */}
      <p className="text-sm font-medium">Price Range (per night)</p>
      <input
        type="range"
        min={500}
        max={10000}
        step={500}
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        className="w-full accent-orange-600 mt-2"
      />
      <div className="flex justify-between text-xs text-gray-500">
        <span>₹500</span>
        <span>₹10,000</span>
      </div>

      {/* Property Type */}
      <p className="text-sm font-semibold mt-4 mb-1">Property Type</p>
      <div className="space-y-1 text-sm">
        {propertyTypes.map((pt) => (
          <label key={pt} className="flex gap-2">
            <input
              type="radio"
              checked={propertyType === pt}
              onChange={() => setPropertyType(pt)}
            />
            {pt}
          </label>
        ))}
      </div>

      {/* Amenities */}
      <p className="text-sm font-semibold mt-4 mb-1">Amenities</p>
      <div className="space-y-1 text-sm">
        {amenities.map((a) => (
          <label key={a} className="flex gap-2">
            <input
              type="radio"
              checked={amenity === a}
              onChange={() => setAmenity(a)}
            />
            {a}
          </label>
        ))}
      </div>

      {/* Rating */}
      <p className="text-sm font-semibold mt-4 mb-1">Minimum Rating</p>
      <div className="space-y-1 text-sm">
        {ratings.map((r) => (
          <label key={r.value} className="flex gap-2">
            <input
              type="radio"
              checked={minRating === r.value}
              onChange={() => setMinRating(r.value)}
            />
            {r.label}
          </label>
        ))}
      </div>

      {/* Safety & Trust */}
      <p className="text-sm font-semibold mt-4 mb-1">Safety & Trust</p>
      <div className="space-y-1 text-sm">
        <label className="flex gap-2"><input type="checkbox" /> Government verified</label>
        <label className="flex gap-2"><input type="checkbox" /> Family-friendly</label>
        <label className="flex gap-2"><input type="checkbox" /> Women-safe</label>
        <label className="flex gap-2"><input type="checkbox" /> Couples-friendly</label>
      </div>

    </div>
  );
}
