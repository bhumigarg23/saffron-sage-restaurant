import { useEffect, useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
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

export default function Testimonials() {
  const { ref, inView } = useInView();
  const [active, setActive] = useState(0);
  const total = config.testimonials.length;

  const prev = () => setActive((a) => (a - 1 + total) % total);
  const next = () => setActive((a) => (a + 1) % total);

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, []);

  const t = config.testimonials[active];

  return (
    <section id="testimonials" className="py-28 md:py-36 bg-charcoal relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-gold/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="section-label mb-4">What Guests Say</p>
          <div className="gold-divider" />
          <h2 className="section-title mt-6">Voices of Experience</h2>
        </div>

        {/* Main testimonial */}
        <div ref={ref} className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass-card p-10 md:p-16 relative">
            {/* Large quote mark */}
            <Quote className="absolute top-8 left-8 w-12 h-12 text-gold/10 fill-current" />

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-8">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 text-gold fill-gold" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="font-display text-xl md:text-2xl lg:text-3xl text-ivory/85 text-center italic leading-relaxed font-light transition-all duration-500">
              "{t.text}"
            </blockquote>

            {/* Author */}
            <div className="flex flex-col items-center mt-10">
              <div className="w-12 h-px bg-gold/40 mb-6" />
              <img
                src={t.avatar}
                alt={t.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-gold/30 mb-3"
              />
              <p className="font-serif text-ivory font-semibold">{t.name}</p>
              <p className="text-gold/60 text-sm mt-1">{t.title}</p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={prev}
              className="w-12 h-12 border border-white/10 flex items-center justify-center text-ivory/40 hover:text-gold hover:border-gold/40 transition-all duration-200"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {config.testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === active ? 'w-8 h-1 bg-gold' : 'w-2 h-1 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 border border-white/10 flex items-center justify-center text-ivory/40 hover:text-gold hover:border-gold/40 transition-all duration-200"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* All avatars strip */}
        <div className="flex items-center justify-center gap-4 mt-14">
          {config.testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`transition-all duration-300 ${
                i === active ? 'scale-110 ring-2 ring-gold ring-offset-2 ring-offset-charcoal' : 'opacity-40 hover:opacity-70'
              } rounded-full`}
            >
              <img
                src={t.avatar}
                alt={t.name}
                className="w-10 h-10 rounded-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
