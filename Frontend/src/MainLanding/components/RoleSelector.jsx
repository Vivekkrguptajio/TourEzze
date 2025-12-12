import { User, Store, Navigation, Building, Shield } from "lucide-react";

const roles = [
  {
    icon: <User className="w-8 h-8" />,
    title: "Tourist",
    desc: "Explore destinations and plan your perfect trip",
    link: "/role/tourist",
    color: "from-emerald-500 to-green-600",
    bgGlow: "bg-emerald-50",
  },
  {
    icon: <Store className="w-8 h-8" />,
    title: "Vendor / Artisan",
    desc: "Showcase and sell your authentic crafts",
    link: "/role/vendor",
    color: "from-orange-500 to-amber-600",
    bgGlow: "bg-orange-50",
  },
  {
    icon: <Navigation className="w-8 h-8" />,
    title: "Guide / Transport",
    desc: "Offer your services to travelers",
    link: "/role/guide",
    color: "from-teal-600 to-green-700",
    bgGlow: "bg-teal-50",
  },
  {
    icon: <Building className="w-8 h-8" />,
    title: "Hotel / Homestay",
    desc: "List your accommodation for guests",
    link: "/role/hotel-owner",
    color: "from-amber-500 to-orange-500",
    bgGlow: "bg-amber-50",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Government",
    desc: "Tourism department portal and analytics",
    link: "/role/government",
    color: "from-blue-600 to-indigo-600",
    bgGlow: "bg-blue-50",
  },
];

export default function RoleSelector() {
  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 via-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-700 via-orange-600 to-green-600 bg-clip-text text-transparent">
            Choose Your Role
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Join our platform and become part of Jharkhand's vibrant digital tourism ecosystem
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
          {roles.map((role, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-out"
            >
              {/* Gradient Glow Effect */}
              <div className={`absolute inset-0 rounded-2xl ${role.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}></div>
              
              {/* Icon with Gradient */}
              <div className={`flex justify-center items-center w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${role.color} text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                {role.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-orange-600 group-hover:bg-clip-text transition-all duration-300">
                {role.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-6 text-center leading-relaxed min-h-[48px]">
                {role.desc}
              </p>

              {/* Button */}
              <a
                href={role.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full block py-3 rounded-xl text-sm font-semibold text-center text-white bg-gradient-to-r ${role.color} hover:shadow-lg hover:scale-105 transition-all duration-300`}
              >
                Enter Portal →
              </a>
            </div>
          ))}
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 text-sm">
            Not sure which role fits you?{" "}
            <a href="#" className="text-orange-600 hover:text-orange-700 font-semibold underline decoration-2 underline-offset-4">
              Learn more about each role
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}