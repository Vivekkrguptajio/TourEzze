import { User, Store, Navigation, Building, Shield } from "lucide-react";

const roles = [
  {
    icon: <User className="w-10 h-10 text-green-600" />,
    title: "Tourist",
    desc: "Explore destinations and plan your perfect trip",
    link: "/role/tourist",
  },
  {
    icon: <Store className="w-10 h-10 text-orange-500" />,
    title: "Vendor / Artisan",
    desc: "Showcase and sell your authentic crafts",
    link: "/role/vendor",
  },
  {
    icon: <Navigation className="w-10 h-10 text-green-700" />,
    title: "Guide / Transport",
    desc: "Offer your services to travelers",
    link: "/role/guide",
  },
  {
    icon: <Building className="w-10 h-10 text-orange-400" />,
    title: "Hotel / Homestay",
    desc: "List your accommodation for guests",
    link: "/role/hotel-owner",
  },
  {
    icon: <Shield className="w-10 h-10 text-green-600" />,
    title: "Government",
    desc: "Tourism department portal and analytics",
    link: "/role/government",
  },
];

export default function RoleSelector() {
  return (
    <section className="py-16 bg-soft-cream">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Select Your Role
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Join our platform as a stakeholder and be part of Jharkhand's digital tourism revolution
        </p>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

          {roles.map((role, index) => (
            <div
              key={index}
              className="
                bg-white rounded-xl p-6 shadow-sm border 
                hover:shadow-md hover:-translate-y-1 
                transition-all text-center
              "
            >
              {/* Icon */}
              <div className="flex justify-center items-center w-16 h-16 mx-auto mb-3 rounded-xl bg-gray-50">
                {role.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {role.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-5">
                {role.desc}
              </p>

              {/* Button */}
              <a
                href={role.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-full block py-2 border border-gray-300 
                  rounded-lg text-sm hover:bg-gray-100 
                  transition cursor-pointer
                "
              >
                Go to Portal
              </a>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
