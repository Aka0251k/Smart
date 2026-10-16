"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Activity,
  Cpu,
  MessageSquare,
  BarChart2,
  Settings,
  BellRing,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  Zap,
  LogOut,
} from "lucide-react";
import clsx from "clsx";

const navItems = [
  { href: "/dashboard",  label: "Dashboard",    icon: LayoutDashboard },
  { href: "/live",       label: "Live Usage",   icon: Activity },
  { href: "/devices",    label: "Devices",      icon: Cpu },
  { href: "/alerts",     label: "Alerts",       icon: BellRing },
  { href: "/assistant",  label: "AI Assistant", icon: MessageSquare },
  { href: "/reports",    label: "Reports",      icon: BarChart2 },
  { href: "/help",       label: "Help & Safety",icon: HelpCircle },
  { href: "/settings",   label: "Settings",     icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={clsx(
        "flex flex-col h-screen bg-brand-navy sticky top-0 transition-all duration-300 ease-in-out shrink-0",
        collapsed ? "w-16" : "w-60"
      )}
    >
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-4 py-5 border-b border-white/10">
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-blue shrink-0">
          <Zap className="w-4.5 h-4.5 text-white" size={18} />
        </div>
        {!collapsed && (
          <div>
            <p className="text-white font-bold text-sm leading-tight">SmartGrid</p>
            <p className="text-white/40 text-[10px] leading-tight tracking-wide">
              Energy Intelligence
            </p>
          </div>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 px-2 py-4 space-y-0.5 overflow-y-auto">
        {navItems.map(({ href, label, icon: Icon }) => {
          const active = pathname === href || pathname.startsWith(href + "/");
          return (
            <Link
              key={href}
              href={href}
              className={clsx(
                "flex items-center gap-3 px-2.5 py-2.5 rounded-lg text-sm font-medium transition-all duration-150",
                active
                  ? "bg-brand-blue text-white shadow-sm"
                  : "text-white/55 hover:text-white hover:bg-white/8"
              )}
              title={collapsed ? label : undefined}
            >
              <Icon size={17} className="shrink-0" />
              {!collapsed && <span>{label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Bottom: user + collapse */}
      <div className="border-t border-white/10 p-2 space-y-1">
        {/* User */}
        <div
          className={clsx(
            "flex items-center gap-2.5 px-2.5 py-2 rounded-lg",
            !collapsed && "hover:bg-white/8 cursor-pointer"
          )}
        >
          <div className="w-7 h-7 rounded-full bg-brand-blue flex items-center justify-center text-white text-xs font-bold shrink-0">
            KA
          </div>
          {!collapsed && (
            <div className="min-w-0">
              <p className="text-white text-xs font-semibold truncate">Khalid Afolabi</p>
              <p className="text-white/40 text-[10px] truncate">FUTA · 300 Level</p>
            </div>
          )}
          {!collapsed && (
            <LogOut size={13} className="ml-auto text-white/30 hover:text-white/60 shrink-0" />
          )}
        </div>

        {/* Collapse toggle */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-full flex items-center justify-center gap-2 py-2 rounded-lg text-white/30 hover:text-white/60 hover:bg-white/8 transition-all duration-150 text-xs"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <ChevronRight size={15} /> : (
            <>
              <ChevronLeft size={15} />
              <span>Collapse</span>
            </>
          )}
        </button>
      </div>
    </aside>
  );
}
