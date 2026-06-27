import {
  Monitor,
  Smartphone,
  LogOut,
  ShieldCheck,
} from "lucide-react";

export default function DevicesCard() {
  const devices = [
    {
      id: 1,
      name: "MacBook Pro",
      browser: "Google Chrome",
      status: "Current Device",
      lastActive: "Active Now",
      icon: <Monitor size={22} />,
      current: true,
    },
    {
      id: 2,
      name: "Samsung Galaxy S24",
      browser: "Chrome Android",
      status: "Logged In",
      lastActive: "2 Hours Ago",
      icon: <Smartphone size={22} />,
      current: false,
    },
  ];

  return (
    <div className="bg-[#141823] border border-[#252d3b] rounded-2xl p-8">

      {/* Header */}

      <div className="mb-8">

        <div className="flex items-center gap-3">

          <ShieldCheck className="text-teal-400" />

          <h2 className="text-2xl font-bold text-white">
            Active Devices
          </h2>

        </div>

        <p className="text-gray-400 mt-2">
          Devices currently signed into your account.
        </p>

      </div>

      <div className="space-y-5">

        {devices.map((device) => (

          <div
            key={device.id}
            className="bg-[#0b0f14] border border-[#2d3545] rounded-xl p-5 flex justify-between items-center"
          >

            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400">
                {device.icon}
              </div>

              <div>

                <h3 className="text-white font-semibold">
                  {device.name}
                </h3>

                <p className="text-gray-400 text-sm">
                  {device.browser}
                </p>

                <p className="text-gray-500 text-sm">
                  {device.lastActive}
                </p>

              </div>

            </div>

            <div className="flex items-center gap-3">

              {device.current ? (
                <span className="px-3 py-1 rounded-full bg-green-900 text-green-400 text-sm">
                  Current
                </span>
              ) : (
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white transition">
                  <LogOut size={18} />
                  Logout
                </button>
              )}

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}