import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About Chokola" },
  { href: "#menu", label: "Menu" },
  { href: "#directions", label: "Location" },
];

export default function Navbar() {
  return (
    <nav className={styles.nav} aria-label="Primary">
      <Link href="/" className={styles.logoLink}>
        <Image
          src="/images/logo-chokola-full.png"
          alt="Chokola Dessert Lounge"
          width={657}
          height={252}
          className={styles.logo}
          priority
        />
      </Link>
      <div className={styles.linkGroup}>
        {NAV_LINKS.map((link) => (
          <Link key={link.label} href={link.href} className={styles.link}>
            {link.label}
          </Link>
        ))}
      </div>

      <details className={styles.mobileMenu}>
        <summary className={styles.menuToggle} aria-label="Menu">
          <span className={styles.menuBar} />
          <span className={styles.menuBar} />
          <span className={styles.menuBar} />
        </summary>
        <div className={styles.mobileMenuPanel}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={styles.mobileLink}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </details>
    </nav>
  );
}
