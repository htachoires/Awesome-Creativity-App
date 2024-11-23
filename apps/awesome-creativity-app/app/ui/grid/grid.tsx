'use client';
import { motion } from 'framer-motion';

import styles from './grid.module.css';
import SmallDayCard from '../day-card/small-card/small-day-card';
import ImageCard from '../image-card/image-card';
import PicCard from '../pic-card/pic-card';
import BigCard from '../day-card/big-card/big-card';
import SantaCard from '../day-card/santa-card/santa-card';
import { useEffect, useState } from 'react';
import { SantaDay } from '../../lib/santa-days/santa-day';

export interface GridProps {
  santaDays: SantaDay[];
}

export default function Grid({ santaDays }: GridProps) {
  const [isVisible, setIsVisible] = useState('none');

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible('grid'), 4700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <motion.div
        style={{ display: isVisible }}
        className={styles['grid-container']}
      >
        <div className={styles['grid']}>
          <SmallDayCard
            y={10}
            x={1}
            delay={0.1}
            placeSelf={'start'}
            rotateDirection={'left'}
            day={1}
            isOpened={santaDays[0].isOpened}
          />
          <PicCard
            y={10}
            x={7}
            placeSelf={'end'}
            delay={0.15}
            rotate={'3deg'}
            width={170}
            index={1}
          />
          {/*<ImageCard*/}
          {/*  uri={'/img/bauble-7.png'}*/}
          {/*  y={10}*/}
          {/*  x={4}*/}
          {/*  marginY={100}
          {/*  delay={0.2}*/}
          {/*  rotate={'0deg'}*/}
          {/*  placeSelf={'center'}*/}
          {/*  width={50}*/}
          {/*/>*/}
          <SmallDayCard
            y={20}
            x={7}
            placeSelf={'end'}
            marginY={100}
            delay={0.2}
            day={2}
            isOpened={santaDays[1].isOpened}
          />
          <PicCard
            y={20}
            x={1}
            delay={0.3}
            marginY={100}
            rotate={'3deg'}
            placeSelf={'start'}
            width={170}
            index={2}
          />
          {/*<ImageCard*/}
          {/*  uri={'/img/bauble-1.png'}*/}
          {/*  y={30}*/}
          {/*  x={6}*/}
          {/*  marginY={100}
          {/*  delay={0.5}*/}
          {/*  rotate={'-3deg'}*/}
          {/*  placeSelf={'start'}*/}
          {/*  width={100}*/}
          {/*/>*/}
          {/*<ImageCard*/}
          {/*  uri={'/img/bauble-3.png'}*/}
          {/*  y={30}*/}
          {/*  x={6}*/}
          {/*  marginY={100}
          {/*  delay={0.6}*/}
          {/*  rotate={'10deg'}*/}
          {/*  placeSelf={'start'}*/}
          {/*  width={50}*/}
          {/*/>*/}
          <SmallDayCard
            y={30}
            x={1}
            delay={0.4}
            marginY={100}
            placeSelf={'start'}
            alignSelf={'end'}
            rotateDirection={'left'}
            day={3}
            isOpened={santaDays[2].isOpened}
          />
          <PicCard
            y={30}
            x={7}
            placeSelf={'end'}
            rotate={'3deg'}
            delay={0.5}
            marginY={100}
            width={160}
            index={3}
          />
          {/*<ImageCard*/}
          {/*  uri={'/img/lights.png'}*/}
          {/*  y={50}*/}
          {/*  x={2}*/}
          {/*  marginY={100}
          {/*  rotate={'70deg'}*/}
          {/*  placeSelf={'start'}*/}
          {/*  width={100}*/}
          {/*/>*/}
          {/*<ImageCard*/}
          {/*  uri={'/img/lights.png'}*/}
          {/*  y={50}*/}
          {/*  x={5}*/}
          {/*  marginY={100}
          {/*  rotate={'120deg'}*/}
          {/*  placeSelf={'start'}*/}
          {/*  width={100}*/}
          {/*/>*/}
          {/*<ImageCard*/}
          {/*  uri={'/img/giftbox.png'}*/}
          {/*  y={60}*/}
          {/*  x={2}*/}
          {/*  marginY={100}
          {/*  rotate={'10deg'}*/}
          {/*  placeSelf={'start'}*/}
          {/*  width={140}*/}
          {/*/>*/}
          <SmallDayCard
            delay={0.6}
            y={40}
            x={7}
            placeSelf={'end'}
            marginY={100}
            rotateDirection={'right'}
            day={4}
            isOpened={santaDays[3].isOpened}
          />
          <PicCard
            y={40}
            x={1}
            placeSelf={'start'}
            marginY={100}
            rotate={'-3deg'}
            width={170}
            index={4}
          />
          {/*<ImageCard*/}
          {/*  uri={'/img/bauble-1.png'}*/}
          {/*  y={60}*/}
          {/*  x={7}*/}
          {/*  marginY={100}
          {/*  rotate={'20deg'}*/}
          {/*  width={50}*/}
          {/*/>*/}
          <BigCard
            y={50}
            x={4}
            marginY={100}
            placeSelf={'center'}
            day={5}
            isOpened={santaDays[4].isOpened}
          />
          <PicCard
            y={51}
            x={4}
            placeSelf={'center'}
            marginY={100}
            rotate={'0deg'}
            width={320}
            index={5}
          />
          {/*<ImageCard*/}
          {/*  uri={`/img/bauble-4.png`}*/}
          {/*  y={70}*/}
          {/*  x={7}*/}
          {/*  marginY={100}
          {/*  rotate={'-6deg'}*/}
          {/*  placeSelf={'center'}*/}
          {/*  width={90}*/}
          {/*/>*/}
          {/*<ImageCard*/}
          {/*  uri={'/img/lights.png'}*/}
          {/*  y={80}*/}
          {/*  x={1}*/}
          {/*  marginY={100}
          {/*  rotate={'20deg'}*/}
          {/*  placeSelf={'start'}*/}
          {/*  width={100}*/}
          {/*/>*/}
          {/*<ImageCard*/}
          {/*  uri={'/img/lights.png'}*/}
          {/*  y={80}*/}
          {/*  x={1}*/}
          {/*  marginY={100}
          {/*  rotate={'70deg'}*/}
          {/*  placeSelf={'start'}*/}
          {/*  width={100}*/}
          {/*/>*/}
          <SmallDayCard
            y={60}
            x={1}
            marginY={100}
            day={6}
            rotateDirection={'right'}
            isOpened={santaDays[5].isOpened}
          />
          <PicCard
            y={60}
            x={7}
            placeSelf={'end'}
            marginY={100}
            rotate={'-3deg'}
            width={180}
            index={6}
          />
          <SmallDayCard
            y={70}
            x={7}
            placeSelf={'end'}
            rotateDirection={'right'}
            day={7}
            isOpened={santaDays[6].isOpened}
          />
          <PicCard
            y={70}
            x={1}
            placeSelf={'start'}
            marginY={100}
            rotate={'-3deg'}
            width={180}
            index={7}
          />
          <SmallDayCard
            y={80}
            x={1}
            marginY={100}
            rotateDirection={'right'}
            day={8}
            isOpened={santaDays[7].isOpened}
          />
          <PicCard
            y={80}
            x={7}
            marginY={100}
            rotate={'-3deg'}
            placeSelf={'end'}
            width={170}
            index={8}
          />
          <SmallDayCard
            y={90}
            x={6}
            marginY={100}
            placeSelf={'center'}
            rotateDirection={'right'}
            day={9}
            isOpened={santaDays[8].isOpened}
          />
          <PicCard
            y={90}
            x={1}
            marginY={100}
            rotate={'-3deg'}
            placeSelf={'start'}
            width={160}
            index={9}
          />
          <BigCard
            y={100}
            x={4}
            placeSelf={'center'}
            marginY={100}
            day={10}
            isOpened={santaDays[9].isOpened}
          />
          <PicCard
            y={101}
            x={1}
            placeSelf={'start'}
            marginY={60}
            rotate={'2deg'}
            width={110}
            index={10}
          />
          <PicCard
            y={101}
            x={1}
            placeSelf={'start'}
            marginY={290}
            marginX={15}
            rotate={'-10deg'}
            width={100}
            index={11}
          />
          <PicCard
            y={101}
            x={7}
            placeSelf={'end'}
            alignSelf={'start'}
            marginY={100}
            rotate={'-3deg'}
            width={180}
            index={12}
          />
          <SmallDayCard
            y={110}
            x={1}
            marginY={100}
            day={11}
            isOpened={santaDays[10].isOpened}
          />
          <PicCard
            y={110}
            x={7}
            placeSelf={'end'}
            marginY={100}
            rotate={'3deg'}
            width={150}
            index={13}
          />
          <SmallDayCard
            y={120}
            x={7}
            placeSelf={'end'}
            marginY={100}
            rotateDirection={'left'}
            day={12}
            isOpened={santaDays[11].isOpened}
          />
          <PicCard
            y={120}
            x={1}
            placeSelf={'start'}
            marginY={100}
            rotate={'3deg'}
            width={180}
            index={14}
          />
          <SmallDayCard
            y={130}
            x={1}
            marginY={100}
            day={13}
            isOpened={santaDays[12].isOpened}
          />
          <PicCard
            y={130}
            x={7}
            placeSelf={'end'}
            marginY={100}
            rotate={'3deg'}
            width={150}
            index={15}
          />
          <SmallDayCard
            y={140}
            x={7}
            placeSelf={'end'}
            marginY={100}
            rotateDirection={'left'}
            day={14}
            isOpened={santaDays[13].isOpened}
          />
          <PicCard
            y={140}
            x={1}
            marginY={100}
            rotate={'3deg'}
            placeSelf={'start'}
            width={150}
            index={16}
          />
          <BigCard
            y={150}
            x={4}
            marginY={100}
            placeSelf={'center'}
            day={15}
            isOpened={santaDays[14].isOpened}
          />
          <SmallDayCard
            y={160}
            x={7}
            placeSelf={'end'}
            marginY={100}
            rotateDirection={'right'}
            day={16}
            isOpened={santaDays[15].isOpened}
          />
          <PicCard
            y={160}
            x={1}
            marginY={100}
            rotate={'-3deg'}
            placeSelf={'start'}
            width={150}
            index={17}
          />
          <SmallDayCard
            y={170}
            x={1}
            marginY={100}
            rotateDirection={'right'}
            day={17}
            isOpened={santaDays[16].isOpened}
          />
          <PicCard
            y={170}
            x={7}
            placeSelf={'end'}
            marginY={100}
            rotate={'-3deg'}
            width={150}
            index={18}
          />
          <SmallDayCard
            y={180}
            x={7}
            placeSelf={'end'}
            alignSelf={'end'}
            marginY={100}
            day={18}
            isOpened={santaDays[17].isOpened}
          />
          <PicCard
            y={180}
            x={1}
            marginY={100}
            rotate={'3deg'}
            placeSelf={'start'}
            width={150}
            index={19}
          />
          <SmallDayCard
            y={190}
            x={1}
            marginY={100}
            alignSelf={'end'}
            day={19}
            isOpened={santaDays[18].isOpened}
          />
          <PicCard
            y={190}
            x={7}
            placeSelf={'end'}
            marginY={100}
            rotate={'3deg'}
            width={150}
            index={20}
          />
          <PicCard
            y={200}
            x={4}
            placeSelf={'center'}
            marginY={100}
            rotate={'0deg'}
            width={300}
            index={21}
          />
          <BigCard
            y={210}
            x={4}
            placeSelf={'center'}
            marginY={100}
            day={20}
            isOpened={santaDays[19].isOpened}
          />
          <SmallDayCard
            y={220}
            x={7}
            placeSelf={'end'}
            alignSelf={'start'}
            marginY={100}
            day={21}
            isOpened={santaDays[20].isOpened}
          />
          <PicCard
            y={220}
            x={1}
            marginY={100}
            rotate={'3deg'}
            placeSelf={'start'}
            width={150}
            index={22}
          />
          <SmallDayCard
            y={230}
            x={1}
            marginY={100}
            day={22}
            isOpened={santaDays[21].isOpened}
          />
          <PicCard
            y={230}
            x={7}
            placeSelf={'end'}
            marginY={100}
            rotate={'3deg'}
            width={180}
            index={23}
          />
          <SmallDayCard
            y={240}
            x={7}
            placeSelf={'end'}
            alignSelf={'start'}
            marginY={100}
            day={23}
            isOpened={santaDays[22].isOpened}
          />
          <PicCard
            y={240}
            x={1}
            placeSelf={'start'}
            marginY={100}
            rotate={'3deg'}
            width={150}
            index={24}
          />
          <SmallDayCard
            y={250}
            x={1}
            marginY={100}
            day={24}
            isOpened={santaDays[23].isOpened}
          />
          <PicCard
            y={250}
            x={7}
            placeSelf={'end'}
            marginY={100}
            rotate={'3deg'}
            width={150}
            index={24}
          />
          <SantaCard
            y={330}
            x={4}
            marginY={100}
            placeSelf={'center'}
            day={25}
            isOpened={santaDays[24].isOpened}
          />
          <PicCard
            y={340}
            x={1}
            marginY={40}
            rotate={'3deg'}
            placeSelf={'start'}
            width={150}
            index={24}
          />
          <ImageCard
            uri={'/img/secret-santa.png'}
            y={330}
            x={4}
            placeSelf={'start'}
            marginY={118}
            marginX={-45}
            rotate={'4deg'}
            width={65}
          />
          <ImageCard
            uri={'/img/gift-bag.png'}
            y={340}
            x={2}
            placeSelf={'center'}
            rotate={'0deg'}
            alignSelf={'end'}
            width={80}
          />
          <ImageCard
            uri={'/img/christmas-tree.png'}
            y={340}
            x={7}
            marginY={100}
            rotate={'0deg'}
            placeSelf={'end'}
            width={180}
          />
        </div>
      </motion.div>
    </div>
  );
}
