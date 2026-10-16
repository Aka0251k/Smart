import { AlertTriangle, Info, Zap } from "lucide-react";
import { type Alert } from "@/lib/demo-data";
import clsx from "clsx";

const config = {
  info: {
    icon: Info,
    bg: "bg-blue-50",
    border: "border-blue-100",
    iconColor: "text-brand-blue",
    label: "Info",
  },
  warning: {
    icon: AlertTriangle,
    bg: "bg-amber-50",
    border: "border-amber-100",
    iconColor: "text-brand-amber",
    label: "Warning",
  },
  overload: {
    icon: Zap,
    bg: "bg-red-50",
    border: "border-red-100",
    iconColor: "text-brand-red",
    label: "Overload",
  },
};

interface AlertItemProps {
  alert: Alert;
  compact?: boolean;
}

export default function AlertItem({ alert, compact = false }: AlertItemProps) {
  const { icon: Icon, bg, border, iconColor, label } = config[alert.severity];

  return (
    <div
      className={clsx(
        "flex items-start gap-3 p-3 rounded-lg border transition-opacity",
        bg,
        border,
        alert.acknowledged && "opacity-60"
      )}
    >
      <div className={clsx("mt-0.5 shrink-0", iconColor)}>
        <Icon size={15} />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <p className="text-xs font-semibold text-text-primary">{alert.title}</p>
          {alert.acknowledged && (
            <span className="text-[10px] text-text-muted font-medium">Acknowledged</span>
          )}
        </div>
        {!compact && (
          <p className="text-xs text-text-secondary mt-0.5 leading-relaxed">{alert.detail}</p>
        )}
        <p className="text-[10px] text-text-muted mt-1">{alert.time}</p>
      </div>
    </div>
  );
}
