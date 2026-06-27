import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import SupplierCard from "../components/SupplierCard";
import SearchSupplier from "../components/SearchSupplier";
import AddSupplierModal from "../components/AddSupplierModal";
import { Plus } from "lucide-react";

export default function Suppliers() {
  const [suppliers, setSuppliers] = useState([]);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("suppliers"));

    if (saved) {
      setSuppliers(saved);
    } else {
      const demoSuppliers = [
        {
          id: 1,
          name: "ABC Traders",
          phone: "9876543210",
          company: "ABC Foods",
          balance: 5200,
        },
        {
          id: 2,
          name: "Fresh Dairy",
          phone: "9123456780",
          company: "Fresh Dairy Pvt Ltd",
          balance: 0,
        },
      ];

      setSuppliers(demoSuppliers);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "suppliers",
      JSON.stringify(suppliers)
    );
  }, [suppliers]);

  const addSupplier = (supplier) => {
    setSuppliers((prev) => [...prev, supplier]);
  };

  const deleteSupplier = (id) => {
    if (!window.confirm("Delete this supplier?")) return;

    setSuppliers((prev) =>
      prev.filter((supplier) => supplier.id !== id)
    );
  };

  const filteredSuppliers = suppliers.filter((supplier) => {
    return (
      supplier.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      supplier.phone.includes(search) ||
      supplier.company
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  });

  return (
    <div className="flex min-h-screen bg-[#0b0f14]">
      <Sidebar />

      <div className="flex-1 p-8">

        <div className="flex justify-between items-start">

          <div>
            <h1 className="text-5xl font-bold text-white">
              Suppliers
              <span className="text-gray-400">
                {" "}
                (सप्लायर)
              </span>
            </h1>

            <p className="text-gray-400 mt-2 text-lg">
              {suppliers.length} Suppliers
            </p>
          </div>

          <div className="flex gap-4">

            <SearchSupplier
              search={search}
              setSearch={setSearch}
            />

            <button
              onClick={() => setOpen(true)}
              className="bg-teal-500 hover:bg-teal-600 text-white rounded-xl px-6 flex items-center gap-2"
            >
              <Plus size={20} />
              Add Supplier
            </button>

          </div>

        </div>

        <div className="mt-10 space-y-5">

          {filteredSuppliers.length === 0 ? (
            <div className="text-center text-gray-400 py-20">
              No supplier found.
            </div>
          ) : (
            filteredSuppliers.map((supplier) => (
              <SupplierCard
                key={supplier.id}
                supplier={supplier}
                onDelete={deleteSupplier}
              />
            ))
          )}

        </div>

      </div>

      <AddSupplierModal
        open={open}
        onClose={() => setOpen(false)}
        onSave={addSupplier}
      />
    </div>
  );
}