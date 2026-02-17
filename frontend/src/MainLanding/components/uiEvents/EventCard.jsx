// import { Link } from "react-router-dom";
// import { Calendar, MapPin } from "lucide-react";

// export default function EventCard({ event }) {
//   return (
//     <div
//       className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1 flex h-80"
//     >
//       {/* IMAGE - LEFT SIDE */}
//       <div className="relative w-1/2 flex-shrink-0 overflow-hidden bg-gray-100 pointer-events-none">
//         <img
//           src={event.image}
//           alt={event.title}
//           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//         />

//         <span className="absolute top-3 left-3 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-lg">
//           {event.type || "Festival"}
//         </span>

//         {event.featured && (
//           <span className="absolute top-3 right-3 bg-gradient-to-r from-orange-500 to-amber-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-lg">
//             Featured
//           </span>
//         )}
//       </div>

//       {/* CONTENT - RIGHT SIDE */}
//       <div className="w-1/2 p-6 flex flex-col justify-between">
//         <div>
//           <p className="text-sm font-semibold text-green-600 uppercase tracking-wide mb-2">
//             {event.category || "Cultural Event"}
//           </p>

//           <h3 className="font-bold text-xl text-gray-900 mb-4 line-clamp-2 group-hover:text-green-600 transition-colors duration-300">
//             {event.title}
//           </h3>

//           <div className="flex items-center gap-2 text-base text-gray-600 mb-3">
//             <Calendar className="w-5 h-5 text-gray-400" />
//             <span>{event.date}</span>
//           </div>

//           <div className="flex items-center gap-2 mb-4">
//             <div className="flex items-center gap-2 bg-orange-50 px-3 py-1.5 rounded">
//               <MapPin className="w-5 h-5 text-orange-600" />
//               <span className="text-base font-semibold text-orange-700">{event.location}</span>
//             </div>
//           </div>
//         </div>

//         <div className="flex items-center justify-between pt-4 border-t border-gray-100">
//           <p className="text-xl font-bold bg-gradient-to-r from-green-700 to-green-600 bg-clip-text text-transparent">
//             {event.price || "Free"}
//           </p>

//           <Link
//             to={`/event/${event.id}`}
//             className="px-6 py-2.5 rounded-lg font-semibold text-base transition-all duration-300 bg-gradient-to-r from-green-500 to-green-600 text-white hover:shadow-md hover:scale-105"
//           >
//             View Details
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

import { Link } from "react-router-dom";
import { Calendar, MapPin } from "lucide-react";

export default function EventCard({ event }) {
  const id = event.id ?? event._id ?? event.eventId; // flexible id accessor

  return (
    <div
      className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1 flex h-80"
    >
      {/* IMAGE - LEFT SIDE */}
      <div className="relative w-1/2 flex-shrink-0 overflow-hidden bg-gray-100 pointer-events-none">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        <span className="absolute top-3 left-3 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-lg">
          {event.type || "Festival"}
        </span>

        {event.featured && (
          <span className="absolute top-3 right-3 bg-gradient-to-r from-orange-500 to-amber-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-lg">
            Featured
          </span>
        )}
      </div>

      {/* CONTENT - RIGHT SIDE */}
      <div className="w-1/2 p-6 flex flex-col justify-between">
        <div>
          <p className="text-sm font-semibold text-green-600 uppercase tracking-wide mb-2">
            {event.category || "Cultural Event"}
          </p>

          <h3 className="font-bold text-xl text-gray-900 mb-4 line-clamp-2 group-hover:text-green-600 transition-colors duration-300">
            {event.title}
          </h3>

          <div className="flex items-center gap-2 text-base text-gray-600 mb-3">
            <Calendar className="w-5 h-5 text-gray-400" />
            <span>{event.date}</span>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-2 bg-orange-50 px-3 py-1.5 rounded">
              <MapPin className="w-5 h-5 text-orange-600" />
              <span className="text-base font-semibold text-orange-700">{event.location}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <p className="text-xl font-bold bg-gradient-to-r from-green-700 to-green-600 bg-clip-text text-transparent">
            {event.price || "Free"}
          </p>

          {/* NOTE: Use the plural '/events' route so it matches EventDetails */}
          <Link
            to={`/events/${id}`}
            aria-label={`View details for ${event.title}`}
            className="px-6 py-2.5 rounded-lg font-semibold text-base transition-all duration-300 bg-gradient-to-r from-green-500 to-green-600 text-white hover:shadow-md hover:scale-105"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
