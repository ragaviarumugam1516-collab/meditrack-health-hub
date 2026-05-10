import { Link } from "@tanstack/react-router";
import { Activity } from "lucide-react";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto mt-4 max-w-6xl px-4">
        <nav className="glass flex items-center justify-between rounded-full px-4 py-2.5 shadow-soft">
          <Link to="/" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full gradient-primary text-primary-foreground shadow-glow">
              <Activity className="h-4 w-4" />
            </span>
            <span className="font-display text-lg font-bold tracking-tight">MediTrack</span>
          </Link>
          <div className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            <a href="#features" className="hover:text-foreground transition">Features</a>
            <a href="#pharmacy" className="hover:text-foreground transition">Pharmacy</a>
            <a href="#ai" className="hover:text-foreground transition">AI Assistant</a>
            <a href="#pricing" className="hover:text-foreground transition">Pricing</a>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/" className="hidden rounded-full px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground sm:inline">
              Sign in
            </Link>
            <Link
              to="/"
              className="rounded-full gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.02]"
            >
              Get started
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
