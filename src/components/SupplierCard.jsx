import { Trash2, ChevronRight, Building2 } from "lucide-react";

export default function SupplierCard({
  supplier,
  onDelete,
}) {
  return (
    <div className="bg-[#141823] border border-[#252d3b] rounded-xl p-5 hover:border-teal-500 transition-all duration-300">

      <div className="flex justify-between items-center">

        {/* Left Side */}
        <div className="flex items-center gap-4">

          <div className="w-14 h-14 rounded-full bg-teal-500 flex items-center justify-center text-white">
            <Building2 size={24} />
          </div>

          <div>
            <h2 className="text-white text-lg font-semibold">
              {supplier.name}
            </h2>

            <p className="text-gray-400">
              {supplier.company}
            </p>

            <p className="text-gray-500 text-sm">
              {supplier.phone}
            </p>
          </div>

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">

          <div className="text-right">

            <p className="text-gray-400 text-sm">
              Outstanding
            </p>

            {supplier.balance > 0 ? (
              <h2 className="text-yellow-400 text-2xl font-bold">
                ₹{supplier.balance}
              </h2>
            ) : (
              <h2 className="text-green-400 text-lg font-semibold">
                Paid
              </h2>
            )}

          </div>

          <button
            onClick={() => onDelete(supplier.id)}
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