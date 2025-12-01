import React from "react";
import { Routes, Route } from "react-router-dom";
import ProviderLayout from "../Hotel/app/global/ProviderLayout";
import Dashboard from "./pages/Dashboard";
import RoomsPage from "./app/listings/rooms/RoomsPage";
import VechiclePage from "./app/listings/vehicles/VechiclePage";
import AddPage from "./app/listings/add/AddPage";
import Calendar from "./app/calender/Calendar";
import Cancelled from "./app/booking/cancelled/Cancelled";
import Completed from "./app/booking/completed/Completed";
import Requests from "./app/booking/requests/Requests";
import Upcoming from "./app/booking/upcoming/Upcoming";
import Earn from "./app/earnings/earn";
import Review from "./app/review/Review";
import Message from "./app/messages/Message";
import Support from "./app/support/Support";
import Settings from "./app/settings/Settings";
import HotelLogout from "./Auth/HotelLogout";

export default function HotelPortal() {
  return (
    <Routes>
      {/* Default /role/hotel-owner */}
      <Route
        path="/"
        element={
          <ProviderLayout>
            <Dashboard />
          </ProviderLayout>
        }
      />

      {/* /role/hotel-owner/listings/rooms */}
      <Route
        path="listings/rooms"
        element={
          <ProviderLayout>
            <RoomsPage />
          </ProviderLayout>
        }
      />

      <Route
        path="listings/vehicles"
        element={
          <ProviderLayout>
            <VechiclePage />
          </ProviderLayout>
        }
      />

      <Route
        path="listings/add"
        element={
          <ProviderLayout>
            <AddPage />
          </ProviderLayout>
        }
      />

      <Route
        path="availability"
        element={
          <ProviderLayout>
            <Calendar />
          </ProviderLayout>
        }
      />

      <Route
        path="/bookings/upcoming"
        element={
          <ProviderLayout>
            <Upcoming />
          </ProviderLayout>
        }
      />

      <Route
        path="/bookings/completed"
        element={
          <ProviderLayout>
            <Completed />
          </ProviderLayout>
        }
      />

      <Route
        path="/bookings/new"
        element={
          <ProviderLayout>
            <Requests />
          </ProviderLayout>
        }
      />

      <Route
        path="/bookings/cancelled"
        element={
          <ProviderLayout>
            <Cancelled />
          </ProviderLayout>
        }
      />

      <Route
        path="/earnings"
        element={
          <ProviderLayout>
            <Earn />
          </ProviderLayout>
        }
      />

      <Route
        path="/reviews"
        element={
          <ProviderLayout>
            <Review />
          </ProviderLayout>
        }
      />

      <Route
        path="/messages"
        element={
          <ProviderLayout>
            <Message />
          </ProviderLayout>
        }
      />
      <Route
        path="/support"
        element={
          <ProviderLayout>
            <Support />
          </ProviderLayout>
        }
      />
      <Route
        path="/settings"
        element={
          <ProviderLayout>
            <Settings />
          </ProviderLayout>
        }
      />

        <Route
        path="/role/hotel-owner/login"
        element={
          <ProviderLayout>
            <HotelLogout/>
          </ProviderLayout>
        }
      />

      
    </Routes>
  );
}
