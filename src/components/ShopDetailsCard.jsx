import {
  Store,
  User,
  MapPin,
  Phone,
  IndianRupee,
} from "lucide-react";

export default function ShopDetailsCard({
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
          Shop Details
        </h2>

        <p className="text-gray-400 mt-1">
          Basic information about your shop
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">

        {/* Shop Name */}
        <div>
          <label className="text-gray-300 mb-2 block">
            Shop Name
          </label>

          <div className="relative">
            <Store
              className="absolute left-4 top-3.5 text-gray-500"
              size={20}
            />

            <input
              type="text"
              value={settings.shopName}
              onChange={(e) =>
                handleChange("shopName", e.target.value)
              }
              placeholder="Smart Kirana Store"
              className="w-full bg-[#0b0f14] border border-[#2d3545] rounded-xl h-12 pl-12 pr-4 text-white outline-none focus:border-teal-500"
            />
          </div>
        </div>

        {/* Owner */}
        <div>
          <label className="text-gray-300 mb-2 block">
            Owner Name
          </label>

          <div className="relative">
            <User
              className="absolute left-4 top-3.5 text-gray-500"
              size={20}
            />

            <input
              type="text"
              value={settings.ownerName}
              onChange={(e) =>
                handleChange("ownerName", e.target.value)
              }
              placeholder="Owner Name"
              className="w-full bg-[#0b0f14] border border-[#2d3545] rounded-xl h-12 pl-12 pr-4 text-white outline-none focus:border-teal-500"
            />
          </div>
        </div>

        {/* Address */}
        <div className="lg:col-span-2">
          <label className="text-gray-300 mb-2 block">
            Shop Address
          </label>

          <div className="relative">
            <MapPin
              className="absolute left-4 top-4 text-gray-500"
              size={20}
            />

            <textarea
              rows={3}
              value={settings.address}
              onChange={(e) =>
                handleChange("address", e.target.value)
              }
              placeholder="Enter shop address"
              className="w-full bg-[#0b0f14] border border-[#2d3545] rounded-xl pt-3 pl-12 pr-4 text-white outline-none focus:border-teal-500 resize-none"
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label className="text-gray-300 mb-2 block">
            Phone Number
          </label>

          <div className="relative">
            <Phone
              className="absolute left-4 top-3.5 text-gray-500"
              size={20}
            />

            <input
              type="tel"
              value={settings.phone}
              onChange={(e) =>
                handleChange("phone", e.target.value)
              }
              placeholder="9876543210"
              className="w-full bg-[#0b0f14] border border-[#2d3545] rounded-xl h-12 pl-12 pr-4 text-white outline-none focus:border-teal-500"
            />
          </div>
        </div>

        {/* Currency */}
        <div>
          <label className="text-gray-300 mb-2 block">
            Currency Symbol
          </label>

          <div className="relative">
            <IndianRupee
              className="absolute left-4 top-3.5 text-gray-500"
              size={20}
            />

            <input
              type="text"
              value={settings.currency}
              onChange={(e) =>
                handleChange("currency", e.target.value)
              }
              placeholder="₹"
              className="w-full bg-[#0b0f14] border border-[#2d3545] rounded-xl h-12 pl-12 pr-4 text-white outline-none focus:border-teal-500"
            />
          </div>
        </div>

      </div>

    </div>
  );
}