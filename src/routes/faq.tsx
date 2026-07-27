import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeader } from "@/components/site/PageHero";
import { ChevronDown, HelpCircle } from "lucide-react";
import classroom from "@/assets/hero-classroom.jpg";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Frequently Asked Questions | Vision School" },
      { name: "description", content: "Answers to the most common questions about admissions, fees, transport, uniforms, curriculum and school life." },
    ],
  }),
  component: FAQ,
});

const groups = [
  { name: "Admissions", items: [
    { q: "When does the application window open?", a: "Applications open in September each year for the following January intake. We accept transfers throughout the year, space permitting." },
    { q: "Is there an entrance assessment?", a: "Primary transfers complete a friendly age-appropriate assessment in English, Math and Kiswahili. Kindergarten has no assessment." },
    { q: "Can siblings apply together?", a: "Yes — sibling applications are processed together and receive priority placement." },
  ]},
  { name: "Fees & Payments", items: [
    { q: "Are there discounts for siblings?", a: "Yes. 5% off the second child's tuition and 10% off the third." },
    { q: "What payment methods do you accept?", a: "M-Pesa, bank transfer, banker's cheque, and card payments through the parent portal." },
    { q: "Are there scholarships?", a: "We offer a limited number of partial scholarships based on need and merit." },
  ]},
  { name: "Daily Life", items: [
    { q: "What time does school start and end?", a: "Lessons run 7:45 AM – 3:30 PM. After-school clubs end by 5:00 PM." },
    { q: "Do you provide meals?", a: "Yes, a hot lunch and mid-morning snack are included in tuition." },
    { q: "Do children carry phones?", a: "Personal phones are not permitted. Parents can reach children through the school office." },
  ]},
];

function FAQ() {
  return (
    <>
      <PageHero title="Frequently Asked Questions" subtitle="Quick answers to the questions parents ask most." image={classroom} breadcrumb="FAQ" />
      <Section>
        {groups.map((g) => (
          <div key={g.name} className="mb-12">
            <SectionHeader eyebrow="Section" title={g.name} />
            <div className="space-y-3">
              {g.items.map((item, i) => (
                <details key={i} className="group bg-card rounded-xl p-5 shadow-soft">
                  <summary className="flex items-center justify-between cursor-pointer font-medium">
                    <span className="flex items-center gap-2"><HelpCircle className="h-4 w-4 text-electric" />{item.q}</span>
                    <ChevronDown className="h-4 w-4 group-open:rotate-180 transition" />
                  </summary>
                  <p className="mt-3 text-sm text-muted-foreground">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        ))}
      </Section>
    </>
  );
}
