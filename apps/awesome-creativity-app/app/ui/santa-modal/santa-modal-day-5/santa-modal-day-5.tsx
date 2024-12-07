import styles from './santa-modal-day-5.module.scss';

export default function ModalDay5() {
  return (
    <div className={styles.textContainer}>
      <div className={styles.titleContainer}>
        <span className={styles.title}>
          Des numéros ? Mais pour quoi faire ?
        </span>
      </div>
      <div className={styles.numberContainer}>
        <span>1108</span>
      </div>
      <div className={styles.descriptionContainer}>
        <span className={styles.description}>
          Ils devraient bien servir à quelque chose 🧐
        </span>
      </div>
      <div className={styles.giftImgContainer}>
        <img className={styles.giftImg} src="/img/modal/5/giftbox.png" alt="gift" />
      </div>
      <div className={styles.hintContainer}>
        <span className={styles.description}>
          Serait-ce un mot de passe ? Une clé ?<br/> Peut-être...
        </span>
      </div>
    </div>
  );
}
