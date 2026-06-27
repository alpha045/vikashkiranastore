export default function ExpiryAlert() {
  const items = [
    {
      name: "Amul Taaza Milk",
      days: 2,
    },
    {
      name: "Britannia Bread",
      days: 5,
    },
    {
      name: "Paneer",
      days: 12,
    },
  ];

  return (
    <div className="bg-[#151922] rounded-2xl p-5">
      <h2 className="text-yellow-400 text-lg font-semibold mb-5">
        Expiring Soon
      </h2>

      {items.map((item, i) => (
        <div
          key={i}
          className="border-b border-gray-700 py-4"
        >
          <h3 className="text-white">
            {item.name}
          </h3>

          <span className="inline-block mt-2 px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-sm">
            {item.days} days left
          </span>
        </div>
      ))}
    </div>
  );
}