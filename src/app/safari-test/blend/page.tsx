import type { Metadata, Viewport } from "next";
import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import MenuHighlights from "@/components/MenuHighlights";
import VisitUs from "@/components/VisitUs";
import Footer from "@/components/Footer";
import CanvasColor from "../real/CanvasColor";
import canvasStyles from "../real/real.module.css";
import styles from "./blend.module.css";

export const metadata: Metadata = {
  title: "Safari Test - Adaptive Blend | Chokola",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "auto",
  themeColor: "#e28a82",
};

export default function AdaptiveBlendTest() {
  return (
    <div className={`${canvasStyles.realScene} ${styles.blendScene}`} data-safari-test="real">
      <CanvasColor sampleHero />
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
