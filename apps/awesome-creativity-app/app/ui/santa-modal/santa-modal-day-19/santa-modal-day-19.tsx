import styles from './santa-modal-day-19.module.scss';

export default function ModalDay19() {
  return (
    <div className={styles.textContainer}>
      <div className={styles.titleContainer}>
        <span className={styles.title}>
          Bon pour une séance de cinéma de ton choix avec ton Youyou 🎬 Tu
          reconnais la photo de cet été ? 🥰
        </span>
      </div>
      <div className={styles.imgContainer}>
        <img
          className={styles.massageImg}
          src="/img/modal/19/cinema.jpg"
          alt="cinema"
        />
      </div>
      <div className={styles.downloadContainer}>
        <a href="/img/modal/19/cinema.jpg" className={styles.link} download>
          J&apos;enregistre mon bon 💾
        </a>
      </div>
    </div>
  );
}
