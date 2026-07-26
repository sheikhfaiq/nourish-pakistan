import { Link, useRouterState } from "@tanstack/react-router";
import { MessageCircle, CalendarPlus } from "lucide-react";

export function FloatingActions() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const hideBook = pathname === "/book";
  return (
    <>
      <a
        href="https://wa.me/923001234567?text=Salam!%20I%27d%20like%20to%20book%20a%20nutrition%20consultation."
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-glow animate-pulse-ring transition hover:scale-105"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      {!hideBook && (
        <Link
          to="/book"
          className="fixed bottom-5 left-5 right-24 z-40 flex items-center justify-center gap-2 rounded-full bg-leaf-gradient px-5 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow sm:hidden"
        >
          <CalendarPlus className="h-4 w-4" /> Book Consultation
        </Link>
      )}
    </>
  );
}
