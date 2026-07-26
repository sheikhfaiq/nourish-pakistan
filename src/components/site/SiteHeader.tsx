import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/success-stories", label: "Success Stories" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "backdrop-blur-md bg-white/80 border-b border-border/70 shadow-[0_4px_20px_-12px_rgba(46,125,50,0.15)]" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="group flex items-center gap-2">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-leaf-gradient text-primary-foreground shadow-soft transition group-hover:scale-105">
            <Leaf className="h-5 w-5" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-foreground sm:text-xl">
            Nourish <span className="text-primary">with Ayesha</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary",
                pathname === n.to && "text-primary bg-secondary"
              )}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/book"
            className="inline-flex items-center justify-center rounded-full bg-leaf-gradient px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:shadow-glow hover:-translate-y-0.5"
          >
            Book Consultation
          </Link>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-white/80 text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* mobile menu */}
      <div
        className={cn(
          "overflow-hidden lg:hidden transition-[max-height,opacity] duration-300 ease-out",
          open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="mx-4 mb-4 rounded-2xl border border-border bg-white/95 p-3 shadow-soft backdrop-blur">
          <div className="flex flex-col">
            {nav.map((n, i) => (
              <Link
                key={n.to}
                to={n.to}
                className={cn(
                  "rounded-xl px-4 py-3 text-base font-medium text-foreground transition hover:bg-secondary",
                  pathname === n.to && "bg-secondary text-primary"
                )}
                style={{ animation: open ? `rise-in .3s ease-out ${i * 40}ms both` : undefined }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/book"
              className="mt-2 rounded-xl bg-leaf-gradient px-4 py-3 text-center text-base font-semibold text-primary-foreground shadow-soft"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
