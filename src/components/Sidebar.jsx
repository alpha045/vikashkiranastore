import {
  FiGrid,
  FiShoppingCart,
  FiPackage,
  FiBook,
  FiTruck,
  FiBarChart2,
  FiClock,
  FiSettings,
  FiLogOut
} from "react-icons/fi";

const menuItems = [
  { icon: <FiGrid />, label: "Dashboard" },
  { icon: <FiShoppingCart />, label: "Billing" },
  { icon: <FiPackage />, label: "Stock" },
  { icon: <FiBook />, label: "Khata" },
  { icon: <FiTruck />, label: "Suppliers" },
  { icon: <FiBarChart2 />, label: "Reports" },
  { icon: <FiClock />, label: "History" },
  { icon: <FiSettings />, label: "Settings" },
];

export default function Sidebar() {
  return (
    <div className="w-64 bg-[#0f131b] border-r border-gray-800 min-h-screen flex flex-col">
      <div className="p-6 border-b border-gray-800">
        <h1 className="text-xl font-bold text-white">
          Smart Kirana
        </h1>
        <p className="text-gray-500 text-sm">
          स्मार्ट किराना
        </p>
      </div>

      <div className="flex-1 p-4">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`w-full flex items-center gap-3 p-3 rounded-xl mb-2 transition
            ${
              index === 0
                ? "bg-teal-500 text-white"
                : "text-gray-400 hover:bg-gray-800"
            }`}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </div>

      <div className="p-4 border-t border-gray-800">
        <button className="flex items-center gap-3 text-gray-400">
          <FiLogOut />
          Logout
        </button>
      </div>
    </div>
  );
}