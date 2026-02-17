import React from "react";
import { Routes, Route } from "react-router-dom";

import VendorLayout from "./global/VendorLayout";

// Pages
import Dashboard from "./pages/Dashboard";
import AllListing from "./app/listing/AllListing";
import AddProduct from "./app/listing/AddProduct";

import Order from "./app/Orders/NewOrder/Order";
import Accepted from "./app/Orders/Accepted/Accepted";
import Cancelled from "./app/Orders/Cancelled/Cancelled";
import Completed from "./app/Orders/Completed/Completed";

import Earning from "./app/Earning/Earning";
import Review from "./app/review/Review";
import Message from "./app/Message/Message";
import Inventory from "./app/inventory/Inventory";
import Verification from "./app/Verification/Verification";
import Settings from "./app/Settings/Settings";
import VendorLogout from "./Auth/VendorLogout";

export default function VendorPortal() {
  return (
    <Routes>

      {/* DEFAULT DASHBOARD → /role/vendor */}
      <Route 
        index
        element={
          <VendorLayout>
            <Dashboard />
          </VendorLayout>
        }
      />

      {/* PRODUCTS */}
      <Route 
        path="products" 
        element={
          <VendorLayout>
            <AllListing />
          </VendorLayout>
        }
      />

      <Route 
        path="products/add" 
        element={
          <VendorLayout>
            <AddProduct />
          </VendorLayout>
        }
      />

      {/* ORDERS */}
      <Route 
        path="orders/new" 
        element={
          <VendorLayout>
            <Order />
          </VendorLayout>
        }
      />

      <Route 
        path="orders/accepted" 
        element={
          <VendorLayout>
            <Accepted />
          </VendorLayout>
        }
      />

      <Route 
        path="orders/cancelled" 
        element={
          <VendorLayout>
            <Cancelled />
          </VendorLayout>
        }
      />

      <Route 
        path="orders/completed" 
        element={
          <VendorLayout>
            <Completed />
          </VendorLayout>
        }
      />

      {/* OTHERS */}
      <Route 
        path="earnings" 
        element={
          <VendorLayout>
            <Earning />
          </VendorLayout>
        }
      />

      <Route 
        path="reviews" 
        element={
          <VendorLayout>
            <Review />
          </VendorLayout>
        }
      />

      <Route 
        path="messages" 
        element={
          <VendorLayout>
            <Message />
          </VendorLayout>
        }
      />

      <Route 
        path="inventory" 
        element={
          <VendorLayout>
            <Inventory />
          </VendorLayout>
        }
      />

      <Route 
        path="verification" 
        element={
          <VendorLayout>
            <Verification />
          </VendorLayout>
        }
      />

      <Route 
        path="settings" 
        element={
          <VendorLayout>
            <Settings />
          </VendorLayout>
        }
      />

      {/* LOGOUT */}
      <Route 
        path="logout"
        element={
          <VendorLayout>
            <VendorLogout />
          </VendorLayout>
        }
      />

    </Routes>
  );
}
