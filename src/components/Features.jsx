const features = [
  {
    title: "Instant Billing",
    subtitle: "फटाफट बिल बनाओ",
    description:
      "Cash, UPI या उधार — 3 सेकंड में बिल तैयार। बारकोड स्कैन भी।",
    icon: "🛒",
  },
  {
    title: "Digital Khata",
    subtitle: "डिजिटल खाता",
    description:
      "कौन कितना उधार लिया — सब ट्रैक करो। व्हाट्सएप रिमाइंडर भी।",
    icon: "📖",
  },
  {
    title: "Stock Alert",
    subtitle: "स्टॉक अलर्ट",
    description:
      "कौन सा सामान खत्म होने वाला है — पहले से पता चल जाएगा।",
    icon: "📦",
  },
  {
    title: "Daily Reports",
    subtitle: "रोज की रिपोर्ट",
    description:
      "आज कितना बिका, कितना मुनाफा हुआ — एक नजर में।",
    icon: "📊",
  },
  {
    title: "Thermal Print",
    subtitle: "थर्मल प्रिंट",
    description:
      "सीधा थर्मल प्रिंटर से बिल प्रिंट करो। पक्का रसीद दो।",
    icon: "🖨️",
  },
  {
    title: "Mobile First",
    subtitle: "मोबाइल पर चलाओ",
    description:
      "फोन पर भी, कंप्यूटर पर भी — कहीं से भी मैनेज करो।",
    icon: "📱",
  },
];

export default function Features() {
  return (
    <section className="bg-[#0b0f19] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Badge */}
        <div className="flex justify-center">
          <span className="px-4 py-1 rounded-full bg-cyan-100 text-cyan-600 text-sm font-medium">
            Features
          </span>
        </div>

        {/* Heading */}
        <div className="text-center mt-6">
          <h2 className="text-3xl font-bold text-white">
            सब कुछ एक जगह
          </h2>

          <p className="text-gray-400 mt-3 text-sm">
            अलग-अलग ऐप्स की जरूरत नहीं - बिलिंग से रिपोर्ट तक सब स्मार्ट किराना में
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#101522] border border-[#222b3d] rounded-3xl p-3  transition duration-300"
            >
              <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-2xl mb-5">
                {feature.icon}
              </div>

              <h3 className="text-white text-xl font-semibold">
                {feature.title}
              </h3>

              <p className="text-green-400 text-sm mt-1">
                {feature.subtitle}
              </p>

              <p className="text-gray-400 mt-4 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}