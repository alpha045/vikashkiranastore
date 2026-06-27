import { Search } from "lucide-react";

export default function SearchBar({
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
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search customer..."
        className="bg-[#141823] border border-[#252d3b] rounded-xl w-72 h-12 pl-12 text-white outline-none focus:border-teal-500"
      />

    </div>
  );
}