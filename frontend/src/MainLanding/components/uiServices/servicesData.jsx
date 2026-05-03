import React from "react";
import { Building2, Ticket, Landmark, ClipboardList, Bus, Calendar, Camera } from "lucide-react";

export const servicesData = [
  {
    id: 1,
    icon: <ClipboardList size={24} />,
    title: "Apply for special permits",
    desc: "Find out whether you need special permissions for restricted tribal areas and how to apply online.",
    category: "Travel",
  },
  {
    id: 2,
    icon: <Bus size={24} />,
    title: "Navigate Jharkhand with ease",
    desc: "Explore Jharkhand your way with safe, reliable public transport including trains, buses, and local cabs.",
    category: "Transport",
  },
  {
    id: 3,
    icon: <Calendar size={24} />,
    title: "Explore events in Jharkhand",
    desc: "From live tribal festivals and cultural events to local fairs, find all the latest events in the state.",
    category: "Events",
  },
  {
    id: 4,
    icon: <Building2 size={24} />,
    title: "Browse and book attractions",
    desc: "Discover the best things to do in Jharkhand, from magnificent waterfalls to wildlife sanctuaries and cultural experiences.",
    category: "Attractions",
  },
  {
    id: 5,
    icon: <Ticket size={24} />,
    title: "Save with attraction passes",
    desc: "Unlock huge savings with pre-paid access to top sights, eco-tours and activities through Jharkhand Pass.",
    category: "Attractions",
  },
  {
    id: 6,
    icon: <Landmark size={24} />,
    title: "Book heritage tickets",
    desc: "Explore Jharkhand's rich history by booking entry tickets to ancient temples and museums in advance.",
    category: "Attractions",
  },
  {
    id: 7,
    icon: <Camera size={24} />,
    title: "Apply for a photography permit",
    desc: "Get necessary permissions (NOC) for commercial photography and drone filming at wildlife sanctuaries and heritage sites.",
    category: "Travel",
  },
];
