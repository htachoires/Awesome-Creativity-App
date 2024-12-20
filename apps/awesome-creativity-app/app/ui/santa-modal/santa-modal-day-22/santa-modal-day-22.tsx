import styles from './santa-modal-day-22.module.scss';
import { motion, Variants } from 'framer-motion';

export default function ModalDay22() {
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
          Dans différentes régions du monde existent des pratiques ancestrales
          détoxifiantes utilisant des ingrédients connus pour purifier le corps
          🌍
        </span>
      </div>
      <motion.div
        animate={'move'}
        variants={variant}
        className={styles.imgContainer}
      >
        <img
          className={styles.massageImg}
          src="/img/modal/22/gift.png"
          alt="cinema"
        />
      </motion.div>
      <div className={styles.descriptionContainer}>
        <span>
          As-tu deviné ce qui se cache derrière ? À toi d&apos;aller ouvrir ton
          cadeau pour le découvrir 🎁
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
          initial={{opacity: 0, scale: 0, y:50}}
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
