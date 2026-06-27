import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function AddSupplierModal({
  open,
  onClose,
  onSave,
}) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [balance, setBalance] = useState("");

  useEffect(() => {
    if (open) {
      setName("");
      setCompany("");
      setPhone("");
      setBalance("");
    }
  }, [open]);

  if (!open) return null;

  const handleSave = () => {
    if (!name.trim()) {
      alert("Supplier name is required");
      return;
    }

    if (!company.trim()) {
      alert("Company name is required");
      return;
    }

    if (phone.length !== 10) {
      alert("Phone number must be 10 digits");
      return;
    }

    onSave({
      id: Date.now(),
      name,
      company,
      phone,
      balance: Number(balance) || 0,
      transactions: [],
      createdAt: new Date().toISOString(),
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">

      <div className="w-125 bg-[#141823] rounded-2xl border border-gray-700">

        {/* Header */}

        <div className="flex justify-between items-center p-6 border-b border-gray-700">

          <h2 className="text-2xl font-bold text-white">
            Add Supplier
          </h2>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <X size={22} />
          </button>

        </div>

        {/* Body */}

        <div className="p-6 space-y-5">

          <div>
            <label className="text-gray-400 text-sm">
              Supplier Name
            </label>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter supplier name"
              className="mt-2 w-full bg-[#0b0f14] border border-gray-700 rounded-lg p-3 text-white outline-none focus:border-teal-500"
            />
          </div>

          <div>
            <label className="text-gray-400 text-sm">
              Company Name
            </label>

            <input
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Company name"
              className="mt-2 w-full bg-[#0b0f14] border border-gray-700 rounded-lg p-3 text-white outline-none focus:border-teal-500"
            />
          </div>

          <div>
            <label className="text-gray-400 text-sm">
              Phone Number
            </label>

            <input
              value={phone}
              maxLength={10}
              onChange={(e) =>
                setPhone(e.target.value.replace(/\D/g, ""))
              }
              placeholder="9876543210"
              className="mt-2 w-full bg-[#0b0f14] border border-gray-700 rounded-lg p-3 text-white outline-none focus:border-teal-500"
            />
          </div>

          <div>
            <label className="text-gray-400 text-sm">
              Opening Balance
            </label>

            <input
              type="number"
              value={balance}
              onChange={(e) => setBalance(e.target.value)}
              placeholder="0"
              className="mt-2 w-full bg-[#0b0f14] border border-gray-700 rounded-lg p-3 text-white outline-none focus:border-teal-500"
            />
          </div>

        </div>

        {/* Footer */}

        <div className="border-t border-gray-700 p-6 flex justify-end gap-3">

          <button
            onClick={onClose}
            className="px-5 py-2 border border-gray-600 rounded-lg text-gray-300 hover:bg-gray-700"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="px-5 py-2 rounded-lg bg-teal-500 hover:bg-teal-600 text-white font-semibold"
          >
            Save Supplier
          </button>

        </div>

      </div>

    </div>
  );
}