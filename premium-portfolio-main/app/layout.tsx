import type { Metadata, Viewport } from "next";
import { SITE } from "@/lib/data";
import "./globals.css";

const SITE_URL = "https://pranav-chavare.github.io/Redesign-portfolio/";
const SITE_TITLE = `${SITE.name} — ${SITE.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_TITLE, template: `%s | ${SITE.name}` },
  description: SITE.tagline,
  keywords: [SITE.name, "MLOps Engineer", "DevOps Engineer", "Cloud Engineer", "Data Engineer", "Portfolio"],
  authors: [{ name: SITE.name, url: SITE_URL }],
  creator: SITE.name,
  openGraph: { type: "website", locale: "en_US", url: SITE_URL, title: SITE_TITLE, description: SITE.tagline, siteName: SITE.name },
  twitter: { card: "summary", title: SITE_TITLE, description: SITE.tagline },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
};

export const viewport: Viewport = { themeColor: "#f7f7f4" };

function PersonJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.name,
    url: SITE_URL,
    jobTitle: SITE.role,
    email: SITE.email,
    sameAs: [SITE.social.github, SITE.social.linkedin],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <PersonJsonLd />
        <a href="#content" className="sr-only z-50 rounded-full bg-ink px-4 py-2 font-display text-sm text-paper focus:not-sr-only focus:fixed focus:left-3 focus:top-3">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
