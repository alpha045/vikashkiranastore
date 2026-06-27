export default function RecentBills() {
  return (
    <div className="bg-[#151922] rounded-2xl p-5">
      <h2 className="text-white text-lg font-semibold mb-4">
        Recent Bills
      </h2>

      <input
        placeholder="Search bill..."
        className="w-full bg-[#0f131b] border border-gray-700 rounded-lg px-4 py-2 text-white"
      />

      <div className="mt-5">
        <div className="flex justify-between">
          <div>
            <h3 className="text-white">
              Ramesh Kumar
            </h3>
            <p className="text-gray-400 text-sm">
              Bill #1
            </p>
          </div>

          <div className="text-right">
            <p className="text-white">₹38</p>

            <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs">
              Cash
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}