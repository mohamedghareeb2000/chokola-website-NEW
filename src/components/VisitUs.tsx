import styles from "./VisitUs.module.css";
import OpeningHours from "./OpeningHours";

export default function VisitUs() {
  return (
    <section
      id="directions"
      className={styles.section}
      aria-labelledby="visit-heading"
    >
      <div className={styles.blobLeft} />
      <div className={styles.blobRight} />

      <div className={styles.grid}>
        <div className={styles.left}>
          <span className={styles.label}>Visit Us</span>
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
          <span className={styles.sweetTooth}>Sweet tooth,</span>
          <h2 id="visit-heading" className={styles.headline}>
            Come
            <br />
            find us.
          </h2>

          <div className={styles.locationRow}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className={styles.locationIcon}
              aria-hidden="true"
            >
              <path
                d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.8" />
            </svg>
            <span className={styles.locationText}>
              Inside Beachwood Place Mall
            </span>
          </div>

          <div className={styles.addressBlock}>
            <p className={styles.addressText}>
              26300 Cedar Road
              <span className={styles.addressSep}> · </span>
              Space #1035
              <br />
              <span className={styles.addressCity}>Beachwood, OH 44122</span>
            </p>
          </div>

          <OpeningHours
            groups={[
              { days: "Monday – Friday", time: "7 AM – 6 PM" },
              { days: "Saturday – Sunday", time: "12 PM – 12 AM" },
            ]}
            note="Holiday hours may vary"
          />

          <div className={styles.contactRow}>
            <a href="tel:+12168166399" className={styles.phoneLink}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className={styles.phoneIcon}
                aria-hidden="true"
              >
                <path
                  d="M6.6 3.5h3l1.5 3.7-2 1.4a11 11 0 0 0 4.3 4.3l1.4-2 3.7 1.5v3a1.9 1.9 0 0 1-2.1 1.9A15.6 15.6 0 0 1 4.7 5.6 1.9 1.9 0 0 1 6.6 3.5Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              +1 (216) 816-6399
            </a>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.mapBox}>
            <svg
              viewBox="0 0 500 500"
              preserveAspectRatio="none"
              fill="none"
              className={styles.mapSvg}
              aria-hidden="true"
            >
              <rect x="34" y="42" width="150" height="122" fill="#F7E9DD" />
              <rect x="242" y="42" width="224" height="122" fill="#F7E9DD" />
              <rect x="34" y="222" width="150" height="118" fill="#F7E9DD" />
              <rect x="242" y="398" width="224" height="102" fill="#F7E9DD" />
              <rect x="34" y="398" width="150" height="102" fill="#F7E9DD" />
              <rect x="242" y="222" width="224" height="118" fill="#F3D9DD" />
              <g stroke="#EAD9C8" strokeWidth="26" strokeLinecap="square">
                <path d="M-10 193 H510M-10 371 H510M213 -10 V510" />
              </g>
              <g stroke="#EAD9C8" strokeWidth="9">
                <path d="M-10 42 H510M-10 500 H510M34 -10 V510M466 -10 V510" />
              </g>
              <g
                stroke="#FFF5F0"
                strokeWidth="2.4"
                strokeDasharray="16 15"
                opacity=".9"
              >
                <path d="M-10 193 H510M-10 371 H510M213 -10 V510" />
              </g>
            </svg>

            <svg
              viewBox="0 0 500 500"
              preserveAspectRatio="none"
              fill="none"
              className={styles.routeSvg}
              aria-hidden="true"
            >
              <path
                d="M20 470 C20 400 90 384 140 371 C186 359 200 300 213 262 C226 224 262 205 300 200"
                stroke="currentColor"
                strokeWidth="5.5"
                strokeLinecap="round"
                strokeDasharray="15 14"
              />
              <circle cx="20" cy="470" r="9" fill="currentColor" />
            </svg>

            <svg
              viewBox="0 0 120 150"
              fill="none"
              className={styles.pin}
              aria-hidden="true"
            >
              <path
                d="M60 142S16 96 16 60a44 44 0 1 1 88 0c0 36-44 82-44 82Z"
                fill="#C4677A"
              />
              <path
                d="M60 142S16 96 16 60a44 44 0 1 1 88 0c0 36-44 82-44 82Z"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinejoin="round"
              />
              <circle cx="60" cy="58" r="15" fill="#FFF5F0" />
            </svg>
            <span className={styles.thatsUs}>that&apos;s us</span>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Chokola+Dessert+Lounge+26300+Cedar+Rd+Beachwood+OH+44122"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.directionsCta}
            >
              Get Directions
              <svg
                viewBox="0 0 24 24"
                fill="none"
                style={{ width: "1.2em", height: "1.2em" }}
                aria-hidden="true"
              >
                <path
                  d="M7 17 17 7M9 7h8v8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <span className={styles.cedarRd}>Cedar Rd</span>
            <span className={styles.richmondRd}>Richmond Rd</span>
          </div>
        </div>
      </div>
    </section>
  );
}
