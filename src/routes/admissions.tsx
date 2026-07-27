import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section, SectionHeader } from "@/components/site/PageHero";
import { FileText, Calendar, Shirt, Download, HelpCircle, ChevronDown, Send, Check } from "lucide-react";
import grad from "@/assets/hero-graduation.jpg";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions — Apply to Vision Kindergarten & Primary School" },
      { name: "description", content: "Requirements, application process, fee structure, uniform guide, school calendar, downloadable forms, and FAQs for joining Vision School." },
    ],
  }),
  component: Admissions,
});

const fees = [
  { level: "Kindergarten (PP1–PP2)", term: "KES 35,000", year: "KES 105,000" },
  { level: "Lower Primary (Grades 1–3)", term: "KES 42,000", year: "KES 126,000" },
  { level: "Upper Primary (Grades 4–6)", term: "KES 48,000", year: "KES 144,000" },
];

const calendar = [
  { term: "Term 1", dates: "Jan 6 – Apr 4, 2026" },
  { term: "Term 2", dates: "Apr 28 – Jul 25, 2026" },
  { term: "Term 3", dates: "Sep 1 – Nov 28, 2026" },
];

const faqs = [
  { q: "What is the minimum age for kindergarten?", a: "Children must be at least 4 years old by January of the year of admission for PP1." },
  { q: "Do you offer a school bus service?", a: "Yes, our GPS-tracked school buses cover most of Nairobi. See the Transport page for routes." },
  { q: "Are visits possible before applying?", a: "Absolutely. Book a campus tour through our Contact page." },
  { q: "What is the language of instruction?", a: "English is the primary language; Kiswahili is taught as a subject and used regularly." },
];

function Admissions() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero title="Admissions 2026" subtitle="A few simple steps stand between your child and a Vision education." image={grad} breadcrumb="Admissions" />

      <Section>
        <SectionHeader eyebrow="Requirements" title="What you'll need" />
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card rounded-2xl p-6 shadow-soft">
            <h3 className="font-display font-bold text-lg mb-3">For Kindergarten</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["Child's birth certificate (copy)","Two recent passport photos","Immunization record","Parent / guardian ID","Completed application form","Registration fee KES 2,000"].map(x => <li key={x} className="flex gap-2"><Check className="h-4 w-4 text-electric mt-0.5" />{x}</li>)}
            </ul>
          </div>
          <div className="bg-card rounded-2xl p-6 shadow-soft">
            <h3 className="font-display font-bold text-lg mb-3">For Primary (transfers)</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["Most recent report card","Leaving certificate from previous school","NEMIS / Assessment number","Birth certificate (copy)","Two passport photos","Parent / guardian ID","Registration fee KES 2,500"].map(x => <li key={x} className="flex gap-2"><Check className="h-4 w-4 text-electric mt-0.5" />{x}</li>)}
            </ul>
          </div>
        </div>

        <SectionHeader eyebrow="Process" title="How to apply" />
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { n: "01", t: "Inquire", d: "Submit the inquiry form below or call our admissions office." },
            { n: "02", t: "Visit", d: "Tour the campus, meet teachers, and ask all your questions." },
            { n: "03", t: "Apply", d: "Submit the application form with required documents." },
            { n: "04", t: "Confirm", d: "Pay the registration fee and reserve your child's place." },
          ].map((s) => (
            <div key={s.n} className="relative bg-card rounded-2xl p-6 shadow-soft">
              <div className="text-5xl font-bold gradient-text">{s.n}</div>
              <h4 className="font-display font-bold mt-2">{s.t}</h4>
              <p className="text-sm text-muted-foreground mt-1">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-6">
          <div className="bg-card rounded-2xl p-6 shadow-soft lg:col-span-2">
            <div className="flex items-center gap-2 mb-4"><FileText className="h-5 w-5 text-electric" /><h3 className="font-display font-bold text-lg">Fee Structure (per term)</h3></div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead><tr className="text-left border-b"><th className="py-3">Level</th><th className="py-3">Per Term</th><th className="py-3">Per Year</th></tr></thead>
                <tbody>
                  {fees.map(f => <tr key={f.level} className="border-b last:border-0"><td className="py-3 font-medium">{f.level}</td><td className="py-3">{f.term}</td><td className="py-3 text-royal font-semibold">{f.year}</td></tr>)}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-3">Fees include lunch, books, and standard learning materials. Transport, uniform, and trips billed separately.</p>
          </div>
          <div className="bg-card rounded-2xl p-6 shadow-soft">
            <div className="flex items-center gap-2 mb-4"><Calendar className="h-5 w-5 text-electric" /><h3 className="font-display font-bold text-lg">2026 Calendar</h3></div>
            <ul className="space-y-3 text-sm">
              {calendar.map(c => <li key={c.term} className="flex justify-between border-b last:border-0 pb-2"><span className="font-medium">{c.term}</span><span className="text-muted-foreground">{c.dates}</span></li>)}
            </ul>
          </div>
          <div className="bg-card rounded-2xl p-6 shadow-soft">
            <div className="flex items-center gap-2 mb-4"><Shirt className="h-5 w-5 text-electric" /><h3 className="font-display font-bold text-lg">Uniform Guide</h3></div>
            <p className="text-sm text-muted-foreground">Royal blue tunic / shorts with white shirt and school tie. PE kit in light blue. Available at the school store.</p>
          </div>
          <div className="bg-card rounded-2xl p-6 shadow-soft lg:col-span-2">
            <div className="flex items-center gap-2 mb-4"><Download className="h-5 w-5 text-electric" /><h3 className="font-display font-bold text-lg">Downloadable Forms</h3></div>
            <div className="grid sm:grid-cols-2 gap-3">
              {["Application Form (PDF)","Medical Form (PDF)","Transport Registration","Fees & Payment Guide","Uniform Order Form","Parent Handbook"].map(f => (
                <a key={f} href="#" className="flex items-center justify-between p-3 rounded-xl border hover:border-electric hover:bg-secondary transition group">
                  <span className="text-sm font-medium">{f}</span>
                  <Download className="h-4 w-4 text-muted-foreground group-hover:text-electric" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <SectionHeader eyebrow="Inquiry" title="Ask us anything" />
            <p className="text-muted-foreground">Send a quick inquiry and our admissions team will reply within one working day.</p>
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="mt-6 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input required placeholder="Parent name" className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-electric outline-none" />
                <input required type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-electric outline-none" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input placeholder="Phone" className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-electric outline-none" />
                <select className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-electric outline-none">
                  <option>Interested in: Kindergarten</option><option>Lower Primary</option><option>Upper Primary</option>
                </select>
              </div>
              <textarea rows={4} placeholder="Your message" className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-electric outline-none" />
              <button className="btn-gradient inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold">
                {sent ? <>Inquiry sent <Check className="h-4 w-4" /></> : <>Send Inquiry <Send className="h-4 w-4" /></>}
              </button>
            </form>
          </div>
          <div>
            <SectionHeader eyebrow="FAQs" title="Frequently asked" />
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <details key={i} className="group bg-card rounded-xl p-4 shadow-soft">
                  <summary className="flex items-center justify-between cursor-pointer font-medium">
                    <span className="flex items-center gap-2"><HelpCircle className="h-4 w-4 text-electric" />{f.q}</span>
                    <ChevronDown className="h-4 w-4 group-open:rotate-180 transition" />
                  </summary>
                  <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
