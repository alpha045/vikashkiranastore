import { Link } from "react-router-dom";
import { FaStore } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-30 bg-[#07111f] border-b border-slate-800">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-2 px-3">

        <div className="flex items-center gap-3">
          <div className="bg-[#0ab1a3] p-2 rounded-lg">
            <FaStore />
          </div>
          <h2 className="font-semibold">
            <a href="/" className="text-white no-underline">
              Smart Kirana
            </a>
          </h2>
        </div>

        <ul className="hidden md:flex gap-10 text-gray-300">
          <li>
            <a href="/features">Features</a>
          </li>
          <li>
            <a href="/why-choose">Why Use It</a>
          </li>
          <li>
            <a href="/reviews">Reviews</a>
          </li>
        </ul>

        <div className="flex gap-3">
          <Link
            to="/login"
            className="px-5 py-2 border border-gray-700 rounded-lg"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-[#0ab1a3] px-5 py-2 rounded-lg"
          >
            Free Shuru Karein
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;