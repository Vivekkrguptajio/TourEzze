import { useState } from "react";
import axios from "axios";
import { X } from "lucide-react";
import { API_URL } from "../../../../../../src/api.js";

export default function LoginModal({ close }) {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleLogin = async () => {
    try {
      setLoading(true);

      const res = await axios.post(`${API_URL}/api/tourist/login`, form);

      // SAVE USER + TOKEN FIRST
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Login successful!");

      close(); // close modal properly

      // SAFE RELOAD AFTER CLOSING MODAL
      setTimeout(() => {
        window.location.reload();
      }, 150);
    } catch (err) {
      alert(err.response?.data?.message || "Login error");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);

      // Open Google OAuth popup
      const width = 500;
      const height = 600;
      const left = window.screen.width / 2 - width / 2;
      const top = window.screen.height / 2 - height / 2;

      const popup = window.open(
        `${API_URL}/api/auth/google`,
        "Google Login",
        `width=${width},height=${height},left=${left},top=${top}`
      );

      // Listen for message from popup
      window.addEventListener("message", async (event) => {
        // Verify origin for security
        if (event.origin !== API_URL) return;

        if (event.data.type === "GOOGLE_AUTH_SUCCESS") {
          popup?.close();

          // Save user data and token
          localStorage.setItem("token", event.data.token);
          localStorage.setItem("user", JSON.stringify(event.data.user));

          alert("Google login successful!");

          close();

          setTimeout(() => {
            window.location.reload();
          }, 150);
        } else if (event.data.type === "GOOGLE_AUTH_ERROR") {
          popup?.close();
          alert(event.data.message || "Google login failed");
          setLoading(false);
        }
      });

      // Handle popup close without completion
      const checkPopup = setInterval(() => {
        if (popup?.closed) {
          clearInterval(checkPopup);
          setLoading(false);
        }
      }, 1000);
    } catch (err) {
      alert("Google login error");
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex justify-center items-center z-[9999]">
      <div className="bg-white w-96 p-6 rounded-2xl shadow-2xl relative animate-fadeIn">
        <button
          onClick={close}
          className="absolute right-4 top-4 text-gray-600 hover:text-black transition"
        >
          <X size={22} />
        </button>

        <h2 className="text-2xl font-bold text-center mb-4 text-green-800">
          Welcome Back
        </h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border p-2 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-green-600"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full border p-2 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-green-600"
        />

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 transition font-semibold disabled:bg-green-500"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <div className="flex items-center my-4">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-4 text-gray-500 text-sm">OR</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full bg-white border-2 border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition font-semibold disabled:opacity-50 flex items-center justify-center gap-3"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M19.6 10.227c0-.709-.064-1.39-.182-2.045H10v3.868h5.382a4.6 4.6 0 01-1.996 3.018v2.51h3.232c1.891-1.742 2.982-4.305 2.982-7.35z"
              fill="#4285F4"
            />
            <path
              d="M10 20c2.7 0 4.964-.895 6.618-2.423l-3.232-2.509c-.895.6-2.04.955-3.386.955-2.605 0-4.81-1.76-5.595-4.123H1.064v2.59A9.996 9.996 0 0010 20z"
              fill="#34A853"
            />
            <path
              d="M4.405 11.9c-.2-.6-.314-1.24-.314-1.9 0-.66.114-1.3.314-1.9V5.51H1.064A9.996 9.996 0 000 10c0 1.614.386 3.14 1.064 4.49l3.34-2.59z"
              fill="#FBBC05"
            />
            <path
              d="M10 3.977c1.468 0 2.786.505 3.823 1.496l2.868-2.868C14.959.99 12.695 0 10 0 6.09 0 2.71 2.24 1.064 5.51l3.34 2.59C5.19 5.736 7.395 3.977 10 3.977z"
              fill="#EA4335"
            />
          </svg>
          {loading ? "Connecting..." : "Continue with Google"}
        </button>

        <p className="text-center text-sm text-gray-500 mt-4">
          Don't have an account?{" "}
          <button className="text-green-700 font-semibold hover:underline">
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}
