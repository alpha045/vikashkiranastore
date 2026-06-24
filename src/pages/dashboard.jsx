import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import RecentBills from "../components/RecentBills";
import LowStock from "../components/LowStock";
import ExpiryAlert from "../components/ExpiryAlert";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();

      const formatted = now.toLocaleDateString("en-IN", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      });

      setCurrentDate(formatted);
    };

    updateDate();
    const interval = setInterval(updateDate, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex bg-[#0b0f14] min-h-screen">
      <Sidebar />

      <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold text-white">
          आज का हिसाब <span className="text-gray-400 text-lg">(Today's Dashboard)</span>
        </h1>

        <p className="text-teal-400 mt-2 font-medium">
          {currentDate}
        </p>

        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-5 mt-8">
          <StatCard
            title="Today's Sale"
            value="₹0"
            subtitle="0 Orders"
            color="bg-emerald-900"
          />

          <StatCard
            title="Today's Profit"
            value="₹0"
            subtitle="No Profit"
            color="bg-green-900"
          />

          <StatCard
            title="Pending Khata"
            value="₹2100"
            subtitle="3 Customers"
            color="bg-yellow-900"
          />

          <StatCard
            title="Low Stock"
            value="1"
            subtitle="Out Of Stock"
            color="bg-red-900"
          />

          <StatCard
            title="Expiry Alert"
            value="3"
            subtitle="Expiring Soon"
            color="bg-orange-900"
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mt-8">
          <RecentBills />
          <LowStock />
          <ExpiryAlert />
        </div>
      </div>
    </div>
  );
}