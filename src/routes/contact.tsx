import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section, SectionHeader } from "@/components/site/PageHero";
import { Mail, Phone, MapPin, Clock, AlertCircle, Send, Check } from "lucide-react";
import { FacebookIcon, InstagramIcon, TiktokIcon, LinkedinIcon, YoutubeIcon, XIcon, WhatsappIcon } from "@/components/site/SocialIcons";
import campus from "@/assets/hero-campus.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Vision School — Visit, Call or Message" },
      { name: "description", content: "Get in touch with Vision Kindergarten & Primary School. Address, phone, email, office hours, WhatsApp, social handles and emergency contacts." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero title="Get in Touch" subtitle="We'd love to hear from you — visit, call, or send us a note." image={campus} breadcrumb="Contact" />

      <Section>
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <SectionHeader eyebrow="Send a message" title="How can we help?" />
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input required placeholder="Your name" className="px-4 py-3 rounded-xl bg-card border border-border focus:border-electric outline-none" />
                <input required type="email" placeholder="Email" className="px-4 py-3 rounded-xl bg-card border border-border focus:border-electric outline-none" />
              </div>
              <input placeholder="Phone (optional)" className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-electric outline-none" />
              <input required placeholder="Subject" className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-electric outline-none" />
              <textarea required rows={6} placeholder="Your message" className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-electric outline-none" />
              <button className="btn-gradient inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold">
                {sent ? <>Message sent <Check className="h-4 w-4" /></> : <>Send Message <Send className="h-4 w-4" /></>}
              </button>
            </form>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <div className="bg-card rounded-2xl p-6 shadow-soft space-y-4">
              <div className="flex gap-3"><div className="h-10 w-10 rounded-lg gradient-brand text-soft flex items-center justify-center"><MapPin className="h-5 w-5" /></div><div><div className="font-semibold">Address</div><div className="text-sm text-muted-foreground">Vision Avenue, Karen, Nairobi, Kenya</div></div></div>
              <div className="flex gap-3"><div className="h-10 w-10 rounded-lg gradient-brand text-soft flex items-center justify-center"><Phone className="h-5 w-5" /></div><div><div className="font-semibold">Phone</div><div className="text-sm text-muted-foreground">+254 700 000 000 · +254 711 111 111</div></div></div>
              <div className="flex gap-3"><div className="h-10 w-10 rounded-lg gradient-brand text-soft flex items-center justify-center"><Mail className="h-5 w-5" /></div><div><div className="font-semibold">Email</div><div className="text-sm text-muted-foreground">info@visionschool.ac.ke<br/>admissions@visionschool.ac.ke</div></div></div>
              <div className="flex gap-3"><div className="h-10 w-10 rounded-lg gradient-brand text-soft flex items-center justify-center"><Clock className="h-5 w-5" /></div><div><div className="font-semibold">Office Hours</div><div className="text-sm text-muted-foreground">Mon–Fri: 7:00 AM – 5:00 PM<br/>Sat: 8:00 AM – 12:00 PM</div></div></div>
            </div>

            <a href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#25D366] text-white rounded-2xl p-5 shadow-soft hover:shadow-glow transition hover:-translate-y-0.5">
              <WhatsappIcon className="h-8 w-8" />
              <div>
                <div className="font-semibold">Quick chat on WhatsApp</div>
                <div className="text-sm opacity-90">Reply usually within minutes</div>
              </div>
            </a>

            <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-5">
              <div className="flex items-center gap-2 mb-2 text-destructive font-semibold"><AlertCircle className="h-5 w-5" /> Emergency Contact</div>
              <div className="text-sm text-muted-foreground">24/7 Security Desk: <span className="font-semibold text-foreground">+254 722 222 222</span><br/>School Nurse: <span className="font-semibold text-foreground">+254 733 333 333</span></div>
            </div>

            <div className="bg-card rounded-2xl p-5 shadow-soft">
              <div className="text-sm font-semibold mb-3">Follow us</div>
              <div className="flex flex-wrap gap-2">
                {[
                  { I: FacebookIcon, h: "https://facebook.com", l: "Facebook" },
                  { I: InstagramIcon, h: "https://instagram.com", l: "Instagram" },
                  { I: TiktokIcon, h: "https://tiktok.com", l: "TikTok" },
                  { I: LinkedinIcon, h: "https://linkedin.com", l: "LinkedIn" },
                  { I: YoutubeIcon, h: "https://youtube.com", l: "YouTube" },
                  { I: XIcon, h: "https://x.com", l: "X" },
                ].map(s => (
                  <a key={s.l} href={s.h} target="_blank" rel="noopener noreferrer" aria-label={s.l}
                    className="h-9 w-9 inline-flex items-center justify-center rounded-full bg-secondary hover:gradient-brand hover:text-soft transition"><s.I /></a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="mx-auto max-w-7xl rounded-3xl overflow-hidden shadow-glow aspect-[16/9] md:aspect-[21/9]">
          <iframe
            title="Vision School location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=36.6900%2C-1.3300%2C36.7400%2C-1.2900&layer=mapnik&marker=-1.3105%2C36.7150"
            className="h-full w-full"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}
