import styles from './big-card.module.scss';

/* eslint-disable-next-line */
export interface BigCardProps {
  day: number;
  marginTop?: number;
}

export function BigCard({ day, marginTop }: BigCardProps) {
  return (
    <div className={styles['day-big-grid-item']} style={{marginTop: marginTop}}>
      <span className={styles.day}>{day}</span>
    </div>
  );
}

export default BigCard;
