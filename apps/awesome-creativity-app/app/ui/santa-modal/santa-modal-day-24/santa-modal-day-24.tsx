import styles from './santa-modal-day-24.module.scss';
import { motion, Variants } from 'framer-motion';

export default function ModalDay24() {
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
          La savane, le desert, les montagnes du Cederberg ? Au tour de
          l&apos;Afrique de te faire voyager lors de tes futures soirées sur ton
          canapé devant la télé 🦓
        </span>
        <div className={styles.gridImgContainer}>
          <img
            className={styles.mainImg}
            src="/img/modal/24/first.jpg"
            alt="Iguazu Falls"
          />
          <img
            className={styles.gridImg}
            src="/img/modal/24/second.jpg"
            alt="Machu Picchu"
          />
          <img
            className={styles.gridImg}
            src="/img/modal/24/third.jpg"
            alt="Christ Rédempteur"
          />
        </div>
      </div>
      <div className={styles.descriptionContainer}>
        <span>
          Que ce thé t&apos;apporte réconfort et soin lorsque tu en aura besoin
          😇 À toi maintenant te diriger vers le cadeau correspondant aux deux
          lettres pour y découvrir ce que l&apos;Afrique a à t&apos;offrir 🐘
        </span>
      </div>
      <div className={styles.psContainer}>
        <span>PS: J-1 avant Noël 🤫🎁</span>
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
          S·A
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
