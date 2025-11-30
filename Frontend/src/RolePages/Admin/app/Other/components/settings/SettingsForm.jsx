export default function SettingsForm() {
  return (
    <form className="bg-white p-6 border rounded-xl shadow-sm">

      {/* LANGUAGE */}
      <div className="mb-4">
        <label className="text-sm text-gray-700">Language</label>
        <select className="w-full mt-1 p-2 border rounded-lg">
          <option>English</option>
          <option>Hindi</option>
        </select>
      </div>

      {/* NOTIFICATIONS */}
      <div className="mb-4">
        <label className="text-sm text-gray-700">Notifications</label>
        <div className="flex items-center gap-2 mt-1">
          <input type="checkbox" />
          <span>Email Alerts</span>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <input type="checkbox" />
          <span>Push Notifications</span>
        </div>
      </div>

      {/* PROFILE */}
      <div className="mb-4">
        <label className="text-sm text-gray-700">Update Name</label>
        <input type="text" className="w-full mt-1 p-2 border rounded-lg" placeholder="Your Name" />
      </div>

      <button className="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-800">
        Save Changes
      </button>

    </form>
  );
}
