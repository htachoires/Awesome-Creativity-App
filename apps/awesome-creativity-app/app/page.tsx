import styles from './page.module.scss';
import Title from './ui/title/title';
import Grid from './ui/grid/grid';

export default async function Index() {
  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Title />
          <Grid />
        </div>
      </div>
    </div>
  );
}
