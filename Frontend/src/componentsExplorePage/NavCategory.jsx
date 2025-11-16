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
    <div className="flex flex-wrap gap-3 py-4 overflow-x-auto no-scrollbar">
      {categories.map(({ id, label, icon: Icon }) => {
        const active = selected === id;

        return (
          <button
            key={id}
            onClick={() => onChange(id)}
            className={`
              flex items-center gap-2 px-5 py-2 rounded-full border text-sm font-medium
              transition-all duration-200 shadow-sm

              ${
                active
                  ? "bg-green-700 border-green-700 text-white"
                  : "bg-white border-gray-300 text-gray-800 hover:border-green-600"
              }
            `}
          >
            <Icon size={18} />
            {label}
          </button>
        );
      })}
    </div>
  );
}
