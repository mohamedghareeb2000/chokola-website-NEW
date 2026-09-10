import styles from "./OurStory.module.css";

export function MomentNumber({
  number,
  left,
  top,
  order,
}: {
  number: string;
  left: string;
  top: string;
  order?: number;
}) {
  return (
    <span className={styles.momentNumber} style={{ left, top, order }}>
      {number}
    </span>
  );
}

export function MomentBubble({
  left,
  top,
  order,
  title,
  description,
}: {
  left: string;
  top: string;
  order?: number;
  title: React.ReactNode;
  description: React.ReactNode;
}) {
  return (
    <div className={styles.momentBubble} style={{ left, top, order }}>
      <span className={styles.momentTitle}>{title}</span>
      <span className={styles.momentDesc}>{description}</span>
    </div>
  );
}
