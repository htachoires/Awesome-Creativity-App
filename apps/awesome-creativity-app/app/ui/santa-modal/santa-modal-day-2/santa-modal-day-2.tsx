import styles from './santa-modal-day-2.module.scss';
import { motion, Variants } from 'framer-motion';

export default function ModalDay2() {
  const variant: Variants = {
    move: {
      y: [10, -3, 0, 10],
      transition: {
        duration: 1, // Total time for one cycle (up and down)
        repeat: Infinity, // Keep repeating
        ease: 'easeInOut', // Smooth transitions
      },
    },
  };

  return (
    <div className={styles.textContainer}>
      <span className={styles.title}>
        Seras-tu aussi forte qu&apos;au Puissance 4 ?
      </span>
      <span className={styles.description}>Parce que je t&apos;invite ici 🤫</span>
      <motion.img
        animate={'move'}
        variants={variant}
        className={styles.candyCaneLeft}
        src="/img/candy-cane-left.png"
        alt="candy"
      />
      <motion.img
        animate={'move'}
        variants={variant}
        className={styles.candyCaneRight}
        src="/img/candy-cane-right.png"
        alt="candy"
      />
      <span className={styles.gps}>
        44.838139333941555,
        <br />
        -0.5874145684930858
      </span>
      <img className={styles.lightLeft} src="/img/lights-left.png" alt="lights" />
      <img className={styles.lightRight} src="/img/lights-right.png" alt="lights" />
    </div>
  );
}
