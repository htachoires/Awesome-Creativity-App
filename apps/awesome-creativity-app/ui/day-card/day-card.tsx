'use client';

import styles from './day-card.module.scss';
import GridItem from '../../components/grid-item/grid-item';

/* eslint-disable-next-line */
export interface DayCardProps {
  day: number;
  x?: number;
  y?: number;
  marginTop?: number;
  placeSelf?: string;
  height?: number;
  width?: number;
  color?: string;
  borderRadius?: string;
  borderBackground?: string;
}

export function DayCard({
  day,
  x,
  y,
  marginTop,
  placeSelf,
  height,
  width,
  color,
  borderRadius,
  borderBackground,
}: DayCardProps) {
  return (
    <GridItem x={x} y={y} marginTop={marginTop} placeSelf={placeSelf}>
        <div
          className={styles.dayCardContainer}
          style={{
            height: height,
            width: width,
            borderRadius: borderRadius,
            backgroundColor: borderBackground,
            borderColor: borderBackground,
          }}
        >
          <div
            className={styles.dayCardInner}
            style={{
              backgroundColor: color,
              borderRadius: borderRadius,
            }}
          >
            <span className={styles.dayCardText}>{day}</span>
          </div>
      </div>
    </GridItem>
  );
}

export default DayCard;
