import styles from './santa-card.module.scss';

/* eslint-disable-next-line */
export interface SantaCardProps {
  day: number;
  x?: number;
  y?: number;
  marginTop?: number;
  placeSelf?: string;
}

export function SantaCard({ day, x, y, marginTop, placeSelf }: SantaCardProps) {
  return (
    <div
      className={styles['day-grid-item']}
      style={{ gridColumnStart: x, gridRowStart: y, marginTop: marginTop, placeSelf:placeSelf }}
    >
      <span className={styles.day}>{day}</span>
    </div>
  );
}

export default SantaCard;
