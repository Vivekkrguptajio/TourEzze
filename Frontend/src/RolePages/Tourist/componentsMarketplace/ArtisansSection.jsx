export default function ArtisansSection({ artisans }) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-xl font-bold mb-4">Meet Our Artisans</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {artisans.map((a) => (
          <div key={a.id} className="bg-white p-4 rounded-xl shadow border flex gap-4">
            <img src={a.image} className="w-16 h-16 rounded-full object-cover" />

            <div>
              <h3 className="font-semibold text-gray-900">{a.name}</h3>
              <p className="text-sm text-gray-700">{a.skill}</p>
              <p className="text-xs text-gray-600">{a.location}</p>

              <button className="mt-2 text-sm bg-orange-500 text-white px-3 py-1 rounded">
                View Vendor Shop
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
