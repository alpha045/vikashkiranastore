const reviews = [
  {
    name: "Ramesh Kumar",
    store: "Ramesh General Store, Patna",
    review:
      "Pehle register mein likhta tha, ab phone se hi sab ho jata hai. Udhar track karna bahut easy ho gaya.",
    letter: "R",
  },
  {
    name: "Sunita Devi",
    store: "Sunita Kirana, Muzaffarpur",
    review:
      "WhatsApp reminder feature best hai! Customers khud payment kar dete hain ab.",
    letter: "S",
  },
  {
    name: "Mohan Lal",
    store: "Mohan Provision Store, Gaya",
    review:
      "Stock alert se kabhi saman khatam nahi hota. Bahut fayda hua business mein.",
    letter: "M",
  },
];

export default function ReviewsSection() {
  return (
    <section className="bg-[#0d111b] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm">
            Reviews
          </span>

          <h2 className="text-5xl font-bold text-white mt-6">
            दुकान वाले क्या कहते हैं
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-[#111622] border border-[#232c3f] rounded-3xl p-6"
            >
              <div className="text-yellow-400 text-xl">★★★★★</div>

              <p className="text-gray-300 mt-4 leading-relaxed">
                "{review.review}"
              </p>

              <div className="flex items-center gap-4 mt-6">
                <div className="w-10 h-10 rounded-full bg-[#0f2b35] text-cyan-400 flex items-center justify-center font-bold">
                  {review.letter}
                </div>

                <div>
                  <h4 className="text-white font-semibold">
                    {review.name}
                  </h4>
                  <p className="text-gray-500 text-sm">
                    {review.store}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}