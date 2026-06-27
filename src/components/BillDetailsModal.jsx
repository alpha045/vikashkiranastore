import { X } from "lucide-react";

export default function BillDetailsModal({
  bill,
  onClose,
}) {
  if (!bill) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

      <div className="bg-[#141823] rounded-2xl w-137.5 border border-[#252d3b]">

        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-[#252d3b]">

          <h2 className="text-2xl font-bold text-white">
            {bill.billNo}
          </h2>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <X />
          </button>

        </div>

        {/* Body */}
        <div className="p-6 space-y-4">

          <div className="flex justify-between">
            <span className="text-gray-400">Customer</span>
            <span className="text-white">{bill.customer}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">Payment</span>
            <span className="text-white">{bill.payment}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">Date</span>
            <span className="text-white">
              {bill.date} {bill.time}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">Items</span>
            <span className="text-white">
              {bill.items}
            </span>
          </div>

          <div className="border-t border-[#252d3b] pt-4 flex justify-between">

            <span className="text-xl font-bold text-white">
              Total
            </span>

            <span className="text-2xl font-bold text-teal-400">
              ₹{bill.total}
            </span>

          </div>

        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 p-6 border-t border-[#252d3b]">

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-gray-700 text-white"
          >
            Close
          </button>

          <button
            className="px-5 py-2 rounded-lg bg-teal-500 hover:bg-teal-600 text-white"
          >
            Print Bill
          </button>

        </div>

      </div>

    </div>
  );
}