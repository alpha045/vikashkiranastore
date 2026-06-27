import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FiGrid,
  FiShoppingCart,
  FiPackage,
  FiBook,
  FiTruck,
  FiBarChart2,
  FiClock,
  FiSettings,
  FiLogOut,
  FiSun,
  FiMoon,
} from "react-icons/fi";

const menuItems = [
  { icon: <FiGrid />, label: "Dashboard", path: "/dashboard" },
  { icon: <FiShoppingCart />, label: "Billing", path: "/billing" },
  { icon: <FiPackage />, label: "Stock", path: "/stock" },
  { icon: <FiBook />, label: "Khata", path: "/khata" },
  { icon: <FiTruck />, label: "Suppliers", path: "/suppliers" },
  { icon: <FiBarChart2 />, label: "Reports", path: "/reports" },
  { icon: <FiClock />, label: "History", path: "/history" },
  { icon: <FiSettings />, label: "Settings", path: "/settings" },
];

export default function Sidebar() {
  const navigate = useNavigate();

  // --- Local Storage Hydrated Theme Engine State ---
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("kirana_theme");
    // Defaulting to true (dark layout configuration) matching your screenshots
    return savedTheme ? savedTheme === "dark" : true;
  });

  // Watcher side-effect that handles appending the document element state dynamically
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("kirana_theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("kirana_theme", "light");
    }
  }, [isDarkMode]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="w-64 bg-[#0f131b] border-r border-gray-800 text-gray-400 dark:bg-[#0f131b] dark:border-gray-800 light:bg-white light:border-gray-200 min-h-screen flex flex-col shrink-0进 z-20 transition-colors duration-200">
      {/* Logo Header Unit */}
      <div className="p-6 border-b border-gray-800 dark:border-gray-800 light:border-gray-200">
        <h1 className="text-xl font-bold text-white dark:text-white light:text-gray-900">Smart Kirana</h1>
        <p className="text-gray-500 light:text-gray-400 text-sm">स्मार्ट किराना</p>
      </div>

      {/* Primary Scroll Menu */}
      <div className="flex-1 p-4">
        {menuItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-xl mb-2 text-sm font-medium transition-all ${
                isActive
                  ? "bg-teal-500 text-white"
                  : "text-gray-400 dark:text-gray-400 light:text-gray-600 hover:bg-gray-800 dark:hover:bg-gray-800 light:hover:bg-gray-100 dark:hover:text-white light:hover:text-gray-900"
              }`
            }
          >
            <span className="text-base">{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </div>

      {/* System Configurations Section */}
      <div className="p-4 border-t border-gray-800 dark:border-gray-800 light:border-gray-200 flex flex-col gap-1">
        {/* Active Theme Switching Button matches your layout request */}
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="flex items-center gap-3 text-sm font-medium text-gray-400 dark:text-gray-400 light:text-gray-600 hover:bg-gray-800 dark:hover:bg-gray-800 light:hover:bg-gray-100 dark:hover:text-white light:hover:text-gray-900 p-3 rounded-xl transition w-full text-left"
        >
          <span className="text-base">{isDarkMode ? <FiSun /> : <FiMoon />}</span>
          <div className="flex flex-col">
            <span className="leading-tight">Theme</span>
            <span className="text-[10px] text-gray-500 font-normal">
              {isDarkMode ? "Light / Dark" : "Dark / Light"}
            </span>
          </div>
        </button>

        {/* Action Logout Layout */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 text-sm font-medium text-gray-400 dark:text-gray-400 light:text-gray-600 hover:bg-gray-800 dark:hover:bg-gray-800 light:hover:bg-gray-100 dark:hover:text-white light:hover:text-red-600 p-3 rounded-xl transition w-full text-left"
        >
          <span className="text-base"><FiLogOut /></span>
          <div className="flex flex-col">
            <span className="leading-tight">Logout</span>
            <span className="text-[10px] text-gray-500 font-normal">बाहर जाएं</span>
          </div>
        </button>
      </div>
    </div>
  );
}