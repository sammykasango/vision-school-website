import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import {
  GraduationCap, BookOpen, Users, Trophy, ArrowRight, Sparkles, Heart,
  Microscope, Music, Bus, Star, MapPin,
} from "lucide-react";
import heroClass from "@/assets/hero-classroom.jpg";
import heroCampus from "@/assets/hero-campus.jpg";
import heroKg from "@/assets/hero-kindergarten.jpg";
import heroLab from "@/assets/hero-lab.jpg";
import heroSports from "@/assets/hero-sports.jpg";
import heroGrad from "@/assets/hero-graduation.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vision School — Shaping Bright Futures Through Quality Education" },
      { name: "description", content: "Vision Kindergarten & Primary School: a modern CBC school nurturing excellence, creativity, discipline, and leadership." },
    ],
  }),
  component: Home,
});

const slides = [
  { img: heroClass, caption: "Active learning, every day" },
  { img: heroCampus, caption: "A safe, modern campus" },
  { img: heroKg, caption: "Playful kindergarten years" },
  { img: heroLab, caption: "Future-ready ICT skills" },
  { img: heroSports, caption: "Sports & teamwork" },
  { img: heroGrad, caption: "Celebrating achievement" },
];

function HeroSlideshow() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="relative h-[100svh] min-h-[640px] overflow-hidden">
      {slides.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
            idx === i ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={s.img}
            alt={s.caption}
            className={`h-full w-full object-cover ${idx === i ? "animate-zoom-in" : ""}`}
            loading={idx === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/50 to-ink/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 to-transparent" />

      <div className="relative h-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col justify-center text-soft">
        <span className="inline-flex items-center gap-2 self-start glass-dark text-cyan-accent text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6 animate-fade-up">
          <Sparkles className="h-3.5 w-3.5" /> Admissions Open 2026
        </span>
        <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl leading-[1.05] animate-fade-up">
          Shaping <span className="gradient-text">Bright Futures</span> Through Quality Education
        </h1>
        <p className="mt-6 max-w-2xl text-base md:text-lg opacity-90 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Vision Kindergarten & Primary School nurtures excellence, creativity, discipline, and leadership — from the very first day of learning.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <Link to="/admissions" className="btn-gradient inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold">
            Apply Now <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold border border-white/30 hover:border-cyan-accent hover:text-cyan-accent transition">
            Book a Visit
          </Link>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all ${idx === i ? "w-10 bg-cyan-accent" : "w-3 bg-white/40 hover:bg-white/70"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function useCounter(target: number, ref: React.RefObject<HTMLElement | null>) {
  const [v, setV] = useState(0);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const start = performance.now();
        const dur = 1600;
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / dur);
          setV(Math.floor(p * target));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      }
    });
    io.observe(el);
    return () => io.disconnect();
  }, [target, ref]);
  return v;
}

function Stat({ value, label, suffix = "+" }: { value: number; label: string; suffix?: string }) {
  const r = useRef<HTMLDivElement>(null);
  const n = useCounter(value, r);
  return (
    <div ref={r} className="text-center">
      <div className="text-4xl md:text-5xl font-bold gradient-text">{n.toLocaleString()}{suffix}</div>
      <div className="mt-1 text-sm text-muted-foreground uppercase tracking-wider">{label}</div>
    </div>
  );
}

const previews = [
  { to: "/about", title: "Our Story", icon: Heart, img: heroCampus, blurb: "Two decades of nurturing children into confident, curious learners." },
  { to: "/academics", title: "Academics", icon: BookOpen, img: heroClass, blurb: "CBC curriculum, ICT integration, and a love for learning." },
  { to: "/admissions", title: "Admissions", icon: GraduationCap, img: heroGrad, blurb: "Simple steps to join the Vision family this academic year." },
  { to: "/school-life", title: "School Life", icon: Music, img: heroSports, blurb: "Sports, music, art, STEM, leadership — children flourish here." },
  { to: "/gallery", title: "Gallery", icon: Sparkles, img: heroKg, blurb: "Moments from classrooms, the field, and graduation day." },
  { to: "/transport", title: "Transport & Facilities", icon: Bus, img: heroLab, blurb: "Modern labs, safe transport, secure boarding facilities." },
];

const testimonials = [
  { name: "Mrs. Achieng O.", role: "Parent, Grade 4", text: "My daughter looks forward to school every morning. Vision has built her confidence in ways we never imagined." },
  { name: "Mr. David K.", role: "Parent, KG2", text: "The teachers are caring, the campus is beautiful, and the CBC approach is exactly what our son needed." },
  { name: "Ms. Faith M.", role: "Alumni Parent", text: "Two of my children passed through Vision. Both are thriving in high school — disciplined, curious, kind." },
];

function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => { const t = setInterval(() => setI(v => (v + 1) % testimonials.length), 6000); return () => clearInterval(t); }, []);
  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="glass rounded-3xl p-8 md:p-12 shadow-soft text-center">
        <div className="flex justify-center mb-4">
          {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-5 w-5 fill-electric text-electric" />)}
        </div>
        <p className="text-lg md:text-xl text-foreground/90 italic leading-relaxed min-h-[120px]">
          “{testimonials[i].text}”
        </p>
        <div className="mt-6">
          <div className="font-semibold">{testimonials[i].name}</div>
          <div className="text-sm text-muted-foreground">{testimonials[i].role}</div>
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-5">
        {testimonials.map((_, k) => (
          <button key={k} onClick={() => setI(k)} aria-label={`Testimonial ${k+1}`}
            className={`h-2 rounded-full transition-all ${k === i ? "w-8 bg-electric" : "w-2 bg-border"}`} />
        ))}
      </div>
    </div>
  );
}

