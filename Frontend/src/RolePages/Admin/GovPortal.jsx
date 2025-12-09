import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Layout from "./global/Layout";

// Tourist Analytics
import TouristAnalytics from "./pages/TouristAnalytics";

// Management
import Hotels from "./app/Management/Hotels/Hotels";
import Vendors from "./app/Management/vendor/Vendor";
import TourGuides from "./app/Management/Guide/TourGuides";
import TransportProviders from "./app/Management/transport/TransportProviders";

// ⭐ NEW (Tour Packages)


// Events
import EventManagement from "./app/Events/pages/AllEventsPage";
import ApproveEvents from "./app/Events/pages/ApproveEvents";
import CreateEvents from "./app/Events/pages/AddEvents";

// Reports
import Reports from "./app/Reports/pages/Reports";
import DailyReportTable from "./app/Reports/components/DailyReportTable";
import MonthlyReports from "./app/Reports/pages/MonthlyReports";

// Verification
import VendorVerification from "./app/Verification/pages/VendorVerification";
import GuideVerification from "./app/Verification/pages/GuideVerification";
import HotelVerification from "./app/Verification/pages/HotelVerification";

// Others
import Complaints from "./app/Other/pages/complaints/Complaints";
import Heatmaps from "./app/Other/pages/maps/Heatmaps";
import Settings from "./app/Other/pages/settings/Settings";

// Auth
import GovLogout from "./Auth/GovLogout";

// Destinations
import AllDestinations from "./app/destinations/AllDestinations";
import AddDestination from "./app/destinations/AddDestination";
import AllPackage from "./app/packages/AllPackage";
import CreatePackage from "./app/packages/CreatePackage";

export default function GovPortal() {
  return (
    <Routes>
      {/* Dashboard */}
      <Route
        path="/"
        element={
          <Layout>
            <Dashboard />
          </Layout>
        }
      />

      {/* Destination routes */}
      <Route
        path="destinations"
        element={
          <Layout>
            <AllDestinations />
          </Layout>
        }
      />
      <Route
        path="add-destination"
        element={
          <Layout>
            <AddDestination />
          </Layout>
        }
      />

      {/* Tourist Analytics */}
      <Route
        path="tourist-analytics"
        element={
          <Layout>
            <TouristAnalytics />
          </Layout>
        }
      />

      {/* Management */}
      <Route
        path="hotels"
        element={
          <Layout>
            <Hotels />
          </Layout>
        }
      />
      <Route
        path="vendors"
        element={
          <Layout>
            <Vendors />
          </Layout>
        }
      />
      <Route
        path="guides"
        element={
          <Layout>
            <TourGuides />
          </Layout>
        }
      />
      <Route
        path="transport"
        element={
          <Layout>
            <TransportProviders />
          </Layout>
        }
      />

      {/* ⭐ TOUR PACKAGES ROUTES ADDED HERE */}
      <Route
        path="tour-packages"
        element={
          <Layout>
            <AllPackage />
          </Layout>
        }
      />
      <Route
        path="create-package"
        element={
          <Layout>
            <CreatePackage />
          </Layout>
        }
      />

      {/* Events */}
      <Route
        path="events"
        element={
          <Layout>
            <EventManagement />
          </Layout>
        }
      />
      <Route
        path="approve-events"
        element={
          <Layout>
            <ApproveEvents />
          </Layout>
        }
      />
      <Route
        path="create-events"
        element={
          <Layout>
            <CreateEvents />
          </Layout>
        }
      />

      {/* Reports */}
      <Route
        path="reports"
        element={
          <Layout>
            <Reports />
          </Layout>
        }
      />
      <Route
        path="daily-reports"
        element={
          <Layout>
            <DailyReportTable />
          </Layout>
        }
      />
      <Route
        path="monthly-reports"
        element={
          <Layout>
            <MonthlyReports />
          </Layout>
        }
      />

      {/* Verification */}
      <Route
        path="verification"
        element={
          <Layout>
            <VendorVerification />
          </Layout>
        }
      />
      <Route
        path="guide-verification"
        element={
          <Layout>
            <GuideVerification />
          </Layout>
        }
      />
      <Route
        path="hotel-verification"
        element={
          <Layout>
            <HotelVerification />
          </Layout>
        }
      />

      {/* Others */}
      <Route
        path="complaints"
        element={
          <Layout>
            <Complaints />
          </Layout>
        }
      />
      <Route
        path="maps"
        element={
          <Layout>
            <Heatmaps />
          </Layout>
        }
      />
      <Route
        path="settings"
        element={
          <Layout>
            <Settings />
          </Layout>
        }
      />

      {/* Logout */}
      <Route
        path="role/government/login"
        element={
          <Layout>
            <GovLogout />
          </Layout>
        }
      />
    </Routes>
  );
}
