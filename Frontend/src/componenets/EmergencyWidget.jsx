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
  const [pulseRing, setPulseRing] = useState(true);

  const contacts = [
    { label: "Police", number: "100", icon: Shield, color: "from-green-500 to-green-600" },
    { label: "Ambulance", number: "108", icon: Ambulance, color: "from-red-500 to-red-600" },
    { label: "Tourist Helpline", number: "1363", icon: PhoneCall, color: "from-blue-500 to-blue-600" },
    { label: "Fire Service", number: "101", icon: Flame, color: "from-orange-500 to-orange-600" },
  ];

  return (
    <>
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #86efac;
          border-radius: 10px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #4ade80;
        }

        body {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          font-family: system-ui, -apple-system, sans-serif;
        }
      `}</style>

    

      {/* Floating Button with Premium Effects */}
      <div className="fixed bottom-24 right-6 z-50">
        {/* Animated pulse rings */}
        {pulseRing && (
          <>
            <div className="absolute inset-0 animate-ping rounded-full bg-red-500 opacity-20" />
            <div className="absolute inset-0 animate-pulse rounded-full bg-red-400 opacity-30 blur-md" style={{ animationDuration: '2s' }} />
          </>
        )}
        
        <button
          onClick={() => {
            setOpen(true);
            setPulseRing(false);
          }}
          className="relative h-20 w-20 rounded-full bg-gradient-to-br from-red-500 via-red-600 to-red-700 text-white shadow-2xl flex items-center justify-center hover:scale-110 hover:rotate-12 transition-all duration-500 ease-out border-4 border-white/30"
          style={{
            boxShadow: '0 20px 60px rgba(239, 68, 68, 0.5)',
            animation: 'bounce 2s infinite'
          }}
        >
          <PhoneCall className="h-9 w-9 drop-shadow-lg" strokeWidth={2.5} />
        </button>
      </div>

      {/* Premium Emergency Popup */}
      {open && (
        <>
          {/* Backdrop blur */}
          <div 
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            onClick={() => {
              setOpen(false);
              setPulseRing(true);
            }}
          />
          
          <div
            className="fixed bottom-6 right-6 z-50 w-96 max-h-[85vh] bg-gradient-to-br from-white via-green-50/50 to-white rounded-3xl shadow-2xl border-2 border-white/50 overflow-hidden"
            style={{
              boxShadow: '0 25px 80px rgba(0, 0, 0, 0.15)',
              animation: 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            {/* PREMIUM HEADER */}
            <div className="relative bg-gradient-to-r from-green-600 via-green-700 to-emerald-600 text-white px-6 py-5 flex justify-between items-center overflow-hidden">
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
              </div>

              <div className="relative z-10">
                <h2 className="font-bold text-2xl tracking-wide drop-shadow-lg">Emergency Help</h2>
                <p className="text-sm opacity-90 mt-0.5 font-light">Instant help • Available 24/7</p>
              </div>

              <button
                onClick={() => {
                  setOpen(false);
                  setPulseRing(true);
                }}
                className="relative z-10 hover:bg-white/20 p-2 rounded-xl transition-all duration-300 hover:rotate-90"
              >
                <X className="h-6 w-6" strokeWidth={2} />
              </button>
            </div>

            {/* PREMIUM CONTACT LIST */}
            <div className="p-6 space-y-3.5 max-h-[58vh] overflow-y-auto scrollbar-thin">
              {contacts.map(({ label, number, icon: Icon, color }, i) => (
                <div
                  key={i}
                  className="group relative flex justify-between items-center bg-white rounded-2xl px-5 py-4 shadow-md border border-gray-100 hover:shadow-xl hover:scale-105 hover:border-green-200 transition-all duration-300 overflow-hidden"
                  style={{
                    animation: `fadeIn 0.5s ease-out ${i * 0.1}s both`
                  }}
                >
                  {/* Hover shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                  {/* Left side */}
                  <div className="relative flex items-center gap-4">
                    <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <Icon className="h-7 w-7" strokeWidth={2} />
                    </div>

                    <div>
                      <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">{label}</p>
                      <p className="text-xl font-bold text-gray-900 tracking-tight">{number}</p>
                    </div>
                  </div>

                  {/* Premium Call Button */}
                  <button
                    onClick={() => (window.location.href = `tel:${number}`)}
                    className="relative h-12 w-12 rounded-2xl bg-gradient-to-br from-green-100 to-green-50 text-green-700 flex items-center justify-center hover:from-green-500 hover:to-green-600 hover:text-white hover:scale-110 hover:-rotate-12 transition-all duration-300 shadow-sm hover:shadow-lg border border-green-200/50"
                  >
                    <PhoneCall className="h-6 w-6" strokeWidth={2.5} />
                  </button>
                </div>
              ))}

              {/* PREMIUM SHARE LOCATION BUTTON */}
              <button
                className="relative w-full py-4 rounded-2xl bg-gradient-to-r from-green-600 via-green-700 to-emerald-600 text-white font-bold tracking-wide text-base flex items-center justify-center gap-3 hover:scale-105 hover:shadow-2xl transition-all duration-300 shadow-xl border-2 border-white/20 overflow-hidden group"
                style={{
                  boxShadow: '0 10px 40px rgba(22, 163, 74, 0.4)'
                }}
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
                {/* Animated shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                <MapPin className="h-6 w-6 relative z-10 group-hover:scale-110 transition-transform" strokeWidth={2.5} />
                <span className="relative z-10">Share My Location</span>
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}