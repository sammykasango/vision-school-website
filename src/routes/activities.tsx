import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeader } from "@/components/site/PageHero";
import { Trophy, Music, Palette, Cpu, Mic2, Heart, Globe2, Calculator, BookOpen } from "lucide-react";
import sports from "@/assets/hero-sports.jpg";

export const Route = createFileRoute("/activities")({
  head: () => ({
    meta: [
      { title: "Student Activities — Clubs & Enrichment | Vision School" },
      { name: "description", content: "Discover the wide range of clubs and enrichment activities our students enjoy after class." },
    ],
  }),
  component: Activities,
});

const list = [
  { Icon: Trophy, t: "Sports Club", d: "Football, athletics, swimming, basketball, netball." },
  { Icon: Music, t: "Music Club", d: "Choir, recorder, piano, junior band." },
  { Icon: Palette, t: "Art Club", d: "Painting, ceramics, digital art." },
  { Icon: Cpu, t: "Coding Club", d: "Scratch, micro:bit, intro to Python." },
  { Icon: Mic2, t: "Debate Club", d: "Public speaking and competitive debate." },
  { Icon: Heart, t: "Eco Warriors", d: "Tree planting, recycling, conservation." },
  { Icon: Globe2, t: "French Club", d: "Beginner conversational French." },
  { Icon: Calculator, t: "Math Olympiad", d: "Problem-solving and competition prep." },
  { Icon: BookOpen, t: "Reading Club", d: "Story circles, book reviews, library quests." },
];

function Activities() {
  return (
    <>
      <PageHero title="Student Activities" subtitle="A club, sport, or interest for every child." image={sports} breadcrumb="Activities" />
      <Section>
        <SectionHeader eyebrow="Enrichment" title="After-class & co-curricular" center />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map(l => (
            <div key={l.t} className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-glow hover:-translate-y-1 transition group">
              <div className="h-12 w-12 rounded-xl gradient-brand text-soft flex items-center justify-center mb-4 group-hover:scale-110 transition"><l.Icon className="h-6 w-6" /></div>
              <h3 className="font-display font-bold text-lg">{l.t}</h3>
              <p className="text-sm text-muted-foreground mt-1">{l.d}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
