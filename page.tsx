import Link from "next/link";
import { Zap, Mail, Lock, Eye } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-surface-page flex">
      {/* Left — form */}
      <div className="flex flex-col justify-center w-full max-w-md mx-auto px-8 py-12 lg:mx-0">
        {/* Logo */}
        <div className="flex items-center gap-2.5 mb-8">
          <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-brand-blue">
            <Zap className="text-white" size={18} />
          </div>
          <div>
            <p className="text-base font-bold text-text-primary leading-tight">SmartGrid</p>
            <p className="text-[10px] text-text-muted tracking-wide">Smarter Energy. Brighter Communities.</p>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-text-primary mb-1">Welcome Back</h1>
        <p className="text-sm text-text-muted mb-8">
          Log in to your account to access your energy dashboard, insights and more.
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-text-secondary mb-1.5">
              Email or Username
            </label>
            <div className="relative">
              <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
              <input className="input pl-9" type="email" placeholder="Email or Username" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-text-secondary mb-1.5">
              Password
            </label>
            <div className="relative">
              <Lock size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
              <input className="input pl-9 pr-9" type="password" placeholder="Password" />
              <Eye size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted cursor-pointer" />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs">
            <label className="flex items-center gap-2 text-text-secondary cursor-pointer">
              <input type="checkbox" className="rounded" />
              Remember me
            </label>
            <Link href="#" className="text-brand-blue hover:underline">Forgot password?</Link>
          </div>

          <Link href="/dashboard" className="btn-primary w-full py-3 text-sm">
            Log In
          </Link>
        </form>

        <p className="text-xs text-text-muted text-center mt-6">
          Don&apos;t have an account?{" "}
          <Link href="#" className="text-brand-blue hover:underline font-medium">Sign up</Link>
        </p>

        <div className="mt-10 pt-6 border-t border-surface-border flex items-center gap-2">
          <Zap size={12} className="text-text-muted" />
          <p className="text-[10px] text-text-muted">
            Powered by SmartGrid · Clean Energy · Smart Monitoring · Better Tomorrow
          </p>
        </div>
      </div>

      {/* Right — hero panel (hidden on mobile) */}
      <div className="hidden lg:flex flex-1 bg-brand-navy flex-col items-center justify-center p-12 relative overflow-hidden">
        {/* Decorative glows */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-blue opacity-10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-teal-500 opacity-10 rounded-full blur-3xl" />

        <div className="relative z-10 text-center max-w-sm">
          <div className="w-16 h-16 rounded-2xl bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center mx-auto mb-8">
            <Zap size={32} className="text-brand-blue" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4 leading-tight">
            Your Energy,<br />In Your Hands.
          </h2>
          <p className="text-sm text-white/60 leading-relaxed">
            SmartGrid helps you track your electricity usage, detect overloads,
            and get personalised insights — all in one place.
          </p>

          <div className="flex items-center justify-center gap-6 mt-10">
            {["Monitor", "Understand", "Save"].map((s) => (
              <div key={s} className="text-center">
                <div className="w-2 h-2 rounded-full bg-brand-blue mx-auto mb-1.5" />
                <p className="text-xs text-white/50 font-medium">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
