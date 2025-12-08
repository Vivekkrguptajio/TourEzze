import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Layout from "./global/Layout";
import TouristAnalytics from "./pages/TouristAnalytics";
import Hotels from "./app/Management/Hotels/Hotels";
import Vendors from "./app/Management/vendor/Vendor";
import TourGuides from "./app/Management/Guide/TourGuides";
import TransportProviders from "./app/Management/transport/TransportProviders";
import EventManagement from "./app/Events/pages/AllEventsPage";
import ApproveEvents from "./app/Events/pages/ApproveEvents";
import CreateEvents from "./app/Events/pages/AddEvents";
import Reports from "./app/Reports/pages/Reports";
import DailyReportTable from "./app/Reports/components/DailyReportTable";
import MonthlyReports from "./app/Reports/pages/MonthlyReports";
import VendorVerification from "./app/Verification/pages/VendorVerification";
import GuideVerification from "./app/Verification/pages/GuideVerification";
import HotelVerification from "./app/Verification/pages/HotelVerification";
import Complaints from "./app/Other/pages/complaints/Complaints";
import Heatmaps from "./app/Other/pages/maps/Heatmaps";
import Settings from "./app/Other/pages/settings/Settings";
import GovLogout from "./Auth/GovLogout";
import AllDestinations from "./app/destinations/AllDestinations";
import AddDestination from "./app/destinations/AddDestination";
// import RemoveDestination from "./app/destinations/RemoveDestination";
// import UpdateDestination from "./app/destinations/UpdateDestination";

export default function GovPortal() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Dashboard />
          </Layout>
        }
      />

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



      <Route
        path="tourist-analytics"
        element={
          <Layout>
            <TouristAnalytics />
          </Layout>
        }
      />

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
