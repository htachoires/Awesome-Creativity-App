import styles from './santa-modal-day-12.module.scss';

export default function ModalDay12() {
  return (
    <div className={styles.textContainer}>
      <div className={styles.titleContainer}>
        <span className={styles.title}>
          Le restaurant Youyou vous offre l&apos;entrée de votre choix pour un
          moment culinaire à partager avec le chef ❤️
        </span>
      </div>
      <div className={styles.imgContainer}>
        <img
          className={styles.massageImg}
          src="/img/modal/12/bon-pour-une-entree.jpg"
          alt="massage"
        />
      </div>
      <div className={styles.downloadContainer}>
        <a
          href="/img/modal/12/bon-pour-une-entree.jpg"
          className={styles.link}
          download
        >
          J&apos;enregistre mon bon 💾
        </a>
      </div>
      <div className={styles.descriptionContainer}>
        <span>
          Attention ! Pour être activé, ce bon devra être présenté à ton Youyou
          et est valide qu&apos;une seule fois 😉 Offre cumulable avec de
          potentiel futur bon 🤫
        </span>
      </div>
    </div>
  );
}
