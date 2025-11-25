import PopularPlaceList from "../components/uiExplore/PopularPlaceList";

export default function Explore() {
  return (
    <section className="py-12 bg-gradient-to-b from-blue-50/30 to-white">
      
      {/* TITLE */}
      <h2 className="
        text-4xl 
        font-extrabold 
        text-center 
        mb-8
        tracking-wide
        bg-gradient-to-r from-green-700 to-green-900
        bg-clip-text text-transparent
        drop-shadow-sm
      ">
        Featured Destinations
      </h2>

      {/* SUBTITLE */}
      <p className="
        text-center 
        text-gray-600 
        max-w-2xl 
        mx-auto 
        mb-12 
        text-lg 
        leading-relaxed
      ">
        Discover the most beautiful places, scenic views and must-visit attractions 
        across Jharkhand. Scroll to explore more!
      </p>

      {/* LIST */}
      <div className="max-w-7xl mx-auto px-6">
        <PopularPlaceList />
      </div>
    </section>
  );
}
