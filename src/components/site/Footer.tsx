import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import logo from "@/assets/logo.png";
import {
  FacebookIcon, InstagramIcon, TiktokIcon, LinkedinIcon, YoutubeIcon, XIcon, WhatsappIcon,
} from "./SocialIcons";

const socials = [
  { Icon: FacebookIcon, href: "https://facebook.com", label: "Facebook" },
  { Icon: TiktokIcon, href: "https://tiktok.com", label: "TikTok" },
  { Icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn" },
  { Icon: YoutubeIcon, href: "https://youtube.com", label: "YouTube" },
  { Icon: XIcon, href: "https://x.com", label: "X (Twitter)" },
  { Icon: WhatsappIcon, href: "https://wa.me/254700000000", label: "WhatsApp" },
];

const quick = [
  { to: "/about", label: "About Us" },
  { to: "/academics", label: "Academics" },
  { to: "/admissions", label: "Admissions" },
  { to: "/news", label: "News & Events" },
  { to: "/gallery", label: "Gallery" },
  { to: "/staff", label: "Staff" },
  { to: "/careers", label: "Careers" },
  { to: "/policies", label: "School Policies" },
  { to: "/activities", label: "Student Activities " },
  { to: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative bg-ink text-soft overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(800px 400px at 10% 0%, rgba(30,136,229,0.35), transparent), radial-gradient(600px 300px at 90% 100%, rgba(56,189,248,0.25), transparent)" }} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="Vision School" className="h-12 w-12" />
              <div>
                <div className="font-display font-bold text-lg">Vision School</div>
                <div className="text-[11px] uppercase tracking-widest opacity-70">Kindergarten & Primary</div>
              </div>
            </Link>
            <p className="mt-4 text-sm opacity-80 italic">
              “Shaping Bright Futures Through Quality Education.”
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="h-9 w-9 inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-cyan-accent hover:text-ink transition-all hover:-translate-y-0.5"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-base mb-4">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-y-2 text-sm">
              {quick.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="opacity-80 hover:opacity-100 hover:text-cyan-accent transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-base mb-4">Contact</h4>
            <ul className="space-y-3 text-sm opacity-90">
              <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-cyan-accent shrink-0" /> Tumba-Kasinga, Machakos, Kenya</li>
              <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-cyan-accent shrink-0" /> +254 700 000 000</li>
              <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 text-cyan-accent shrink-0" /> info@visionschool.ac.ke</li>
              <li className="flex gap-2"><Clock className="h-4 w-4 mt-0.5 text-cyan-accent shrink-0" /> Mon–Fri: 7:00 AM – 5:00 PM</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-base mb-4">Newsletter</h4>
            <p className="text-sm opacity-80 mb-4">Get school updates, events, and announcements directly in your inbox.</p>
            <form
              onSubmit={(e) => { e.preventDefault(); alert("Thanks for subscribing!"); }}
              className="flex items-center gap-2 bg-white/10 rounded-full p-1 pl-4 focus-within:ring-2 ring-cyan-accent"
            >
              <input
                type="email"
                required
                placeholder="Your email"
                className="bg-transparent outline-none text-sm flex-1 placeholder:text-soft/60"
              />
              <button className="btn-gradient rounded-full p-2.5" aria-label="Subscribe">
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="divider-glow my-10 opacity-50" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs opacity-75">
          <p>© {new Date().getFullYear()} Vision Kindergarten & Primary School. All rights reserved.</p>
          <p>Built with excellence By Sammy M. Kasango.</p>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/254700000000"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-glow animate-float hover:scale-110 transition-transform"
      >
        <WhatsappIcon className="h-7 w-7" />
      </a>
    </footer>
  );
}
