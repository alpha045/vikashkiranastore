import Sidebar from "../components/Sidebar";
import ReportCard from "../components/ReportCard";
import ReportChart from "../components/ReportChart";
import PendingKhata from "../components/PendingKhata";
import LowStockReport from "../components/LowStockReport";

import {
  IndianRupee,
  BookOpen,
  AlertTriangle,
  Calendar,
} from "lucide-react";

export default function Reports() {
  // Temporary chart data
  const salesData = [];
  const profitData = [];

  // Load data from localStorage
  const customers =
    JSON.parse(localStorage.getItem("customers")) || [];

  const products =
    JSON.parse(localStorage.getItem("products")) || [];

  return (
    <div className="flex min-h-screen bg-[#0b0f14]">
      <Sidebar />

      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-5xl font-bold text-white">
              Reports
            </h1>

            <p className="text-gray-400 mt-2">
              Sales, Profit, Khata aur Stock ka overview.
            </p>
          </div>

          <button className="flex items-center gap-3 px-5 py-3 rounded-xl border border-gray-700 bg-[#141823] text-white">
            <Calendar size={20} />
            10 Jun - 24 Jun 2026
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mt-10">
          <ReportCard
            title="Total Revenue"
            subtitle="Selected Period"
            value="₹0"
            footer="No Sales Yet"
            icon={<IndianRupee />}
            color="bg-emerald-900/40 border border-emerald-700"
          />

          <ReportCard
            title="Total Profit"
            subtitle="Estimated Margin"
            value="₹0"
            footer="0% Margin"
            color="bg-green-900/40 border border-green-700"
          />

          <ReportCard
            title="Pending Khata"
            subtitle="Customer Dues"
            value="₹2100"
            footer="3 Customers"
            icon={<BookOpen />}
            color="bg-yellow-900/40 border border-yellow-700"
          />

          <ReportCard
            title="Low Stock"
            subtitle="Needs Purchase"
            value="1"
            footer="0 Out of Stock"
            icon={<AlertTriangle />}
            color="bg-red-900/40 border border-red-700"
          />
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-6 mt-8">
          <ReportChart
            title="Daily Sales Trend"
            data={salesData}
            dataKey="sales"
            emptyMessage="Is period mein koi sales nahi."
          />

          <ReportChart
            title="Profit Trend"
            data={profitData}
            dataKey="profit"
            emptyMessage="Is period mein koi profit data nahi."
          />
        </div>

        {/* Bottom Section */}
        <div className="grid lg:grid-cols-2 gap-6 mt-8">
          <PendingKhata customers={customers} />

          <LowStockReport products={products} />
        </div>
      </div>
    </div>
  );
}