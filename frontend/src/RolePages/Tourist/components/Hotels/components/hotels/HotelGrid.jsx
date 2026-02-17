// HotelGrid.jsx
import CompactHotelCard from "./HotelCard";

export default function HotelGrid({ hotels, filterOpen }) {
  const lgCols = filterOpen ? "lg:grid-cols-4" : "lg:grid-cols-5";

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ${lgCols} 
                  gap-6 md:gap-8 transition-all`}
    >
      {hotels.map((hotel) => (
        <CompactHotelCard key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
}
