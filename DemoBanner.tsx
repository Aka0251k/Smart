import { FlaskConical } from "lucide-react";

export default function DemoBanner() {
  return (
    <div className="flex items-center gap-2.5 px-4 py-2.5 bg-blue-50 border-b border-blue-100 text-brand-blue text-xs">
      <FlaskConical size={13} className="shrink-0" />
      <p>
        <strong>Demo Mode:</strong> All readings shown here are simulated for
        demonstration. They do not represent real electrical measurements. Real
        sensor data will be shown once an IoT device is connected.
      </p>
    </div>
  );
}
