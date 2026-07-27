import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = "h-4 w-4";

export const FacebookIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={base} {...p}>
    <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z"/>
  </svg>
);
export const InstagramIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={base} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
  </svg>
);
export const TiktokIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={base} {...p}>
    <path d="M16.5 3a5.5 5.5 0 0 0 4.5 4.5v3a8.5 8.5 0 0 1-4.5-1.4v6.2A6.7 6.7 0 1 1 9.8 8.6v3.2a3.5 3.5 0 1 0 3.7 3.5V3h3z"/>
  </svg>
);
export const LinkedinIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={base} {...p}>
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.1c.5-1 1.9-2 3.9-2 4.2 0 5 2.7 5 6.2V21h-4v-5.4c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21h-4z"/>
  </svg>
);
export const YoutubeIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={base} {...p}>
    <path d="M23 12s0-3.6-.5-5.3a2.8 2.8 0 0 0-2-2C18.8 4 12 4 12 4s-6.8 0-8.5.7a2.8 2.8 0 0 0-2 2C1 8.4 1 12 1 12s0 3.6.5 5.3a2.8 2.8 0 0 0 2 2C5.2 20 12 20 12 20s6.8 0 8.5-.7a2.8 2.8 0 0 0 2-2C23 15.6 23 12 23 12zM10 15.5v-7l6 3.5z"/>
  </svg>
);
export const XIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={base} {...p}>
    <path d="M18.2 3H21l-6.5 7.4L22 21h-6l-4.7-6.1L5.9 21H3l7-8L2.5 3h6.1l4.3 5.7L18.2 3zm-1 16h1.6L7 4.8H5.3L17.2 19z"/>
  </svg>
);
export const WhatsappIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={base} {...p}>
    <path d="M20.5 3.5A10 10 0 0 0 3.3 16.7L2 22l5.4-1.4A10 10 0 1 0 20.5 3.5zM12 20a8 8 0 0 1-4.1-1.1l-.3-.2-3.2.8.9-3.1-.2-.3A8 8 0 1 1 12 20zm4.6-6c-.3-.1-1.5-.7-1.8-.8-.2-.1-.4-.1-.6.1-.2.3-.7.8-.8 1-.2.2-.3.2-.6.1a6.6 6.6 0 0 1-3.3-2.9c-.2-.4.2-.4.6-1.2.1-.2 0-.3 0-.5l-.8-1.9c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3 4.8 4.2 1.8.8 2.5.9 3.4.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2 0-.1-.2-.2-.4-.3z"/>
  </svg>
);
