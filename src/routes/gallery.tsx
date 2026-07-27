import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { X, Play } from "lucide-react";
import a from "@/assets/hero-classroom.jpg";
import b from "@/assets/hero-sports.jpg";
import c from "@/assets/hero-graduation.jpg";
import d from "@/assets/hero-lab.jpg";
import e from "@/assets/hero-kindergarten.jpg";
import f from "@/assets/hero-campus.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Photos & Videos from Vision School" },
      { name: "description", content: "Modern gallery with filtering, lightbox preview, masonry layout, video gallery, and drone-style campus imagery." },
    ],
  }),
  component: Gallery,
});

type Cat = "All" | "Events" | "Sports" | "Academics" | "Graduation" | "School Trips" | "Competitions";
const items: { src: string; cat: Exclude<Cat, "All"> }[] = [
  { src: a, cat: "Academics" }, { src: b, cat: "Sports" }, { src: c, cat: "Graduation" },
  { src: d, cat: "Academics" }, { src: e, cat: "Events" }, { src: f, cat: "School Trips" },
  { src: a, cat: "Competitions" }, { src: b, cat: "Sports" }, { src: c, cat: "Graduation" },
  { src: d, cat: "Competitions" }, { src: e, cat: "Events" }, { src: f, cat: "School Trips" },
];
const cats: Cat[] = ["All", "Events", "Sports", "Academics", "Graduation", "School Trips", "Competitions"];

function Gallery() {
  const [cat, setCat] = useState<Cat>("All");
  const [open, setOpen] = useState<string | null>(null);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSlide(s => (s + 1) % 4), 4000);
    return () => clearInterval(t);
  }, []);

  const filtered = cat === "All" ? items : items.filter(i => i.cat === cat);
  const heroSlides = [a, b, c, d];

  return (
    <>
      {/* Slideshow hero */}
      <section className="relative h-[70vh] min-h-[480px] overflow-hidden">
        {heroSlides.map((s, i) => (
          <img key={i} src={s} alt="" className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${i === slide ? "opacity-100" : "opacity-0"}`} />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 to-ink/90" />
        <div className="relative h-full flex items-center justify-center text-center text-soft px-4">
          <div className="animate-fade-up">
            <span className="inline-block text-xs uppercase tracking-widest text-cyan-accent mb-3">Gallery</span>
            <h1 className="font-display font-bold text-4xl md:text-6xl">Moments at <span className="gradient-text">Vision</span></h1>
            <p className="mt-4 max-w-xl mx-auto opacity-90">Classrooms, sports, graduation, school trips — captured.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {cats.map(c => (
            <button key={c} onClick={() => setCat(c)} className={`px-4 py-2 rounded-full text-sm font-medium transition ${cat === c ? "btn-gradient" : "bg-card border border-border hover:border-electric"}`}>{c}</button>
          ))}
        </div>

        {/* Masonry */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {filtered.map((it, i) => (
            <button key={i} onClick={() => setOpen(it.src)} className="block w-full break-inside-avoid overflow-hidden rounded-xl group relative">
              <img src={it.src} alt="" loading="lazy" className={`w-full transition-transform duration-700 group-hover:scale-110 ${i % 3 === 0 ? "aspect-square" : i % 3 === 1 ? "aspect-[4/5]" : "aspect-[5/4]"} object-cover`} />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition" />
              <span className="absolute bottom-2 left-2 text-xs glass-dark text-soft px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition">{it.cat}</span>
            </button>
          ))}
        </div>

        {/* Video gallery */}
        <h2 className="font-display font-bold text-3xl mt-20 mb-8">Video <span className="gradient-text">Gallery</span></h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[f, a, b].map((img, i) => (
            <div key={i} className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-soft">
              <img src={img} alt="" loading="lazy" className="aspect-video object-cover w-full group-hover:scale-105 transition duration-500" />
              <div className="absolute inset-0 bg-ink/40 group-hover:bg-ink/55 transition flex items-center justify-center">
                <div className="h-16 w-16 rounded-full gradient-brand text-soft flex items-center justify-center shadow-glow group-hover:scale-110 transition">
                  <Play className="h-7 w-7 ml-1" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-3 left-3 text-soft text-sm font-semibold">{["Drone tour of Vision campus","A day in Grade 3","Cultural Day 2025"][i]}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {open && (
        <div role="dialog" onClick={() => setOpen(null)} className="fixed inset-0 z-[100] bg-ink/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <button onClick={() => setOpen(null)} aria-label="Close" className="absolute top-4 right-4 h-10 w-10 rounded-full glass-dark text-soft flex items-center justify-center"><X /></button>
          <img src={open} alt="" className="max-h-[90vh] max-w-full rounded-2xl shadow-glow" />
        </div>
      )}
    </>
  );
}
