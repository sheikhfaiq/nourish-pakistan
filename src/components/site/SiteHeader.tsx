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

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        scrolled ? "backdrop-blur-md bg-white/80 border-b border-border/70 shadow-[0_4px_20px_-12px_rgba(46,125,50,0.15)]" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="group flex items-center gap-2">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-leaf-gradient text-primary-foreground shadow-soft transition group-hover:scale-105">
            <Leaf className="h-5 w-5" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-foreground sm:text-xl">
            Nourish <span className="text-primary">with Dn. Minahal</span>
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

        {/* <div className="hidden lg:block">
          <Link
            to="/book"
            className="inline-flex items-center justify-center rounded-full bg-leaf-gradient px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:shadow-glow hover:-translate-y-0.5"
          >
            Book Consultation
          </Link>
        </div> */}

        <button
          className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-white/80 text-foreground lg:hidden cursor-pointer"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile Drawer Overlay Background */}
      {open && (
        <div 
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm lg:hidden transition-opacity duration-300"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile Full-Width Drawer */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-full h-[100dvh] bg-white p-6 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out lg:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between">
          <Link to="/" className="group flex items-center gap-2" onClick={() => setOpen(false)}>
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-leaf-gradient text-primary-foreground shadow-soft">
              <Leaf className="h-5 w-5" />
            </span>
            <span className="font-display text-lg font-bold tracking-tight text-foreground">
              Nourish <span className="text-primary">with Dn. Minahal</span>
            </span>
          </Link>
          <button
            className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-muted/40 text-foreground cursor-pointer"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation links */}
        <div className="mt-12 flex flex-col gap-6 flex-1">
          {nav.map((n, i) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className={cn(
                "font-display text-2xl font-semibold text-muted-foreground transition-all duration-200 hover:text-primary pl-2 border-l-4 border-transparent hover:border-primary/50",
                pathname === n.to && "text-primary border-primary font-bold pl-3"
              )}
              style={{ animation: open ? `rise-in .3s ease-out ${i * 50}ms both` : undefined }}
            >
              {n.label}
            </Link>
          ))}
        </div>

        {/* Drawer Footer / CTA */}
        <div className="mt-auto space-y-6">
          {/* <Link
            to="/book"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center rounded-2xl bg-leaf-gradient py-4 text-base font-semibold text-primary-foreground shadow-soft transition active:scale-[0.98]"
          >
            Book Consultation
          </Link> */}
          <div className="text-center text-xs text-muted-foreground">
            <p className="font-medium">Move Better Clinic, Faisalabad</p>
            <p className="mt-1">Mon–Fri: 2:00 PM – 7:00 PM</p>
          </div>
        </div>
      </div>
    </header>
  );
}
