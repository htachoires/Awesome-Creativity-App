'use client';

import GridItem from '../grid-item/grid-item';
import styles from './pic-card.module.scss';
import { motion, Variants } from 'framer-motion';
import { SantaDay } from '../../lib/santa-days/santa-day';
import { useEffect, useState } from 'react';

export interface ImageCardProps {
  index: number;
  x: number;
  y: number;
  marginY?: number;
  marginX?: number;
  placeSelf?: string;
  rotate?: string;
  width: number;
  delay?: number;
  fogDelay?: number;
  alignSelf?: string;
  santaDay: SantaDay;
}

export function PicCard({
  index,
  x,
  y,
  marginY,
  placeSelf,
  rotate,
  width,
  delay,
  marginX,
  fogDelay,
  alignSelf,
  santaDay,
}: ImageCardProps) {
  const [currentVariant, setCurrentVariant] = useState(
    santaDay.isOpened ? 'opened' : 'hidden'
  );

  useEffect(() => {
    setCurrentVariant(santaDay.isOpened ? 'opened' : 'hidden');
  }, [santaDay.isOpened]);

  const snowVariants: Variants = {
    hidden: {
      rotate: [0, 180, 360],
      transition: {
        duration: 5, // Adjust as needed
        repeat: Infinity,
        repeatDelay: 1,
        ease: 'easeInOut',
      },
    },
    opened: {
      rotate: [0, 180, 360],
      opacity: 0,
      scale: 0,
      transition: {
        rotate: {
          duration: 5, // Adjust as needed
          repeat: Infinity,
          repeatDelay: 1,
          ease: 'easeInOut',
        },
        duration: 3,
        ease: 'easeInOut',
      },
    },
  };

  const pictureVariants: Variants = {
    hidden: {
      filter: 'blur(30px)',
    },
    opened: {
      filter: 'blur(0px)',
      transition: { delay: (fogDelay ?? 0) + 0.5, duration: 4 },
    },
  };

  return (
    <GridItem
      x={x}
      delay={delay}
      y={y}
      marginY={marginY}
      marginX={marginX}
      placeSelf={placeSelf}
      alignSelf={alignSelf}
    >
      <div style={{ rotate: rotate, zIndex: -1 }} className={styles.imgContainer}>
        <motion.img
          style={{ marginLeft: marginX }}
          animate={currentVariant}
          variants={pictureVariants}
          className={styles['img-card']}
          src={`/img/us/pic-${index}.jpg`}
          alt="photo"
          width={width}
        />
        <div className={styles.timerContainer}>
          <div>
            <motion.img
              initial={!santaDay.isOpened}
              animate={currentVariant}
              variants={snowVariants}
              style={{ marginLeft: marginX }}
              src={'img/snowflake.png'}
              width={40}
              className={styles.lockedImg}
            />
          </div>
        </div>
      </div>
    </GridItem>
  );
}

export default PicCard;
