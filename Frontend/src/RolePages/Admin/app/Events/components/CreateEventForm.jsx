export default function CreateEventForm() {
  return (
    <form className="bg-white p-6 border rounded-xl shadow-sm">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <div>
          <label className="text-sm text-gray-700">Event Name</label>
          <input type="text" className="w-full mt-1 p-2 border rounded-lg" />
        </div>

        <div>
          <label className="text-sm text-gray-700">Location</label>
          <input type="text" className="w-full mt-1 p-2 border rounded-lg" />
        </div>

        <div>
          <label className="text-sm text-gray-700">Event Date</label>
          <input type="date" className="w-full mt-1 p-2 border rounded-lg" />
        </div>

        <div>
          <label className="text-sm text-gray-700">Organizer</label>
          <input type="text" className="w-full mt-1 p-2 border rounded-lg" />
        </div>

      </div>

      <div className="mt-4">
        <label className="text-sm text-gray-700">Description</label>
        <textarea className="w-full mt-1 p-2 border rounded-lg" rows="4"></textarea>
      </div>

      <div className="mt-4">
        <label className="text-sm text-gray-700">Upload Documents</label>
        <input type="file" className="w-full mt-1 p-2 border rounded-lg" />
      </div>

      <button className="bg-green-700 text-white px-6 py-2 rounded-md mt-6 hover:bg-green-800">
        Create Event
      </button>

    </form>
  );
}
