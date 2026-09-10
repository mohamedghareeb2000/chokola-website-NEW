import Image from "next/image";
import Navbar from "./Navbar";
import { ArrowRightIcon, MapPinIcon } from "./icons";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.visualWrap}>
        <Image
          src="/images/hero-v3.jpg"
          alt="Chocolate pistachio crepe with strawberries, pistachio cream and a chocolate parfait cup"
          fill
          priority
          sizes="(max-width: 860px) 100vw, 58vw"
          className={styles.visualImg}
        />
        <div className={styles.visualFade} />
      </div>

      <div className={styles.doodles} aria-hidden="true">
        <svg
          className={styles.doodleHeart1}
          width="26"
          height="24"
          viewBox="0 0 60 56"
          fill="none"
        >
          <path
            d="M30 50C30 50 6 36 6 20.5 6 12 12 7 18.6 8.4 23.6 9.4 28.4 14.6 30 18.6 31.6 14.6 36.4 9.4 41.4 8.4 48 7 54 12 54 20.5 54 36 30 50 30 50Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
        <svg
          className={styles.doodleHeart2}
          width="22"
          height="20"
          viewBox="0 0 60 56"
          fill="none"
        >
          <path
            d="M30 50C30 50 6 36 6 20.5 6 12 12 7 18.6 8.4 23.6 9.4 28.4 14.6 30 18.6 31.6 14.6 36.4 9.4 41.4 8.4 48 7 54 12 54 20.5 54 36 30 50 30 50Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
        <svg
          className={styles.doodleCurve}
          width="300"
          height="150"
          viewBox="0 0 300 150"
          fill="none"
        >
          <path
            d="M2 8 C2 74 44 118 108 118 C158 118 186 92 222 92 C262 92 292 116 298 148"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeDasharray="9 11"
          />
          <path
            d="M281 139 L298 148 L293 130"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <Image
        src="/images/drip-v4.png"
        alt=""
        width={123}
        height={174}
        className={styles.drip}
        priority
      />

      <div className={styles.content}>
        <div className={styles.badge}>
          <div className={styles.badgePill}>
            <span className={styles.badgeNew}>NEW</span>
            <span className={styles.badgeIn}>IN</span>
            <span className={styles.badgeLocation}>BEACHWOOD</span>
          </div>
          <svg
            className={styles.badgeSparkLeft}
            width="58"
            height="52"
            viewBox="0 0 58 52"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M6 30 L20 24 M10 14 L22 20 M26 4 L28 17"
              stroke="currentColor"
              strokeWidth="2.6"
              strokeLinecap="round"
            />
          </svg>
          <svg
            className={styles.badgeSparkRight}
            width="52"
            height="46"
            viewBox="0 0 52 46"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M46 28 L32 22 M42 12 L30 18 M26 3 L24 16"
              stroke="currentColor"
              strokeWidth="2.6"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <h1 className={styles.headline}>
          <span className={styles.headlinePrimary}>Desserts</span>
          <span className={styles.headlineSecondary}>
            hit{" "}
            <span className={styles.headlineAccent}>
              different.
              <svg
                viewBox="0 0 320 26"
                preserveAspectRatio="none"
                fill="none"
                className={styles.headlineUnderline}
                aria-hidden="true"
              >
                <path
                  d="M4 16 C70 4 176 4 246 12 C270 15 296 20 316 12"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
                <path
                  d="M22 24 C86 14 168 14 232 20"
                  stroke="currentColor"
                  strokeWidth="3.4"
                  strokeLinecap="round"
                  opacity=".7"
                />
              </svg>
            </span>
          </span>
        </h1>

        <p className={styles.tagline}>
          Crepes, waffles, cups &amp; shakes — fresh inside Beachwood Place
          Mall.
        </p>

        <div className={styles.ctaRow}>
          <a href="#menu" className={styles.ctaPrimary}>
            View Menu
            <ArrowRightIcon size={18} />
          </a>
          <a href="#directions" className={styles.ctaSecondary}>
            <MapPinIcon size={18} />
            Find Us
          </a>
        </div>
      </div>

      <Navbar />
    </section>
  );
}
