import styles from './santa-card.module.scss';

/* eslint-disable-next-line */
export interface SantaCardProps {
  day: number;
  marginTop?: number;
}

export function SantaCard({ day, marginTop }: SantaCardProps) {
  return (
    <div className={styles['day-grid-item']}  style={{marginTop: marginTop}}>
      <span className={styles.day}>{day}</span>
    </div>
  );
}

export default SantaCard;
