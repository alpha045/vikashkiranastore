import { Link } from "react-router-dom";
import { FaStore } from "react-icons/fa";

function Register() {
  return (
    <div className="min-h-screen bg-[#161D26] flex items-center justify-center px-4">
      <div className="w-full max-w-md">

        {/* Back Button */}
        <Link
          to="/"
          className="mt-8 text-[#777D8A] hover:text-[#22C7BE] "
        >
          ← Home pe wapas
        </Link>

        {/* Logo */}
        <div className="flex justify-center">
          <div className="w-12 h-12 rounded-full bg-[#22C7BE] flex items-center justify-center">
            <FaStore className="text-white text-2xl" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-center text-white text-3xl font-bold mt-5">
          Naya Account
        </h1>

        <p className="text-center text-slate-400 mt-3 text-lg">
          2 minute mein setup karein
        </p>

        {/* Register Card */}
        <div className="bg-[#0B1018] rounded-2xl p-8 mt-2 border border-slate-800">

          <form className="space-y-5">

            <div>
              <label className="block text-white mb-2">
                Dukaan Ka Naam
              </label>

              <input
                type="text"
                placeholder="Ramesh General Store"
                className="w-full p-3 rounded-lg bg-transparent border border-slate-700 outline-none focus:border-[#22C7BE]"
              />
            </div>

            <div>
              <label className="block text-white mb-2">
                Malik Ka Naam
              </label>

              <input
                type="text"
                placeholder="Ramesh Kumar"
                className="w-full p-3 rounded-lg bg-transparent border border-slate-700 outline-none focus:border-[#22C7BE]"
              />
            </div>

            <div>
              <label className="block text-white mb-2">
                Phone Number
              </label>

              <input
                type="text"
                placeholder="9876543210"
                className="w-full p-3 rounded-lg bg-transparent border border-slate-700 outline-none focus:border-[#22C7BE]"
              />
            </div>

            <div>
              <label className="block text-white mb-2">
                Password Banayein
              </label>

              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 rounded-lg bg-transparent border border-slate-700 outline-none focus:border-[#22C7BE]"
              />
            </div>

            <button
              className="
              w-full
              bg-[#22C7BE]
              text-white
              py-3
              rounded-lg
              font-semibold
              transition
              "
            >
              → Register Karein
            </button>

          </form>

          <p className="text-center mt-6 text-slate-400">
            Pehle se account hai?
            <Link
              to="/login"
              className="text-[#22C7BE] ml-2"
            >
              Login Karein
            </Link>
          </p>

        </div>

        {/* Demo Box */}
        <div className="mt-5 p-5 rounded-xl border border-green-700 bg-green-900/20">
          <h3 className="text-green-400 font-semibold">
            Demo Mode
          </h3>

          <p className="text-slate-300 text-sm mt-2">
            Koi bhi number/password daal ke Register karein.
            Dashboard khul jayega.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Register;