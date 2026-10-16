import Link from "next/link";
import { Bot, ArrowRight } from "lucide-react";

const suggestions = [
  "What does my current usage mean?",
  "How can I save more energy?",
  "What to do during an overload?",
];

export default function AssistantWidget() {
  return (
    <div className="card p-5 flex flex-col gap-3">
      {/* Header */}
      <div className="flex items-center gap-2.5">
        <div className="w-9 h-9 rounded-full bg-brand-blueLight flex items-center justify-center shrink-0">
          <Bot size={18} className="text-brand-blue" />
        </div>
        <div>
          <p className="text-sm font-semibold text-text-primary">SmartGrid Assistant</p>
          <p className="text-xs text-text-muted">Ask about your energy</p>
        </div>
      </div>

      {/* Suggested prompts */}
      <div className="space-y-1.5">
        {suggestions.map((s) => (
          <Link
            key={s}
            href={`/assistant?q=${encodeURIComponent(s)}`}
            className="block w-full text-left text-xs text-brand-blue bg-brand-blueLight hover:bg-blue-100 px-3 py-2 rounded-lg transition-colors"
          >
            {s}
          </Link>
        ))}
      </div>

      <Link
        href="/assistant"
        className="btn-primary w-full text-xs py-2 mt-1"
      >
        Chat Now
        <ArrowRight size={13} />
      </Link>
    </div>
  );
}
