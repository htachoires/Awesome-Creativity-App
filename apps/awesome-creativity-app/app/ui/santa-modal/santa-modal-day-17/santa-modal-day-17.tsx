import styles from './santa-modal-day-17.module.scss';

export default function ModalDay17() {
  return (
    <div className={styles.textContainer}>
      <div className={styles.titleContainer}>
        <span className={styles.title}>
          Ton youyou se repose avec son amoureuse (Mon chat à moi), il
          sera de retour dès de demain pour de nouvelles aventures 🥰
        </span>
      </div>
      <div className={styles.planImgContainer}>
        <img
          className={styles.planImg}
          src="/img/modal/17/us.jpg"
          alt="gift"
        />
      </div>
      <div className={styles.hintContainer}>
        <span className={styles.description}>
          À demain mon amour, je t'aime ❤️
        </span>
      </div>
    </div>
  );
}
