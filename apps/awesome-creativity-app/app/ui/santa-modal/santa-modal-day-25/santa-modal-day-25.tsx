import styles from './santa-modal-day-25.module.scss';
import { motion, Variants } from 'framer-motion';

export default function ModalDay24() {
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

  return (
    <div className={styles.textContainer}>
      <div className={styles.titleContainer}>
        <span className={styles.title}>
          Youyou a le droit à des cadeaux tous les jours, quel bonheur 🎁 Et
          pourquoi pas mon chat aussi ? Ça tombe bien parce qu'on se voit ce
          soiiir 🥰
        </span>
      </div>
      <motion.div
        animate={'move'}
        variants={variant}
        className={styles.imgContainer}>
        <img
          className={styles.massageImg}
          src="/img/modal/20/gift.png"
          alt="cinema"
        />
      </motion.div>
      <div className={styles.descriptionContainer}>
        <span>Seul bémol, un peu de patience te sera requis... 🫣</span>
      </div>
      <div className={styles.imgBottomContainer}>
        <img className={styles.lightLeft} src="/img/lights-left.png" alt="left" />
        <img className={styles.lightRight} src="/img/lights-right.png" alt="left" />
      </div>
    </div>
  );
}
