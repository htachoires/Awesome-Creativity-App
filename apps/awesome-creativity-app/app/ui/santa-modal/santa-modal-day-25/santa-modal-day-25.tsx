import styles from './santa-modal-day-25.module.scss';

export default function ModalDay24() {
  return (
    <div className={styles.container}>
      <p className={styles.firstParagraph}>TODO</p>
      <div className={styles.gridImgContainer}>
        <img
          className={styles.gridImg}
          src="/img/modal/25/left.jpg"
          alt="left gift"
        />
        <img
          className={styles.gridImg}
          src="/img/modal/25/right.jpg"
          alt="right gift"
        />
        <img
          className={styles.mainImg}
          src="/img/modal/25/gift.jpg"
          alt="gift name"
        />
      </div>
      <p className={styles.secondParagraph}>TODO</p>
      <p className={styles.merryChristmas}>Joyeux Noël mon Chat ❤️</p>
    </div>
  );
}
