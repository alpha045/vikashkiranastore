import { ChevronRight } from "lucide-react";

export default function HistoryCard({ bill }) {
  return (
    <div className="bg-[#141823] border border-[#252d3b] rounded-2xl p-6 hover:border-teal-500 transition">

      <div className="flex justify-between items-center">

        <div>

          <div className="flex items-center gap-3">

            <h2 className="text-2xl font-bold text-white">
              {bill.billNo}
            </h2>

            <span className="bg-green-900 text-green-400 px-3 py-1 rounded-full text-xs">
              {bill.payment.toUpperCase()}
            </span>

          </div>

          <p className="text-gray-400 mt-3">
            {bill.date}, {bill.time}
          </p>

          <p className="text-white mt-2">
            👤 {bill.customer}
          </p>

        </div>

        <div className="flex items-center gap-6">

          <div className="text-right">

            <h2 className="text-3xl font-bold text-teal-400">
              ₹{bill.total}
            </h2>

            <p className="text-gray-400">
              {bill.items} items
            </p>

          </div>

          <ChevronRight className="text-gray-500" />

        </div>

      </div>

    </div>
  );
}