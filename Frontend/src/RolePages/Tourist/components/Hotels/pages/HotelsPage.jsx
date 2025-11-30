import { useState } from "react";
import hotels from "../data/hotels";
import useHotelFilters from "../hooks/useHotelFilters";

import HotelsSearchBar from "../components/hotels/HotelsSearchBar";
import HotelsFiltersSidebar from "../components/hotels/HotelsFiltersSidebar";
import HotelGrid from "../components/hotels/HotelGrid";
import SortDropdown from "../components/hotels/SortDropdown";

export default function HotelsPage() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2 Guests");

  const {
    filtered,
    location,
    setLocation,
    price,
    setPrice,
    propertyType,
    setPropertyType,
    amenity,
    setAmenity,
    minRating,
    setMinRating,
    sortBy,
    setSortBy,
  } = useHotelFilters(hotels);

  return (
    <div className="bg-[#faf5ef] min-h-screen pb-16">

      <HotelsSearchBar
        location={location}
        setLocation={setLocation}
        checkIn={checkIn}
        setCheckIn={setCheckIn}
        checkOut={checkOut}
        setCheckOut={setCheckOut}
        guests={guests}
        setGuests={setGuests}
      />

      <div className="max-w-7xl mx-auto px-4 mt-6">

        <div className="flex justify-between items-center">
          <p className="text-sm font-medium">
            {filtered.length} properties found
          </p>
          <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[260px,1fr] gap-6 mt-4">
          <HotelsFiltersSidebar
            price={price}
            setPrice={setPrice}
            propertyType={propertyType}
            setPropertyType={setPropertyType}
            amenity={amenity}
            setAmenity={setAmenity}
            minRating={minRating}
            setMinRating={setMinRating}
          />

          <HotelGrid hotels={filtered} />
        </div>

      </div>
    </div>
  );
}
