/**
 * DEMO DATA — All values here are simulated for demonstration purposes.
 * Nothing in this file represents real electrical measurements.
 * Real IoT readings will replace this in Phase 4.
 */

export const DEMO_LABEL = "DEMO DATA" as const;

// ── Blocks / hostels ─────────────────────────────────────────────────
export const blocks = [
  { id: "block-a", name: "Block A", location: "FUTA Hostel — 300 Level" },
  { id: "block-b", name: "Block B", location: "FUTA Hostel — 200 Level" },
  { id: "block-c", name: "Block C", location: "FUTA Hostel — 100 Level" },
];

// ── Current snapshot ─────────────────────────────────────────────────
export const currentSnapshot = {
  blockId: "block-a",
  currentKw: 2.8,
  currentKwChange: -12,          // % vs last hour (negative = down = good)
  todayKwh: 18.4,
  estimatedCostNaira: 1104,       // at ₦60/kWh — labelled as estimate
  tariffPerKwh: 60,
  status: "normal" as "normal" | "warning" | "overload",
  lastUpdated: "May 31, 2026 — 4:20 PM",
  maxSafeKw: 5.0,                 // configured threshold for this block
};

// ── Usage chart — today, hourly ───────────────────────────────────────
export type UsagePoint = { time: string; kw: number };

export const usageTodayHourly: UsagePoint[] = [
  { time: "6 AM",  kw: 1.2 },
  { time: "7 AM",  kw: 2.1 },
  { time: "8 AM",  kw: 3.4 },
  { time: "9 AM",  kw: 3.8 },
  { time: "10 AM", kw: 3.1 },
  { time: "11 AM", kw: 2.9 },
  { time: "12 PM", kw: 3.5 },
  { time: "1 PM",  kw: 4.2 },
  { time: "2 PM",  kw: 4.6 },
  { time: "3 PM",  kw: 3.9 },
  { time: "4 PM",  kw: 2.8 },    // ← current reading highlighted in chart
  { time: "5 PM",  kw: null as unknown as number },
  { time: "6 PM",  kw: null as unknown as number },
  { time: "7 PM",  kw: null as unknown as number },
  { time: "8 PM",  kw: null as unknown as number },
  { time: "9 PM",  kw: null as unknown as number },
];

export const usageWeekDaily = [
  { time: "Mon",  kw: 41.2 },
  { time: "Tue",  kw: 44.8 },
  { time: "Wed",  kw: 38.5 },
  { time: "Thu",  kw: 47.1 },
  { time: "Fri",  kw: 52.3 },
  { time: "Sat",  kw: 61.0 },
  { time: "Sun",  kw: 55.7 },
];

// ── Recent alerts ─────────────────────────────────────────────────────
export type AlertSeverity = "info" | "warning" | "overload";

export interface Alert {
  id: string;
  severity: AlertSeverity;
  title: string;
  detail: string;
  time: string;
  blockId: string;
  acknowledged: boolean;
}

export const recentAlerts: Alert[] = [
  {
    id: "a1",
    severity: "warning",
    title: "High usage detected",
    detail: "Block A usage reached 4.6 kW at 2 PM — approaching the 5.0 kW safe limit.",
    time: "Today, 2:03 PM",
    blockId: "block-a",
    acknowledged: false,
  },
  {
    id: "a2",
    severity: "info",
    title: "Usage back to normal",
    detail: "Block A usage dropped to 2.8 kW after the 2 PM peak.",
    time: "Today, 4:22 PM",
    blockId: "block-a",
    acknowledged: true,
  },
  {
    id: "a3",
    severity: "warning",
    title: "Evening peak expected",
    detail: "Historical data suggests usage in Block A rises after 6 PM. Consider staggering appliance use.",
    time: "Today, 4:20 PM",
    blockId: "block-a",
    acknowledged: false,
  },
];

// ── Devices ───────────────────────────────────────────────────────────
export type DeviceStatus = "simulated" | "online" | "offline" | "error";

export interface Device {
  id: string;
  name: string;
  blockId: string;
  location: string;
  status: DeviceStatus;
  lastSeen: string;
  lastReadingKw: number;
  firmwareVersion: string;
}

export const devices: Device[] = [
  {
    id: "dev-001",
    name: "SmartGrid Node 001",
    blockId: "block-a",
    location: "Block A — Main Meter",
    status: "simulated",
    lastSeen: "Now (simulated)",
    lastReadingKw: 2.8,
    firmwareVersion: "v0.1-demo",
  },
];

// ── Quick actions ─────────────────────────────────────────────────────
export const quickActions = [
  { label: "View Detailed Report", href: "/reports",   icon: "BarChart2" },
  { label: "Manage Devices",       href: "/devices",   icon: "Cpu" },
  { label: "Talk to AI Assistant", href: "/assistant", icon: "MessageSquare" },
  { label: "Setup New Device",     href: "/devices/new", icon: "PlusCircle" },
];
