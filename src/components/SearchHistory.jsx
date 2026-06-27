import { Search } from "lucide-react";

export default function SearchHistory({
  search,
  setSearch,
}) {
  return (
    <div className="relative">

      <Search
        size={20}
        className="absolute left-4 top-3 text-gray-500"
      />

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by Bill # or Customer Name..."
        className="w-full h-12 rounded-xl bg-[#141823] border border-[#2b3243] pl-12 text-white outline-none focus:border-teal-500"
      />

    </div>
  );
}