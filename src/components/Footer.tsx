import { UtensilsCrossed, Instagram, Facebook, Twitter, Phone, MessageCircle, MapPin } from 'lucide-react';
import { config } from '../config/restaurant';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal border-t border-white/[0.06]">
      {/* CTA band */}
      <div className="bg-gradient-to-r from-gold-dark via-gold to-gold-dark py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display text-2xl md:text-3xl text-obsidian font-medium italic">
              Ready for an unforgettable evening?
            </p>
            <p className="text-obsidian/60 text-sm mt-1">Tables fill quickly — book yours today.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${config.phone}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-obsidian text-ivory text-xs font-semibold tracking-widest uppercase hover:bg-obsidian/80 transition-colors duration-200"
            >
              <Phone className="w-3.5 h-3.5" /> Call Now
            </a>
            <a
              href={`https://wa.me/${config.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-obsidian text-obsidian text-xs font-semibold tracking-widest uppercase hover:bg-obsidian hover:text-ivory transition-all duration-200"
            >
              <MessageCircle className="w-3.5 h-3.5" /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 border border-gold flex items-center justify-center">
                <UtensilsCrossed className="w-4 h-4 text-gold" />
              </div>
              <span className="font-display text-xl text-ivory">{config.name}</span>
            </div>
            <p className="text-ivory/40 text-sm leading-relaxed max-w-xs">
              {config.description}
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href={config.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/10 flex items-center justify-center text-ivory/40 hover:text-gold hover:border-gold/40 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={config.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/10 flex items-center justify-center text-ivory/40 hover:text-gold hover:border-gold/40 transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={config.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/10 flex items-center justify-center text-ivory/40 hover:text-gold hover:border-gold/40 transition-all duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-ivory/40 font-medium mb-5">Navigation</p>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => handleNav(item.href)}
                    className="text-ivory/50 text-sm hover:text-gold transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact details */}
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-ivory/40 font-medium mb-5">Find Us</p>
            <div className="space-y-4">
              <a
                href={config.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 text-sm text-ivory/50 hover:text-gold transition-colors duration-200 group"
              >
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:text-gold" />
                <span className="leading-snug">{config.address}</span>
              </a>
              <a
                href={`tel:${config.phone}`}
                className="flex gap-3 text-sm text-ivory/50 hover:text-gold transition-colors duration-200 group items-center"
              >
                <Phone className="w-4 h-4 flex-shrink-0 group-hover:text-gold" />
                {config.phone}
              </a>
              <div className="pt-2 space-y-1.5">
                {config.hours.map((h, i) => (
                  <div key={i} className="text-xs text-ivory/30">
                    <span className="text-ivory/50">{h.days}:</span> {h.time}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.05] px-6 lg:px-8 py-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ivory/25">
          <p>© {new Date().getFullYear()} {config.name}. All rights reserved.</p>
          <p>142 Spice Quarter, New York</p>
        </div>
      </div>
    </footer>
  );
}
