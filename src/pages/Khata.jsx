import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import CustomerCard from "../components/CustomerCard";
import SearchBar from "../components/SearchBar";
import AddCustomerModal from "../components/AddCustomerModal";
import { Plus } from "lucide-react";

export default function Khata() {
  const [customers, setCustomers] = useState([]);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("customers"));

    if (saved) {
      setCustomers(saved);
    } else {
      const demoCustomers = [
        {
          id: Date.now(),
          name: "Ramesh Kumar",
          phone: "9876543210",
          balance: 450,
        },
        {
          id: Date.now() + 1,
          name: "Sunita Devi",
          phone: "9123456780",
          balance: 0,
        },
      ];

      setCustomers(demoCustomers);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "customers",
      JSON.stringify(customers)
    );
  }, [customers]);

  const addCustomer = (customer) => {
    setCustomers((prev) => [...prev, customer]);
  };

  const deleteCustomer = (id) => {
    if (!window.confirm("Delete this customer?")) return;

    setCustomers((prev) =>
      prev.filter((customer) => customer.id !== id)
    );
  };

  const filteredCustomers = customers.filter((customer) => {
    return (
      customer.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      customer.phone.includes(search)
    );
  });

  return (
    <div className="flex min-h-screen bg-[#0b0f14]">
      <Sidebar />

      <div className="flex-1 p-8">

        <div className="flex justify-between items-start">

          <div>
            <h1 className="text-5xl font-bold text-white">
              Khata
              <span className="text-gray-400">
                {" "}
                (खाता)
              </span>
            </h1>

            <p className="text-gray-400 mt-2 text-lg">
              {customers.length} Customers
            </p>
          </div>

          <div className="flex gap-4">

            <SearchBar
              search={search}
              setSearch={setSearch}
            />

            <button
              onClick={() => setOpen(true)}
              className="bg-teal-500 hover:bg-teal-600 text-white rounded-xl px-6 flex items-center gap-2"
            >
              <Plus size={20} />
              Add Customer
            </button>

          </div>

        </div>

        <div className="mt-10 space-y-5">

          {filteredCustomers.length === 0 ? (
            <div className="text-center text-gray-400 py-20">
              No customer found.
            </div>
          ) : (
            filteredCustomers.map((customer) => (
              <CustomerCard
                key={customer.id}
                customer={customer}
                onDelete={deleteCustomer}
              />
            ))
          )}

        </div>

      </div>

      <AddCustomerModal
        open={open}
        onClose={() => setOpen(false)}
        onSave={addCustomer}
      />

    </div>
  );
}