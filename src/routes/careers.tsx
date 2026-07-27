import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, SectionHeader } from "@/components/site/PageHero";
import { Briefcase, ArrowRight, MapPin, Clock } from "lucide-react";
import campus from "@/assets/hero-campus.jpg";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Join the Vision School Team" },
      { name: "description", content: "Open teaching, leadership and support roles at Vision Kindergarten & Primary School." },
    ],
  }),
  component: Careers,
});

const jobs = [
  { title: "CBC Primary Teacher (Grades 4–6)", type: "Full-time", loc: "Karen, Nairobi", desc: "Teach a core subject across upper primary classes with CBC delivery." },
  { title: "Kindergarten Teacher (PP1)", type: "Full-time", loc: "Karen, Nairobi", desc: "Lead a PP1 classroom with play-based, inquiry-led learning." },
  { title: "ICT Lab Coordinator", type: "Full-time", loc: "Karen, Nairobi", desc: "Manage ICT lab; teach digital literacy & basic coding to Grades 3–6." },
  { title: "School Counselor", type: "Part-time", loc: "Karen, Nairobi", desc: "Provide pastoral support to learners and consultation to parents." },
  { title: "School Bus Driver", type: "Full-time", loc: "Nairobi routes", desc: "Safe, courteous transport of learners on assigned routes." },
];

function Careers() {
  return (
    <>
      <PageHero title="Careers at Vision" subtitle="Join a team that loves children, education, and growth." image={campus} breadcrumb="Careers" />
      <Section>
        <SectionHeader eyebrow="Open positions" title="Current vacancies" />
        <div className="space-y-4">
          {jobs.map(j => (
            <div key={j.title} className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-glow transition flex flex-col md:flex-row md:items-center gap-4">
              <div className="h-12 w-12 rounded-xl gradient-brand text-soft flex items-center justify-center shrink-0"><Briefcase className="h-6 w-6" /></div>
              <div className="flex-1">
                <h3 className="font-display font-bold text-lg group-hover:text-royal">{j.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{j.desc}</p>
                <div className="mt-2 flex flex-wrap gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{j.type}</span>
                  <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{j.loc}</span>
                </div>
              </div>
              <a href="mailto:careers@visionschool.ac.ke" className="btn-gradient inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap">Apply <ArrowRight className="h-4 w-4" /></a>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground">Don't see your role? Send your CV to <a href="mailto:careers@visionschool.ac.ke" className="text-electric font-semibold">careers@visionschool.ac.ke</a> — we keep talented educators on file. <Link to="/contact" className="text-electric font-semibold">Contact HR</Link>.</p>
      </Section>
    </>
  );
}
