import { Search, BookOpen } from "lucide-react";

export default function PendingKhata({ customers = [] }) {
  const pendingCustomers = customers.filter(
    (customer) => customer.balance > 0
  );

  return (
    <div className="bg-[#141823] border border-[#252d3b] rounded-2xl p-6">

      <div className="flex items-center gap-2 mb-5">
        <BookOpen className="text-yellow-400" size={20} />
        <h2 className="text-2xl font-semibold text-white">
          Pending Udhaar
        </h2>
      </div>

      <div className="relative mb-5">
        <Search
          size={18}
          className="absolute left-4 top-3 text-gray-500"
        />

        <input
          placeholder="Search customer..."
          className="w-full h-11 pl-11 bg-[#0b0f14] border border-[#2b3243] rounded-xl text-white outline-none focus:border-teal-500"
        />
      </div>

      <div className="space-y-4 max-h-80 overflow-y-auto">

        {pendingCustomers.length === 0 ? (
          <div className="text-center py-16 text-gray-500">
            No pending khata.
          </div>
        ) : (
          pendingCustomers.map((customer) => (
            <div
              key={customer.id}
              className="flex justify-between items-center border-b border-[#252d3b] pb-3"
            >
              <div>
                <h3 className="text-white font-medium">
                  {customer.name}
                </h3>

                <p className="text-gray-500 text-sm">
                  {customer.phone}
                </p>
              </div>

              <span className="text-yellow-400 font-bold text-lg">
                ₹{customer.balance}
              </span>
            </div>
          ))
        )}

      </div>

    </div>
  );
}