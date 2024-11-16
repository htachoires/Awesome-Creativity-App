import styles from './page.module.scss';
import Card from '../ui/card/card';
import BigCard from '../ui/big-card/big-card';
import SantaCard from '../ui/santa-card/santa-card';

export default async function Index() {
  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h1>Welcome to awesome creativity app!</h1>
          <div className={styles['grid-container']}>
            <Card day={1} marginTop={0} />
            <Card day={2} marginTop={300} />
            <Card day={3} marginTop={600} />
            <Card day={4} marginTop={100} />
            <div></div>
            <div></div>
            <div></div>
            <BigCard day={5} marginTop={150} />
            <div></div>
            <div></div>
            <div></div>
            <Card day={6} marginTop={100} />
            <Card day={8} marginTop={450} />
            <Card day={7} marginTop={150} />
            <div></div>
            <div></div>
            <div></div>
            <Card day={9} marginTop={100} />
            <div></div>
            <BigCard day={10} marginTop={150} />
            <div></div>
            <div></div>
            <Card day={11} marginTop={200} />
            <div></div>
            <Card day={12} marginTop={150} />
            <Card day={13} marginTop={400} />
            <Card day={14} marginTop={700} />
            <div></div>
            <BigCard day={15} marginTop={150} />
            <div></div>
            <Card day={16} marginTop={150} />
            <Card day={17} marginTop={450} />
            <div></div>
            <Card day={18} marginTop={150} />
            <div></div>
            <Card day={19} marginTop={400} />
            <div></div>
            <BigCard day={20} marginTop={250} />
            <div></div>
            <Card day={21} marginTop={150} />
            <Card day={22} marginTop={270} />
            <Card day={23} marginTop={390} />
            <div></div>
            <Card day={24} marginTop={50} />
            <div></div>
            <div></div>
            <SantaCard day={25} marginTop={200} />
          </div>
        </div>
      </div>
    </div>
  );
}
