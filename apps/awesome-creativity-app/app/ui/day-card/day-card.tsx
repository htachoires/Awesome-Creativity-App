'use client';

import styles from './day-card.module.scss';
import GridItem from '../grid-item/grid-item';
import { motion, Variants } from 'framer-motion';
import { useState } from 'react';
import { SantaDay } from '../../lib/santa-days/santa-day';
import { OpenSantaDay } from '../../lib/santa-days/santa-day-repository';

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
  const date = new Date();

  const canOpen = (): boolean => {
    return (
      !santaDay.isOpened &&
      santaDay.day <= date.getDate() &&
      date.getMonth() == 11
    );
  };

  const [currentVariant, setCurrentVariant] = useState(
    santaDay.isOpened ? 'opened' : canOpen() ? 'canOpen' : ''
  );

  const variantsParents: Variants = {
    canOpen: {
      y: [3, -3, 0, 3],
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
    opening: {
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
    notYet: {
      x: [0, -10, 10, -6, 6, -3, 3, 0],
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
      },
    },
  };

  const variants: Variants = {
    opening: {
      translateY: '100px',
      scale: 0.3,
      opacity: 0,
      transition: {
        translateY: { type: 'spring', duration: 9 },
        scale: { ease: 'easeOut', duration: 2 },
        opacity: { ease: 'easeOut', duration: 8 },
      },
    },
    opened: {
      translateY: '100px',
      opacity: 0,
      transition: {
        duration: 0,
      },
    },
  };

  const isOpening = () => {
    return currentVariant == 'opening';
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
        whileHover={canOpen() ? !isOpening() ? 'hover' : '' : ''}
        whileTap={canOpen() ? !isOpening() ? 'tryOpen' : '' : ''}
        onClick={() => {
          if (santaDay.isOpened) return;

          if (!canOpen()) {
            setCurrentVariant('notYet');
            return;
          }

          setCurrentVariant('opening');
          OpenSantaDay(santaDay.id).then(() => {
            santaDay.isOpened = true;
          });
        }}
        onAnimationComplete={(x) => {
          if (x == 'notYet') {
            setCurrentVariant('');
          }
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
          onAnimationComplete={(x) => {
            if (x == 'opening') {
              setCurrentVariant('opened');
            }
          }}
          variants={variants}
          animate={currentVariant}
        >
          <span style={{ fontSize: fontSize }} className={styles.dayCardText}>
            {day}
          </span>
          {/*<span>{canOpen() ? 'Open me' : 'Not yet'}</span>*/}
        </motion.div>
      </motion.div>
    </GridItem>
  );
}

export default DayCard;
