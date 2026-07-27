import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeader } from "@/components/site/PageHero";
import { Mail } from "lucide-react";
import principal from "@/assets/principal.jpg";
import campus from "@/assets/hero-campus.jpg";

export const Route = createFileRoute("/staff")({
  head: () => ({
    meta: [
      { title: "Staff & Leadership — Meet the Vision School Team" },
      { name: "description", content: "Principal, department heads, and teaching team — qualified, caring educators dedicated to every Vision child." },
    ],
  }),
  component: Staff,
});

const team = [
  { name: "Ms. Grace Wairimu", role: "Deputy Principal", q: "B.Ed, M.A. Curriculum" },
  { name: "Mr. Peter Mwangi", role: "Head of Lower Primary", q: "B.Ed Primary" },
  { name: "Mrs. Linda Otieno", role: "Head of Upper Primary", q: "B.Ed Education, P1" },
  { name: "Mr. Brian Kamau", role: "Head of ICT & STEM", q: "B.Sc Computer Science" },
  { name: "Mrs. Janet Mutiso", role: "Head of Kindergarten", q: "Dip. ECDE, B.Ed" },
  { name: "Ms. Naomi Cheruiyot", role: "Head of Sports", q: "B.A Physical Education" },
  { name: "Mr. Joseph Njoroge", role: "Head of Music & Arts", q: "B.A Music" },
  { name: "Mrs. Esther Wambui", role: "School Counselor", q: "M.A Counseling Psychology" },
];

function Staff() {
  return (
    <>
      <PageHero title="Staff & Leadership" subtitle="A passionate team of educators who put children first." image={campus} breadcrumb="Staff" />

      <Section>
        <SectionHeader eyebrow="Principal" title="Leadership from the front" />
        <div className="grid md:grid-cols-3 gap-8 items-start bg-card rounded-3xl p-8 shadow-soft">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden">
            <img src={principal} alt="Principal" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="md:col-span-2">
            <h3 className="font-display font-bold text-2xl">Dr. Samuel Wanjau</h3>
            <p className="text-electric font-semibold">Principal · M.Ed Educational Leadership · 22 years in education</p>
            <p className="mt-4 text-muted-foreground">A passionate believer in child-centered learning, Dr. Wanjau has led Vision since 2014. Under his leadership the school has tripled in size, modernised its curriculum, and built a culture where teachers, parents, and children move forward together.</p>
            <a href="mailto:principal@visionschool.ac.ke" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-royal hover:text-electric"><Mail className="h-4 w-4" /> principal@visionschool.ac.ke</a>
          </div>
        </div>
      </Section>

      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Department heads" title="Meet the team" center />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {team.map(m => (
              <div key={m.name} className="group relative bg-card rounded-2xl p-6 shadow-soft hover:shadow-glow transition text-center overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition gradient-brand" />
                <div className="relative">
                  <div className="h-20 w-20 mx-auto rounded-full gradient-brand text-soft flex items-center justify-center font-display font-bold text-2xl mb-3 ring-4 ring-background group-hover:scale-110 transition">
                    {m.name.split(" ").map(s => s[0]).slice(0,2).join("")}
                  </div>
                  <div className="font-display font-bold group-hover:text-soft transition">{m.name}</div>
                  <div className="text-xs text-electric font-semibold uppercase tracking-wider mt-1 group-hover:text-soft transition">{m.role}</div>
                  <div className="text-xs text-muted-foreground mt-2 group-hover:text-soft/80 transition">{m.q}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8">Plus 45 qualified, full-time classroom teachers and support staff.</p>
        </div>
      </section>
    </>
  );
}
