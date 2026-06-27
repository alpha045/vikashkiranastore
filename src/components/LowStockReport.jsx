import { Search, AlertTriangle } from "lucide-react";

export default function LowStockReport({
  products = [],
}) {
  const lowStock = products.filter(
    (product) => product.quantity <= product.minStock
  );

  return (
    <div className="bg-[#141823] border border-[#252d3b] rounded-2xl p-6">

      <div className="flex items-center gap-2 mb-5">
        <AlertTriangle
          className="text-red-500"
          size={20}
        />

        <h2 className="text-2xl font-semibold text-red-400">
          Low Stock Alert
        </h2>
      </div>

      <div className="relative mb-5">

        <Search
          size={18}
          className="absolute left-4 top-3 text-gray-500"
        />

        <input
          placeholder="Search product..."
          className="w-full h-11 pl-11 bg-[#0b0f14] border border-[#2b3243] rounded-xl text-white outline-none focus:border-teal-500"
        />

      </div>

      <div className="space-y-4 max-h-80 overflow-y-auto">

        {lowStock.length === 0 ? (
          <div className="text-center py-16 text-gray-500">
            No low stock products.
          </div>
        ) : (
          lowStock.map((product) => (
            <div
              key={product.id}
              className="flex justify-between items-center border-b border-[#252d3b] pb-3"
            >
              <div>
                <h3 className="text-white font-medium">
                  {product.name}
                </h3>

                <p className="text-gray-500 text-sm">
                  {product.category}
                </p>
              </div>

              <span className="bg-yellow-900 text-yellow-300 px-3 py-1 rounded-full text-sm">
                {product.quantity} left
              </span>
            </div>
          ))
        )}

      </div>

    </div>
  );
}