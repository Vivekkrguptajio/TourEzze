import { useState } from "react";

export default function useProductFilters(products) {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [price, setPrice] = useState(10000);
  const [location, setLocation] = useState("All Locations");
  const [availability, setAvailability] = useState("All");
  const [craftType, setCraftType] = useState("All");

  const filtered = products.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "All" || p.category === category;
    const matchPrice = p.price <= price;
    const matchLocation = location === "All Locations" || p.district === location;
    const matchAvailability =
      availability === "All" || p.availability === availability;
    const matchCraft = craftType === "All" || p.craftType === craftType;

    return (
      matchSearch &&
      matchCategory &&
      matchPrice &&
      matchLocation &&
      matchAvailability &&
      matchCraft
    );
  });

  return {
    filtered,
    category,
    setCategory,
    search,
    setSearch,
    price,
    setPrice,
    location,
    setLocation,
    availability,
    setAvailability,
    craftType,
    setCraftType,
  };
}
