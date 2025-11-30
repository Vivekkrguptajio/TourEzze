export default function MarketHero({ search, setSearch }) {
  return (
    <div className="bg-[#ce5c2c] text-white py-10 text-center rounded-b-3xl shadow">
      <h1 className="text-3xl font-bold">Jharkhand Marketplace</h1>
      <p className="text-white/90 mt-2">
        Shop authentic tribal handicrafts, homestays, souvenirs & cultural products.
      </p>

      <div className="mt-6 max-w-lg mx-auto">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          className="w-full px-4 py-3 rounded-xl text-black outline-none shadow"
        />
      </div>
    </div>
  );
}
