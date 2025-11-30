import { useState } from "react";

export default function useEventFilters(events) {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = events.filter((e) => {
    const matchCategory = category === "All" || e.category === category;
    const matchSearch = e.name.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return { filtered, category, setCategory, search, setSearch };
}
