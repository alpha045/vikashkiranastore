import { Printer } from "lucide-react";

export default function PrinterCard({
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

      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">
          Printer Settings
        </h2>

        <p className="text-gray-400 mt-1">
          Configure your billing printer.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">

        {/* Printer Name */}
        <div>
          <label className="block text-gray-300 mb-2">
            Printer Name
          </label>

          <div className="relative">

            <Printer
              size={20}
              className="absolute left-4 top-3.5 text-gray-500"
            />

            <input
              type="text"
              value={settings.printerName}
              onChange={(e) =>
                handleChange("printerName", e.target.value)
              }
              placeholder="Epson TM-T82"
              className="w-full h-12 bg-[#0b0f14] border border-[#2d3545] rounded-xl pl-12 pr-4 text-white outline-none focus:border-teal-500"
            />

          </div>
        </div>

        {/* Printer IP */}
        <div>
          <label className="block text-gray-300 mb-2">
            Printer IP Address
          </label>

          <input
            type="text"
            value={settings.printerIP}
            onChange={(e) =>
              handleChange("printerIP", e.target.value)
            }
            placeholder="192.168.1.100"
            className="w-full h-12 bg-[#0b0f14] border border-[#2d3545] rounded-xl px-4 text-white outline-none focus:border-teal-500"
          />
        </div>

        {/* Paper Size */}
        <div>
          <label className="block text-gray-300 mb-2">
            Paper Size
          </label>

          <select
            value={settings.paperSize}
            onChange={(e) =>
              handleChange("paperSize", e.target.value)
            }
            className="w-full h-12 bg-[#0b0f14] border border-[#2d3545] rounded-xl px-4 text-white outline-none focus:border-teal-500"
          >
            <option value="58mm">58 mm</option>
            <option value="80mm">80 mm</option>
          </select>
        </div>

        {/* Auto Print */}
        <div className="flex items-center justify-between rounded-xl border border-[#2d3545] px-5 py-4">

          <div>
            <h3 className="text-white font-semibold">
              Auto Print
            </h3>

            <p className="text-gray-400 text-sm">
              Print bill automatically after billing.
            </p>
          </div>

          <label className="relative inline-flex items-center cursor-pointer">

            <input
              type="checkbox"
              checked={settings.autoPrint}
              onChange={(e) =>
                handleChange("autoPrint", e.target.checked)
              }
              className="sr-only peer"
            />

            <div className="w-12 h-7 bg-gray-700 rounded-full peer-checked:bg-teal-500 transition"></div>

            <div className="absolute left-1 top-1 w-5 h-5 rounded-full bg-white transition peer-checked:translate-x-5"></div>

          </label>

        </div>

      </div>

    </div>
  );
}