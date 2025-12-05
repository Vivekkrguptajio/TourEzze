// src/components/sidebar/sidebarItems.js
import {
  LayoutDashboard,
  TrendingUp,
  Hotel,
  Store,
  Users,
  Globe,
  CalendarCheck,
  ClipboardList,
  FileText,
  CheckCircle,
  AlertTriangle,
  Map,
  Settings,
  LogOut,
  MapPinPlus,
  MapPinMinus,
  MapPin,
  Edit
} from "lucide-react";

export const sidebarSections = [
  {
    title: "Main",
    items: [
      { to: "/", label: "Dashboard", icon: LayoutDashboard },
      { to: "tourist-analytics", label: "Tourist Analytics", icon: TrendingUp }
    ]
  },

  {
    title: "Destinations",
    items: [
      { to: "destinations", label: "All Destinations", icon: MapPin },
      { to: "add-destination", label: "Add Destination", icon: MapPinPlus },
      // { to: "update-destination", label: "Update Destination", icon: Edit },
      // { to: "remove-destination", label: "Remove Destination", icon: MapPinMinus }
    ]
  },

  {
    title: "Management",
    items: [
      { to: "hotels", label: "Hotels & Homestays", icon: Hotel },
      { to: "vendors", label: "Vendors & Marketplace", icon: Store },
      { to: "guides", label: "Tour Guides", icon: Users },
      { to: "transport", label: "Transport Providers", icon: Globe }
    ]
  },

  {
    title: "Events",
    items: [
      { to: "events", label: "All Events", icon: ClipboardList },
      // { to: "approve-events", label: "Approve Events", icon: CalendarCheck },
      { to: "create-events", label: "Add Events", icon: FileText }
    ]
  },

  {
    title: "Reports",
    items: [
      { to: "reports", label: "Reports", icon: FileText },
      { to: "daily-reports", label: "Daily Reports", icon: FileText },
      { to: "monthly-reports", label: "Monthly Reports", icon: FileText }
    ]
  },

  {
    title: "Verification",
    items: [
      { to: "verification", label: "Verification Center", icon: CheckCircle },
      { to: "guide-verification", label: "Guide Verification", icon: CheckCircle },
      { to: "vendor-verification", label: "Vendor Verification", icon: CheckCircle },
      { to: "hotel-verification", label: "Hotel Verification", icon: CheckCircle }
    ]
  },

  {
    title: "Other",
    items: [
      { to: "complaints", label: "Complaints & Fraud", icon: AlertTriangle },
      { to: "maps", label: "Heatmaps & Maps", icon: Map },
      { to: "settings", label: "Settings", icon: Settings }
    ]
  },

  {
    title: "",
    items: [
      { to: "logout", label: "Logout", icon: LogOut, red: true }
    ]
  }
];
