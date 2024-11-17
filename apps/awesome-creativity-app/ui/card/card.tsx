import styles from './card.module.scss';

/* eslint-disable-next-line */
export interface CardProps {
  day: number;
  x?: number;
  y?: number;
  marginTop?: number;
  placeSelf?: string;
}

export function Card({ day, x, y, marginTop, placeSelf }: CardProps) {
  return (
    <div
      className={styles['day-grid-item']}
      style={{ gridColumnStart: x, gridRowStart: y, marginTop: marginTop, placeSelf: placeSelf }}
    >
      <div className={styles['inner-one']}>
        <div className={styles['inner']}>
          <span className={styles.day}>{day}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
