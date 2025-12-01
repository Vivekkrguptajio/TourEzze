import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HotelAuth() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("hotelLogin", "true");
    navigate("/role/hotel-owner");
  };

  const handleSignup = (e) => {
    e.preventDefault();
    localStorage.setItem("hotelLogin", "true");
    navigate("/role/hotel-owner");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">

        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
          {isLogin ? "Hotel Owner Login" : "Hotel Owner Signup"}
        </h2>

        <form onSubmit={isLogin ? handleLogin : handleSignup} className="space-y-4">

          {!isLogin && (
            <div>
              <label className="text-sm text-gray-600 font-medium">Full Name</label>
              <input
                type="text"
                required
                className="w-full border rounded p-2 mt-1 focus:ring-2 focus:ring-green-500"
              />
            </div>
          )}

          <div>
            <label className="text-sm text-gray-600 font-medium">Email</label>
            <input
              type="email"
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

          {!isLogin && (
            <div>
              <label className="text-sm text-gray-600 font-medium">Confirm Password</label>
              <input
                type="password"
                required
                className="w-full border rounded p-2 mt-1 focus:ring-2 focus:ring-green-500"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 rounded-lg font-semibold hover:bg-green-800"
          >
            {isLogin ? "Login" : "Create Account"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          {isLogin ? (
            <>
              Don’t have an account?{" "}
              <span
                className="text-green-700 font-semibold cursor-pointer"
                onClick={() => setIsLogin(false)}
              >
                Sign up
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                className="text-green-700 font-semibold cursor-pointer"
                onClick={() => setIsLogin(true)}
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
