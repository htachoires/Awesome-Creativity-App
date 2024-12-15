import styles from './santa-modal-day-16.module.scss';

export default function ModalDay15() {
  return (
    <div className={styles.textContainer}>
      <div className={styles.titleContainer}>
        <span className={styles.title}>
          Le capitaine a retrouvé son trésor ! Et suite à sa dernière
          exploration, il a certainement dû le remplir 😋
        </span>
      </div>
      <div className={styles.imgContainer}>
        <img
          className={styles.massageImg}
          src="/img/modal/16/treasure.jpg"
          alt="massage"
        />
      </div>
      <div className={styles.descriptionContainer}>
        <span>
          Est-ce qu&apos;on irait pas regarder dans son coffre 🤫 Mais attention
          ! Il ne faut pas se faire voir 🫣
        </span>
      </div>
    </div>
  );
}
