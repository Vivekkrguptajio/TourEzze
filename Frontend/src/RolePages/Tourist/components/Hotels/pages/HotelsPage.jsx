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
  const [showFilters, setShowFilters] = useState(false);

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
    <div className="bg-[#faf5ef] min-h-screen pb-16 relative">
      {/* Search Bar */}
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
        {/* Result Count + Sort + Show/Hide Filters button (top-right) */}
        <div className="flex justify-between items-center">
          <p className="text-sm font-medium">{filtered.length} properties found</p>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowFilters((s) => !s)}
              className="px-4 py-2 bg-orange-600 text-white rounded-xl shadow font-semibold"
              aria-expanded={showFilters}
              aria-controls="filters-sidebar"
            >
              {showFilters ? "Hide Filters" : "Show Filters"}
            </button>

            <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
          </div>
        </div>

        {/* Main area (sidebar is overlayed) */}
        <div className="relative mt-4">
          {/* Sidebar (overlay) */}
          <HotelsFiltersSidebar
            price={price}
            setPrice={setPrice}
            propertyType={propertyType}
            setPropertyType={setPropertyType}
            amenity={amenity}
            setAmenity={setAmenity}
            minRating={minRating}
            setMinRating={setMinRating}
            show={showFilters}
            onClose={() => setShowFilters(false)}
          />

          {/* Hotels grid - pass showFilters so grid can change columns */}
          <div className="transition-all">
            <HotelGrid hotels={filtered} filterOpen={showFilters} />
          </div>
        </div>
      </div>
    </div>
  );
}
