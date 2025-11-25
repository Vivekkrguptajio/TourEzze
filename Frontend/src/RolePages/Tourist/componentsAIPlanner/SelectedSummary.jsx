export default function SelectedSummary({ formData }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md">
      <h2 className="font-semibold text-lg mb-3">Your Selections</h2>

      <div className="space-y-2 text-sm">
        <p><strong>Days:</strong> {formData.days}</p>
        <p><strong>Budget:</strong> ₹{formData.budget}</p>
        <p><strong>Interests:</strong></p>

        <div className="flex gap-2 flex-wrap mt-1">
          {formData.interests.map((i) => (
            <span
              key={i}
              className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs"
            >
              {i}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
