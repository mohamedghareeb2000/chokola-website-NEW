import styles from "./VisitUs.module.css";

export type HoursGroup = {
  days: string;
  time: string;
};

export default function OpeningHours({
  groups,
  note,
}: {
  groups: HoursGroup[];
  note?: string;
}) {
  return (
    <div className={styles.hoursBlock}>
      <span className={styles.hoursLabel}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className={styles.hoursIcon}
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
          <path
            d="M12 7.4V12l3.4 2.2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        Opening Hours
      </span>

      {groups.map((group, i) => (
        <div key={group.days}>
          <div className={styles.hoursRow}>
            <span className={styles.hoursDays}>{group.days}</span>
            <span className={styles.hoursTime}>{group.time}</span>
          </div>
          {i < groups.length - 1 && <div className={styles.hoursDivider} />}
        </div>
      ))}

      {note && <p className={styles.hoursNote}>{note}</p>}
    </div>
  );
}
