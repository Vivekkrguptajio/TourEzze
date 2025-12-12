import { useState } from "react";
import { tourPackages } from "./packagesData";
import PackageCard from "./PackageCard";
import PackageDetails from "./PackageDetails";

export default function Packages() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-green-900 mb-6">
        Jharkhand Tour Packages
      </h1>

      <p className="text-gray-700 mb-8">
        Discover the beauty of Jharkhand with curated tour packages designed 
        for nature lovers, adventure seekers, and cultural explorers.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tourPackages.map((pkg) => (
          <PackageCard 
            key={pkg.id} 
            pkg={pkg} 
            onClick={() => setSelected(pkg)} 
          />
        ))}
      </div>

      {selected && (
        <PackageDetails 
          pkg={selected} 
          onClose={() => setSelected(null)} 
        />
      )}
    </div>
  );
}
