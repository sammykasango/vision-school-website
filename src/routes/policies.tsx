import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/PageHero";
import { Shield, FileText, Download } from "lucide-react";
import campus from "@/assets/hero-campus.jpg";

export const Route = createFileRoute("/policies")({
  head: () => ({
    meta: [
      { title: "School Policies — Vision Kindergarten & Primary School" },
      { name: "description", content: "Code of conduct, child protection, anti-bullying, data privacy, attendance, and other policies at Vision School." },
    ],
  }),
  component: Policies,
});

const policies = [
  { title: "Code of Conduct", desc: "Behavioral expectations for students, staff and parents." },
  { title: "Child Protection & Safeguarding", desc: "Our commitment and procedures to keep every child safe." },
  { title: "Anti-Bullying Policy", desc: "Zero-tolerance stance and how reports are handled." },
  { title: "Attendance & Punctuality", desc: "Attendance expectations, leave requests, late arrivals." },
  { title: "Data Privacy", desc: "How we collect, store and protect family data (GDPR-aligned)." },
  { title: "Health & Safety", desc: "Emergency procedures, medication, sickness protocols." },
  { title: "ICT Acceptable Use", desc: "Internet and device use rules for staff and learners." },
  { title: "Uniform & Grooming", desc: "Dress code and grooming standards for all learners." },
];

function Policies() {
  return (
    <>
      <PageHero title="School Policies" subtitle="Clear expectations, safe environments, transparent processes." image={campus} breadcrumb="Policies" />
      <Section>
        <div className="grid md:grid-cols-2 gap-6">
          {policies.map(p => (
            <div key={p.title} className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-glow transition">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl gradient-brand text-soft flex items-center justify-center shrink-0"><Shield className="h-6 w-6" /></div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-lg">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
                  <a href="#" className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-royal hover:text-electric"><Download className="h-4 w-4" /> Download PDF</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-2xl glass p-6 flex items-start gap-3 shadow-soft">
          <FileText className="h-5 w-5 text-electric mt-0.5" />
          <p className="text-sm text-muted-foreground">All policies are reviewed annually by the Board of Governors. The full Parent Handbook is shared at the start of each academic year.</p>
        </div>
      </Section>
    </>
  );
}
