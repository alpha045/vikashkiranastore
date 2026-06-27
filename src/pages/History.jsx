import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import SearchHistory from "../components/SearchHistory";
import HistoryCard from "../components/HistoryCard";

export default function History() {
  const [bills, setBills] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const savedBills = JSON.parse(localStorage.getItem("bills"));

    if (savedBills) {
      setBills(savedBills);
    } else {
      const demoBills = [
        {
          id: 1,
          billNo: "Bill #1",
          customer: "Ramesh Kumar",
          date: "25 May 2026",
          time: "03:00 PM",
          payment: "Cash",
          total: 38,
          items: 2,
        },
      ];

      setBills(demoBills);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("bills", JSON.stringify(bills));
  }, [bills]);

  const filteredBills = bills.filter((bill) => {
    return (
      bill.billNo.toLowerCase().includes(search.toLowerCase()) ||
      bill.customer.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="flex min-h-screen bg-[#0b0f14]">
      <Sidebar />

      <div className="flex-1 p-8">

        {/* Header */}

        <h1 className="text-5xl font-bold text-white">
          Bill History & Returns
        </h1>

        <p className="text-gray-400 mt-2">
          Purane bills dekhein aur items return karein.
        </p>

        {/* Search */}

        <div className="mt-8">
          <SearchHistory
            search={search}
            setSearch={setSearch}
          />
        </div>

        {/* Bills */}

        <div className="mt-6 space-y-5">

          {filteredBills.length === 0 ? (
            <div className="text-center py-20 text-gray-500">
              No Bills Found
            </div>
          ) : (
            filteredBills.map((bill) => (
              <HistoryCard
                key={bill.id}
                bill={bill}
              />
            ))
          )}

        </div>

      </div>
    </div>
  );
}