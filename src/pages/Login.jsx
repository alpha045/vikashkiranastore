import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaStore } from "react-icons/fa";

function Login() {
  const navigate = useNavigate();

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Demo Login
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("phone", phone);

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#161D26] flex items-center justify-center px-4">
      <div className="w-full max-w-md">

        {/* Back Button */}
        <Link
          to="/"
          className="inline-block text-slate-400 hover:text-[#22C7BE] mb-4"
        >
          ← Home pe wapas
        </Link>

        {/* Logo */}
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-full bg-[#22C7BE] flex items-center justify-center">
            <FaStore className="text-white text-2xl" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-center text-white text-3xl font-bold mt-5">
          Smart Kirana
        </h1>

        <p className="text-center text-slate-300 mt-3">
          Dukaan ka digital khata
        </p>

        {/* Login Card */}
        <div className="bg-[#0B1018] rounded-2xl p-8 mt-8 border border-slate-800">

          <form className="space-y-5" onSubmit={handleLogin}>

            <div>
              <label className="block text-white mb-2">
                Phone Number
              </label>

              <input
                type="text"
                placeholder="9876543210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-3 rounded-lg bg-transparent border border-slate-700 text-white outline-none focus:border-[#22C7BE]"
                required
              />
            </div>

            <div>
              <label className="block text-white mb-2">
                Password
              </label>

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 rounded-lg bg-transparent border border-slate-700 text-white outline-none focus:border-[#22C7BE]"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#22C7BE] hover:bg-[#1bb3aa] text-white py-3 rounded-lg font-semibold transition"
            >
              → Login Karein
            </button>

          </form>

          <p className="text-center mt-6 text-slate-400">
            Naya account?
            <Link
              to="/register"
              className="text-[#22C7BE] ml-2 hover:underline"
            >
              Register Karein
            </Link>
          </p>

        </div>

        {/* Demo Box */}
        <div className="mt-5 p-5 rounded-xl border border-green-700 bg-green-900/20">
          <h3 className="text-green-400 font-semibold">
            Demo Credentials
          </h3>

          <p className="text-slate-300 text-sm mt-2">
            Phone: <span className="font-semibold">9999999999</span>
          </p>

          <p className="text-slate-300 text-sm">
            Password: <span className="font-semibold">123456</span>
          </p>

          <p className="text-slate-400 text-xs mt-2">
            Demo mode mein koi bhi number/password se login kar sakte hain.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Login;