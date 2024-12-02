import styles from './santa-modal-day-3.module.scss';

export default function ModalDay3() {
  return (
    <div className={styles.textContainer}>
      <div className={styles.titleContainer}>
        <span className={styles.title}>
          L&apos;institut Youyou t&apos;attend pour un moment de relaxation ❤️
        </span>
      </div>
      <div className={styles.imgContainer}>
        <img
          className={styles.massageImg}
          src="/img/modal/3/massage.jpg"
          alt="massage"
        />
      </div>
      <div className={styles.downloadContainer}>
        <a href="/img/modal/3/massage.jpg" className={styles.link} download>
          J&apos;enregistre mon bon 💾
        </a>
      </div>
      <div className={styles.descriptionContainer}>
        <span>
          Attention ! Pour être activé, ce bon devra être présenté à ton Youyou
          et est valide qu&apos;une seule fois 😉
        </span>
      </div>
    </div>
  );
}
