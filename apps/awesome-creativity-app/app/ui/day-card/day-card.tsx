'use client';

import styles from './day-card.module.css';
import GridItem from '../grid-item/grid-item';
import { motion, Variants } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import { SantaDay } from '../../lib/santa-days/santa-day';
import SantaModal from '../santa-modal/santa-modal';

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
  openSantaDayAction: (santaDay: SantaDay) => void;
  modalContent?: JSX.Element | undefined;
  headerImg?: string;
  marginLeftModalHeaderTitle?: number | undefined;
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
  openSantaDayAction,
  modalContent,
  headerImg,
  marginLeftModalHeaderTitle,
}: DayCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  //prevent from scrolling
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isModalOpen]);

  const canOpen = (): boolean => {
    const date = new Date();

    return (
      !santaDay.isOpened &&
      santaDay.day <= date.getDate() &&
      date.getMonth() == 11
    );
  };

  const [currentVariant, setCurrentVariant] = useState(
    santaDay.isOpened ? 'opened' : canOpen() ? 'canOpen' : ''
  );

  const isOpening = useCallback(
    () => currentVariant == 'opening',
    [currentVariant]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (isOpening()) return;

      setCurrentVariant(
        santaDay.isOpened ? 'opened' : canOpen() ? 'canOpen' : ''
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [santaDay, isOpening, setCurrentVariant]);

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
      transition: { type: 'spring', duration: 5 },
    },
    tryOpen: {
      scale: 0.95,
      rotate: rotateClick,
    },
    hover: {
      scale: 1.05,
      rotate: rotateClick,
    },
    opened: {
      scale: 1,
      transition: { type: 'spring', duration: 2 },
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
      scale: 0,
      opacity: 0,
      rotate: 180,
      transition: {
        scale: { ease: 'easeOut', duration: 5 },
        opacity: { ease: 'easeOut', duration: 5 },
        rotate: { ease: 'easeInOut', duration: 5 },
        ease: 'easeOut',
        duration: 5,
      },
    },
    opened: {
      scale: 0,
      opacity: 0,
      transition: {
        duration: 0,
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
        whileHover={canOpen() ? (!isOpening() ? 'hover' : '') : ''}
        whileTap={canOpen() ? (!isOpening() ? 'tryOpen' : '') : ''}
        onClick={() => {
          if (santaDay.isOpened) {
            openModal();
            return;
          }

          if (!canOpen()) {
            setCurrentVariant('notYet');
            return;
          }
          setCurrentVariant('opening');
          openSantaDayAction(santaDay);
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
              openModal();
            }
          }}
          variants={variants}
          animate={currentVariant}
        >
          <span style={{ fontSize: fontSize }} className={styles.dayCardText}>
            {day}
          </span>
        </motion.div>
      </motion.div>
      {isModalOpen && (
        <SantaModal
          marginLeftModalHeaderTitle={marginLeftModalHeaderTitle}
          day={santaDay.day}
          onClose={closeModal}
          headerImg={headerImg}
        >
          {modalContent}
        </SantaModal>
      )}
    </GridItem>
  );
}

export default DayCard;
