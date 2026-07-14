import { useState, useEffect, useRef } from 'react';
import { X, ZoomIn } from 'lucide-react';
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

export default function Gallery() {
  const { ref, inView } = useInView();
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightbox(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <section id="gallery" className="py-28 md:py-36 bg-obsidian relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-4">Visual Story</p>
          <div className="gold-divider" />
          <h2 className="section-title mt-6">The Gallery</h2>
        </div>

        {/* Grid */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 auto-rows-[220px] md:auto-rows-[260px] gap-3">
          {config.gallery.map((img, i) => (
            <div
              key={i}
              onClick={() => setLightbox(img.src)}
              className={`relative overflow-hidden cursor-pointer group ${img.span} ${
                inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transition: 'opacity 0.6s ease, transform 0.6s ease', transitionDelay: `${i * 70}ms` }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-obsidian/0 group-hover:bg-obsidian/50 transition-all duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-12 h-12 border border-gold/60 flex items-center justify-center">
                  <ZoomIn className="w-5 h-5 text-gold" />
                </div>
              </div>
              {/* Gold border reveal on hover */}
              <div className="absolute inset-0 border-0 group-hover:border border-gold/30 transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-obsidian/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 w-10 h-10 border border-white/20 flex items-center justify-center text-ivory/60 hover:text-gold hover:border-gold/40 transition-all duration-200"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <img
            src={lightbox}
            alt="Gallery enlarged"
            className="max-w-5xl max-h-[90vh] w-full object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
