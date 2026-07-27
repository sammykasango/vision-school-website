import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, SectionHeader } from "@/components/site/PageHero";
import { Baby, BookOpen, GraduationCap, Laptop, Download, ArrowRight } from "lucide-react";
import kg from "@/assets/hero-kindergarten.jpg";
import lab from "@/assets/hero-lab.jpg";

export const Route = createFileRoute("/academics")({
  head: () => ({
    meta: [
      { title: "Academics — CBC Programs, ICT & Digital Learning | Vision School" },
      { name: "description", content: "Our kindergarten, lower primary and upper primary programs follow the CBC curriculum with ICT integration, STEM enrichment and strong examination performance." },
    ],
  }),
  component: Academics,
});

const programs = [
  { Icon: Baby, title: "Kindergarten (PP1–PP2)", ages: "Ages 4–5", desc: "Play-based learning, early literacy & numeracy, social skills, and creative expression in bright, age-appropriate classrooms." },
  { Icon: BookOpen, title: "Lower Primary (Grades 1–3)", ages: "Ages 6–8", desc: "Foundational reading, writing, math, environmental activities, and CBC-aligned learning experiences." },
  { Icon: GraduationCap, title: "Upper Primary (Grades 4–6)", ages: "Ages 9–11", desc: "Deeper subject mastery, project-based learning, leadership and preparation for junior secondary." },
];

const subjects = ["English", "Kiswahili", "Mathematics", "Science & Technology", "Social Studies", "CRE/IRE", "Creative Arts", "Physical Education", "Agriculture", "Home Science"];

function Academics() {
  return (
    <>
      <PageHero title="Academics & Learning" subtitle="A modern CBC curriculum, taught with warmth and rigour." image={lab} breadcrumb="Academics" />

      <Section>
        <SectionHeader eyebrow="Programs" title="From first steps to graduation" />
        <div className="grid md:grid-cols-3 gap-6">
          {programs.map((p) => (
            <div key={p.title} className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-glow transition group">
              <div className="h-12 w-12 rounded-xl gradient-brand text-soft flex items-center justify-center mb-4 group-hover:scale-110 transition"><p.Icon className="h-6 w-6" /></div>
              <h3 className="font-display font-bold text-xl">{p.title}</h3>
              <div className="text-xs uppercase tracking-widest text-electric mt-1 mb-3">{p.ages}</div>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-glow">
            <img src={kg} alt="" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div>
            <SectionHeader eyebrow="Approach" title="The Vision learning approach" />
            <p className="text-muted-foreground">We blend competency-based learning, inquiry, play, and digital literacy. Teachers design lessons that are hands-on, collaborative, and grounded in real-world contexts — because children learn best when learning feels meaningful.</p>
            <ul className="mt-6 space-y-3 text-sm">
              {["Project & inquiry-based learning", "ICT integrated across every grade", "Continuous formative assessment", "Differentiated support for every child", "Parent-teacher learning partnership"].map((x) => (
                <li key={x} className="flex gap-3"><span className="h-2 w-2 rounded-full bg-electric mt-2 shrink-0" />{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Section>
        <SectionHeader eyebrow="Curriculum" title="Subjects we offer" />
        <div className="flex flex-wrap gap-3">
          {subjects.map((s) => (
            <span key={s} className="px-4 py-2 rounded-full glass border-border shadow-soft text-sm font-medium">{s}</span>
          ))}
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl gradient-brand p-8 text-soft shadow-glow">
            <Laptop className="h-10 w-10 mb-3" />
            <h3 className="font-display font-bold text-xl">ICT & Digital Learning</h3>
            <p className="mt-2 text-sm opacity-90">Every classroom has interactive screens. Children learn typing, digital safety, coding basics (Scratch), and use Microsoft 365 from Grade 3.</p>
          </div>
          <div className="rounded-2xl bg-card p-8 shadow-soft">
            <h3 className="font-display font-bold text-xl mb-3">Examination Performance</h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div><div className="text-3xl font-bold gradient-text">96%</div><div className="text-xs text-muted-foreground">Above 70% in KPSEA</div></div>
              <div><div className="text-3xl font-bold gradient-text">88%</div><div className="text-xs text-muted-foreground">Top quartile nationally</div></div>
              <div><div className="text-3xl font-bold gradient-text">100%</div><div className="text-xs text-muted-foreground">Secondary placement</div></div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <a href="#" className="btn-gradient inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold"><Download className="h-4 w-4" /> Download Curriculum Brochure (PDF)</a>
          <div className="mt-3"><Link to="/admissions" className="text-sm font-semibold text-royal hover:text-electric inline-flex items-center gap-1.5">Ready to apply? <ArrowRight className="h-4 w-4" /></Link></div>
        </div>
      </Section>
    </>
  );
}
