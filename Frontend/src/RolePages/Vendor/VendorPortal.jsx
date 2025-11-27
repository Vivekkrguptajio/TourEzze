import React from "react";
import { Routes, Route } from "react-router-dom";
import VendorLayout from "./global/VendorLayout";
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
import Verification from "./Verification/Verification";
import Setting from "../Guide/app/others/Settings/Setting";
import Settings from "./app/Settings/Settings";

export default function VendorPortal() {
  return (
    <Routes>
      <Route path="/" element={<VendorLayout />}>
        <Route index element={<Dashboard />} />
      </Route>

      <Route path="products" element={<VendorLayout />}>
        <Route index element={<AllListing />} />
      </Route>

      <Route path="products/add" element={<VendorLayout />}>
        <Route index element={<AddProduct />} />
      </Route>

      <Route path="orders/new" element={<VendorLayout />}>
        <Route index element={<Order />} />
      </Route>

      <Route path="orders/accepted" element={<VendorLayout />}>
        <Route index element={<Accepted />} />
      </Route>

      <Route path="orders/cancelled" element={<VendorLayout />}>
        <Route index element={<Cancelled />} />
      </Route>

      <Route path="orders/completed" element={<VendorLayout />}>
        <Route index element={<Completed />} />
      </Route>

      <Route path="earnings" element={<VendorLayout />}>
        <Route index element={<Earning />} />
      </Route>

      <Route path="reviews" element={<VendorLayout />}>
        <Route index element={<Review />} />
      </Route>

      <Route path="messages" element={<VendorLayout />}>
        <Route index element={<Message />} />
      </Route>

      <Route path="messages" element={<VendorLayout />}>
        <Route index element={<Message />} />
      </Route>
      <Route path="inventory" element={<VendorLayout />}>
        <Route index element={<Inventory />} />
      </Route>

      <Route path="verification" element={<VendorLayout />}>
        <Route index element={<Verification />} />
      </Route>

       <Route path="Settings" element={<VendorLayout />}>
        <Route index element={<Settings />} />
      </Route>
    </Routes>
  );
}
