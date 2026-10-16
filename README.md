# SmartGrid — Community Energy Intelligence

> An IoT-based Energy Distribution & Management System  
> designed to improve electricity visibility and fairness in communities.

---

## 🚦 Phase 1 — Core UI (Current)

This is the **Phase 1** build: full app shell, navigation, dashboard, and all screens with **simulated demo data**. No backend or real sensors yet.

### Pages included
| Route | Description |
|---|---|
| `/dashboard` | Main dashboard — stat cards, usage chart, alerts, quick actions |
| `/live` | Live usage feed (simulated tick) |
| `/alerts` | Alert list — warning, overload, info |
| `/devices` | IoT device management |
| `/assistant` | AI chat assistant (canned responses) |
| `/reports` | Usage summaries and trends |
| `/settings` | Settings stubs (unlocked in Phase 2) |
| `/help` | Safety tips and hotlines |
| `/login` | Login page (UI only, no auth) |

---

## 🛠 Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** — custom SmartGrid design tokens
- **Recharts** — usage charts
- **Lucide React** — icons

---

## 🚀 Getting Started

### 1. Clone / create repo on GitHub
```bash
git clone https://github.com/YOUR_USERNAME/smartgrid.git
cd smartgrid
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — it redirects to `/dashboard`.

### 4. Build for production
```bash
npm run build
npm run start
```

---

## 🗂 Project Structure

```
src/
├── app/
│   ├── (app)/                  # App shell (sidebar + topbar)
│   │   ├── layout.tsx
│   │   ├── dashboard/page.tsx
│   │   ├── live/page.tsx
│   │   ├── alerts/page.tsx
│   │   ├── devices/page.tsx
│   │   ├── assistant/page.tsx
│   │   ├── reports/page.tsx
│   │   ├── settings/page.tsx
│   │   └── help/page.tsx
│   ├── (auth)/                 # Auth pages (no sidebar)
│   │   └── login/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx                # Redirects → /dashboard
├── components/
│   ├── Sidebar.tsx
│   ├── TopBar.tsx
│   ├── DemoBanner.tsx
│   ├── StatCard.tsx
│   ├── UsageChart.tsx
│   ├── AlertItem.tsx
│   ├── QuickActions.tsx
│   └── AssistantWidget.tsx
└── lib/
    └── demo-data.ts            # All simulated data — clearly labelled
```

---

## 📋 Build Phases

| Phase | Focus | Status |
|---|---|---|
| **Phase 1** | Core UI — layout, nav, dashboard, all screens | ✅ Done |
| **Phase 2** | Authentication — login, register, session management | 🔜 Next |
| **Phase 3** | IoT data layer — real sensor readings via WebSocket/MQTT | 🔜 Planned |
| **Phase 4** | AI Assistant — real Claude/GPT integration | 🔜 Planned |
| **Phase 5** | Reports, export, billing, multi-block support | 🔜 Planned |

---

## ⚠️ Demo Data Notice

All readings shown in Phase 1 are **simulated** and clearly labelled with a `DEMO DATA` badge. They do not represent real electrical measurements. Real sensor data will replace these in Phase 3.

---

## 👥 Team

Built by the SmartGrid Team — FUTA  
*Smarter Energy. Brighter Communities.*
