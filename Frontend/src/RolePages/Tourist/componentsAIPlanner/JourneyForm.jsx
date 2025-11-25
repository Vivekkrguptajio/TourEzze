export default function JourneyForm({ formData, setFormData }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md space-y-6">
      <h2 className="text-xl font-semibold text-green-900">Plan Your Journey</h2>

      {/* Trip Duration */}
      <div>
        <label className="block font-medium">Trip Duration</label>
        <select
          className="w-full border rounded-lg p-2 mt-1"
          value={formData.days}
          onChange={(e) => setFormData({ ...formData, days: e.target.value })}
        >
          <option>1 Day</option>
          <option>2 Days</option>
          <option>3 Days</option>
          <option>4 Days</option>
        </select>
      </div>

      {/* Budget Slider */}
      <div>
        <label className="block font-medium">Budget Range</label>
        <input
          type="range"
          min="2000"
          max="20000"
          value={formData.budget}
          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
          className="w-full mt-4"
        />
        <p className="text-sm mt-1">₹{formData.budget}</p>
      </div>

      {/* Interest Categories */}
      <div>
        <label className="block font-medium">Interest Categories</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
          {["Nature", "Adventure", "Heritage", "Cultural", "Waterfalls", "Scenic Spots"].map(
            (item) => (
              <button
                key={item}
                onClick={() =>
                  setFormData({
                    ...formData,
                    interests: formData.interests.includes(item)
                      ? formData.interests.filter((i) => i !== item)
                      : [...formData.interests, item],
                  })
                }
                className={`border rounded-lg px-3 py-2 text-sm ${
                  formData.interests.includes(item)
                    ? "bg-green-700 text-white"
                    : "bg-gray-50"
                }`}
              >
                {item}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}
