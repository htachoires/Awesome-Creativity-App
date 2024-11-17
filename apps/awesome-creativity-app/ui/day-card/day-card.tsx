'use client';

import styles from './day-card.module.scss';
import GridItem from '../../components/grid-item/grid-item';
import { motion } from 'framer-motion';

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
  rotate?: string;
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
  rotate,
}: DayCardProps) {
  return (
    <GridItem x={x} y={y} marginTop={marginTop} placeSelf={placeSelf}>
      <motion.div
        whileHover={{ scale: 1.05, rotate: rotate }}
        whileTap={{ scale: 0.95, rotate: rotate }}
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
      </motion.div>
    </GridItem>
  );
}

export default DayCard;
