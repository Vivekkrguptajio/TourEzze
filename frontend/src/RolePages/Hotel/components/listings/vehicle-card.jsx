// vehicle-card.jsx
import { Car, Fuel, Users } from "lucide-react";

export default function VehicleCard({ image, name, seats, fuel, price }) {
  return (
    <div className="bg-[#070f0b] border border-green-900 rounded-xl p-3 flex gap-4 hover:border-green-600/70 transition cursor-pointer">

      <img
        src={image}
        alt="vehicle"
        className="h-20 w-28 rounded-lg object-cover border border-green-900"
      />

      <div className="flex flex-col justify-between">
        <div>
          <h3 className="text-white font-semibold text-sm">{name}</h3>

          <div className="flex items-center gap-2 mt-1 text-[11px] text-gray-400">
            <Users className="w-3 h-3" /> {seats} seats
            <Fuel className="w-3 h-3" /> {fuel}
          </div>
        </div>

        <p className="text-green-400 font-semibold mt-2">₹{price}/day</p>
      </div>

    </div>
  );
}
