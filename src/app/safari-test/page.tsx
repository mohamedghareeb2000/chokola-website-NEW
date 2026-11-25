import type { Metadata, Viewport } from "next";
import TestScene from "./TestScene";

export const metadata: Metadata = {
  title: "Safari Test | Chokola",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "auto",
  themeColor: "#e28a82",
};

export default function SafariTestPage() {
  return <TestScene mode="original" />;
}
