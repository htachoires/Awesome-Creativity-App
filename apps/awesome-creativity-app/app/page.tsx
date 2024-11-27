import styles from './page.module.scss';
import Title from './ui/title/title';
import Grid from './ui/grid/grid';
import { GetSantaDays } from './lib/santa-days/santa-day-repository';
import CountdownTimer from './ui/countdown-timer/countdown-timer';

export default async function Index() {
  const santaDays = await GetSantaDays();

  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Title />
          <CountdownTimer />
          <Grid santaDaysInput={santaDays} />
        </div>
      </div>
    </div>
  );
}
