import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function GuideAuth() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true); // toggle

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("guideLogin", "true");
    navigate("/role/guide");
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // optional: save user data
    localStorage.setItem("guideLogin", "true");
    navigate("/role/guide");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">

        {/* HEADING */}
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
          {isLogin ? "Guide Login" : "Guide Signup"}
        </h2>

        {/* FORM */}
        <form
          onSubmit={isLogin ? handleLogin : handleSignup}
          className="space-y-4"
        >

          {/* FULL NAME (Signup Only) */}
          {!isLogin && (
            <div>
              <label className="text-sm text-gray-600 font-medium">Full Name</label>
              <input
                type="text"
                required
                placeholder="Enter your full name"
                className="w-full border rounded p-2 mt-1 focus:ring-2 focus:ring-green-500"
              />
            </div>
          )}

          {/* EMAIL */}
          <div>
            <label className="text-sm text-gray-600 font-medium">Email</label>
            <input
              type="email"
              required
              placeholder="example@gmail.com"
              className="w-full border rounded p-2 mt-1 focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="text-sm text-gray-600 font-medium">Password</label>
            <input
              type="password"
              required
              placeholder="Enter your password"
              className="w-full border rounded p-2 mt-1 focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* CONFIRM PASSWORD (Signup Only) */}
          {!isLogin && (
            <div>
              <label className="text-sm text-gray-600 font-medium">Confirm Password</label>
              <input
                type="password"
                required
                placeholder="Re-enter password"
                className="w-full border rounded p-2 mt-1 focus:ring-2 focus:ring-green-500"
              />
            </div>
          )}

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 transition font-semibold"
          >
            {isLogin ? "Login" : "Create Account"}
          </button>
        </form>

        {/* TOGGLE TEXT */}
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
