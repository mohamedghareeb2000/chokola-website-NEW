import type { Metadata, Viewport } from "next";
import OriginalLayoutTest from "../real/page";
import styles from "./cover.module.css";

export const metadata: Metadata = {
  title: "Safari Test 5 - Edge-to-Edge | Chokola",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#e28a82",
};

export default function EdgeToEdgeTest() {
  return (
    <div className={styles.coverScene}>
      <OriginalLayoutTest />
    </div>
  );
}
