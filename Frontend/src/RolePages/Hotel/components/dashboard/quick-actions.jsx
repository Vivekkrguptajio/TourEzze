import { PlusCircle, Car, CalendarClock } from "lucide-react";

export function QuickActions() {
  const actions = [
    {
      icon: <PlusCircle className="w-4 h-4" />,
      title: "Add New Room",
      desc: "List a new room or property",
    },
    {
      icon: <Car className="w-4 h-4" />,
      title: "Add New Vehicle",
      desc: "Register a new vehicle",
    },
    {
      icon: <CalendarClock className="w-4 h-4" />,
      title: "Update Availability",
      desc: "Manage your calendar",
    },
  ];

  return (
    <div className="bg-[#050b08] border border-green-900 rounded-2xl p-4 flex flex-col gap-3">
      <h2 className="text-sm text-white font-semibold">Quick Actions</h2>
      <div className="flex flex-col gap-2 text-xs">
        {actions.map((a) => (
          <button
            key={a.title}
            className="flex items-start gap-3 rounded-xl bg-[#070f0b] hover:bg-[#0b1510] border border-green-900/70 px-3 py-2 text-left transition"
          >
            <div className="mt-0.5 text-green-400">{a.icon}</div>
            <div>
              <p className="text-gray-100 font-medium">{a.title}</p>
              <p className="text-[11px] text-gray-500">{a.desc}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}