import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About Chokola" },
  { href: "#menu", label: "Menu" },
  { href: "#directions", label: "Location" },
];

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "#instagram",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className={styles.socialIcon}>
        <rect
          x="3.5"
          y="3.5"
          width="17"
          height="17"
          rx="5"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "#tiktok",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className={styles.socialIcon}>
        <path
          d="M14 3.8v10.3a3.3 3.3 0 1 1-3.3-3.3c.3 0 .6 0 .9.1"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 3.8c.4 2.3 1.9 3.8 4.2 4.1"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#facebook",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className={styles.socialIcon}>
        <path
          d="M14.4 20.5v-7.1h2.4l.4-2.8h-2.8V8.9c0-.8.3-1.3 1.4-1.3h1.5V5.1c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1v1.5H8.6v2.8h2.3v7.1"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        <Link href="/" className={styles.logoLink}>
          <Image
            src="/images/logo-chokola-full.png"
            alt="Chokola Dessert Lounge"
            width={657}
            height={252}
            className={styles.logo}
          />
        </Link>

        <nav className={styles.nav} aria-label="Footer">
          {NAV_LINKS.map((link) => (
            <Link key={link.label} href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          ))}
          <span className={styles.hours}>
            <span className={styles.hoursLine}>Mon–Fri &nbsp;7 AM – 6 PM</span>
            <span className={styles.hoursLine}>Sat–Sun &nbsp;12 PM – 12 AM</span>
          </span>
        </nav>

        <div className={styles.social}>
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className={styles.socialLink}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      <div className={styles.legal}>
        <span className={styles.legalText}>
          © 2026 Chokola. All rights reserved.
        </span>
        <span className={styles.legalDivider}>|</span>
        <span className={styles.tagline}>
          Made to delight.
          <svg
            viewBox="0 0 26 24"
            fill="none"
            className={styles.taglineHeart}
            aria-hidden="true"
          >
            <path
              d="M13 21C13 21 2 14.5 2 7.8 2 4.6 4.5 2.6 7.2 3.2 9.4 3.7 12 6.4 13 8.2 14 6.4 16.6 3.7 18.8 3.2 21.5 2.6 24 4.6 24 7.8 24 14.5 13 21 13 21Z"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </div>
    </footer>
  );
}
