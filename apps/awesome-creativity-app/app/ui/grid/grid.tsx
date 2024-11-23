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
            santaDay={santaDays[0]}
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
            santaDay={santaDays[1]}
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
            santaDay={santaDays[2]}
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
            santaDay={santaDays[3]}
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
            santaDay={santaDays[4]}
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
            santaDay={santaDays[5]}
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
            santaDay={santaDays[6]}
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
            santaDay={santaDays[7]}
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
            santaDay={santaDays[8]}
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
            santaDay={santaDays[9]}
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
            santaDay={santaDays[10]}
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
            santaDay={santaDays[11]}
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
            santaDay={santaDays[12]}
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
            santaDay={santaDays[13]}
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
            santaDay={santaDays[14]}
          />
          <SmallDayCard
            y={160}
            x={7}
            placeSelf={'end'}
            marginY={100}
            rotateDirection={'right'}
            day={16}
            santaDay={santaDays[15]}
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
            santaDay={santaDays[16]}
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
            santaDay={santaDays[17]}
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
            santaDay={santaDays[18]}
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
            santaDay={santaDays[19]}
          />
          <SmallDayCard
            y={220}
            x={7}
            placeSelf={'end'}
            alignSelf={'start'}
            marginY={100}
            day={21}
            santaDay={santaDays[20]}
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
            santaDay={santaDays[21]}
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
            santaDay={santaDays[22]}
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
            santaDay={santaDays[23]}
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
            santaDay={santaDays[24]}
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
