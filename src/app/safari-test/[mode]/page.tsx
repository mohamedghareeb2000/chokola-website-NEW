import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import TestScene from "../TestScene";

export const metadata: Metadata = {
  title: "Safari Test | Chokola",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#e28a82",
};

export function generateStaticParams() {
  return [{ mode: "cover" }, { mode: "fixed" }];
}

export const dynamicParams = false;

export default async function SafariTestCase({ params }: { params: Promise<{ mode: string }> }) {
  const { mode } = await params;
  if (mode !== "cover" && mode !== "fixed") notFound();
  return <TestScene mode={mode} />;
}
