import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

import ShopDetailsCard from "../components/ShopDetailsCard";
import GSTSettingsCard from "../components/GSTSettingsCard";
import WhatsAppCard from "../components/WhatsAppCard";
import PrinterCard from "../components/PrinterCard";
import DevicesCard from "../components/DevicesCard";

export default function Settings() {
  const defaultSettings = {
    shopName: "",
    ownerName: "",
    address: "",
    phone: "",
    currency: "₹",

    gstEnabled: false,
    gstNumber: "",

    whatsapp: "",

    sendInvoice: false,
    paymentReminder: false,

    printerName: "",
    printerIP: "",
    paperSize: "80mm",
    autoPrint: false,

    theme: "dark",
  };

  const [settings, setSettings] = useState(defaultSettings);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("settings"));

    if (saved) {
      setSettings(saved);
    }
  }, []);

  const saveSettings = () => {
    localStorage.setItem(
      "settings",
      JSON.stringify(settings)
    );

    alert("Settings Saved Successfully");
  };

  return (
    <div className="flex bg-[#0b0f14] min-h-screen">

      <Sidebar />

      <div className="flex-1 p-8 overflow-y-auto">

        <div className="mb-8">

          <h1 className="text-5xl font-bold text-white">
            Settings
          </h1>

          <p className="text-gray-400 mt-2">
            Configure your shop and application settings.
          </p>

        </div>

        <div className="space-y-8">

          <ShopDetailsCard
            settings={settings}
            setSettings={setSettings}
          />

          <GSTSettingsCard
            settings={settings}
            setSettings={setSettings}
          />

          <WhatsAppCard
            settings={settings}
            setSettings={setSettings}
          />

          <PrinterCard
            settings={settings}
            setSettings={setSettings}
          />

          <DevicesCard />

        </div>

        <button
          onClick={saveSettings}
          className="mt-10 w-full h-14 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-lg font-semibold"
        >
          Save All Settings
        </button>

      </div>

    </div>
  );
}