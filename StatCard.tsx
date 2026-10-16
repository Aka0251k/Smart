import { type LucideIcon } from "lucide-react";
import clsx from "clsx";

interface StatCardProps {
  title: string;
  value: string;
  sub?: string;
  icon: LucideIcon;
  iconColor?: string;
  iconBg?: string;
  badge?: React.ReactNode;
  trend?: { value: string; positive: boolean };
}

export default function StatCard({
  title,
  value,
  sub,
  icon: Icon,
  iconColor = "text-brand-blue",
  iconBg = "bg-brand-blueLight",
  badge,
  trend,
}: StatCardProps) {
  return (
    <div className="card p-4 flex flex-col gap-3">
      <div className="flex items-start justify-between gap-2">
        <div className={clsx("p-2 rounded-lg", iconBg)}>
          <Icon size={18} className={iconColor} />
        </div>
        {badge}
      </div>

      <div>
        <p className="text-xs font-medium text-text-muted mb-1">{title}</p>
        <p className="text-2xl font-bold text-text-primary tracking-tight leading-none">
          {value}
        </p>
        {(sub || trend) && (
          <div className="flex items-center gap-2 mt-1.5">
            {trend && (
              <span
                className={clsx(
                  "text-xs font-semibold",
                  trend.positive ? "text-brand-green" : "text-brand-amber"
                )}
              >
                {trend.positive ? "↑" : "↓"} {trend.value}
              </span>
            )}
            {sub && <span className="text-xs text-text-muted">{sub}</span>}
          </div>
        )}
      </div>
    </div>
  );
}
