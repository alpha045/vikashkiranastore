export default function StatCard({
  title,
  value,
  subtitle,
  color
}) {
  return (
    <div
      className={`rounded-2xl p-5 ${color}`}
    >
      <h3 className="text-gray-300 text-sm">
        {title}
      </h3>

      <h2 className="text-4xl font-bold mt-4 text-white">
        {value}
      </h2>

      <p className="text-gray-300 mt-3">
        {subtitle}
      </p>
    </div>
  );
}