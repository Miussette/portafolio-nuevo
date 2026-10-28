import type {Metadata} from "next";
import {SITE_URL, seo} from "@/lib/seo";
import "./globals.css";
export const metadata:Metadata={
  metadataBase: new URL(SITE_URL),
  title: seo.es.title,
  description: seo.es.description,
  alternates: {canonical: "/"},
  authors: [{name: "Miussette Alfaro Silva"}],
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Miu Works",
    title: seo.es.title,
    description: seo.es.description,
    locale: seo.es.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: seo.es.title,
    description: seo.es.description,
  },
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="es" suppressHydrationWarning><head><link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/><link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet"/></head><body>{children}</body></html>}
