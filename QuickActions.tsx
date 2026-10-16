import Link from "next/link";
import { BarChart2, Cpu, MessageSquare, PlusCircle, ArrowRight } from "lucide-react";
import { quickActions } from "@/lib/demo-data";

const iconMap: Record<string, React.ElementType> = {
  BarChart2,
  Cpu,
  MessageSquare,
  PlusCircle,
};

export default function QuickActions() {
  return (
    <div className="card p-5">
      <h2 className="text-sm font-semibold text-text-primary mb-3">Quick Actions</h2>
      <div className="space-y-1">
        {quickActions.map((action) => {
          const Icon = iconMap[action.icon] ?? BarChart2;
          return (
            <Link
              key={action.href}
              href={action.href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-surface-muted transition-colors group"
            >
              <div className="p-1.5 rounded-md bg-brand-blueLight">
                <Icon size={13} className="text-brand-blue" />
              </div>
              <span className="text-sm text-text-secondary group-hover:text-text-primary flex-1 transition-colors">
                {action.label}
              </span>
              <ArrowRight
                size={13}
                className="text-text-muted group-hover:text-brand-blue transition-colors"
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
