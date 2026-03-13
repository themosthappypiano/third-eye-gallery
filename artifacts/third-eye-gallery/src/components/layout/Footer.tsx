import { Link } from "wouter";
import { Instagram, MapPin, Phone, Mail, Clock } from "lucide-react";
import logoUrl from "@assets/ChatGPT_Image_Mar_13,_2026,_10_28_40_AM_1773397725192.png";

export function Footer() {
  return (
    <footer className="bg-card border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 inline-flex">
              <img src={logoUrl} alt="Logo" className="w-8 h-8 rounded-full border border-primary/20" />
              <span className="font-display text-2xl tracking-widest text-primary">3rd Eye</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Art you wear. One-of-one. Every time. A contemporary tattoo collective pushing the boundaries of skin art.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-xl mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><Link href="/artists" className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider">Artists</Link></li>
              <li><Link href="/gallery" className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider">Gallery</Link></li>
              <li><Link href="/prints" className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider">Art Prints</Link></li>
              <li><Link href="/booking" className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider">Booking Info</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl mb-6">Visit</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-primary" />
                <span>2025 E Levee St #6703<br/>Dallas, Texas 75207</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span>+1 214-484-3618</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 text-primary" />
                <span>Open Daily<br/>1:00 PM - 9:00 PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl mb-6">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">Subscribe for guest spot announcements and exclusive print drops.</p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-background border border-white/10 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
              />
              <button 
                type="button"
                className="bg-primary text-primary-foreground font-medium text-sm py-2.5 rounded-md hover:bg-primary/90 transition-colors uppercase tracking-wider"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Third Eye Gallery. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
