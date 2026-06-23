const Hero = () => {
  return (
    <section
      className="relative min-h-237.5 text-center overflow-visible"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1542838132-92c53300491e')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      
      <div className="absolute inset-0 bg-black/70"></div>

      
      <div className="relative z-10 pt-40 max-w-5xl mx-auto">

        <span className="bg-gray-600/80 px-5 py-2 rounded-full text-sm">
          🇮🇳 India ke Kirana Shops ke liye
        </span>

        <h1 className="text-6xl font-bold mt-5">
          Apni Dukaan Ko
          <span className="text-[#0ab1a3]"> Smart </span>
          Banao
        </h1>

        <h3 className="text-xl font-semibold mt-3">
          Billing, Khata, Stock, Reports — sab ek app mein.
        </h3>

        <p className="mt-1 text-lg text-gray-300">
          आज से ही अपनी दुकान का हिसाब डिजिटल करो। बिलकुल फ्री.
        </p>

        <div className="mt-3 flex justify-center gap-3">
          <button className="bg-[#0ab1a3] px-8 py-4 rounded-xl">
            Free Mein Shuru Karein
          </button>

          <button className="border border-gray-500 px-8 py-4 rounded-xl">
            Login Karein
          </button>
        </div>

        <p className="mt-3 text-gray-300">
          No credit card · 2 minute setup · Mobile friendly
        </p>
      </div>

      {/* Floating Image */}
      <div
        className="
        absolute
        left-1/2
        -translate-x-1/2
        -bottom-1.25
        z-15
        "
      >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt=""
          className="
          w-225
          rounded-3xl
          shadow-2xl
          border
          border-slate-700
          "
        />
      </div>
    </section>
  );
};

export default Hero;