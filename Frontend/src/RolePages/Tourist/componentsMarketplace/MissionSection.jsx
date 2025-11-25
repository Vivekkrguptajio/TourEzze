export default function MissionSection() {
  return (
    <section className="bg-green-900 text-white py-12 mt-6">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-xl font-bold mb-4">Our Mission</h2>

        <p className="text-gray-200 max-w-2xl">
          Every purchase directly supports traditional craftsmanship, preserves
          ancient art forms, and helps sustain tribal communities across Jharkhand.
        </p>

        <div className="flex gap-10 mt-6 text-center">
          <div>
            <p className="text-3xl font-bold">500+</p>
            <p className="text-sm text-gray-300">Local Artisans</p>
          </div>

          <div>
            <p className="text-3xl font-bold">50+</p>
            <p className="text-sm text-gray-300">Villages</p>
          </div>

          <div>
            <p className="text-3xl font-bold">15+</p>
            <p className="text-sm text-gray-300">Traditional Crafts</p>
          </div>
        </div>
      </div>
    </section>
  );
}
