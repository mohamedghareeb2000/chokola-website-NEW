import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import MenuHighlights from "@/components/MenuHighlights";
import VisitUs from "@/components/VisitUs";
import Footer from "@/components/Footer";
import SafariBlend from "@/components/SafariBlend";

export default function Home() {
  return (
    <main data-safari-blend>
      <SafariBlend />
      <Hero />
      <OurStory />
      <MenuHighlights />
      <VisitUs />
      <Footer />
    </main>
  );
}
