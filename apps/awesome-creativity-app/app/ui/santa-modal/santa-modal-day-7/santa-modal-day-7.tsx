import styles from './santa-modal-day-7.module.scss';

export default function ModalDay7() {
  return (
    <div className={styles.textContainer}>
      <div className={styles.titleContainer}>
        <span className={styles.title}>
          Rolala... deux chiffres manquant maintenant ? Mais comment allons-nous
          trouver ?
        </span>
      </div>
      <div className={styles.numberContainer}>
        <span>?1-1?</span>
      </div>
      <div className={styles.descriptionContainer}>
        <span className={styles.description}>
          Serait-ce le dernier cette fois-ci ? Jamais 2 sans 3 mais, jamais 3 sans
          4, ça marche ?
        </span>
      </div>
      <div className={styles.giftImgContainer}>
        <img
          className={styles.giftImg}
          src="/img/modal/7/giftbox.png"
          alt="gift"
        />
      </div>
      <div className={styles.hintContainer}>
        <span className={styles.description}>
          Parce que tu sais à quoi ils servent maintenant 😉
        </span>
      </div>
    </div>
  );
}
