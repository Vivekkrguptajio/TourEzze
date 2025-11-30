export default function FiltersSidebar({
  price,
  setPrice,
  location,
  setLocation,
  availability,
  setAvailability,
  craftType,
  setCraftType,
}) {
  const locations = ["All Locations", "Ranchi", "Hazaribagh", "Khumti"];
  const craftList = ["All", "Handmade", "Tribal Art", "Organic", "Eco-Friendly"];

  return (
    <div className="bg-white rounded-xl shadow-sm border p-5 h-fit w-64">
      <div className="flex justify-between mb-4 text-sm font-semibold">
        <span>Filters</span>
        <button className="text-orange-600">Clear All</button>
      </div>

      {/* Price Range */}
      <p className="font-medium mb-1">Price Range</p>
      <input
        type="range"
        min={0}
        max={10000}
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        className="w-full accent-orange-600"
      />
      <div className="flex justify-between text-xs text-gray-600">
        <span>₹0</span>
        <span>₹10,000+</span>
      </div>

      {/* Location */}
      <p className="font-medium mt-4 mb-1">Location</p>
      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="w-full border rounded-lg px-3 py-2 text-sm"
      >
        {locations.map((l) => (
          <option key={l}>{l}</option>
        ))}
      </select>

      {/* Availability */}
      <div className="mt-4">
        <p className="font-medium mb-1">Availability</p>
        <label className="flex gap-2 text-sm">
          <input
            type="radio"
            name="avail"
            checked={availability === "All"}
            onChange={() => setAvailability("All")}
          />
          All
        </label>
        <label className="flex gap-2 text-sm">
          <input
            type="radio"
            name="avail"
            checked={availability === "In Stock"}
            onChange={() => setAvailability("In Stock")}
          />
          In Stock
        </label>
        <label className="flex gap-2 text-sm">
          <input
            type="radio"
            name="avail"
            checked={availability === "Pre-order"}
            onChange={() => setAvailability("Pre-order")}
          />
          Pre-order
        </label>
      </div>

      {/* Craft Type */}
      <div className="mt-4">
        <p className="font-medium mb-2">Craft Type</p>
        <div className="space-y-2">
          {craftList.map((c) => (
            <label key={c} className="flex gap-2 text-sm">
              <input
                type="radio"
                name="craft"
                checked={craftType === c}
                onChange={() => setCraftType(c)}
              />
              {c}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
