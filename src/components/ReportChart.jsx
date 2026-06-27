import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export default function ReportChart({
  title,
  data,
  dataKey,
  emptyMessage,
}) {
  return (
    <div className="bg-[#141823] border border-[#252d3b] rounded-2xl p-6 h-87.5">

      <h2 className="text-2xl font-semibold text-white mb-6">
        {title}
      </h2>

      {data.length === 0 ? (
        <div className="flex items-center justify-center h-60 text-gray-500 text-lg">
          {emptyMessage}
        </div>
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>

            <CartesianGrid stroke="#2f3645" />

            <XAxis
              dataKey="date"
              stroke="#9ca3af"
            />

            <YAxis stroke="#9ca3af" />

            <Tooltip />

            <Line
              type="monotone"
              dataKey={dataKey}
              stroke="#14b8a6"
              strokeWidth={3}
            />

          </LineChart>
        </ResponsiveContainer>
      )}

    </div>
  );
}