import styles from './page.module.scss';
import BigCard from '../ui/day-card/big-card/big-card';
import SantaCard from '../ui/day-card/santa-card/santa-card';
import ImageCard from '../ui/image-card/image-card';
import SmallCard from '../ui/day-card/small-card/small-card';

export default async function Index() {
  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h1>
            Calendrier de l'Avant 2024 <br /> pour, mon Chat ❄️❤️
          </h1>
          <div className={styles['grid-container']}>
            <div className={styles['grid']}>
              <SmallCard day={1} x={1} y={1} placeSelf={'start'} />
              <ImageCard
                x={7}
                y={1}
                marginTop={0}
                rotate={'6deg'}
                placeSelf={'end'}
                width={160}
                uri={'/img/1-pic.jpg'}
              />
              <SmallCard day={2} x={7} y={2} marginTop={90} placeSelf={'end'} />
              <ImageCard
                x={1}
                y={2}
                marginTop={80}
                rotate={'-6deg'}
                placeSelf={'start'}
                width={150}
                uri={'/img/2-pic.jpg'}
              />
              <SmallCard day={3} x={2} y={3} marginTop={100} />
              <SmallCard
                day={4}
                x={6}
                y={4}
                marginTop={130}
                placeSelf={'end'}
              />
              <BigCard
                day={5}
                x={4}
                y={5}
                marginTop={150}
                placeSelf={'center'}
              />
              <SmallCard day={6} x={1} y={6} marginTop={130} />
              <SmallCard day={7} x={7} y={7} marginTop={40} placeSelf={'end'} />
              <ImageCard
                x={1}
                y={8}
                marginTop={0}
                rotate={'-6deg'}
                placeSelf={'start'}
                width={180}
                uri={'/img/3-pic.jpg'}
              />
              <SmallCard day={8} x={3} y={8} marginTop={160} />
              <SmallCard
                day={9}
                x={6}
                y={9}
                marginTop={150}
                placeSelf={'center'}
              />
              <BigCard
                day={10}
                x={4}
                y={10}
                marginTop={150}
                placeSelf={'center'}
              />
              <SmallCard day={11} x={1} y={11} marginTop={100} />
              <SmallCard day={12} x={5} y={12} marginTop={200} />
              <SmallCard day={13} x={2} y={13} marginTop={150} />
              <SmallCard
                day={14}
                x={4}
                y={14}
                marginTop={250}
                placeSelf={'end'}
              />
              <BigCard
                day={15}
                x={4}
                y={15}
                marginTop={150}
                placeSelf={'center'}
              />
              <SmallCard day={16} x={5} y={16} marginTop={200} />
              <SmallCard day={17} x={1} y={17} marginTop={150} />
              <SmallCard day={18} x={5} y={18} marginTop={150} />
              <SmallCard
                day={19}
                x={3}
                y={19}
                marginTop={150}
                placeSelf={'end'}
              />
              <BigCard
                day={20}
                x={4}
                y={20}
                marginTop={150}
                placeSelf={'center'}
              />
              <SmallCard day={21} x={1} y={21} marginTop={150} />
              <SmallCard
                day={22}
                x={7}
                y={22}
                marginTop={150}
                placeSelf={'end'}
              />
              <SmallCard day={23} x={3} y={23} marginTop={150} />
              <SmallCard day={24} x={4} y={24} marginTop={150} />
              <SantaCard
                day={25}
                x={4}
                y={25}
                marginTop={400}
                placeSelf={'center'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
