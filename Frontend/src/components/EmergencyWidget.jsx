import { useState } from "react";
import {
  Shield,
  Ambulance,
  PhoneCall,
  Flame,
  MapPin,
  X,
} from "lucide-react";

export default function EmergencyWidget() {
  const [open, setOpen] = useState(false);

  const contacts = [
    { label: "Police", number: "100", icon: Shield, color: "from-green-500 to-green-600" },
    { label: "Ambulance", number: "108", icon: Ambulance, color: "from-red-500 to-red-600" },
    { label: "Tourist Helpline", number: "1363", icon: PhoneCall, color: "from-blue-500 to-blue-600" },
    { label: "Fire Service", number: "101", icon: Flame, color: "from-orange-500 to-orange-600" },
  ];

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="
          fixed bottom-34 right-6 z-[9998]
          h-16 w-16 rounded-full
          bg-gradient-to-br from-red-600 to-red-700
          text-white text-xl shadow-xl shadow-red-400/40
          flex items-center justify-center
          animate-bounce hover:scale-110
          transition-all duration-300
        "
      >
        <PhoneCall className="h-7 w-7 drop-shadow" />
      </button>

      {/* Emergency Popup */}
      {open && (
        <div
          className="
            fixed bottom-6 right-6 z-[9999]
            w-[330px] max-h-[83vh]
            bg-white/95 backdrop-blur-md
            rounded-3xl shadow-2xl border border-green-200
            animate-slide-up overflow-hidden
          "
        >
          {/* HEADER */}
          <div
            className="
              bg-gradient-to-r from-green-600 to-green-700 
              text-white px-5 py-4 
              flex justify-between items-center
              shadow-md
            "
          >
            <div>
              <h2 className="font-bold text-xl tracking-wide">Emergency Help</h2>
              <p className="text-xs opacity-80 -mt-1">Instant help for travelers</p>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="hover:bg-white/20 p-1.5 rounded-full transition"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* CONTACT LIST */}
          <div className="p-5 bg-gradient-to-b from-white to-green-50 space-y-4 max-h-[62vh] overflow-y-auto">

            {contacts.map(({ label, number, icon: Icon, color }, i) => (
              <div
                key={i}
                className="
                  flex justify-between items-center 
                  bg-white rounded-2xl px-5 py-4 
                  shadow-sm border border-green-100
                  hover:shadow-lg hover:scale-[1.02]
                  transition-all duration-300
                "
              >
                {/* Left side */}
                <div className="flex items-center gap-4">
                  <div
                    className={`
                      h-12 w-12 rounded-full 
                      bg-gradient-to-br ${color}
                      flex items-center justify-center 
                      text-white shadow-inner
                    `}
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">{label}</p>
                    <p className="text-lg font-bold text-gray-900">{number}</p>
                  </div>
                </div>

                {/* Call Button */}
                <button
                  onClick={() => (window.location.href = `tel:${number}`)}
                  className="
                    h-10 w-10 rounded-xl 
                    bg-green-100 text-green-700
                    flex items-center justify-center
                    hover:bg-green-200 hover:scale-110
                    transition-all duration-300
                  "
                >
                  <PhoneCall className="h-5 w-5" />
                </button>
              </div>
            ))}

            {/* SHARE LOCATION */}
            <button
              className="
                w-full py-3 rounded-xl
                bg-gradient-to-r from-green-600 to-green-700 
                text-white font-semibold tracking-wide
                flex items-center justify-center gap-3
                hover:scale-[1.03] transition-all
                shadow-lg hover:shadow-green-500/30
              "
              onClick={() => {
                navigator.geolocation.getCurrentPosition(
                  (pos) => {
                    const url = `https://www.google.com/maps?q=${pos.coords.latitude},${pos.coords.longitude}`;
                    navigator.clipboard.writeText(url);
                    alert("📍 Location copied! Share with authorities:\n" + url);
                  },
                  () => alert("Please enable GPS to share your location.")
                );
              }}
            >
              <MapPin className="h-5 w-5" />
              Share My Location
            </button>

          </div>
        </div>
      )}
    </>
  );
}
