import {
  Camera,
  TreePine,
  Waves,
  PawPrint,
  Landmark,
  Users,
  Mountain,
  Church,
} from "lucide-react";

const categories = [
  { id: "All", label: "All", icon: Camera },
  { id: "Nature", label: "Nature", icon: TreePine },
  { id: "Waterfalls", label: "Waterfalls", icon: Waves },
  { id: "Wildlife", label: "Wildlife", icon: PawPrint },
  { id: "Heritage", label: "Heritage", icon: Landmark },
  { id: "Culture", label: "Culture", icon: Users },
  { id: "Adventure", label: "Adventure", icon: Mountain },
  { id: "Pilgrimage", label: "Pilgrimage", icon: Church },
  { id: "Scenic Spots", label: "Scenic Spots", icon: Camera },
];

export default function NavCategory({ selected, onChange }) {
  return (
    <div className="w-full flex justify-center">
      <div
        className="
          flex items-center gap-2 px-4 py-2
          bg-white rounded-full
          border border-gray-200 shadow-sm
          overflow-x-auto no-scrollbar
        "
      >
        {categories.map(({ id, label, icon: Icon }) => {
          const active = selected === id;

          return (
            <button
              key={id}
              onClick={() => onChange(id)}
              className={`
                flex items-center gap-1 px-4 py-1.5
                rounded-full text-xs font-medium border transition-all
                ${
                  active
                    ? "bg-green-700 border-green-700 text-white shadow-sm"
                    : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
                }
              `}
            >
              <Icon size={16} className={active ? "text-white" : "text-gray-700"} />
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