function Home() {
  return (
    <>
      <HeroSlideshow />

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="glass rounded-3xl shadow-soft p-8 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          <Stat value={850} label="Happy Students" />
          <Stat value={20} label="Qualified Teachers" />
          <Stat value={3} label="Years of Excellence" />
          <Stat value={98} label="Parent Satisfaction" suffix="%" />
        </div>
      </section>

      {/* Quick previews */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-electric">Discover Vision</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold">Explore What Makes Us <span className="gradient-text">Different</span></h2>
          <p className="mt-4 text-muted-foreground">Short previews — click through to dedicated pages for the full story.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {previews.map((p) => (
            <Link key={p.to} to={p.to}
              className="group relative overflow-hidden rounded-2xl bg-card shadow-soft hover:shadow-glow transition-all hover:-translate-y-1">
              <div className="aspect-[5/3] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2 text-electric">
                  <p.icon className="h-5 w-5" />
                  <h3 className="font-display font-semibold text-lg">{p.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{p.blurb}</p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-royal group-hover:text-electric">
                  Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* News preview */}
      <section className="bg-secondary/50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-electric">Featured News</span>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold">Latest <span className="gradient-text">Updates</span></h2>
            </div>
            <Link to="/news" className="text-sm font-semibold text-royal hover:text-electric inline-flex items-center gap-1.5">View all news <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { tag: "Achievement", title: "Vision wins regional STEM challenge 2026", img: heroLab, date: "May 12" },
              { tag: "Event", title: "Grade 6 graduation set for July 18th", img: heroGrad, date: "May 02" },
              { tag: "Sports", title: "U-12 football team crowned county champions", img: heroSports, date: "Apr 26" },
            ].map((n) => (
              <Link key={n.title} to="/news" className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-glow transition-all">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={n.img} alt="" loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-electric font-semibold uppercase tracking-wider">{n.tag}</span>
                    <span className="text-muted-foreground">{n.date}</span>
                  </div>
                  <h3 className="font-display font-semibold leading-snug group-hover:text-royal transition-colors">{n.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mini gallery */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-electric">Glimpses</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">Life at <span className="gradient-text">Vision</span></h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[heroClass, heroCampus, heroSports, heroLab, heroKg, heroGrad, heroClass, heroSports].map((img, k) => (
            <div key={k} className={`relative overflow-hidden rounded-xl ${k % 3 === 0 ? "row-span-2 aspect-square md:aspect-auto md:h-full" : "aspect-square"}`}>
              <img src={img} alt="" loading="lazy" className="h-full w-full object-cover hover:scale-110 transition-transform duration-700" />
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/gallery" className="btn-gradient inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold">
            Browse Full Gallery <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary/50 py-20 lg:py-28">
        <div className="text-center mb-10 px-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-electric">Voices</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">What <span className="gradient-text">Parents Say</span></h2>
        </div>
        <Testimonials />
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative overflow-hidden rounded-3xl gradient-brand p-10 md:p-16 text-soft text-center shadow-glow">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2260%22 height=%2260%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22 fill=%22white%22/%3E%3C/svg%3E')" }} />
          <div className="relative">
            <Trophy className="h-12 w-12 mx-auto mb-4 text-cyan-accent" />
            <h2 className="font-display font-bold text-3xl md:text-5xl max-w-2xl mx-auto">Give your child the head start they deserve.</h2>
            <p className="mt-4 text-base md:text-lg opacity-90 max-w-xl mx-auto">Schedule a campus visit or apply online — admissions for the new term close soon.</p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Link to="/admissions" className="bg-soft text-royal px-6 py-3 rounded-full font-semibold hover:bg-cyan-accent transition">Apply Now</Link>
              <Link to="/contact" className="border border-white/40 px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition">Book a Tour</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities & partners + map */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-electric">World-class</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Facilities Built for <span className="gradient-text">Growth</span></h2>
            <p className="mt-4 text-muted-foreground">Bright classrooms, modern ICT labs, sports field, library, dining hall, secure transport — everything your child needs to thrive.</p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                { Icon: Microscope, label: "Science & ICT labs" },
                { Icon: Users, label: "Small class sizes" },
                { Icon: Bus, label: "Safe school transport" },
                { Icon: BookOpen, label: "Rich library" },
              ].map(({ Icon, label }) => (
                <div key={label} className="flex items-center gap-3 p-3 rounded-xl bg-card shadow-soft">
                  <div className="h-10 w-10 rounded-lg gradient-brand text-soft flex items-center justify-center"><Icon className="h-5 w-5" /></div>
                  <span className="text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
            <Link to="/transport" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-royal hover:text-electric">Explore facilities <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-glow">
            <iframe
              title="Vision School Map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=36.6900%2C-1.3300%2C36.7400%2C-1.2900&layer=mapnik"
              className="absolute inset-0 h-full w-full"
              loading="lazy"
            />
            <div className="absolute bottom-4 left-4 glass rounded-xl p-3 flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4 text-electric" /> Karen, Nairobi
            </div>
          </div>
        </div>

        {/* Partners */}
        <div className="mt-20">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">Partners & Affiliations</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            {["KICD", "KNEC", "UNICEF", "Microsoft Showcase"].map((p) => (
              <div key={p} className="font-display font-bold text-lg tracking-wider">{p}</div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
