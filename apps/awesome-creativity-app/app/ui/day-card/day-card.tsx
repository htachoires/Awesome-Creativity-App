'use client';

import styles from './day-card.module.scss';
import GridItem from '../grid-item/grid-item';
import { motion, Variants } from 'framer-motion';
import { useState } from 'react';
import { SantaDay } from '../../lib/santa-days/santa-day';

export interface DayCardProps {
  day: number;
  santaDay: SantaDay;
  x: number;
  y: number;
  marginY?: number;
  placeSelf?: string;
  height?: number;
  width?: number;
  color?: string;
  borderRadius?: string;
  borderBackground?: string;
  rotateClick?: string;
  rotate?: string;
  delay?: number | undefined;
  alignSelf?: string | undefined;
  marginX?: number | undefined;
  fontSize?: string;
}

export function DayCard({
  day,
  santaDay,
  x,
  y,
  marginY,
  placeSelf,
  height,
  width,
  color,
  borderRadius,
  borderBackground,
  rotateClick,
  delay,
  alignSelf,
  marginX,
  fontSize,
}: DayCardProps) {
  const [currentVariant, setCurrentVariant] = useState('');

  const variantsParents: Variants = {
    open: {
      scale: 1.1,
      transition: { type: 'spring', duration: 2 },
    },
    tryOpen: {
      scale: 0.95,
      rotate: rotateClick,
    },
    hover: {
      scale: 1.05,
      rotate: rotateClick,
    },
  };

  const variants: Variants = {
    open: {
      translateY: '100px',
      scale: 0.3,
      opacity: 0,
      transition: {
        translateY: { type: 'spring', duration: 9 },
        scale: { ease: 'easeOut', duration: 2 },
        opacity: { ease: 'easeOut', duration: 8 },
      },
    },
  };

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
        whileHover={currentVariant != 'open' ? 'hover' : ''}
        whileTap={currentVariant != 'open' ? 'tryOpen' : ''}
        onMouseUp={(event) => {
          setCurrentVariant('open');
          //TODO send open to database
        }}
        className={styles.dayCardContainer}
        animate={currentVariant}
        variants={variantsParents}
        style={{
          height: height,
          width: width,
          borderRadius: borderRadius,
          backgroundColor: borderBackground,
          borderColor: borderBackground,
        }}
      >
        <motion.div
          className={styles.dayCardInner}
          style={{
            backgroundColor: color,
            borderRadius: borderRadius,
          }}
          variants={variants}
          animate={currentVariant}
        >
          <span style={{ fontSize: fontSize }} className={styles.dayCardText}>
            {day}
          </span>
          <span>{santaDay.isOpened ? 'Ouvert' : 'Fermé'}</span>
        </motion.div>
      </motion.div>
    </GridItem>
  );
}

export default DayCard;
