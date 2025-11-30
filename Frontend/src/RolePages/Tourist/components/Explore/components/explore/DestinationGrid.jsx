import React from "react";
import DestinationCard from "./DestinationCard";

export default function DestinationGrid({ data }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {data.map((item, i) => (
        <DestinationCard key={i} item={item} />
      ))}
    </div>
  );
}
