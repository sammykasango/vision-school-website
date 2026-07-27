import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeader } from "@/components/site/PageHero";
import { Trophy, Music, Palette, Users, Mic, Microscope, Plane, Crown, Medal } from "lucide-react";
import sports from "@/assets/hero-sports.jpg";

export const Route = createFileRoute("/school-life")({
  head: () => ({
    meta: [
      { title: "School Life — Sports, Music, Art, STEM & More | Vision School" },
      { name: "description", content: "Sports, music, art, clubs, debate, STEM activities, trips, leadership and competitions make life at Vision rich and balanced." },
    ],
  }),
  component: SchoolLife,
});

const items = [
  { Icon: Trophy, title: "Sports", text: "Football, athletics, swimming, basketball, netball, table tennis." },
  { Icon: Music, title: "Music", text: "Choir, recorder, piano, percussion, and the Vision Junior Band." },
  { Icon: Palette, title: "Art", text: "Painting, ceramics, digital art, photography and craft." },
  { Icon: Users, title: "Clubs", text: "Reading, chess, environment, journalism, coding, French." },
  { Icon: Mic, title: "Debate", text: "Weekly debate club; participation in regional debate tournaments." },
  { Icon: Microscope, title: "STEM", text: "Robotics, Scratch coding, science fair, and maker projects." },
  { Icon: Plane, title: "Trips & Excursions", text: "Term trips to museums, parks, research centres and historical sites." },
  { Icon: Crown, title: "Student Leadership", text: "House captains, prefects, eco-warriors, and the Vision Student Council." },
  { Icon: Medal, title: "Competitions", text: "Inter-school sports, music festivals, STEM challenges, art awards." },
];

function SchoolLife() {
  return (
    <>
      <PageHero title="School Life" subtitle="Rich, balanced, joyful — life beyond the classroom." image={sports} breadcrumb="School Life" />
      <Section>
        <SectionHeader eyebrow="More than lessons" title="Where children find their spark" center />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(i => (
            <div key={i.title} className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-glow hover:-translate-y-1 transition">
              <div className="h-12 w-12 rounded-xl gradient-brand text-soft flex items-center justify-center mb-4 group-hover:scale-110 transition"><i.Icon className="h-6 w-6" /></div>
              <h3 className="font-display font-bold text-lg mb-1">{i.title}</h3>
              <p className="text-sm text-muted-foreground">{i.text}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
