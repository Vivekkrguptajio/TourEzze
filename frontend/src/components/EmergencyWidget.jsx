import { useState } from "react";
import { Shield, Ambulance, PhoneCall, Flame, MapPin, X } from "lucide-react";

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
      {/* Floating Button with Blinking Ring */}
      <div className="fixed bottom-24 right-6 z-50">
        {/* Blinking outer rings */}
        <div className="absolute inset-0 animate-ping">
          <div className="h-16 w-16 rounded-full bg-red-500 opacity-40"></div>
        </div>
        <div className="absolute -inset-2 animate-pulse">
          <div className="h-20 w-20 rounded-full bg-gradient-to-br from-red-400 to-orange-400 opacity-30 blur-sm"></div>
        </div>
        
        {/* Main button */}
        <button
          onClick={() => setOpen(true)}
          className="relative h-16 w-16 rounded-full bg-gradient-to-br from-red-600 via-red-700 to-rose-800 text-white shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 border-2 border-red-400 border-opacity-50"
          style={{ boxShadow: '0 20px 50px rgba(239, 68, 68, 0.5)' }}
        >
          <PhoneCall className="h-7 w-7 animate-pulse" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }} />
        </button>
      </div>

      {/* Emergency Popup */}
      {open && (
        <div className="fixed bottom-44 right-6 z-50 w-80 max-h-96 bg-white bg-opacity-98 backdrop-blur-xl rounded-3xl shadow-2xl border-2 border-green-300 border-opacity-40 overflow-hidden"
          style={{ 
            animation: 'slideUp 0.3s ease-out',
            boxShadow: '0 25px 50px rgba(0,0,0,0.2), 0 0 0 4px rgba(34, 197, 94, 0.1)'
          }}
        >
          {/* HEADER */}
          <div className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white px-5 py-4 flex justify-between items-center border-b-2 border-white border-opacity-20"
            style={{ boxShadow: '0 10px 30px rgba(34, 197, 94, 0.2)' }}
          >
            <div>
              <h2 className="font-bold text-xl tracking-wide">Emergency Help</h2>
              <p className="text-xs opacity-80">Instant help for travelers</p>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="hover:bg-white hover:bg-opacity-20 p-1.5 rounded-full transition"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* CONTACT LIST */}
          <div className="p-5 space-y-4 max-h-72 overflow-y-auto"
            style={{ 
              background: 'linear-gradient(135deg, #ffffff 0%, rgba(240, 253, 244, 0.5) 50%, rgba(236, 253, 245, 0.3) 100%)'
            }}
          >
            {contacts.map(({ label, number, icon: Icon, color }, i) => (
              <div
                key={i}
                className="flex justify-between items-center bg-white rounded-2xl px-5 py-4 shadow-sm border border-green-100 hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`h-12 w-12 rounded-full bg-gradient-to-br ${color} flex items-center justify-center text-white`}
                    style={{ boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)' }}
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">{label}</p>
                    <p className="text-lg font-bold text-gray-900">{number}</p>
                  </div>
                </div>

                <button
                  onClick={() => (window.location.href = `tel:${number}`)}
                  className="h-10 w-10 rounded-xl bg-green-100 text-green-700 flex items-center justify-center hover:bg-green-200 hover:scale-110 transition-all duration-300"
                >
                  <PhoneCall className="h-5 w-5" />
                </button>
              </div>
            ))}

            {/* SHARE LOCATION */}
            <button
              className="w-full py-3 rounded-xl bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold tracking-wide flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-lg"
              style={{ boxShadow: '0 4px 20px rgba(34, 197, 94, 0.3)' }}
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

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}