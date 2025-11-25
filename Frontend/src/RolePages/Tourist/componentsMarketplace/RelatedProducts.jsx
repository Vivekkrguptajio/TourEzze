export default function RelatedProducts({ products }) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-xl font-bold mb-4">You Might Also Like</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-lg shadow-sm border overflow-hidden"
          >
            <img src={p.image} className="h-40 w-full object-cover" />
            <div className="p-3 space-y-1">
              <span className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                {p.tag}
              </span>
              <h3 className="text-sm font-semibold">{p.title}</h3>
              <p className="font-bold text-orange-600">{p.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
