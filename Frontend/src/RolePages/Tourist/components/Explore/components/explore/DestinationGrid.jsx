import React, { useState } from "react";
import DestinationCard from "./DestinationCard";
import DetailsModal from "./DetailsModal";
import ARVRModal from "./ARVRModel";

export default function DestinationGrid({ destinations }) {

  const [detailsData, setDetailsData] = useState(null);
  const [isDetailsOpen, setDetailsOpen] = useState(false);

  const [arvrData, setArvrData] = useState(null);
  const [arvrLink, setArvrLink] = useState("");
  const [isARVROpen, setARVROpen] = useState(false);

  const openARVR = (destination) => {
    if (!destination.arvrLink) {
      alert("No AR/VR link available!");
      return;
    }
    setArvrData(destination);
    setArvrLink(destination.arvrLink);
    setARVROpen(true);
  };

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {destinations.map((d) => (
        <DestinationCard
          key={d._id}
          data={d}
          onDetails={() => {
            setDetailsData(d);
            setDetailsOpen(true);
          }}
          onARVR={() => openARVR(d)}
        />
      ))}

      {/* DETAILS MODAL */}
      <DetailsModal
        isOpen={isDetailsOpen}
        data={detailsData}
        onClose={() => setDetailsOpen(false)}
        onARVR={() => openARVR(detailsData)}
      />

      {/* AR / VR MODAL */}
      <ARVRModal
        isOpen={isARVROpen}
        data={arvrData}
        link={arvrLink}
        onClose={() => setARVROpen(false)}
      />
    </div>
  );
}
