import styles from './santa-modal-day-4.module.scss';

export default function ModalDay4() {
  return (
    <div className={styles.textContainer}>
      <div className={styles.logoContainer}>
        <img className={styles.logoImg} src="/img/modal/4/logo.png" alt="logo" />
      </div>
      <div className={styles.descriptionContainer}>
        <span>Expérience culinaire à partager avec ton Youyou 🥢🏮</span>
      </div>
      <div className={styles.titleContainer}>
        <span className={styles.title}>
          Naï Naï signifie “mamie” en mandarin. Dans cette cantine chinoise du
          quartier Gambetta, venez découvrir une cuisine authentique, de
          produits locaux, familiale et réconfortante.
        </span>
      </div>
      <div className={styles.gridImgContainer}>
        <img
          className={styles.restaurantImg}
          src="/img/modal/4/NainaiArchi-10-1.jpg"
          alt="nainai"
        />
        <img
          className={styles.gridImg}
          src="/img/modal/4/Rectangle-2.jpg"
          alt="nainai"
        />
        <img
          className={styles.gridImg}
          src="/img/modal/4/Rectangle-3.jpg"
          alt="nainai"
        />
        <img
          className={styles.gridImg}
          src="/img/modal/4/Rectangle-4.jpg"
          alt="nainai"
        />
      </div>
      <div className={styles.downloadContainer}>
        <a
          href="https://nainai.fr/menu/"
          target="_blank"
          className={styles.link}
          download
        >
          Je fonce vers le menu 😋
        </a>
      </div>
    </div>
  );
}
