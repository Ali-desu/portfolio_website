import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import PageTransition from "@/components/layout/PageTransition";
import { site } from "@/lib/content";
import { themeInitScript } from "@/lib/theme";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const title = `${site.name}, ${site.role}`;
const description =
  "Software engineer in Marrakech. I build full-stack web applications, backend services in Java and Spring Boot, and AI features built on retrieval.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s | ${site.name}`,
  },
  description,
  alternates: { canonical: "/" },
  keywords: [
    site.name,
    "Software Engineer",
    "Full-Stack Developer",
    "Morocco",
    "Next.js",
    "Spring Boot",
    "Supabase",
    "RAG",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  openGraph: {
    title,
    description,
    type: "website",
    url: site.url,
    siteName: site.name,
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f2ed" },
    { media: "(prefers-color-scheme: dark)", color: "#100f0d" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
    >
      <head>
        {/* Sets the palette before first paint so there is no flash. */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />

        {/* Reveals every animated element when JS is unavailable. This has to
            live in <head>: a <style> inside <noscript> is only valid there. */}
        <noscript>
          <style>{`[data-reveal],.line-mask > span,.page-enter{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="flex min-h-screen flex-col font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-70 focus:border focus:border-line-strong focus:bg-paper focus:px-4 focus:py-2 focus:text-sm"
        >
          Skip to content
        </a>

        <Header />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
