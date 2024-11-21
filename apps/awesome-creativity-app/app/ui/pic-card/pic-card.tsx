'use client';

import GridItem from '../grid-item/grid-item';
import styles from './pic-card.module.scss';
import { motion } from 'framer-motion';

/* eslint-disable-next-line */
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
  alignSelf?: string;
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
  alignSelf,
}: ImageCardProps) {
  return (
    <GridItem
      x={x}
      delay={delay}
      y={y}
      marginY={marginY}
      placeSelf={placeSelf}
      alignSelf={alignSelf}
    >
        <div style={{ rotate: rotate }} className={styles['imgContainer']}>
          <img
            style={{ marginLeft: marginX, filter: 'blur(30px)' }}
            className={styles['img-card']}
            src={`/img/us/pic-${index}.jpg`}
            alt="photo"
            width={width}
          />
            <motion.img
              animate={{
                rotate: [0, 180, 360], // Keyframes for rotation
              }}
              transition={{
                duration: 5, // Adjust as needed
                repeat: Infinity,
                repeatDelay: 1,
                ease: "easeInOut"
              }}
              src={'img/sand-clock.png'}
              width={40}
              className={styles.lockedImg}
            />
        </div>
    </GridItem>
  );
}

export default PicCard;
