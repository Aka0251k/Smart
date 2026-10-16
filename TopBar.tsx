"use client";

import { BellRing, Search, ChevronDown, FlaskConical } from "lucide-react";
import { currentSnapshot, recentAlerts } from "@/lib/demo-data";

const unread = recentAlerts.filter((a) => !a.acknowledged).length;

export default function TopBar() {
  return (
    <header className="sticky top-0 z-30 flex items-center gap-3 px-5 py-3 bg-white border-b border-surface-border">
      {/* Search */}
      <div className="relative flex-1 max-w-sm">
        <Search
          size={15}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none"
        />
        <input
          type="search"
          placeholder="Search anything..."
          className="w-full pl-9 pr-3 py-2 text-sm bg-surface-muted border border-transparent rounded-lg text-text-primary placeholder:text-text-muted focus:outline-none focus:bg-white focus:border-surface-border transition-all"
        />
      </div>

      <div className="flex-1" />

      {/* Demo badge */}
      <span className="badge-demo flex items-center gap-1.5">
        <FlaskConical size={11} />
        Demo Mode
      </span>

      {/* Alerts bell */}
      <button className="relative p-2 rounded-lg hover:bg-surface-muted transition-colors">
        <BellRing size={18} className="text-text-secondary" />
        {unread > 0 && (
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-brand-amber rounded-full" />
        )}
      </button>

      {/* User */}
      <button className="flex items-center gap-2 pl-3 pr-2 py-1.5 rounded-lg hover:bg-surface-muted transition-colors">
        <div className="w-7 h-7 rounded-full bg-brand-blue flex items-center justify-center text-white text-xs font-bold">
          KA
        </div>
        <div className="text-left hidden sm:block">
          <p className="text-xs font-semibold text-text-primary leading-tight">Khalid Afolabi</p>
          <p className="text-[10px] text-text-muted leading-tight">
            {currentSnapshot.blockId === "block-a" ? "FUTA Hostel · 300 Level" : ""}
          </p>
        </div>
        <ChevronDown size={13} className="text-text-muted" />
      </button>
    </header>
  );
}
