import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { PageHero, Section } from "@/components/site/PageHero";
import { Search, Calendar, Tag, ArrowRight } from "lucide-react";
import a from "@/assets/hero-classroom.jpg";
import b from "@/assets/hero-sports.jpg";
import c from "@/assets/hero-graduation.jpg";
import d from "@/assets/hero-lab.jpg";
import e from "@/assets/hero-kindergarten.jpg";
import f from "@/assets/hero-campus.jpg";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Events — Vision School Updates, Stories & Announcements" },
      { name: "description", content: "Featured announcements, upcoming events, past events, school celebrations, and academic news from Vision School." },
    ],
  }),
  component: News,
});

const cats = ["All", "Events", "Academics", "Sports", "Celebrations", "Announcements"];
const posts = [
  { img: d, cat: "Academics", title: "Vision wins regional STEM challenge 2026", date: "May 12, 2026", excerpt: "Our Grade 6 robotics team took first place at the Nairobi STEM showcase." },
  { img: c, cat: "Celebrations", title: "Grade 6 graduation set for July 18th", date: "May 02, 2026", excerpt: "Save the date — full programme to be shared by end of month." },
  { img: b, cat: "Sports", title: "U-12 football team crowned county champions", date: "Apr 26, 2026", excerpt: "An unbeaten season culminates with a 3–1 final win." },
  { img: a, cat: "Announcements", title: "Term 2 reopening: April 28", date: "Apr 14, 2026", excerpt: "Important dates, transport schedule, and supply list for the new term." },
  { img: e, cat: "Events", title: "KG Family Picnic — May 24", date: "Apr 10, 2026", excerpt: "All KG families invited to our annual picnic on the school field." },
  { img: f, cat: "Academics", title: "New science block opens in September", date: "Apr 02, 2026", excerpt: "A 1,200 sqm facility with three labs, prep rooms, and a maker space." },
  { img: b, cat: "Sports", title: "Inter-house athletics calendar released", date: "Mar 28, 2026", excerpt: "Heats begin May 6; finals on May 17. Parents warmly welcomed." },
  { img: c, cat: "Celebrations", title: "Cultural Day brings the world to Vision", date: "Mar 15, 2026", excerpt: "Twenty-two cultures represented through food, music, and dance." },
];

function News() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const filtered = useMemo(() => posts.filter(p =>
    (cat === "All" || p.cat === cat) && (p.title.toLowerCase().includes(q.toLowerCase()) || p.excerpt.toLowerCase().includes(q.toLowerCase()))
  ), [q, cat]);

  return (
    <>
      <PageHero title="News & Events" subtitle="What's happening across the Vision campus." image={a} breadcrumb="News" />

      <Section>
        {/* Featured */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {posts.slice(0, 2).map((p) => (
            <article key={p.title} className="group bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-glow transition">
              <div className="aspect-[16/10] overflow-hidden"><img src={p.img} alt="" loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition duration-700" /></div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2"><span className="text-electric font-semibold uppercase tracking-wider">{p.cat}</span><Calendar className="h-3.5 w-3.5" />{p.date}</div>
                <h2 className="font-display font-bold text-2xl group-hover:text-royal transition">{p.title}</h2>
                <p className="mt-2 text-muted-foreground text-sm">{p.excerpt}</p>
                <a href="#" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-royal">Read more <ArrowRight className="h-4 w-4" /></a>
              </div>
            </article>
          ))}
        </div>

        {/* Search + filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search news, events, announcements…" className="w-full pl-11 pr-4 py-3 rounded-full bg-card border border-border focus:border-electric outline-none" />
          </div>
          <div className="flex flex-wrap gap-2">
            {cats.map(c => (
              <button key={c} onClick={() => setCat(c)} className={`px-4 py-2 rounded-full text-sm font-medium transition ${cat === c ? "btn-gradient" : "bg-card border border-border hover:border-electric"}`}>
                <Tag className="inline h-3.5 w-3.5 mr-1" />{c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(p => (
            <article key={p.title} className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-glow transition">
              <div className="aspect-[16/10] overflow-hidden"><img src={p.img} alt="" loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition duration-700" /></div>
              <div className="p-5">
                <div className="flex items-center justify-between text-xs mb-2"><span className="text-electric font-semibold uppercase tracking-wider">{p.cat}</span><span className="text-muted-foreground">{p.date}</span></div>
                <h3 className="font-display font-semibold leading-snug group-hover:text-royal">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
              </div>
            </article>
          ))}
          {filtered.length === 0 && <p className="text-center text-muted-foreground col-span-full py-12">No posts match your search.</p>}
        </div>
      </Section>
    </>
  );
}
