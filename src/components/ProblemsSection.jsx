
const problems = [
  {
    problem: "उधार दिया, भूल गए — पैसे गए",
    solution: "डिजिटल खाता में सब रिकॉर्ड, व्हाट्सएप रिमाइंडर ऑटोमैटिक",
  },
  {
    problem: "सामान खत्म, ग्राहक आया — शर्मिंदगी",
    solution: "लो स्टॉक अलर्ट पहले से मिलेगा, कभी आउट ऑफ स्टॉक नहीं",
  },
  {
    problem: "दिन भर काम किया, मुनाफा पता नहीं",
    solution: "हर दिन का प्रॉफिट, सेल, डिस्काउंट — सब एक जगह",
  },
  {
    problem: "बिल लिखने में समय लगता है, कतार लग जाती है",
    solution: "3 सेकंड में बिल तैयार, बारकोड स्कैन सपोर्ट",
  },
  {
    problem: "GST बिल बनाना मुश्किल, अकाउंटेंट पर निर्भर",
    solution: "GST बिल ऑटोमैटिक जनरेट, प्रिंट भी करो",
  },
  {
    problem: "पुराना रजिस्टर खो गया — सब डेटा गया",
    solution: "क्लाउड में सुरक्षित, कभी डेटा नहीं जाएगा",
  },
];

export default function ProblemsSection() {
  return (
    <section className="bg-[#050816] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
  <div className="p-1 text-center">
    <h3 className="text-3xl font-bold text-white">10,000+</h3>
    <p className="text-gray-400 mt-2">Dukaan Registered</p>
  </div>

  <div className="p-1 text-center">
    <h3 className="text-3xl font-bold text-white">₹50 Cr+</h3>
    <p className="text-gray-400 mt-2">Bills Generated</p>
  </div>

  <div className=" p-1 text-center">
    <h3 className="text-2xl font-bold text-white">2 Min</h3>
    <p className="text-gray-400 mt-1 ">Setup Time</p>
  </div>

  <div className="p-1 text-center">
    <h3 className="text-3xl font-bold text-white">Free</h3>
    <p className="text-gray-400 mt-2">Hamesha ke liye</p>
  </div>
</div>
        {/* Badge */}
        <div className="flex justify-center">
          <span className="px-4 py-2 rounded-full bg-white text-red-500 text-sm font-small">
            Real Problems
          </span>
        </div>

        {/* Heading */}
        <div className="text-center mt-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            ये समस्याएँ आपको भी होती हैं?
          </h2>

          <p className="text-gray-400 mt-4 text-sm">
            हर किराना दुकान वालों को ये समस्याएँ होती हैं - स्मार्ट किराना
            इन्हें हल करता है
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {problems.map((item, index) => (
            <div
              key={index}
              className="bg-[#0b1120] border border-[#1e293b] rounded-3xl p-6 hover:border-green-700 transition-all duration-300"
            >
              {/* Problem */}
              <div className="flex items-start gap-3 mb-6">
                <div className="w-8 h-8 rounded-full border border-red-500 flex items-center justify-center text-red-500 font-bold shrink-0">
                  ✕
                </div>

                <p className="text-gray-300 leading-relaxed">
                  {item.problem}
                </p>
              </div>

              {/* Solution */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-green-500 font-bold shrink-0">
                  ✓
                </div>

                <p className="text-white leading-relaxed">
                  {item.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}