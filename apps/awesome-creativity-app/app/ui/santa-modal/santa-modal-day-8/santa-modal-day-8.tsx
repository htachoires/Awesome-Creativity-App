import styles from './santa-modal-day-8.module.scss';

export default function ModalDay8() {
  return (
    <div className={styles.textContainer}>
      <div className={styles.titleContainer}>
        <span className={styles.title}>
          📜 Que la chasse commence 📜
        </span>
      </div>
      <div className={styles.numberContainer}>
        <span>0812</span>
      </div>
      <div className={styles.giftImgContainer}>
        <img
          className={styles.planImg}
          src="/img/modal/8/plan-shadow.png"
          alt="gift"
        />
      </div>
      <div className={styles.hintContainer}>
        <span className={styles.description}>
          💎 Arriveras-tu à trouver le trésor ? 💎
        </span>
      </div>
    </div>
  );
}
