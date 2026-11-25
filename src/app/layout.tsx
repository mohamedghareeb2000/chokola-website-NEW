import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const montserrat = localFont({
  src: [
    { path: "./fonts/montserrat-latin-normal.woff2", weight: "300 700", style: "normal" },
    { path: "./fonts/montserrat-latin-italic.woff2", weight: "300 700", style: "italic" },
  ],
  variable: "--font-ui",
  fallback: ["Arial"],
  adjustFontFallback: "Arial",
  display: "swap",
});

const fraunces = localFont({
  src: [
    { path: "./fonts/fraunces-latin-900-normal.woff2", weight: "900", style: "normal" },
    { path: "./fonts/fraunces-latin-900-italic.woff2", weight: "900", style: "italic" },
  ],
  variable: "--font-accent",
  fallback: ["Times New Roman"],
  adjustFontFallback: "Times New Roman",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chokola Dessert Lounge | Beachwood Place Mall",
  description:
    "Crepes, waffles, cups & shakes — fresh inside Beachwood Place Mall.",
};

export const viewport: Viewport = {
  themeColor: "#cb6470",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${montserrat.variable} ${fraunces.variable}`}>
      <body>{children}</body>
    </html>
  );
}
