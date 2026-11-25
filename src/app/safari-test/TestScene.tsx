import Image from "next/image";
import Link from "next/link";
import styles from "./test.module.css";

export type TestMode = "original" | "cover" | "fixed";

const cases: { mode: TestMode | "real"; label: string; href: string }[] = [
  { mode: "original", label: "1. Original", href: "/safari-test" },
  { mode: "cover", label: "2. Cover", href: "/safari-test/cover" },
  { mode: "fixed", label: "3. Fixed", href: "/safari-test/fixed" },
  { mode: "real", label: "4. Real", href: "/safari-test/real" },
];

export default function TestScene({ mode }: { mode: TestMode }) {
  return (
    <div className={styles.scene} data-mode={mode}>
      <header className={styles.header}>
        <Link href="/" className={styles.brand}>Chokola</Link>
        <nav aria-label="Safari test cases" className={styles.cases}>
          {cases.map((item) => (
            <a key={item.mode} href={item.href} aria-current={mode === item.mode ? "page" : undefined}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>
      <main>
        <section className={styles.hero} id="hero" aria-label="Hero">
          <Image
            src="/images/hero-mobile-approved.png"
            alt="Chokola strawberry and pistachio dessert cup"
            width={430}
            height={708}
            sizes="(max-width: 860px) 100vw, 430px"
            priority
            className={styles.heroImage}
          />
          <h1 className={styles.headline}>Desserts worth the obsession.</h1>
        </section>
        <section className={styles.middle} id="middle">
          <h2>Chokola Dessert Lounge</h2>
          <p>Beachwood Place Mall</p>
          <Image
            src="/images/hero-mobile-approved.png"
            alt="Strawberries with pistachio cream"
            width={430}
            height={708}
            sizes="(max-width: 480px) 80vw, 340px"
            className={styles.secondImage}
          />
        </section>
        <section className={styles.end} id="end">
          <h2>Made to delight.</h2>
          <Link href="/">Back to Chokola</Link>
        </section>
      </main>
      <footer className={styles.footer}>
        <nav aria-label="Test page navigation">
          <a href="#hero">Hero</a>
          <a href="#middle">Chokola</a>
          <a href="#end">Footer</a>
        </nav>
      </footer>
    </div>
  );
}
