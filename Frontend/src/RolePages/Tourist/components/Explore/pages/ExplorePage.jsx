import React, { useEffect, useState } from "react";
import Hero from "../components/explore/Hero";
import CategoryTabs from "../components/explore/CategoryTabs";
import DestinationGrid from "../components/explore/DestinationGrid";
<<<<<<< HEAD
import { API_URL } from "../../../../../api.js";
=======
>>>>>>> 8fc040de90414307da0fa677067b8a8dd1cdea0e

export default function ExplorePage() {
  const [destinations, setDestinations] = useState([]);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  // FETCH DESTINATIONS FROM API
  const fetchDestinations = async () => {
    try {
<<<<<<< HEAD
      const res = await fetch(`${API_URL}/api/admin/destinations`);
=======
      const res = await fetch("http://localhost:5000/api/admin/destinations");
>>>>>>> 8fc040de90414307da0fa677067b8a8dd1cdea0e
      const data = await res.json();
      if (data.success) setDestinations(data.data);
    } catch (err) {
      console.log("Error fetching destinations:", err);
    }
  };

  useEffect(() => {
    fetchDestinations();
  }, []);

  // FILTER LOGIC
  const filtered = destinations.filter(
    (d) =>
      (category === "All" || d.category === category) &&
      d.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Hero />

      <CategoryTabs
        active={category}
        setActive={setCategory}
        search={search}
        setSearch={setSearch}
      />

      <DestinationGrid destinations={filtered} />
    </div>
  );
}
