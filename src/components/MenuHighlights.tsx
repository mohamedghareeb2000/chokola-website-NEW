import Image from "next/image";
import styles from "./MenuHighlights.module.css";

/**
 * public/images/mh-*.webp are real Chokola product photography recovered
 * from the design canvas's local editor state (.image-slots.state.json),
 * where they were stored under slot ids that no longer matched their
 * content — mh-waffles.webp held a cheesecake shot, mh-cheesecake.webp
 * held the shakes shot, and mh-shakes.webp held the waffle shot. Restored
 * to the correct slot ids so each category shows its own approved photo.
 * mh-pancakes.webp is the closest available shot for Mini Pancakes but
 * isn't a dedicated pancake photo — see the asset status report.
 */

export default function MenuHighlights() {
  return (
    <section
      id="menu"
      className={styles.section}
      aria-labelledby="menu-heading"
    >
      <div className={styles.blobLeft} />
      <div className={styles.blobRight} />

      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <span className={styles.label}>Menu Highlights</span>
            <svg
              viewBox="0 0 190 26"
              fill="none"
              preserveAspectRatio="none"
              className={styles.labelUnderline}
              aria-hidden="true"
            >
              <path
                d="M4 10 C46 1 124 1 184 8"
                stroke="currentColor"
                strokeWidth="4.5"
                strokeLinecap="round"
              />
              <path
                d="M20 21 C62 13 118 13 164 19"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                opacity=".55"
              />
            </svg>
            <h2 id="menu-heading" className={styles.headline}>
              Six ways to{" "}
              <span className={styles.headlineAccent}>
                give in.
                <svg
                  viewBox="0 0 240 20"
                  preserveAspectRatio="none"
                  fill="none"
                  className={styles.headlineUnderline}
                  aria-hidden="true"
                >
                  <path
                    d="M4 13 C64 4 168 4 236 11"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>
          </div>
          <div className={styles.headerRight}>
            <span className={styles.pickCraving}>Pick the craving.</span>
            <p className={styles.pickText}>
              Six things we make obsessively well. Crisp, creamy, cold, warm
              — pick a mood and we handle the rest.
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          <div className={styles.crepes}>
            <div className={styles.crepesFrame}>
              <Image
                src="/images/story-main-v2.png"
                alt="Pistachio chocolate crepe on a speckled plate"
                fill
                sizes="(max-width: 860px) 100vw, 58vw"
                style={{ objectFit: "cover", objectPosition: "50% 56%" }}
              />
              <div className={styles.crepesShade} />
              <div className={styles.crepesCaption}>
                <span className={styles.crepesTitle}>Crepes</span>
                <span className={styles.crepesDesc}>
                  Folded warm, drowned in chocolate.
                </span>
              </div>
            </div>
          </div>

          <div className={styles.cups}>
            <div className={styles.cupsHeader}>
              <span className={styles.cupsTitle}>Specialty Cups</span>
              <span className={styles.cupsAccent}>
                layered
                <svg
                  viewBox="0 0 240 20"
                  preserveAspectRatio="none"
                  fill="none"
                  className={styles.cupsAccentUnderline}
                  aria-hidden="true"
                >
                  <path
                    d="M4 13 C64 4 168 4 236 11"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </div>
            <div className={styles.cupsFrame}>
              <Image
                src="/images/mh-cups.webp"
                alt="Chokola specialty dessert cup layered with chocolate, pistachio cream and strawberries"
                fill
                sizes="(max-width: 860px) 100vw, 42vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          <div className={styles.waffles}>
            <div className={styles.waffleFrame}>
              <Image
                src="/images/mh-waffles.webp"
                alt="Chokola waffle split open with vanilla ice cream and chocolate drizzle"
                fill
                sizes="(max-width: 860px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <span className={styles.waffleTitle}>Waffles</span>
          </div>

          <div className={styles.pancakes}>
            <span className={styles.pancakesTitle}>Mini Pancakes</span>
            <div className={styles.pancakesFrame}>
              <Image
                src="/images/mh-pancakes.webp"
                alt="Folded crepe rolls drizzled with chocolate on a plate"
                fill
                sizes="(max-width: 860px) 50vw, 25vw"
                style={{ objectFit: "cover" }}
              />
              <span className={styles.pancakesCaption}>
                Twenty little ones, drowned.
              </span>
            </div>
          </div>

          <div className={styles.cheesecake}>
            <div className={styles.cheesecakeFrame}>
              <Image
                src="/images/mh-cheesecake.webp"
                alt="Chokola cheesecake slice topped with strawberries and strawberry sauce"
                fill
                sizes="(max-width: 860px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.cheesecakeMeta}>
              <span className={styles.cheesecakeTitle}>Cheesecake</span>
              <span className={styles.cheesecakeDesc}>
                Burnt top, molten middle.
              </span>
            </div>
            <svg
              viewBox="0 0 60 56"
              fill="none"
              className={styles.cheesecakeHeart}
              aria-hidden="true"
            >
              <path
                d="M30 50C30 50 6 36 6 20.5 6 12 12 7 18.6 8.4 23.6 9.4 28.4 14.6 30 18.6 31.6 14.6 36.4 9.4 41.4 8.4 48 7 54 12 54 20.5 54 36 30 50 30 50Z"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className={styles.shakes}>
            <span className={styles.shakesAccent}>thick &amp; cold</span>
            <span className={styles.shakesTitle}>Shakes</span>
            <div className={styles.shakesFrame}>
              <Image
                src="/images/mh-shakes.webp"
                alt="Two Chokola milkshakes, strawberry and chocolate, with fresh strawberries"
                fill
                sizes="(max-width: 860px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          <div className={styles.ctaBlock}>
            <p className={styles.ctaText}>
              Forty more on the board — parfaits, fondue, seasonal drops.
            </p>
            <div className={styles.ctaWrap}>
              <a href="#menu" className={styles.ctaButton}>
                View Full Menu
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ width: "1.2em", height: "1.2em" }}
                  aria-hidden="true"
                >
                  <path
                    d="M4 12h15M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <svg
                viewBox="0 0 40 34"
                fill="none"
                className={styles.ctaLeaf}
                aria-hidden="true"
              >
                <path
                  d="M20 4 L20 15 M7.5 11 L14.5 17.5 M32.5 11 L25.5 17.5"
                  stroke="currentColor"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
