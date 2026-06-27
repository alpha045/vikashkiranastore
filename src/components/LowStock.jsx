export default function LowStock() {
  return (
    <div className="bg-[#151922] rounded-2xl p-5">
      <h2 className="text-red-400 text-lg font-semibold mb-4">
        Low Stock
      </h2>

      <input
        placeholder="Search Product..."
        className="w-full bg-[#0f131b] border border-gray-700 rounded-lg px-4 py-2 text-white"
      />

      <div className="mt-5">
        <h3 className="text-white">
          Parle G Carton
        </h3>

        <p className="text-yellow-400 mt-2">
          1 carton left
        </p>
      </div>
    </div>
  );
}