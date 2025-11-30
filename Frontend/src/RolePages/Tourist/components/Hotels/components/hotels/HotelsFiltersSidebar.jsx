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
  const propertyTypes = ["All", "Hotel", "Homestay", "Resort", "Lodge"];
  const amenities = ["All", "WiFi", "Parking", "AC", "Breakfast", "Pool"];
  const ratingOptions = [
    { label: "4★ & above", value: 4 },
    { label: "3.5★ & above", value: 3.5 },
    { label: "3★ & above", value: 3 },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border p-5 w-64 h-fit">
      <h3 className="text-sm font-semibold mb-4">Filters</h3>

      {/* Price */}
      <div className="mb-5">
        <p className="text-sm font-medium mb-1">Price Range (per night)</p>
        <input
          type="range"
          min={500}
          max={10000}
          step={500}
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full accent-orange-600"
        />
        <div className="flex justify-between text-xs text-gray-600">
          <span>₹500</span>
          <span>₹10,000</span>
        </div>
        <p className="mt-1 text-xs text-gray-700">
          Up to <b>₹{price}</b>
        </p>
      </div>

      {/* Property Type */}
      <div className="mb-5">
        <p className="text-sm font-medium mb-2">Property Type</p>
        <div className="space-y-1 text-sm">
          {propertyTypes.map((type) => (
            <label key={type} className="flex items-center gap-2">
              <input
                type="radio"
                name="propertyType"
                checked={propertyType === type}
                onChange={() => setPropertyType(type)}
              />
              {type}
            </label>
          ))}
        </div>
      </div>

      {/* Amenities */}
      <div className="mb-5">
        <p className="text-sm font-medium mb-2">Amenities</p>
        <div className="space-y-1 text-sm">
          {amenities.map((a) => (
            <label key={a} className="flex items-center gap-2">
              <input
                type="radio"
                name="amenity"
                checked={amenity === a}
                onChange={() => setAmenity(a)}
              />
              {a}
            </label>
          ))}
        </div>
      </div>

      {/* Minimum Rating */}
      <div>
        <p className="text-sm font-medium mb-2">Minimum Rating</p>
        <div className="space-y-1 text-sm">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="rating"
              checked={minRating === 0}
              onChange={() => setMinRating(0)}
            />
            Any
          </label>
          {ratingOptions.map((r) => (
            <label key={r.value} className="flex items-center gap-2">
              <input
                type="radio"
                name="rating"
                checked={minRating === r.value}
                onChange={() => setMinRating(r.value)}
              />
              {r.label}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
