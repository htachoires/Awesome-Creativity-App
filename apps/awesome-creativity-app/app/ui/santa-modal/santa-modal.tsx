import styles from './santa-modal.module.css';
import { motion, Variants } from 'framer-motion';
import { useEffect, useState } from 'react';

export interface ModalProps {
  onClose: () => void;
  children?: any;
  day?: number;
  headerImg?: string;
  marginLeftModalHeaderTitle?: number;
}

export default function SantaModal({
  onClose,
  children,
  day,
  marginLeftModalHeaderTitle,
  headerImg,
}: ModalProps) {
  function getOrdinal() {
    return day == 1 ? 'er' : 'ème';
  }

  const [currentVariant, setCurrentVariant] = useState('hide');

  useEffect(() => {
    setCurrentVariant('show');
  }, []);

  const modalVariants: Variants = {
    show: {
      opacity: 1,
      translateY: 0,
      transition: {
        // transition: { duration: 2 },
      },
    },
    hide: {
      translateY: 300,
      opacity: 0,
    },
  };

  const backgroundVariants: Variants = {
    show: {
      opacity: 0.65,
      transition: {
        duration: 0.5,
      },
    },
    hide: {
      opacity: 0,
    },
  };

  return (
    <>
      <motion.div
        initial={'hide'}
        animate={currentVariant}
        variants={backgroundVariants}
        className={styles.modalBackground}
        onClick={onClose}
      ></motion.div>
      <div className={styles.modalWrapper}>
        <motion.div
          className={styles.modalContainer}
          initial={'hide'}
          animate={currentVariant}
          variants={modalVariants}
        >
          <div className={styles.modalInnerContainer}>
            <div className={styles.modalHeader}>
              <span className={styles.modalTitle}>
                {day}
                <span className={styles.ordinal}>{getOrdinal()} </span>
                Jour de l&#39;avent
              </span>
              <img
                className={styles.bauble}
                style={{ marginLeft: marginLeftModalHeaderTitle }}
                src={headerImg ?? '/img/bauble-2.png'}
                alt="bauble"
                width={'55'}
              />
              <div className={styles.modalExitContainer} onClick={onClose}>
                <span className={styles.modalExit}>x</span>
              </div>
            </div>
            <div className={styles.modalBodyContainer}>{children}</div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
