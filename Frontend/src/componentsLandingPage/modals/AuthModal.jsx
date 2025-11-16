import React from "react";
import "./AuthModal.css"
export default function AuthModal({ authType, setAuthType }) {
  if (!authType) return null;

  const close = () => setAuthType(null);

  const title =
    authType === "login" ? "Welcome Back 👋" : "Create Your Account";

  const subtitle =
    authType === "login"
      ? "Login to continue exploring Jharkhand."
      : "Create an account to save trips & manage itineraries.";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-fadeIn">
      {/* Close on background click */}
      <div className="absolute inset-0" onClick={close} />

      {/* Modal Box */}
      <div className="relative z-50 bg-white rounded-xl p-7 w-full max-w-md mx-4 shadow-2xl animate-slideUp">

        {/* Close */}
        <button
          onClick={close}
          className="absolute top-3 right-3 text-gray-500 text-xl hover:text-red-500 transition"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-1">{title}</h2>
        <p className="text-sm text-gray-500 mb-5">{subtitle}</p>

        {/* FORM */}
        <form className="space-y-4">

          {/* Full Name (Signup Only) */}
          {authType === "signup" && (
            <div>
              <label className="text-sm text-gray-600">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="border px-3 py-2 w-full rounded-md text-sm focus:ring-2 focus:ring-green-600 outline-none"
              />
            </div>
          )}

          {/* Email */}
          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="border px-3 py-2 w-full rounded-md text-sm focus:ring-2 focus:ring-green-600 outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-600">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="border px-3 py-2 w-full rounded-md text-sm focus:ring-2 focus:ring-green-600 outline-none"
            />
          </div>

          {/* Confirm Password (Signup Only) */}
          {authType === "signup" && (
            <div>
              <label className="text-sm text-gray-600">Confirm Password</label>
              <input
                type="password"
                placeholder="Re-enter password"
                className="border px-3 py-2 w-full rounded-md text-sm focus:ring-2 focus:ring-green-600 outline-none"
              />
            </div>
          )}

          {/* Forgot Password (Login Only) */}
          {authType === "login" && (
            <div className="flex justify-end -mt-2">
              <button
                type="button"
                className="text-sm text-green-700 hover:underline"
              >
                Forgot your password?
              </button>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white py-2 rounded-md font-semibold text-sm transition"
          >
            {authType === "login" ? "Login" : "Create Account"}
          </button>
        </form>

        {/* Switch Auth Type */}
        {authType === "login" ? (
          <p className="text-sm text-gray-500 text-center mt-5">
            Don’t have an account?{" "}
            <button
              className="text-green-700 font-semibold hover:underline"
              onClick={() => setAuthType("signup")}
            >
              Sign Up
            </button>
          </p>
        ) : (
          <p className="text-sm text-gray-500 text-center mt-5">
            Already have an account?{" "}
            <button
              className="text-green-700 font-semibold hover:underline"
              onClick={() => setAuthType("login")}
            >
              Login
            </button>
          </p>
        )}
      </div>
    </div>
  );
}
