export default function EventsHero({ search, setSearch }) {
  return (
    <div className="relative h-60 bg-gradient-to-r from-[#b35442] to-[#b76e45] text-white flex flex-col items-center justify-center rounded-b-3xl shadow-md">
      
      <h1 className="text-3xl md:text-4xl font-bold">Events & Cultural Festivals of Jharkhand</h1>
      <p className="text-white/90 mt-2 text-sm">
        Explore vibrant tribal celebrations, cultural performances, fairs & more.
      </p>

      <div className="mt-5 w-full max-w-xl">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search events..."
          className="w-full px-4 py-3 rounded-xl text-black outline-none shadow"
        />
      </div>
    </div>
  );
}
