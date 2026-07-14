import { useState, useEffect, useRef } from 'react';
import { config } from '../config/restaurant';

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const badgeColors: Record<string, string> = {
  "Chef's Pick": 'bg-gold/20 text-gold border border-gold/30',
  Signature: 'bg-gold/20 text-gold border border-gold/30',
  Vegetarian: 'bg-emerald-900/40 text-emerald-400 border border-emerald-700/30',
};

export default function Menu() {
  const [active, setActive] = useState(config.menu.categories[0].id);
  const { ref, inView } = useInView();

  const activeCategory = config.menu.categories.find((c) => c.id === active)!;

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="menu" className="py-28 md:py-36 bg-charcoal relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-4">Culinary Journey</p>
          <div className="gold-divider" />
          <h2 className="section-title mt-6">Our Menu</h2>
          <p className="text-ivory/50 mt-4 text-sm tracking-wide max-w-md mx-auto">
            All prices exclusive of taxes and service. Menu changes seasonally.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-14">
          {config.menu.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-6 py-2.5 text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300 border ${
                active === cat.id
                  ? 'bg-gold text-obsidian border-gold shadow-[0_0_20px_rgba(201,168,76,0.3)]'
                  : 'border-white/10 text-ivory/50 hover:border-gold/40 hover:text-gold'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div ref={ref} className="grid md:grid-cols-2 gap-5">
          {activeCategory.items.map((item, i) => (
            <div
              key={item.name}
              className={`glass-card p-7 group hover:border-gold/20 hover:bg-white/[0.05] transition-all duration-300 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 80}ms`, transitionProperty: 'opacity, transform, background, border-color', transitionDuration: '500ms' }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="font-serif text-ivory text-lg group-hover:text-gold/90 transition-colors duration-300">
                      {item.name}
                    </h3>
                    {item.badge && (
                      <span className={`text-[10px] px-2 py-0.5 tracking-wider uppercase font-medium ${badgeColors[item.badge] ?? 'bg-white/10 text-ivory/60'}`}>
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-ivory/45 text-sm mt-2 leading-relaxed">{item.description}</p>
                </div>
                <span className="font-display text-xl text-gold flex-shrink-0">{item.price}</span>
              </div>
              <div className="mt-5 h-px bg-gradient-to-r from-gold/20 via-gold/5 to-transparent group-hover:from-gold/40 transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 space-y-4">
          <p className="text-ivory/40 text-sm">
            Experiencing a dietary requirement? Our kitchen is delighted to accommodate.
          </p>
          <button onClick={scrollToContact} className="btn-gold">
            Reserve Your Table
          </button>
        </div>
      </div>
    </section>
  );
}
