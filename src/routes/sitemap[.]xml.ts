import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "";

const entries = [
  { path: "/" }, { path: "/about" }, { path: "/academics" }, { path: "/admissions" },
  { path: "/news" }, { path: "/gallery" }, { path: "/school-life" }, { path: "/staff" },
  { path: "/contact" }, { path: "/faq" }, { path: "/careers" },
  { path: "/policies" }, { path: "/activities" }, { path: "/transport" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = entries.map(e => `  <url><loc>${BASE_URL}${e.path}</loc><changefreq>weekly</changefreq></url>`).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" } });
      },
    },
  },
});
