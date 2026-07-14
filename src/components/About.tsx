import { useEffect, useRef, useState } from 'react';
import { Award } from 'lucide-react';
import { config } from '../config/restaurant';

function useInView(threshold = 0.15) {
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

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="py-28 md:py-36 bg-obsidian relative overflow-hidden">
      {/* Subtle background motif */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="section-label mb-4">Our Story</p>
          <div className="gold-divider" />
          <h2 className="section-title mt-6">{config.about.headline}</h2>
        </div>

        {/* Main content */}
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <div className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="space-y-6">
              {config.about.body.map((para, i) => (
                <p key={i} className="text-ivory/65 leading-relaxed text-base md:text-lg font-light">
                  {para}
                </p>
              ))}
            </div>

            {/* Chef */}
            <div className="mt-10 flex items-center gap-5 p-5 glass-card">
              <img
                src={config.about.chefImage}
                alt={config.about.chefName}
                className="w-16 h-16 rounded-full object-cover border-2 border-gold/40"
              />
              <div>
                <p className="font-serif text-ivory font-semibold">{config.about.chefName}</p>
                <p className="text-gold/70 text-sm mt-0.5">{config.about.chefTitle}</p>
              </div>
              <Award className="ml-auto w-7 h-7 text-gold/50" />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px mt-10 border border-white/[0.07]">
              {config.about.stats.map((stat, i) => (
                <div
                  key={i}
                  className={`text-center p-6 transition-all duration-700 ${
                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                  style={{ transitionDelay: `${200 + i * 100}ms` }}
                >
                  <p className="font-display text-3xl md:text-4xl text-gold font-light">{stat.value}</p>
                  <p className="text-ivory/40 text-xs tracking-wider uppercase mt-1 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Images */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
          >
            {/* Main image */}
            <div className="relative">
              <img
                src={config.about.restaurantImage}
                alt="Saffron & Sage dining room"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/30 to-transparent" />
            </div>
            {/* Gold border accent */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/20 pointer-events-none" />
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-gold px-6 py-4 shadow-2xl">
              <p className="text-obsidian font-serif text-sm font-bold leading-tight">Est. 2012</p>
              <p className="text-obsidian/70 text-xs mt-0.5">New York, NY</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
