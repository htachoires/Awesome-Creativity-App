import styles from './santa-modal-day-6.module.scss';

export default function ModalDay6() {
  return (
    <div className={styles.textContainer}>
      <div className={styles.titleContainer}>
        <span className={styles.title}>
          Hein, encore ? Youyou ce serait t-il trompé en faisant un copier/coller ?
        </span>
      </div>
      <div className={styles.numberContainer}>
        <span>2?07</span>
      </div>
      <div className={styles.descriptionContainer}>
        <span className={styles.description}>
          Mais... il manque un chiffre ?? Lequel pourrait-il être ?
        </span>
      </div>
      <div className={styles.giftImgContainer}>
        <img className={styles.giftImg} src="/img/modal/6/giftbox.png" alt="gift" />
      </div>
      <div className={styles.hintContainer}>
        <span className={styles.description}>
          C&apos;est encore un mot de passe ?<br/>Une clé ? Mhm... 🧐
        </span>
      </div>
    </div>
  );
}
