import HotelCard from "./HotelCard";

export default function HotelGrid({ hotels }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {hotels.map((h) => (
        <HotelCard key={h.id} hotel={h} />
      ))}
    </div>
  );
}
