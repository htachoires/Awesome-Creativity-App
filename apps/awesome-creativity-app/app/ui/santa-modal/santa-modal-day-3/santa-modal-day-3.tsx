import styles from './santa-modal-day-3.module.scss';

export default function ModalDay3() {
  return (
    <div className={styles.textContainer}>
      <div className={styles.titleContainer}>
        <span className={styles.title}>
          L&apos;institut Youyou t&apos;attend pour un moment de relaxation ❤️
        </span>
      </div>
      <div className={styles.imgContainer}>
        <img
          className={styles.massageImg}
          src="/img/modal/3/massage.jpg"
          alt="massage"
        />
      </div>
      <div className={styles.descrptionContainer}>
        <span>
          Pour être activé, ce bon devra être
          <br /> présenté à ton Youyou et est valide
          <br />
          qu&apos;une seule fois 😉
        </span>
      </div>
    </div>
  );
}
