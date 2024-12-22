import styles from './santa-modal-day-23.module.scss';
import { motion, Variants } from 'framer-motion';

export default function ModalDay23() {
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
          Malgré un climat un peu plus frais, la Norvège, la Suède, la Finlande
          ou encore le Danemark seront t&apos;apporter défenses immunitaires
          pour te protéger des maladies environnantes en hiver ❄️
        </span>
        <div className={styles.gridImgContainer}>
          <img
            className={styles.gridImg}
            src="/img/modal/23/first.jpg"
            alt="Norvege"
          />
          <img
            className={styles.gridImg}
            src="/img/modal/23/second.jpg"
            alt="Suede"
          />
          <img
            className={styles.gridImg}
            src="/img/modal/23/third.jpg"
            alt="finlande"
          />
          <img
            className={styles.gridImg}
            src="/img/modal/23/forth.jpg"
            alt="Danemark"
          />
        </div>
      </div>
      <div className={styles.descriptionContainer}>
        <span>
          À ton tour d&apos;ouvrir le cadeau ayant la lettre correspondante pour
          chasser le microbe ambulant qui est en toi 🦠 Houste, laissez mon chat
          tranquille !
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
          S
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
