import { Search } from "lucide-react";

export default function SearchSupplier({
  search,
  setSearch,
}) {
  return (
    <div className="relative">

      <Search
        size={20}
        className="absolute left-4 top-3.5 text-gray-500"
      />

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search supplier..."
        className="w-80 h-12 pl-12 pr-4 rounded-xl bg-[#141823] border border-[#2b3243] text-white placeholder:text-gray-500 outline-none focus:border-teal-500 transition"
      />

    </div>
  );
}