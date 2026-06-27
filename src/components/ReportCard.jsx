import { ArrowUpRight } from "lucide-react";

export default function ReportCard({
  title,
  subtitle,
  value,
  footer,
  icon,
  color,
}) {
  return (
    <div
      className={`rounded-2xl border p-6 ${color} transition hover:scale-[1.02]`}
    >
      <div className="flex justify-between items-start">

        <div>

          <p className="uppercase text-sm font-semibold text-gray-300 tracking-wide">
            {title}
          </p>

          <p className="text-sm text-gray-400 mt-1">
            {subtitle}
          </p>

        </div>

        <div className="text-gray-300">
          {icon || <ArrowUpRight size={22} />}
        </div>

      </div>

      <h2 className="text-4xl font-bold text-white mt-8">
        {value}
      </h2>

      <p className="text-gray-300 mt-3">
        {footer}
      </p>

    </div>
  );
}