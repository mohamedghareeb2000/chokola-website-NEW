"use client";

import { useEffect } from "react";

const FALLBACK_COLOR = "#e28a82";

export default function SafariBlend() {
  useEffect(() => {
    if (!CSS.supports("-webkit-touch-callout", "none")) return;

    const mobile = window.matchMedia("(max-width: 860px)");
    const root = document.documentElement;
    const main = document.querySelector("main[data-safari-blend]");
    if (!main) return;

    const activate = () => {
      const hero = main.querySelector<HTMLImageElement>("picture img");
      const footer = main.querySelector("footer");
      const theme = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
      const originalCanvas = root.style.getPropertyValue("--safari-canvas");
      const originalHero = root.style.getPropertyValue("--safari-hero");
      const originalTheme = theme?.getAttribute("content");
      let heroColor = FALLBACK_COLOR;

      const update = () => {
        const bounds = footer?.getBoundingClientRect();
        const footerVisible = !!bounds && bounds.top < window.innerHeight && bounds.bottom > 0;
        const color = footerVisible && footer ? getComputedStyle(footer).backgroundColor : heroColor;
        root.style.setProperty("--safari-canvas", color);
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
          // Only the image's top edge should determine the browser tint.
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
          root.style.setProperty("--safari-hero", heroColor);
          update();
        } catch {
          // Images without canvas/CORS access keep the initial hero color.
        }
      };

      const observer = new IntersectionObserver(update);
      if (footer) observer.observe(footer);
      hero?.addEventListener("load", sample);
      window.addEventListener("pageshow", update);
      update();
      sample();

      return () => {
        observer.disconnect();
        hero?.removeEventListener("load", sample);
        window.removeEventListener("pageshow", update);
        if (originalCanvas) root.style.setProperty("--safari-canvas", originalCanvas);
        else root.style.removeProperty("--safari-canvas");
        if (originalHero) root.style.setProperty("--safari-hero", originalHero);
        else root.style.removeProperty("--safari-hero");
        if (originalTheme != null) theme?.setAttribute("content", originalTheme);
      };
    };

    let deactivate: (() => void) | undefined;
    const sync = () => {
      deactivate?.();
      deactivate = mobile.matches ? activate() : undefined;
    };
    sync();
    mobile.addEventListener("change", sync);

    return () => {
      mobile.removeEventListener("change", sync);
      deactivate?.();
    };
  }, []);

  return null;
}
