import { ReceiptText } from "lucide-react";

export default function GSTSettingsCard({
  settings,
  setSettings,
}) {
  const handleChange = (field, value) => {
    setSettings((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="bg-[#141823] border border-[#252d3b] rounded-2xl p-8">

      {/* Heading */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">
          GST Settings
        </h2>

        <p className="text-gray-400 mt-1">
          Configure GST for billing and invoices
        </p>
      </div>

      <div className="space-y-6">

        {/* GST Toggle */}
        <div className="flex items-center justify-between">

          <div>
            <h3 className="text-white font-semibold text-lg">
              Enable GST
            </h3>

            <p className="text-gray-400 text-sm">
              Apply GST to all invoices
            </p>
          </div>

          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={settings.gstEnabled}
              onChange={(e) =>
                handleChange("gstEnabled", e.target.checked)
              }
              className="sr-only peer"
            />

            <div className="w-12 h-7 bg-gray-700 rounded-full peer peer-checked:bg-teal-500 transition"></div>

            <div className="absolute left-1 top-1 bg-white w-5 h-5 rounded-full transition peer-checked:translate-x-5"></div>

          </label>

        </div>

        {/* GST Number */}

        <div>
          <label className="block text-gray-300 mb-2">
            GST Number
          </label>

          <div className="relative">

            <ReceiptText
              className="absolute left-4 top-3.5 text-gray-500"
              size={20}
            />

            <input
              type="text"
              value={settings.gstNumber}
              disabled={!settings.gstEnabled}
              onChange={(e) =>
                handleChange("gstNumber", e.target.value)
              }
              placeholder="22AAAAA0000A1Z5"
              className={`w-full h-12 pl-12 pr-4 rounded-xl border outline-none transition
              ${
                settings.gstEnabled
                  ? "bg-[#0b0f14] border-[#2d3545] text-white focus:border-teal-500"
                  : "bg-gray-800 border-gray-700 text-gray-500 cursor-not-allowed"
              }`}
            />

          </div>
        </div>

      </div>

    </div>
  );
}