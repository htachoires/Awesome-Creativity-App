import styles from './santa-modal-day-23.module.scss';
import { motion, Variants } from 'framer-motion';

export default function ModalDay23() {
  const variant: Variants = {
    move: {
      y: [3, 0, 3],
      transition: {
        duration: 1, // Total time for one cycle (up and down)
        repeat: Infinity, // Keep repeating
        ease: 'easeInOut', // Smooth transitions
      },
    },
  };

  const letterVariants: Variants = {
    move: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 2, // Total time for one cycle (up and down)
        ease: 'easeInOut', // Smooth transitions
      },
    },
  };

  return (
    <div className={styles.textContainer}>
      <div className={styles.titleContainer}>
        <span className={styles.title}>
          Que dirais-tu d&apos;un tour en Amérique du sud pour prendre un bon
          bain d&apos;énergie ? ⚡
        </span>
      </div>
      <motion.div
        animate={'move'}
        variants={variant}
        className={styles.imgContainer}
      >
        <img
          className={styles.massageImg}
          src="/img/modal/23/gift.png"
          alt="cinema"
        />
      </motion.div>
      <div className={styles.descriptionContainer}>
        <span>
          Tu peux te diriger vers la lettre correspondante pour découvrir ton
          prochain voyage ☀️
        </span>
      </div>
      <div className={styles.imgBottomContainer}>
        <img
          className={styles.lightLeft}
          src="/img/lights-left.png"
          alt="left"
        />
        <motion.span
          animate={'move'}
          initial={{ opacity: 0, scale: 0, y: 50 }}
          variants={letterVariants}
          className={styles.letter}
        >
          B
        </motion.span>
        <img
          className={styles.lightRight}
          src="/img/lights-right.png"
          alt="left"
        />
      </div>
    </div>
  );
}

