import { MessageCircle } from "lucide-react";

export default function WhatsAppCard({
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
          WhatsApp Settings
        </h2>

        <p className="text-gray-400 mt-1">
          Configure WhatsApp notifications and invoice sharing.
        </p>
      </div>

      <div className="space-y-6">

        {/* WhatsApp Number */}
        <div>
          <label className="block text-gray-300 mb-2">
            WhatsApp Number
          </label>

          <div className="relative">

            <MessageCircle
              size={20}
              className="absolute left-4 top-3.5 text-gray-500"
            />

            <input
              type="tel"
              value={settings.whatsapp}
              onChange={(e) =>
                handleChange(
                  "whatsapp",
                  e.target.value.replace(/\D/g, "")
                )
              }
              placeholder="9876543210"
              className="w-full h-12 bg-[#0b0f14] border border-[#2d3545] rounded-xl pl-12 pr-4 text-white outline-none focus:border-teal-500"
            />

          </div>
        </div>

        {/* Send Invoice */}
        <div className="flex items-center justify-between">

          <div>
            <h3 className="text-white font-semibold">
              Send Invoice on WhatsApp
            </h3>

            <p className="text-gray-400 text-sm">
              Automatically send invoice after billing.
            </p>
          </div>

          <label className="relative inline-flex items-center cursor-pointer">

            <input
              type="checkbox"
              checked={settings.sendInvoice}
              onChange={(e) =>
                handleChange(
                  "sendInvoice",
                  e.target.checked
                )
              }
              className="sr-only peer"
            />

            <div className="w-12 h-7 bg-gray-700 rounded-full peer-checked:bg-green-500 transition"></div>

            <div className="absolute left-1 top-1 bg-white w-5 h-5 rounded-full transition peer-checked:translate-x-5"></div>

          </label>

        </div>

        {/* Payment Reminder */}

        <div className="flex items-center justify-between">

          <div>
            <h3 className="text-white font-semibold">
              Payment Reminder
            </h3>

            <p className="text-gray-400 text-sm">
              Send reminder to Khata customers.
            </p>
          </div>

          <label className="relative inline-flex items-center cursor-pointer">

            <input
              type="checkbox"
              checked={settings.paymentReminder}
              onChange={(e) =>
                handleChange(
                  "paymentReminder",
                  e.target.checked
                )
              }
              className="sr-only peer"
            />

            <div className="w-12 h-7 bg-gray-700 rounded-full peer-checked:bg-green-500 transition"></div>

            <div className="absolute left-1 top-1 bg-white w-5 h-5 rounded-full transition peer-checked:translate-x-5"></div>

          </label>

        </div>

      </div>

    </div>
  );
}