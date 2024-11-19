'use client';

import styles from './day-card.module.scss';
import GridItem from '../grid-item/grid-item';
import { motion } from 'framer-motion';

export interface DayCardProps {
  day: number;
  isOpened: boolean;
  x: number;
  y: number;
  marginY?: number;
  placeSelf?: string;
  height?: number;
  width?: number;
  color?: string;
  borderRadius?: string;
  borderBackground?: string;
  rotate?: string;
  delay?: number | undefined;
  alignSelf?: string | undefined;
  marginX?: number | undefined;
  fontSize?: string;
}

export function DayCard({
  day,
  isOpened,
  x,
  y,
  marginY,
  placeSelf,
  height,
  width,
  color,
  borderRadius,
  borderBackground,
  rotate,
  delay,
  alignSelf,
  marginX,
  fontSize,
}: DayCardProps) {
  return (
    <GridItem
      x={x}
      delay={delay}
      y={y}
      marginX={marginX}
      marginY={marginY}
      placeSelf={placeSelf}
      alignSelf={alignSelf}
    >
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
          <span style={{ fontSize: fontSize }} className={styles.dayCardText}>
            {day}
          </span>
          <span>{isOpened ? 'Ouvert' : 'Fermé'}</span>
        </div>
      </motion.div>
    </GridItem>
  );
}

export default DayCard;
