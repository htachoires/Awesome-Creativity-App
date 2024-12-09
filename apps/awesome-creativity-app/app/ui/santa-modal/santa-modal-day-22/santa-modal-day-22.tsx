import styles from './santa-modal-day-22.module.scss';

export default function ModalDay22() {
  return (
    <div className={styles.textContainer}>
      <div className={styles.titleContainer}>
        <span className={styles.title}>
          Pendant leur fuite, un lutin pirate a laissé tomber un autre cadeau
        </span>
      </div>
      <div className={styles.planImgContainer}>
        <img
          className={styles.planImg}
          src="/img/modal/9/plan-shadow.png"
          alt="gift"
        />
      </div>
      <div className={styles.hintContainer}>
        <span className={styles.description}>
          💎 Arriveras-tu à trouver le trouver ? 💎
        </span>
      </div>
    </div>
  );
}
