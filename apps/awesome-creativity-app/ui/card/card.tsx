import styles from './card.module.scss';

/* eslint-disable-next-line */
export interface CardProps {
  day: number;
  marginTop: number;
}

export function Card({ day, marginTop }: CardProps) {
  return (
    <div className={styles['day-grid-item']} style={{marginTop: marginTop}}>
      <span className={styles.day}>{day}</span>
    </div>
  );
}

export default Card;
