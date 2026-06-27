import { Trash2, ChevronRight } from "lucide-react";

export default function CustomerCard({
  customer,
  onDelete,
}) {
  return (
    <div className="bg-[#141823] border border-[#252d3b] rounded-xl p-5 hover:border-teal-500 transition duration-300">

      <div className="flex justify-between items-center">

        {/* Left */}
        <div className="flex items-center gap-4">

          <div className="w-14 h-14 rounded-full bg-teal-500 flex items-center justify-center text-xl font-bold text-white">
            {customer.name.charAt(0).toUpperCase()}
          </div>

          <div>
            <h2 className="text-white text-lg font-semibold">
              {customer.name}
            </h2>

            <p className="text-gray-400">
              {customer.phone}
            </p>
          </div>

        </div>

        {/* Right */}
        <div className="flex items-center gap-6">

          <div className="text-right">

            <p className="text-gray-400 text-sm">
              Outstanding
            </p>

            {customer.balance > 0 ? (
              <h2 className="text-yellow-400 text-2xl font-bold">
                ₹{customer.balance}
              </h2>
            ) : (
              <h2 className="text-green-400 text-xl font-semibold">
                Clear
              </h2>
            )}

          </div>

          <button
            onClick={() => onDelete(customer.id)}
            className="text-red-500 hover:text-red-400"
          >
            <Trash2 size={20} />
          </button>

          <button className="text-gray-400 hover:text-white">
            <ChevronRight size={22} />
          </button>

        </div>

      </div>

    </div>
  );
}