import { Link, useRouterState } from "@tanstack/react-router";

const WhatsAppIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008 0c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 12.003-2.002-.001-3.973-.5-5.739-1.45L0 24.002zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436-.002 9.858-4.427 9.861-9.867.002-2.637-1.03-5.112-2.905-6.99C16.654 1.86 14.178 1.83 11.54 1.83c-5.437 0-9.857 4.426-9.86 9.868-.001 1.637.425 3.235 1.238 4.646l-.993 3.63 3.722-.975zm11.367-5.321c-.314-.157-1.859-.918-2.143-1.021-.284-.103-.491-.157-.698.157-.207.314-.799 1.002-.98 1.21-.181.207-.362.232-.676.075-.314-.157-1.328-.49-2.53-1.562-.935-.834-1.566-1.863-1.748-2.178-.181-.314-.019-.484.138-.64.14-.139.314-.366.472-.549.157-.183.21-.314.314-.524.103-.21.052-.393-.026-.549-.078-.157-.698-1.683-.957-2.308-.252-.607-.51-.524-.698-.534-.18-.01-.387-.012-.594-.012s-.543.078-.826.393c-.284.314-1.086 1.063-1.086 2.593 0 1.53 1.112 3.01 1.268 3.222.156.21 2.19 3.344 5.305 4.688.741.32 1.318.51 1.77.653.745.237 1.423.203 1.959.123.598-.089 1.859-.76 2.122-1.455.263-.695.263-1.288.185-1.414-.078-.126-.284-.21-.598-.367z" />
  </svg>
);

export function FloatingActions() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isBookPage = pathname === "/book";

  // If we are already on the book page, don't overlap the mobile bottom area or keep it clean
  return (
    <>
      {/* Desktop/Tablet view: Circular button bottom-right */}
      <a
        href="https://wa.me/923001234567?text=Salam!%20I%27d%20like%20to%20book%20a%20nutrition%20consultation."
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-8 right-5 z-40 hidden sm:grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-glow animate-pulse-ring transition hover:scale-105"
      >
        <WhatsAppIcon className="h-6 w-6" />
      </a>

      {/* Mobile view: Full-width fixed pill WhatsApp button at the bottom */}
      {!isBookPage && (
        <a
          href="https://wa.me/923001234567?text=Salam!%20I%27d%20like%20to%20book%20a%20nutrition%20consultation."
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-8 left-5 right-5 z-40 flex sm:hidden items-center justify-center gap-2 rounded-full bg-[#25D366] py-3.5 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.02] active:scale-[0.98]"
        >
          <WhatsAppIcon className="h-5 w-5" />
          <span>Chat on WhatsApp</span>
        </a>
      )}
    </>
  );
}
