import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

interface Props {
  title: string;
  subtitle?: string;
  image: string;
  breadcrumb?: string;
  children?: ReactNode;
}

export function PageHero({ title, subtitle, image, breadcrumb, children }: Props) {
  return (
    <section className="relative min-h-[55vh] flex items-end pt-32 pb-16 overflow-hidden">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/60 to-ink/90" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-soft animate-fade-up">
        {breadcrumb && (
          <div className="text-sm opacity-80 mb-3">
            <Link to="/" className="hover:text-cyan-accent">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-cyan-accent">{breadcrumb}</span>
          </div>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-base md:text-lg max-w-2xl opacity-90">{subtitle}</p>
        )}
        {children}
      </div>
    </section>
  );
}

export function Section({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <section className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 ${className}`}>
      {children}
    </section>
  );
}

export function SectionHeader({
  eyebrow, title, description, center = false,
}: { eyebrow?: string; title: string; description?: string; center?: boolean }) {
  return (
    <div className={`mb-12 ${center ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}`}>
      {eyebrow && (
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-electric mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
        {title.split(" ").map((w, i, arr) =>
          i === arr.length - 1 ? <span key={i} className="gradient-text">{w}</span> : <span key={i}>{w} </span>
        )}
      </h2>
      {description && <p className="mt-4 text-muted-foreground text-base md:text-lg">{description}</p>}
    </div>
  );
}
