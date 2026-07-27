import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, SectionHeader } from "@/components/site/PageHero";
import { Award, Eye, Target, Heart, Sparkles, CheckCircle2 } from "lucide-react";
import campus from "@/assets/hero-campus.jpg";
import classroom from "@/assets/hero-classroom.jpg";
import principal from "@/assets/principal.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Vision School — Our Story, Vision & Values" },
      { name: "description", content: "Two decades of nurturing curious, confident children. Discover our mission, vision, values, and the principal's message." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        title="About Vision School"
        subtitle="Two decades of nurturing curious, confident, and compassionate children."
        image={campus}
        breadcrumb="About"
      />

      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader eyebrow="Our Story" title="A school built around children" />
            <p className="text-muted-foreground leading-relaxed">
              Vision Kindergarten & Primary School was founded in 2023 by a small group of educators
              who believed every child deserves an education that feels like a launchpad — not a treadmill.
              Twenty years later we serve over 850 children across kindergarten and primary, with a campus,
              a teaching team, and a culture that's grown to match that founding belief.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We follow the Kenyan CBC curriculum and weave in modern pedagogy, ICT integration,
              arts, sports, and character formation — so children leave us ready for secondary school
              and ready for life.
            </p>
          </div>
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-glow">
            <img src={classroom} alt="Vision classroom" className="h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
      </Section>

      {/* Vision/Mission/Values */}
      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          {[
            { Icon: Eye, title: "Our Vision", text: "To be the most respected centre of holistic early education in East Africa." },
            { Icon: Target, title: "Our Mission", text: "To nurture every child into a confident, curious, and caring leader through excellent CBC education." },
            { Icon: Heart, title: "Our Values", text: "Integrity · Excellence · Compassion · Curiosity · Respect · Responsibility." },
          ].map((b) => (
            <div key={b.title} className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-glow transition">
              <div className="h-12 w-12 rounded-xl gradient-brand text-soft flex items-center justify-center mb-4"><b.Icon className="h-6 w-6" /></div>
              <h3 className="font-display font-bold text-xl mb-2">{b.title}</h3>
              <p className="text-muted-foreground">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Principal */}
      <Section>
        <SectionHeader eyebrow="Leadership" title="A message from our Principal" />
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-glow">
              <img src={principal} alt="Principal" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="mt-4">
              <div className="font-display font-bold text-lg">Dr. Samuel Wanjau</div>
              <div className="text-sm text-muted-foreground">Principal, M.Ed Educational Leadership</div>
            </div>
          </div>
          <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
            <p>“Welcome to Vision School. When a parent entrusts us with their child, we take that trust as our most serious responsibility. Our job is not only to teach — it is to spark wonder, build character, and prepare each child for a world we cannot fully predict.”</p>
            <p>“We do that by hiring teachers who love what they do, keeping our classes small, integrating technology thoughtfully, and creating space for play, sport, art, and friendship. The CBC framework gives us structure; our culture gives it warmth.”</p>
            <p>“I invite you to visit our campus, meet our teachers, and see for yourself why children at Vision look forward to Monday morning.”</p>
          </div>
        </div>
      </Section>

      {/* Why choose us */}
      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Why choose us" title="The Vision difference" center />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Small class sizes (max 20 per class)",
              "Fully qualified, CBC-trained teachers",
              "Modern ICT labs and digital learning",
              "Strong sports, music, art and STEM programs",
              "Secure transport on safe, GPS-tracked buses",
              "Active parent portal and regular communication",
              "3+ years of consistent academic excellence",
              "Inclusive, child-centered learning culture",
              "Beautiful, secure 5-acre green campus",
            ].map((t) => (
              <div key={t} className="flex items-start gap-3 bg-card rounded-xl p-5 shadow-soft">
                <CheckCircle2 className="h-5 w-5 text-electric shrink-0 mt-0.5" />
                <span className="text-sm font-medium">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <Section>
        <SectionHeader eyebrow="Milestones" title="Twenty years of growth" center />
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
          {[
            { y: "2023", t: "Founded with 35 children in two rented classrooms." },
            { y: "2024", t: "Adopted the CBC curriculum across all grades." },
            { y: "2025", t: "Crossed 800 students; introduced school transport fleet." },
          ].map((m, i) => (
            <div key={m.y} className={`relative pl-12 md:pl-0 mb-10 md:grid md:grid-cols-2 md:gap-10 ${i % 2 ? "md:text-right" : ""}`}>
              <div className={`md:col-start-${i % 2 ? "1" : "2"}`}>
                <div className="bg-card rounded-2xl p-6 shadow-soft inline-block md:max-w-sm">
                  <div className="text-electric font-bold font-display text-xl">{m.y}</div>
                  <p className="text-sm text-muted-foreground mt-1">{m.t}</p>
                </div>
              </div>
              <div className="absolute left-4 md:left-1/2 top-3 h-3 w-3 rounded-full gradient-brand md:-translate-x-1/2 ring-4 ring-background" />
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/admissions" className="btn-gradient inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold">
            Join our story <Sparkles className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}
