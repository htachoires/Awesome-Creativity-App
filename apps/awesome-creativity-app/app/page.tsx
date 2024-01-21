import styles from './page.module.scss';

export default async function Index() {
  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h1>Welcome to awesome creativity app!</h1>
        </div>
      </div>
    </div>
  );
}
