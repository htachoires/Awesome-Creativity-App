import styles from './santa-modal-day-22.module.scss';
import { motion, Variants } from 'framer-motion';

export default function ModalDay22() {
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
          Machu Picchu, Iguazu Falls, Christ Rédempteur... Que dirais-tu cette
          fois d&apos;un tour en Amérique du sud pour prendre un bon bain
          d&apos;énergie ? ⚡
        </span>
        <div className={styles.gridImgContainer}>
          <img
            className={styles.mainImg}
            src="/img/modal/22/first.jpg"
            alt="Iguazu Falls"
          />
          <img
            className={styles.gridImg}
            src="/img/modal/22/second.jpg"
            alt="Machu Picchu"
          />
          <img
            className={styles.gridImg}
            src="/img/modal/22/third.jpg"
            alt="Christ Rédempteur"
          />
        </div>
      </div>
      <div className={styles.descriptionContainer}>
        <span>
          Je te laisse te diriger vers ton cadeau qui contient la lettre
          correspondante pour découvrir ton prochain voyage ☀️
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
