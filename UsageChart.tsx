"use client";

import { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";
import {
  usageTodayHourly,
  usageWeekDaily,
  currentSnapshot,
  DEMO_LABEL,
} from "@/lib/demo-data";
import { FlaskConical } from "lucide-react";
import clsx from "clsx";

type Range = "today" | "7days";

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length || payload[0].value == null) return null;
  return (
    <div className="bg-white border border-surface-border rounded-lg shadow-panel px-3 py-2 text-xs">
      <p className="text-text-muted mb-0.5">{label}</p>
      <p className="font-bold text-text-primary">{payload[0].value} kW</p>
      <p className="text-text-muted text-[10px] mt-1 flex items-center gap-1">
        <FlaskConical size={9} /> {DEMO_LABEL}
      </p>
    </div>
  );
};

export default function UsageChart() {
  const [range, setRange] = useState<Range>("today");
  const data = range === "today" ? usageTodayHourly : usageWeekDaily;
  const safeKw = currentSnapshot.maxSafeKw;

  return (
    <div className="card p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-sm font-semibold text-text-primary">Usage Overview</h2>
          <p className="text-xs text-text-muted mt-0.5 flex items-center gap-1">
            <FlaskConical size={10} />
            {DEMO_LABEL} — simulated readings
          </p>
        </div>

        {/* Range tabs */}
        <div className="flex items-center gap-1 bg-surface-muted rounded-lg p-1">
          {(["today", "7days"] as Range[]).map((r) => (
            <button
              key={r}
              onClick={() => setRange(r)}
              className={clsx(
                "px-3 py-1 rounded-md text-xs font-medium transition-all duration-150",
                range === r
                  ? "bg-white text-text-primary shadow-sm"
                  : "text-text-muted hover:text-text-secondary"
              )}
            >
              {r === "today" ? "Today" : "7 Days"}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={data} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="usageGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#1565C0" stopOpacity={0.18} />
              <stop offset="100%" stopColor="#1565C0" stopOpacity={0.01} />
            </linearGradient>
            <linearGradient id="warningGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#D97706" stopOpacity={0.12} />
              <stop offset="100%" stopColor="#D97706" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" vertical={false} />

          <XAxis
            dataKey="time"
            tick={{ fontSize: 11, fill: "#94A3B8" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 11, fill: "#94A3B8" }}
            axisLine={false}
            tickLine={false}
            unit=" kW"
            domain={[0, range === "today" ? 6 : "auto"]}
          />

          <Tooltip content={<CustomTooltip />} cursor={{ stroke: "#1565C0", strokeWidth: 1, strokeDasharray: "4 2" }} />

          {/* Safe threshold line */}
          {range === "today" && (
            <ReferenceLine
              y={safeKw}
              stroke="#D97706"
              strokeDasharray="5 3"
              strokeWidth={1.5}
              label={{
                value: `Safe limit ${safeKw} kW`,
                position: "insideTopRight",
                fontSize: 10,
                fill: "#D97706",
                dy: -4,
              }}
            />
          )}

          <Area
            type="monotone"
            dataKey="kw"
            stroke="#1565C0"
            strokeWidth={2}
            fill="url(#usageGrad)"
            dot={false}
            activeDot={{ r: 4, fill: "#1565C0", stroke: "#fff", strokeWidth: 2 }}
            connectNulls={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
