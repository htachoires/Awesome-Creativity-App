import styles from './santa-modal-day-25.module.scss';

export default function ModalDay24() {
  return (
    <div className={styles.container}>
      <p className={styles.paragraph}>
        Ça y est ! Nous y sommes mon amour... C&apos;est le grand jour ! Et ce
        jour, c&apos;est celui de Noël. Ce jour où les cadeaux peuvent enfin
        être ouverts pour y découvrir les surprises qu&apos;ils renferment.
      </p>
      <p className={styles.paragraph}>
        Consulté chaque jour de décembre jusqu&apos;à aujourd&apos;hui,
        c&apos;est aussi le jour où toutes les cases de ton calendrier viennent
        d&apos;être ouvertes.
      </p>
      <p className={styles.paragraph}>
        Et c&apos;est rempli d&apos;amour et de surprises qu&apos;il se clôt et
        laisse place à de nouvelles aventures à vivre tous les deux en 2025.
      </p>
      <p className={styles.paragraph}>
        Tout ce qu&apos;il nous reste à faire pour que nous y sautions,
        c&apos;est que tu viennes y découvrir ce que renferme ce papier cadeau
        rouge avec ton nom inscrit dessus 🎁
      </p>
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
      <p className={styles.merryChristmas}>🎅🎄 Joyeux Noël mon Chat 🎄🎅</p>
      <p className={styles.sign}>Ton Youyou qui t&apos;aime❤️</p>
    </div>
  );
}
