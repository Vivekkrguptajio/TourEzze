import React from "react";
import { Routes, Route } from "react-router-dom";
import GuideLayout from "./app/global/GuideLayout";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import AddTour from "./app/Tours/AddTour";
import MyTour from "./app/Tours/MyTour";
import Request from "./app/books/request/Request";
import Upcoming from "./app/books/upcoming/Upcoming";
import Completed from "./app/books/completed/Completed";
import Cancelled from "./app/books/cancelled/Cancelled";
import Calendar from "./app/others/Calender/Calendar";
import EarningsDashboard from "./pages/EarningsDashboard";
import Reviews from "./app/others/Review/Reviews";
import Message from "./app/others/Messages/Message";
import Verifications from "./app/others/Verfications/Verifications";
import Setting from "./app/others/Settings/Setting";
import Support from "./app/others/Support/Support";
import GuideLogout from "./Auth/GuideLogout";

export default function GuidePortal() {
  return (
    <Routes>
      {/* Default /role/hotel-owner */}
      <Route
        path="/"
        element={
          <GuideLayout>
            <Dashboard />
          </GuideLayout>
        }
      />
      <Route
        path="profile"
        element={
          <GuideLayout>
            <Profile />
          </GuideLayout>
        }
      />

      <Route
        path="tours"
        element={
          <GuideLayout>
            <MyTour />
          </GuideLayout>
        }
      />

      <Route
        path="tours/new"
        element={
          <GuideLayout>
            <AddTour />
          </GuideLayout>
        }
      />

      <Route
        path="bookings/requests"
        element={
          <GuideLayout>
            <Request />
          </GuideLayout>
        }
      />

      <Route
        path="bookings/upcoming"
        element={
          <GuideLayout>
            <Upcoming />
          </GuideLayout>
        }
      />

      <Route
        path="bookings/completed"
        element={
          <GuideLayout>
            <Completed />
          </GuideLayout>
        }
      />

      <Route
        path="bookings/cancelled"
        element={
          <GuideLayout>
            <Cancelled />
          </GuideLayout>
        }
      />

      <Route
        path="calendar"
        element={
          <GuideLayout>
            <Calendar />
          </GuideLayout>
        }
      />

      <Route
        path="earnings"
        element={
          <GuideLayout>
            <EarningsDashboard />
          </GuideLayout>
        }
      />

      <Route
        path="reviews"
        element={
          <GuideLayout>
            <Reviews />
          </GuideLayout>
        }
      />

      <Route
        path="messages"
        element={
          <GuideLayout>
            <Message />
          </GuideLayout>
        }
      />

      <Route
        path="verification"
        element={
          <GuideLayout>
            <Verifications />
          </GuideLayout>
        }
      />

      <Route
        path="support"
        element={
          <GuideLayout>
            <Support />
          </GuideLayout>
        }
      />
      <Route
        path="settings"
        element={
          <GuideLayout>
            <Setting />
          </GuideLayout>
        }
      />

       <Route
        path="/role/guide/login"
        element={
          <GuideLayout>
            <GuideLogout/>
          </GuideLayout>
        }
      />
    </Routes>
  );
}
