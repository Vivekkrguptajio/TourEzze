// import React from "react";
// import DestinationCard from "./DestinationCard";

// export default function DestinationGrid({ data }) {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
//       {data.map((item, i) => (
//         <DestinationCard key={i} item={item} />
//       ))}
//     </div>
//   );
// }


// DestinationGrid.jsx
import React from "react";
import DestinationCard from "./DestinationCard"; // path अपने project के अनुसार रखें

export default function DestinationGrid({ data }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data.map((item) => (
        <DestinationCard key={item.id} item={item} />
      ))}
    </div>
  );
}
