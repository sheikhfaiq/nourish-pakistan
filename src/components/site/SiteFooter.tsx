import { Link } from "@tanstack/react-router";
import { Leaf, Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-muted">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-leaf-gradient text-primary-foreground shadow-soft">
              <Leaf className="h-5 w-5" />
            </span>
            <span className="font-display text-lg font-bold">Nourish with Dn. Minahal</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Personalised, evidence-based nutrition care rooted in Pakistani lifestyles and homemade food.
          </p>
          <div className="mt-5 flex gap-3">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="grid h-10 w-10 place-items-center rounded-full border border-border bg-white text-muted-foreground transition hover:text-primary hover:border-primary">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/services" className="hover:text-primary">Services</Link></li>
            <li><Link to="/success-stories" className="hover:text-primary">Success Stories</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            {/* <li><Link to="/book" className="hover:text-primary">Book Consultation</Link></li> */}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-primary" /> +92 300 1234567</li>
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-primary" /> info@nourishpakistan.com</li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-primary" /> Move Better Clinic, East Canal Road, Faisalabad</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Hours</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Mon – Fri: 2:00 PM – 7:00 PM</li>
            <li>Sat – Sun: Closed</li>
            <li>Online consultations across Pakistan</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-muted-foreground sm:px-6 lg:px-8">
          © {new Date().getFullYear()} Nourish with Dn. Minahal. All rights reserved. Crafted with care in Pakistan.
        </p>
      </div>
    </footer>
  );
}
