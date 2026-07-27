import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeader } from "@/components/site/PageHero";
import { Bus, Microscope, BookOpen, Utensils, Shield, Wifi, Trees, Activity } from "lucide-react";
import campus from "@/assets/hero-campus.jpg";

export const Route = createFileRoute("/transport")({
  head: () => ({
    meta: [
      { title: "Transport & Facilities — Vision School" },
      { name: "description", content: "GPS-tracked school transport routes plus a modern campus with labs, library, sports field, dining hall and secure facilities." },
    ],
  }),
  component: Transport,
});

const routes = [
  { name: "Route A — Ngelani / Kivandini", stops: "Ngelani Town · Kivutini", time: "6:15 AM" },
  { name: "Route B — Mua-Kasaini /Mutituni ", stops: "Ngomeni Primary · Kivandini · Mutituni", time: "6:00 AM" },
  { name: "Route C —  Kasinga / Sweet-Waters", stops: "Sweet-Waters · Kasinga Primary · Valentines", time: "5:50 AM" },
  { name: "Route D — Machakos-Town / Tumba", stops: "Machakos-Town · Kiserian · Tumba · Kwanthanze", time: "5:45 AM" },
];

const facs = [
  { Icon: Microscope, t: "Science & ICT Labs", d: "Three labs equipped for hands-on learning." },
  { Icon: BookOpen, t: "Library", d: "8,000+ books and digital subscriptions." },
  { Icon: Activity, t: "Sports Field & Court", d: "Football pitch, basketball and netball courts." },
  { Icon: Utensils, t: "Dining Hall", d: "Hot meals prepared on-site daily." },
  { Icon: Shield, t: "24/7 Security", d: "Manned gates and CCTV across campus." },
  { Icon: Wifi, t: "Wi-Fi Campus", d: "Filtered, secure wireless throughout." },
  { Icon: Trees, t: "5-acre Green Campus", d: "Trees, gardens and outdoor learning spaces." },
  { Icon: Bus, t: "GPS-tracked Transport", d: "Routes across Nairobi with live tracking." },
];

function Transport() {
  return (
    <>
      <PageHero title="Transport & Facilities" subtitle="Safe travel and a campus built for learning." image={campus} breadcrumb="Transport" />

      <Section>
        <SectionHeader eyebrow="Transport" title="Daily school bus routes" />
        <div className="grid md:grid-cols-2 gap-6">
          {routes.map(r => (
            <div key={r.name} className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-glow transition">
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-3">
                  <div className="h-10 w-10 rounded-lg gradient-brand text-soft flex items-center justify-center shrink-0"><Bus className="h-5 w-5" /></div>
                  <div>
                    <div className="font-display font-bold">{r.name}</div>
                    <div className="text-sm text-muted-foreground mt-1">{r.stops}</div>
                  </div>
                </div>
                <div className="text-electric text-xs font-bold whitespace-nowrap">Pickup {r.time}</div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">All buses are GPS-tracked. Parents receive boarding and arrival SMS notifications.</p>
      </Section>

      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Facilities" title="A campus built for children" center />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {facs.map(f => (
              <div key={f.t} className="bg-card rounded-2xl p-5 shadow-soft hover:shadow-glow transition text-center group">
                <div className="h-12 w-12 mx-auto rounded-xl gradient-brand text-soft flex items-center justify-center mb-3 group-hover:scale-110 transition"><f.Icon className="h-6 w-6" /></div>
                <div className="font-display font-bold">{f.t}</div>
                <p className="text-xs text-muted-foreground mt-1">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
