import React, { useEffect, useState } from "react";
import EventCard from "./Eventss/EventCard";
import ARVRModal from "./Eventss/ARVRModal";
import DetailsModal from "./Eventss/DetailsModal"; // ⭐ ADD
<<<<<<< HEAD
import { API_URL } from "../../../../../api.js";
=======
>>>>>>> 8fc040de90414307da0fa677067b8a8dd1cdea0e

export default function TouristEvents() {
  const [events, setEvents] = useState([]);
  const [arvrLink, setARVRLink] = useState("");
  const [isARVROpen, setARVROpen] = useState(false);

  // ⭐ DETAILS MODAL STATE
  const [detailsData, setDetailsData] = useState(null);
  const [isDetailsOpen, setDetailsOpen] = useState(false);

  useEffect(() => {
<<<<<<< HEAD
    fetch(`${API_URL}/api/admin/events`)
=======
    fetch("http://localhost:5000/api/admin/events")
>>>>>>> 8fc040de90414307da0fa677067b8a8dd1cdea0e
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setEvents(data.data);
      });
  }, []);

  const openARVR = (link) => {
    setARVRLink(link);
    setARVROpen(true);
  };

  // ⭐ OPEN DETAILS MODAL
  const openDetails = (ev) => {
    setDetailsData(ev);
    setDetailsOpen(true);
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-green-900">Upcoming Events</h1>

      {/* GRID VIEW */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((ev) => (
          <EventCard
            key={ev._id}
            event={ev}
            onARVR={() => openARVR(ev.arvrLink)}
            onDetails={() => openDetails(ev)} // ⭐ SEND DETAILS MODAL HANDLER
          />
        ))}
      </div>

      {/* ARVR MODAL */}
      <ARVRModal
        isOpen={isARVROpen}
        link={arvrLink}
        onClose={() => setARVROpen(false)}
      />

      {/* DETAILS MODAL */}
      <DetailsModal
        isOpen={isDetailsOpen}
        onClose={() => setDetailsOpen(false)}
        data={detailsData}
        onARVR={() => openARVR(detailsData?.arvrLink)}
      />
    </div>
  );
}
