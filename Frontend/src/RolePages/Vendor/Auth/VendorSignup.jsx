import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function VendorSignup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    shopName: "",
    category: "",
    address: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/vendor/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      setLoading(false);

      if (!res.ok) {
        alert(data.message || "Signup Failed ❌");
        return;
      }

      alert("Vendor Account Created Successfully! ✅");

      // Reset form
      setForm({
        name: "",
        email: "",
        password: "",
        shopName: "",
        category: "",
        address: "",
        phone: "",
      });

    } catch (err) {
      setLoading(false);
      alert("Server Error / CORS Issue ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 p-4">
      <div className="bg-white rounded-2xl shadow-xl border border-emerald-100 w-full max-w-3xl p-8">

        {/* HEADER */}
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-emerald-800">Vendor Sign Up</h1>
          <p className="text-gray-500 text-sm mt-1">Register your handicraft shop.</p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Owner Name"
            required
            className="input border rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500"
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="input border rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500"
          />

          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            required
            className="input border rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500"
          />

          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="9876543210"
            required
            className="input border rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500"
          />

          <input
            type="text"
            name="shopName"
            value={form.shopName}
            onChange={handleChange}
            placeholder="Shop Name"
            required
            className="input border rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500"
          />

          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            required
            className="input border rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-emerald-500"
          >
            <option value="">Select Category</option>
            <option>Iron Craft</option>
            <option>Dokra Metal Art</option>
            <option>Bamboo Craft</option>
            <option>Handloom</option>
            <option>Tribal Jewellery</option>
          </select>

          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Ranchi, Jharkhand"
            required
            className="input border rounded-lg px-3 py-2 md:col-span-2 focus:ring-2 focus:ring-emerald-500"
          />

          <button
            className="md:col-span-2 w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 rounded-lg font-semibold"
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Create Vendor Account"}
          </button>
        </form>

        {/* LOGIN LINK */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Already registered?{" "}
          <Link
            to="/role/vendor/login"
            className="text-emerald-700 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}
