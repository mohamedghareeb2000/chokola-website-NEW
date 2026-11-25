import type { Metadata, Viewport } from "next";
import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import MenuHighlights from "@/components/MenuHighlights";
import VisitUs from "@/components/VisitUs";
import Footer from "@/components/Footer";
import CanvasColor from "./CanvasColor";
import styles from "./real.module.css";

export const metadata: Metadata = {
  title: "Safari Test 4 - Original Layout | Chokola",
  robots: { index: false, follow: false },
};

// Keep the original viewport to isolate canvas tint from full-screen layout changes.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "auto",
  themeColor: "#e28a82",
};

export default function OriginalLayoutTest() {
  return (
    <div className={styles.realScene} data-safari-test="real">
      <CanvasColor />
      <main>
        <Hero />
        <OurStory />
        <MenuHighlights />
        <VisitUs />
        <Footer />
      </main>
    </div>
  );
}
