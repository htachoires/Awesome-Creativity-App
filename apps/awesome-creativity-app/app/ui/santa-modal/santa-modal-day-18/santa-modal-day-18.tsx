import styles from './santa-modal-day-18.module.scss';

export default function ModalDay18() {
  return (
    <div className={styles.textContainer}>
      <div className={styles.logoContainer}>
        <img
          className={styles.logoImg}
          src="/img/modal/18/logo.png"
          alt="logo"
        />
      </div>
      <div className={styles.descriptionContainer}>
        <span>
          Nouvelle expérience culinaire à partager avec ton Youyou dans un
          restaurant Français 👨‍🎨 Italien 🍝
        </span>
      </div>
      <div className={styles.titleContainer}>
        <span className={styles.title}>
          Nomad est un restaurant qui sent bon le soleil. Vous allez découvrir
          une cuisine du sud, une cuisine méditerranéenne qui va vous faire
          voyager ! Un peu d’Italie dans l’assiette, des plats Grecs ou encore
          des saveurs du Moyen-Orient. Un lieu de vie, où l’on s’y sent bien, à
          la fois par l’atmosphère chaleureuse mais également par son ambiance
          musicale.
        </span>
      </div>
      <div className={styles.gridImgContainer}>
        <img
          className={styles.restaurantImg}
          src="/img/modal/18/main.png"
          alt="nainai"
        />
        <img
          className={styles.gridImg}
          src="/img/modal/18/first.png"
          alt="nainai"
        />
        <img
          className={styles.gridImg}
          src="/img/modal/18/second.png"
          alt="nainai"
        />
        <img
          className={styles.gridImg}
          src="/img/modal/18/third.png"
          alt="nainai"
        />
      </div>
      <div className={styles.downloadContainer}>
        <a
          href="https://nomad-restaurant.fr/"
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
