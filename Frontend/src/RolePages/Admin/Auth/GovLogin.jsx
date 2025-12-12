import React from "react";
import { useNavigate } from "react-router-dom";

export default function GovLogin() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Only Admin can login
    localStorage.setItem("govLogin", "true");

    navigate("/role/government");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">

        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
          Government Admin Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-sm text-gray-600 font-medium">Admin ID</label>
            <input
              type="text"
              required
              className="w-full border rounded p-2 mt-1 focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600 font-medium">Password</label>
            <input
              type="password"
              required
              className="w-full border rounded p-2 mt-1 focus:ring-2 focus:ring-green-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 rounded-lg font-semibold hover:bg-green-800"
          >
            Login
          </button>
        </form>

      </div>
    </div>
  );
}
