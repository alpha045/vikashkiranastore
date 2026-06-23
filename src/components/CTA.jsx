const CTASection = () => {
  return (
    <section
      className="py-24 bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1542838132-92c53300491e')",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 text-center">
        <h2 className="text-3xl font-bold text-white">
          आज से ही शुरू करो
        </h2>

        <p className="text-gray-300 mt-3 text-sm">
          हजारों किराना दुकान वाले पहले से ही उपयोग कर रहे हैं।
        </p>

        <div className="flex justify-center gap-2 mt-4">
          <button className="bg-[#20C7BF] px-4 py-2 rounded-xl text-white font-semibold">
            Free में Register करें
          </button>

          <button className="border border-white/20 px-4 py-2 rounded-xl text-white">
            Login करें
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;