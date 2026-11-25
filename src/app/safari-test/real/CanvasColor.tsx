"use client";

import { useEffect } from "react";

export default function CanvasColor({ sampleHero = false }: { sampleHero?: boolean }) {
  useEffect(() => {
    const root = document.documentElement;
    const footer = document.querySelector('[data-safari-test="real"] footer');
    const theme = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
    const originalColor = root.style.getPropertyValue("--safari-test-canvas");
    const originalTheme = theme?.getAttribute("content");
    const originalHero = root.style.getPropertyValue("--safari-test-hero");
    const hero = sampleHero
      ? document.querySelector<HTMLImageElement>('[data-safari-test="real"] picture img')
      : null;
    let heroColor = "#e28a82";

    const update = () => {
      const bounds = footer?.getBoundingClientRect();
      const visible = !!bounds && bounds.top < window.innerHeight && bounds.bottom > 0;
      const color = visible && footer ? getComputedStyle(footer).backgroundColor : heroColor;
      root.style.setProperty("--safari-test-canvas", color);
      root.dataset.safariTestFooter = String(visible);
      theme?.setAttribute("content", color);
    };

    const sample = () => {
      if (!hero?.complete || !hero.naturalWidth || !hero.naturalHeight) return;
      try {
        const canvas = document.createElement("canvas");
        canvas.width = 32;
        canvas.height = 1;
        const context = canvas.getContext("2d", { willReadFrequently: true });
        if (!context) return;
        // Read only the top edge; the dessert itself must not affect the tint.
        context.drawImage(hero, 0, 0, hero.naturalWidth, Math.min(8, hero.naturalHeight), 0, 0, 32, 1);
        const pixels = context.getImageData(0, 0, 32, 1).data;
        const channels = [0, 0, 0];
        let weight = 0;
        for (let index = 0; index < pixels.length; index += 4) {
          const alpha = pixels[index + 3] / 255;
          weight += alpha;
          for (let channel = 0; channel < 3; channel++) {
            channels[channel] += pixels[index + channel] * alpha;
          }
        }
        if (!weight) return;
        heroColor = `rgb(${channels.map((value) => Math.round(value / weight)).join(", ")})`;
        root.style.setProperty("--safari-test-hero", heroColor);
        root.dataset.safariTestSample = "ready";
        update();
      } catch {
        // Cross-origin images without CORS retain the safe fallback color.
        root.dataset.safariTestSample = "fallback";
      }
    };

    const observer = new IntersectionObserver(update);
    if (footer) observer.observe(footer);
    update();
    hero?.addEventListener("load", sample);
    sample();
    window.addEventListener("pageshow", update);

    return () => {
      observer.disconnect();
      window.removeEventListener("pageshow", update);
      hero?.removeEventListener("load", sample);
      if (originalColor) root.style.setProperty("--safari-test-canvas", originalColor);
      else root.style.removeProperty("--safari-test-canvas");
      delete root.dataset.safariTestFooter;
      if (sampleHero) {
        if (originalHero) root.style.setProperty("--safari-test-hero", originalHero);
        else root.style.removeProperty("--safari-test-hero");
        delete root.dataset.safariTestSample;
      }
      if (originalTheme != null) theme?.setAttribute("content", originalTheme);
    };
  }, [sampleHero]);

  return null;
}
