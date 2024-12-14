import styles from './santa-modal-day-15.module.scss';

export default function ModalDay15() {
  return (
    <div className={styles.textContainer}>
      <div className={styles.titleContainer}>
        <span className={styles.title}>
          Quelqu&apos;ils s&apos;entendent bien tous les deux 🥰
        </span>
      </div>
      <div className={styles.imgContainer}>
        <img
          className={styles.massageImg}
          src="/img/modal/15/hide.jpeg"
          alt="massage"
        />
      </div>
      <div className={styles.descriptionContainer}>
        <span>
          Ils ont air de cacher quelque chose !<br /> Non ? 🎁
        </span>
      </div>
    </div>
  );
}
