import { useState, useMemo } from "react";

export default function useHotelFilters(hotels) {
  const [location, setLocation] = useState("Ranchi");
  const [price, setPrice] = useState(10000);
  const [propertyType, setPropertyType] = useState("All");
  const [amenity, setAmenity] = useState("All");
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState("Featured");

  const filtered = useMemo(() => {
    let data = [...hotels];

    // Location (simple contains check)
    if (location && location !== "All") {
      data = data.filter((h) =>
        h.location.toLowerCase().includes(location.toLowerCase())
      );
    }

    // Price
    data = data.filter((h) => h.pricePerNight <= price);

    // Property type
    if (propertyType !== "All") {
      data = data.filter((h) => h.propertyType === propertyType);
    }

    // Amenity
    if (amenity !== "All") {
      data = data.filter((h) => h.amenities.includes(amenity));
    }

    // Minimum rating
    if (minRating > 0) {
      data = data.filter((h) => h.rating >= minRating);
    }

    // Sorting
    if (sortBy === "Price: Low to High") {
      data.sort((a, b) => a.pricePerNight - b.pricePerNight);
    } else if (sortBy === "Price: High to Low") {
      data.sort((a, b) => b.pricePerNight - a.pricePerNight);
    } else if (sortBy === "Rating: High to Low") {
      data.sort((a, b) => b.rating - a.rating);
    } // Featured = default order

    return data;
  }, [hotels, location, price, propertyType, amenity, minRating, sortBy]);

  return {
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
  };
}
