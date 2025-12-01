import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function VendorAuth() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true); // toggle login/signup

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("vendorLogin", "true");
    navigate("/role/vendor");
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Save Vendor Data (optional: database)
    localStorage.setItem("vendorLogin", "true");
    navigate("/role/vendor");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">

        {/* Header */}
        <h2 className="text-2xl font-bold text-green-700 text-center mb-6">
          {isLogin ? "Vendor Login" : "Vendor Signup"}
        </h2>

        {/* FORM */}
        <form onSubmit={isLogin ? handleLogin : handleSignup} className="space-y-4">

          {/* Name – Only for Signup */}
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                required
                type="text"
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500"
              />
            </div>
          )}

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              required
              type="email"
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              required
              type="password"
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Confirm Password – Only for Signup */}
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                required
                type="password"
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500"
              />
            </div>
          )}

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 rounded-lg font-semibold hover:bg-green-800 transition"
          >
            {isLogin ? "Login" : "Create Account"}
          </button>
        </form>

        {/* Toggle Text */}
        <p className="text-center text-sm text-gray-600 mt-4">
          {isLogin ? (
            <>
              Don’t have an account?{" "}
              <span
                onClick={() => setIsLogin(false)}
                className="text-green-700 font-medium cursor-pointer"
              >
                Sign up
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                onClick={() => setIsLogin(true)}
                className="text-green-700 font-medium cursor-pointer"
              >
                Login
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
