import { Phone, MessageCircle, ChevronDown } from 'lucide-react';
import { config } from '../config/restaurant';

export default function Hero() {
  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${config.hero.backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian/70 via-obsidian/50 to-obsidian" />
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian/60 via-transparent to-obsidian/60" />

      {/* Subtle grain texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48ZmVDb2xvck1hdHJpeCB0eXBlPSJzYXR1cmF0ZSIgdmFsdWVzPSIwIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Pre-label */}
        <p className="section-label mb-8 opacity-0 animate-fade-in animation-delay-200 fill-mode-forwards"
          style={{ animationFillMode: 'forwards' }}>
          {config.tagline}
        </p>

        {/* Gold ornamental line */}
        <div className="flex items-center justify-center gap-4 mb-8"
          style={{ opacity: 0, animation: 'fadeIn 0.6s ease 0.3s forwards' }}>
          <div className="w-24 h-px bg-gradient-to-r from-transparent to-gold/70" />
          <div className="w-1.5 h-1.5 bg-gold rotate-45" />
          <div className="w-24 h-px bg-gradient-to-l from-transparent to-gold/70" />
        </div>

        {/* Headline */}
        <h1
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[1.05] text-ivory mb-4"
          style={{ opacity: 0, animation: 'fadeUp 0.8s ease 0.4s forwards' }}
        >
          {config.hero.headline}
          <br />
          <span className="italic text-gold">{config.hero.headlineAccent}</span>
        </h1>

        {/* Subheadline */}
        <p
          className="mt-6 text-ivory/60 text-base md:text-lg font-light tracking-wide max-w-xl mx-auto"
          style={{ opacity: 0, animation: 'fadeUp 0.8s ease 0.6s forwards' }}
        >
          {config.hero.subheadline}
        </p>

        {/* Awards badges */}
        <div
          className="flex items-center justify-center gap-6 mt-8 mb-10"
          style={{ opacity: 0, animation: 'fadeIn 0.6s ease 0.8s forwards' }}
        >
          {['2 Michelin Stars', 'James Beard Nominated', 'Best Indian NYC 2024'].map((badge) => (
            <span
              key={badge}
              className="hidden sm:block text-[10px] text-gold/70 tracking-[0.2em] uppercase border-l border-gold/30 pl-4 first:border-l-0 first:pl-0"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4"
          style={{ opacity: 0, animation: 'fadeUp 0.8s ease 0.9s forwards' }}
        >
          <button onClick={scrollToMenu} className="btn-gold min-w-[180px] justify-center">
            View Menu
          </button>
          <a
            href={`tel:${config.phone}`}
            className="btn-outline-gold min-w-[180px] justify-center"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
          <a
            href={`https://wa.me/${config.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold min-w-[180px] justify-center"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp Us
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ivory/40 hover:text-gold transition-colors duration-300 group"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
}
