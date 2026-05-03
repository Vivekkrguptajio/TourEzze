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
      {/* Floating Button with Professional Pulse */}
      <div className="fixed bottom-24 right-6 z-[1100]">
        {/* Subtle dual-pulse ring */}
        <div className="absolute inset-0 animate-ping opacity-20 ring-4 ring-rose-500 rounded-full" />
        <div className="absolute inset-0 animate-pulse opacity-30 ring-8 ring-rose-400 rounded-full blur-md" />
        
        {/* Main button */}
        <button
          onClick={() => setOpen(true)}
          className="relative h-16 w-16 rounded-full bg-gradient-to-br from-rose-600 via-red-600 to-rose-800 text-white shadow-[0_15px_35px_rgba(225,29,72,0.4)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white/20 group"
        >
          <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <PhoneCall className="h-7 w-7 group-hover:rotate-12 transition-transform duration-300" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-white">SOS</span>
        </button>
      </div>

      {/* Emergency Popup */}
      {open && (
        <div className="fixed bottom-44 right-6 z-[1100] w-[340px] bg-white/95 backdrop-blur-2xl rounded-[32px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] border border-white overflow-hidden animate-slideUp">
          {/* HEADER */}
          <div className="bg-gradient-to-r from-rose-600 to-red-600 text-white px-6 py-5 flex justify-between items-center relative overflow-hidden">
             {/* Decorative element */}
             <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
             
            <div className="relative z-10">
              <h2 className="font-bold text-xl tracking-tight">Emergency Support</h2>
              <p className="text-[11px] opacity-90 font-medium uppercase tracking-wider">Jharkhand Safety Network</p>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="relative z-10 bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors active:scale-90"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* CONTACT LIST */}
          <div className="p-6 space-y-3 max-h-[420px] overflow-y-auto scrollbar-hide bg-gray-50/50">
            {contacts.map(({ label, number, icon: Icon, color }, i) => (
              <div
                key={i}
                className="flex justify-between items-center bg-white rounded-[24px] p-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-rose-100 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center text-white shadow-lg shadow-gray-200 group-hover:rotate-6 transition-transform`}>
                    <Icon className="h-6 w-6" />
                  </div>

                  <div>
                    <h4 className="text-[14px] font-bold text-slate-900 leading-tight">{label}</h4>
                    <p className="text-[16px] font-extrabold text-[#005f83]">{number}</p>
                  </div>
                </div>

                <a
                  href={`tel:${number}`}
                  className="h-10 w-10 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center hover:bg-rose-600 hover:text-white transition-all duration-300"
                >
                  <PhoneCall className="h-4 h-4" />
                </a>
              </div>
            ))}

            {/* SHARE LOCATION */}
            <button
              className="w-full mt-2 py-4 rounded-[20px] bg-slate-900 text-white font-bold tracking-tight flex items-center justify-center gap-3 hover:bg-slate-800 active:scale-[0.98] transition-all shadow-xl shadow-slate-200"
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
              <MapPin className="h-5 w-5 text-rose-500" />
              Share My Real-time Location
            </button>
            <p className="text-center text-[10px] text-gray-400 font-medium">Available 24/7 • Jharkhand Tourism Safety</p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </>
  );
}