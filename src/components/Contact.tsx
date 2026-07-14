import { useEffect, useRef, useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Mail, Send } from 'lucide-react';
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

export default function Contact() {
  const { ref, inView } = useInView();
  const [form, setForm] = useState({ name: '', email: '', phone: '', date: '', guests: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', date: '', guests: '', message: '' });
  };

  const inputClass =
    'w-full bg-white/[0.04] border border-white/[0.08] text-ivory placeholder-ivory/25 px-4 py-3 text-sm focus:outline-none focus:border-gold/50 focus:bg-white/[0.06] transition-all duration-200';

  return (
    <section id="contact" className="py-28 md:py-36 bg-obsidian relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-gold/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="section-label mb-4">Get In Touch</p>
          <div className="gold-divider" />
          <h2 className="section-title mt-6">Reserve Your Table</h2>
          <p className="text-ivory/50 mt-4 text-sm max-w-md mx-auto">
            We recommend reservations at least 48 hours in advance for the finest experience.
          </p>
        </div>

        <div ref={ref} className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Info Column */}
          <div className={`lg:col-span-2 space-y-8 transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            {/* Quick actions */}
            <div className="space-y-3">
              <a
                href={`tel:${config.phone}`}
                className="flex items-center gap-4 p-5 glass-card hover:border-gold/20 hover:bg-white/[0.05] transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Phone className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <p className="text-ivory/40 text-xs tracking-widest uppercase mb-0.5">Call Directly</p>
                  <p className="text-ivory font-medium text-sm">{config.phone}</p>
                </div>
              </a>
              <a
                href={`https://wa.me/${config.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 glass-card hover:border-gold/20 hover:bg-white/[0.05] transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <MessageCircle className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <p className="text-ivory/40 text-xs tracking-widest uppercase mb-0.5">WhatsApp Us</p>
                  <p className="text-ivory font-medium text-sm">+{config.whatsapp}</p>
                </div>
              </a>
              <a
                href={`mailto:${config.email}`}
                className="flex items-center gap-4 p-5 glass-card hover:border-gold/20 hover:bg-white/[0.05] transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Mail className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <p className="text-ivory/40 text-xs tracking-widest uppercase mb-0.5">Email</p>
                  <p className="text-ivory font-medium text-sm">{config.email}</p>
                </div>
              </a>
              <a
                href={config.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 glass-card hover:border-gold/20 hover:bg-white/[0.05] transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <MapPin className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <p className="text-ivory/40 text-xs tracking-widest uppercase mb-0.5">Get Directions</p>
                  <p className="text-ivory font-medium text-sm leading-snug">{config.address}</p>
                </div>
              </a>
            </div>

            {/* Hours */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-5">
                <Clock className="w-4 h-4 text-gold" />
                <p className="text-xs tracking-[0.2em] uppercase text-ivory/60 font-medium">Opening Hours</p>
              </div>
              <div className="space-y-3">
                {config.hours.map((h, i) => (
                  <div key={i} className="flex justify-between items-center text-sm">
                    <span className="text-ivory/50">{h.days}</span>
                    <span className="text-ivory/80 font-medium">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className={`lg:col-span-3 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {submitted ? (
              <div className="glass-card p-12 text-center h-full flex flex-col items-center justify-center gap-6">
                <div className="w-16 h-16 border-2 border-gold flex items-center justify-center">
                  <Send className="w-7 h-7 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-ivory mb-2">Reservation Received</h3>
                  <p className="text-ivory/50 text-sm">
                    Thank you for choosing Saffron & Sage. Our team will confirm your reservation within 24 hours.
                  </p>
                </div>
                <button onClick={() => setSubmitted(false)} className="btn-outline-gold text-xs">
                  Make Another Reservation
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card p-8 md:p-10 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-ivory/40 mb-2">Your Name *</label>
                    <input
                      type="text" name="name" required value={form.name} onChange={handleChange}
                      placeholder="Alexandra Chen"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-ivory/40 mb-2">Email *</label>
                    <input
                      type="email" name="email" required value={form.email} onChange={handleChange}
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-ivory/40 mb-2">Phone</label>
                    <input
                      type="tel" name="phone" value={form.phone} onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-ivory/40 mb-2">Guests *</label>
                    <select
                      name="guests" required value={form.guests} onChange={handleChange}
                      className={`${inputClass} cursor-pointer`}
                    >
                      <option value="" className="bg-charcoal">Select party size</option>
                      {[1,2,3,4,5,6,7,8].map((n) => (
                        <option key={n} value={n} className="bg-charcoal">{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                      <option value="9+" className="bg-charcoal">9+ Guests (Private Dining)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase text-ivory/40 mb-2">Preferred Date & Time *</label>
                  <input
                    type="datetime-local" name="date" required value={form.date} onChange={handleChange}
                    className={`${inputClass} [color-scheme:dark]`}
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase text-ivory/40 mb-2">Special Requests</label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange} rows={4}
                    placeholder="Dietary restrictions, occasion details, or special arrangements..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button type="submit" className="btn-gold w-full justify-center gap-3">
                  <Send className="w-4 h-4" />
                  Request Reservation
                </button>

                <p className="text-ivory/25 text-xs text-center">
                  By submitting you agree to our reservation policy. Cancellations require 24 hours notice.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
