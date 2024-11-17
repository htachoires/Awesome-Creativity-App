'use client';
import { motion } from 'framer-motion';

import styles from './grid.module.css';
import SmallCard from '../../ui/day-card/small-card/small-card';
import ImageCard from '../../ui/image-card/image-card';
import BigCard from '../../ui/day-card/big-card/big-card';
import SantaCard from '../../ui/day-card/santa-card/santa-card';
import { useEffect, useState } from 'react';

export default function Grid() {
  const [isVisible, setIsVisible] = useState('none');

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible('grid'), 3700);
    return () => clearTimeout(timer); // Nettoyage du timer
  }, []);

  return (
    <div>
      <motion.div
        style={{ display: isVisible }}
        className={styles['grid-container']}
      >
        <div className={styles['grid']}>
          <SmallCard day={1} x={1} y={1} placeSelf={'start'} />
          <ImageCard
            x={7}
            y={1}
            marginY={0}
            delay={0.1}
            rotate={'6deg'}
            placeSelf={'end'}
            width={160}
            uri={'/img/1-pic.jpg'}
          />
          <ImageCard
            x={4}
            y={2}
            marginY={-250}
            marginX={-25}
            delay={0.2}
            rotate={'0deg'}
            placeSelf={'center'}
            width={50}
            uri={'/img/bauble-7.png'}
          />
          <SmallCard
            day={2}
            delay={0.3}
            x={7}
            y={2}
            marginY={40}
            placeSelf={'end'}
            alignSelf={'start'}
          />
          <ImageCard
            x={1}
            y={2}
            delay={0.4}
            marginY={80}
            marginX={20}
            rotate={'5deg'}
            placeSelf={'start'}
            width={150}
            uri={'/img/6-pic.jpg'}
          />
          <SmallCard day={3} x={2} y={3} marginY={50} />
          <ImageCard
            x={5}
            y={3}
            rotate={'-3deg'}
            placeSelf={'start'}
            marginY={90}
            width={150}
            uri={'/img/2-pic.jpg'}
          />
          <ImageCard
            x={6}
            y={3}
            marginY={-90}
            delay={0.7}
            rotate={'-3deg'}
            placeSelf={'start'}
            width={100}
            uri={'/img/bauble-1.png'}
          />
          <ImageCard
            x={6}
            y={3}
            marginY={15}
            marginX={-50}
            delay={0.8}
            rotate={'10deg'}
            placeSelf={'start'}
            width={50}
            uri={'/img/bauble-3.png'}
          />
          <ImageCard
            x={5}
            y={4}
            marginY={-270}
            marginX={30}
            delay={0.9}
            rotate={'1200deg'}
            placeSelf={'start'}
            width={100}
            uri={'/img/lights.png'}
          />
          <ImageCard
            x={2}
            y={4}
            marginY={-160}
            marginX={-30}
            delay={1}
            rotate={'70deg'}
            placeSelf={'start'}
            width={100}
            uri={'/img/lights.png'}
          />
          <SmallCard day={4} x={6} y={3} marginY={350} placeSelf={'end'} />
          <ImageCard
            x={2}
            y={4}
            marginY={20}
            marginX={-30}
            rotate={'10deg'}
            placeSelf={'start'}
            width={100}
            uri={'/img/giftbox.png'}
          />
          <ImageCard
            x={6}
            y={4}
            marginY={60}
            rotate={'-6deg'}
            placeSelf={'start'}
            width={90}
            uri={'/img/bauble-4.png'}
          />
          <ImageCard
            x={5}
            y={4}
            marginY={130}
            marginX={-15}
            rotate={'20deg'}
            placeSelf={'start'}
            width={50}
            uri={'/img/bauble-1.png'}
          />
          <BigCard day={5} x={3} y={5} marginY={50} placeSelf={'start'} />
          <SmallCard day={6} x={1} y={6} marginY={130} />
          <SmallCard day={7} x={7} y={7} marginY={40} placeSelf={'end'} />
          <ImageCard
            x={1}
            y={8}
            marginY={0}
            rotate={'-6deg'}
            placeSelf={'start'}
            width={180}
            uri={'/img/3-pic.jpg'}
          />
          <SmallCard day={8} x={3} y={8} marginY={160} />
          <SmallCard day={9} x={6} y={9} marginY={150} placeSelf={'center'} />
          <BigCard day={10} x={4} y={10} marginY={150} placeSelf={'center'} />
          <SmallCard day={11} x={1} y={11} marginY={100} />
          <SmallCard day={12} x={5} y={12} marginY={200} />
          <SmallCard day={13} x={2} y={13} marginY={150} />
          <SmallCard day={14} x={4} y={14} marginY={250} placeSelf={'end'} />
          <BigCard day={15} x={4} y={15} marginY={150} placeSelf={'center'} />
          <SmallCard day={16} x={5} y={16} marginY={200} />
          <SmallCard day={17} x={1} y={17} marginY={150} />
          <SmallCard day={18} x={5} y={18} marginY={150} />
          <SmallCard day={19} x={3} y={19} marginY={150} placeSelf={'end'} />
          <BigCard day={20} x={4} y={20} marginY={150} placeSelf={'center'} />
          <SmallCard day={21} x={1} y={21} marginY={150} />
          <SmallCard day={22} x={7} y={22} marginY={150} placeSelf={'end'} />
          <SmallCard day={23} x={3} y={23} marginY={150} />
          <SmallCard day={24} x={4} y={24} marginY={150} />
          <SantaCard day={25} x={4} y={25} marginY={400} placeSelf={'center'} />
        </div>
      </motion.div>
    </div>
  );
}
