import Image from "next/image";
import styles from "./OurStory.module.css";
import { MomentNumber, MomentBubble } from "./StoryMoment";

export default function OurStory() {
  return (
    <section id="about" className={styles.section} aria-labelledby="our-story-heading">
      <div className={styles.canvas}>
        <div className={styles.mainImageWrap}>
          <Image
            src="/images/story-main-ref.png"
            alt="Pistachio chocolate crepe on a speckled plate with strawberries"
            fill
            sizes="(max-width: 720px) 100vw, 51vw"
            className={styles.mainImage}
          />
        </div>

        <div className={styles.textBlock}>
          <span className={styles.label}>Our Story</span>
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

          <h2 id="our-story-heading" className={styles.headline}>
            <span className={styles.headlineLine}>Born from</span>
            <span className={styles.headlineLine} style={{ lineHeight: 1.18 }}>
              a{" "}
              <span className={styles.craving}>
                craving.
                <svg
                  viewBox="0 0 240 20"
                  preserveAspectRatio="none"
                  fill="none"
                  className={styles.cravingUnderline}
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
            </span>
            <span className={styles.headlineLine}>Made for every</span>
            <span className={styles.headlineLine}>
              <span className={styles.missing}>sweet moment.</span>
            </span>
          </h2>

          <p className={styles.paragraph}>
            Chokola started with a simple idea: desserts should be more than
            just a treat. They should be a moment you look forward to, a bite
            you remember, and a place you want to come back to. So we created
            desserts with the perfect mix of rich chocolate, fresh flavors,
            and a little extra magic — made to satisfy every craving.
          </p>

          <div className={styles.delightWrap}>
            <span className={styles.delight}>
              Made to crave. Made to share.
              <svg
                viewBox="0 0 300 18"
                preserveAspectRatio="none"
                fill="none"
                className={styles.delightUnderline}
                aria-hidden="true"
              >
                <path
                  d="M4 12 C80 4 214 4 296 10"
                  stroke="currentColor"
                  strokeWidth="3.4"
                  strokeLinecap="round"
                  opacity=".9"
                />
              </svg>
            </span>
            <svg
              viewBox="0 0 40 34"
              fill="none"
              className={styles.leaf}
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

        <div className={styles.blob1} />
        <div className={styles.blob2} />

        <div className={styles.momentPhotoA}>
          <Image
            src="/images/story-a2.png"
            alt="Pistachios, chocolate squares and a bowl of chocolate ganache"
            fill
            sizes="(max-width: 720px) 100vw, 31vw"
            style={{ objectPosition: "52% 55%" }}
            className={styles.momentImg}
          />
        </div>
        <div className={styles.momentPhotoB}>
          <Image
            src="/images/story-b.png"
            alt="Chocolate poured over a fresh crepe with strawberries and pistachio"
            fill
            sizes="(max-width: 720px) 100vw, 34vw"
            style={{ objectPosition: "50% 50%" }}
            className={styles.momentImg}
          />
        </div>
        <div className={styles.momentPhotoC}>
          <Image
            src="/images/story-c.png"
            alt="Finished Chokola crepe stamped with the brand mark"
            fill
            sizes="(max-width: 720px) 100vw, 36vw"
            style={{ objectPosition: "48% 50%" }}
            className={styles.momentImg}
          />
        </div>

        <svg
          viewBox="0 0 64 64"
          fill="none"
          className={styles.doodleLeaf}
          aria-hidden="true"
        >
          <path
            d="M34 8 C18 16 8 32 13 46 C17 58 36 60 47 49 C58 38 53 19 34 8Z"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path
            d="M29 13 C20 24 17 37 21 50"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            opacity=".75"
          />
          <path
            d="M39 11 C31 23 28 37 32 52"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            opacity=".5"
          />
        </svg>
        <svg
          viewBox="0 0 60 56"
          fill="none"
          className={styles.doodleHeart}
          aria-hidden="true"
        >
          <path
            d="M30 50C30 50 6 36 6 20.5 6 12 12 7 18.6 8.4 23.6 9.4 28.4 14.6 30 18.6 31.6 14.6 36.4 9.4 41.4 8.4 48 7 54 12 54 20.5 54 36 30 50 30 50Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>

        <svg
          viewBox="0 0 1055 120"
          fill="none"
          preserveAspectRatio="none"
          className={styles.connector}
          aria-hidden="true"
        >
          <path
            d="M252 78 C300 34 388 26 452 58"
            stroke="currentColor"
            strokeWidth="3.4"
            strokeLinecap="round"
            strokeDasharray="14 17"
          />
          <path
            d="M436 42 L456 60 L433 68"
            stroke="currentColor"
            strokeWidth="3.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M556 74 C608 30 692 26 748 56"
            stroke="currentColor"
            strokeWidth="3.4"
            strokeLinecap="round"
            strokeDasharray="14 17"
          />
          <path
            d="M730 40 L752 58 L728 66"
            stroke="currentColor"
            strokeWidth="3.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <MomentNumber number="01" left="12%" top="55.8%" order={3} />
        <MomentNumber number="02" left="44.8%" top="56.1%" order={6} />
        <MomentNumber number="03" left="73.4%" top="55.9%" order={9} />

        <MomentBubble
          left="7%"
          top="58.6%"
          order={4}
          title={
            <>
              Premium
              <br />
              Always
            </>
          }
          description={
            <>
              Quality ingredients.
              <br />
              No shortcuts.
            </>
          }
        />
        <MomentBubble
          left="38.5%"
          top="60%"
          order={7}
          title="Fresh on Repeat"
          description={
            <>
              Made fresh whenever
              <br />
              you crave it.
            </>
          }
        />
        <MomentBubble
          left="69.5%"
          top="59.2%"
          order={10}
          title={
            <>
              Built
              <br />
              to Impress
            </>
          }
          description={
            <>
              Looks good.
              <br />
              Tastes even better.
            </>
          }
        />
      </div>
    </section>
  );
}
