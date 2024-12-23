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
import { OpenSantaDay } from '../../lib/santa-days/santa-day-repository';
import ModalDay1 from '../santa-modal/santa-modal-day-1/santa-modal-day-1';
import ModalDay2 from '../santa-modal/santa-modal-day-2/santa-modal-day-2';
import ModalDay3 from '../santa-modal/santa-modal-day-3/santa-modal-day-3';
import ModalDay4 from '../santa-modal/santa-modal-day-4/santa-modal-day-4';
import ModalDay5 from '../santa-modal/santa-modal-day-5/santa-modal-day-5';
import ModalDay6 from '../santa-modal/santa-modal-day-6/santa-modal-day-6';
import ModalDay7 from '../santa-modal/santa-modal-day-7/santa-modal-day-7';
import ModalDay8 from '../santa-modal/santa-modal-day-8/santa-modal-day-8';
import ModalDay9 from '../santa-modal/santa-modal-day-9/santa-modal-day-9';
import ModalDay10 from '../santa-modal/santa-modal-day-10/santa-modal-day-10';
import ModalDay11 from '../santa-modal/santa-modal-day-11/santa-modal-day-11';
import ModalDay12 from '../santa-modal/santa-modal-day-12/santa-modal-day-12';
import ModalDay13 from '../santa-modal/santa-modal-day-13/santa-modal-day-13';
import ModalDay14 from '../santa-modal/santa-modal-day-14/santa-modal-day-14';
import ModalDay15 from '../santa-modal/santa-modal-day-15/santa-modal-day-15';
import ModalDay16 from '../santa-modal/santa-modal-day-16/santa-modal-day-16';
import ModalDay17 from '../santa-modal/santa-modal-day-17/santa-modal-day-17';
import ModalDay18 from '../santa-modal/santa-modal-day-18/santa-modal-day-18';
import ModalDay19 from '../santa-modal/santa-modal-day-19/santa-modal-day-19';
import ModalDay20 from '../santa-modal/santa-modal-day-20/santa-modal-day-20';
import ModalDay21 from '../santa-modal/santa-modal-day-21/santa-modal-day-21';
import ModalDay22 from '../santa-modal/santa-modal-day-22/santa-modal-day-22';
import ModalDay23 from '../santa-modal/santa-modal-day-23/santa-modal-day-23';
import ModalDay24 from '../santa-modal/santa-modal-day-24/santa-modal-day-24';
import ModalDay25 from '../santa-modal/santa-modal-day-25/santa-modal-day-25';

export interface GridProps {
  santaDaysInput: SantaDay[];
}

export default function Grid({ santaDaysInput }: GridProps) {
  const [isVisible, setIsVisible] = useState('none');
  const [santaDays, setSantaDays] = useState(santaDaysInput);

  const openSantaDayAction = (santaDay: SantaDay) => {
    OpenSantaDay(santaDay.id).then(() => {
      const newTmp = santaDays.map((x) => {
        if (x.id != santaDay.id) return x;

        return {
          ...x,
          isOpened: true,
        };
      });

      setSantaDays(newTmp);
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible('block'), 4700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ display: isVisible }}>
      <motion.div className={styles.gridContainer}>
        <div className={styles.grid}>
          <SmallDayCard
            y={10}
            x={1}
            delay={0.1}
            placeSelf={'start'}
            rotateDirection={'left'}
            day={1}
            santaDay={santaDays[0]}
            openSantaDay={openSantaDayAction}
            headerImg={'/img/modal/1/bauble.png'}
            marginLeftModalHeaderTitle={-10}
            modalContent={<ModalDay1 />}
          />
          <PicCard
            y={10}
            x={7}
            alignSelf={'start'}
            placeSelf={'end'}
            delay={0.15}
            rotate={'3deg'}
            width={170}
            index={1}
            santaDay={santaDays[0]}
          />
          <ImageCard
            uri={'/img/lights.png'}
            y={10}
            x={4}
            marginY={100}
            marginX={-30}
            delay={0.2}
            rotate={'-50deg'}
            width={80}
          />
          <ImageCard
            uri={'/img/bauble-3.png'}
            y={10}
            x={6}
            marginY={140}
            marginX={25}
            delay={0.25}
            rotate={'-10deg'}
            width={60}
          />
          <SmallDayCard
            y={20}
            x={7}
            placeSelf={'end'}
            marginY={0}
            delay={0.2}
            day={2}
            santaDay={santaDays[1]}
            openSantaDay={openSantaDayAction}
            headerImg={'/img/modal/2/bauble.png'}
            modalContent={<ModalDay2 />}
          />
          <PicCard
            y={20}
            x={1}
            delay={0.3}
            marginY={0}
            rotate={'3deg'}
            placeSelf={'start'}
            width={170}
            index={2}
            santaDay={santaDays[1]}
          />
          <SmallDayCard
            y={30}
            x={1}
            marginY={100}
            placeSelf={'start'}
            alignSelf={'end'}
            rotateDirection={'left'}
            day={3}
            santaDay={santaDays[2]}
            openSantaDay={openSantaDayAction}
            headerImg={'/img/modal/3/bauble.png'}
            modalContent={<ModalDay3 />}
          />
          <PicCard
            y={30}
            x={7}
            placeSelf={'end'}
            rotate={'3deg'}
            marginY={100}
            width={170}
            index={3}
            santaDay={santaDays[2]}
          />
          <ImageCard
            uri={'/img/sock.png'}
            y={30}
            x={1}
            alignSelf={'start'}
            marginX={25}
            marginY={55}
            rotate={'-10deg'}
            width={100}
          />
          <SmallDayCard
            y={40}
            x={7}
            placeSelf={'end'}
            marginY={100}
            rotateDirection={'right'}
            day={4}
            santaDay={santaDays[3]}
            openSantaDay={openSantaDayAction}
            headerImg={'/img/modal/4/bauble.png'}
            modalContent={<ModalDay4 />}
          />
          <ImageCard
            uri={'/img/giftbox.png'}
            y={40}
            x={5}
            marginX={25}
            marginY={55}
            rotate={'-10deg'}
            width={100}
          />
          <PicCard
            y={40}
            x={1}
            placeSelf={'start'}
            marginY={100}
            rotate={'-3deg'}
            width={170}
            index={4}
            santaDay={santaDays[3]}
          />
          <BigCard
            y={50}
            x={4}
            marginY={100}
            placeSelf={'center'}
            day={5}
            santaDay={santaDays[4]}
            openSantaDayAction={openSantaDayAction}
            headerImg={'/img/modal/5/bauble.png'}
            modalContent={<ModalDay5 />}
          />
          <PicCard
            y={51}
            x={7}
            placeSelf={'end'}
            alignSelf={'start'}
            marginY={60}
            rotate={'3deg'}
            width={200}
            index={5}
            santaDay={santaDays[4]}
          />
          <PicCard
            y={51}
            x={1}
            placeSelf={'start'}
            marginY={180}
            marginX={5}
            rotate={'-3deg'}
            width={160}
            fogDelay={2}
            index={6}
            santaDay={santaDays[4]}
          />
          <SmallDayCard
            y={60}
            x={1}
            marginY={100}
            marginX={5}
            size={80}
            day={6}
            rotateDirection={'left'}
            santaDay={santaDays[5]}
            openSantaDay={openSantaDayAction}
            headerImg={'/img/modal/6/bauble.png'}
            modalContent={<ModalDay6 />}
          />
          <PicCard
            y={60}
            x={7}
            placeSelf={'end'}
            marginY={100}
            rotate={'3deg'}
            width={180}
            index={8}
            santaDay={santaDays[5]}
          />
          <SmallDayCard
            y={70}
            x={7}
            rotateDirection={'left'}
            marginY={50}
            size={80}
            placeSelf={'end'}
            alignSelf={'end'}
            day={7}
            santaDay={santaDays[6]}
            openSantaDay={openSantaDayAction}
            headerImg={'/img/modal/7/bauble.png'}
            modalContent={<ModalDay7 />}
          />
          <PicCard
            y={70}
            x={1}
            placeSelf={'start'}
            rotate={'3deg'}
            width={180}
            marginY={50}
            fogDelay={2}
            index={7}
            santaDay={santaDays[6]}
          />
          <PicCard
            y={71}
            x={4}
            placeSelf={'center'}
            marginY={100}
            width={320}
            index={9}
            santaDay={santaDays[7]}
          />
          <SmallDayCard
            y={80}
            x={1}
            rotateDirection={'left'}
            marginY={75}
            placeSelf={'start'}
            day={8}
            santaDay={santaDays[7]}
            openSantaDay={openSantaDayAction}
            headerImg={'/img/modal/8/bauble.png'}
            modalContent={<ModalDay8 />}
          />
          <PicCard
            y={80}
            x={7}
            marginY={70}
            placeSelf={'end'}
            rotate={'2deg'}
            width={130}
            fogDelay={2}
            index={11}
            santaDay={santaDays[7]}
          />
          <PicCard
            y={81}
            x={4}
            placeSelf={'center'}
            marginY={70}
            rotate={'0deg'}
            width={320}
            fogDelay={4}
            index={10}
            santaDay={santaDays[7]}
          />
          <SmallDayCard
            y={90}
            x={6}
            marginY={130}
            placeSelf={'center'}
            rotateDirection={'right'}
            day={9}
            santaDay={santaDays[8]}
            openSantaDay={openSantaDayAction}
            headerImg={'/img/modal/9/bauble.png'}
            modalContent={<ModalDay9 />}
          />
          <PicCard
            y={90}
            x={3}
            marginY={130}
            rotate={'-3deg'}
            placeSelf={'end'}
            width={130}
            index={12}
            santaDay={santaDays[8]}
          />
          <PicCard
            y={99}
            x={4}
            placeSelf={'center'}
            marginY={130}
            rotate={'0deg'}
            width={330}
            index={13}
            santaDay={santaDays[9]}
          />
          <BigCard
            y={100}
            x={4}
            placeSelf={'center'}
            marginY={50}
            day={10}
            santaDay={santaDays[9]}
            openSantaDayAction={openSantaDayAction}
            headerImg={'/img/modal/10/bauble.png'}
            modalContent={<ModalDay10 />}
          />
          <PicCard
            y={109}
            x={4}
            placeSelf={'center'}
            marginY={100}
            rotate={'0deg'}
            width={330}
            index={14}
            santaDay={santaDays[10]}
          />
          <SmallDayCard
            y={110}
            x={5}
            rotateDirection={'right'}
            marginY={-45}
            day={11}
            santaDay={santaDays[10]}
            openSantaDay={openSantaDayAction}
            headerImg={'/img/modal/11/bauble.png'}
            modalContent={<ModalDay11 />}
          />
          <PicCard
            y={110}
            x={2}
            placeSelf={'start'}
            marginY={-45}
            marginX={-12}
            rotate={'-3deg'}
            width={115}
            fogDelay={2}
            index={16}
            santaDay={santaDays[10]}
          />
          <PicCard
            y={120}
            x={7}
            placeSelf={'end'}
            marginY={50}
            rotate={'0deg'}
            width={170}
            index={15}
            santaDay={santaDays[11]}
          />
          <SmallDayCard
            y={120}
            x={1}
            marginY={145}
            rotateDirection={'left'}
            day={12}
            santaDay={santaDays[11]}
            openSantaDay={openSantaDayAction}
            headerImg={'/img/modal/12/bauble.png'}
            modalContent={<ModalDay12 />}
          />
          <SmallDayCard
            y={130}
            x={7}
            placeSelf={'end'}
            day={13}
            santaDay={santaDays[12]}
            openSantaDay={openSantaDayAction}
            headerImg={'/img/modal/13/bauble.png'}
            modalContent={<ModalDay13 />}
          />
          <PicCard
            y={130}
            x={1}
            marginY={100}
            placeSelf={'start'}
            rotate={'3deg'}
            width={170}
            index={18}
            santaDay={santaDays[12]}
          />
          <PicCard
            y={131}
            x={4}
            marginY={70}
            rotate={'0deg'}
            placeSelf={'center'}
            fogDelay={2}
            width={280}
            index={19}
            santaDay={santaDays[12]}
          />
          <SmallDayCard
            y={140}
            x={1}
            marginY={70}
            rotateDirection={'left'}
            day={14}
            santaDay={santaDays[13]}
            openSantaDay={openSantaDayAction}
            headerImg={'/img/modal/14/bauble.png'}
            modalContent={<ModalDay14 />}
          />
          <PicCard
            y={140}
            x={7}
            marginY={70}
            rotate={'3deg'}
            placeSelf={'end'}
            width={170}
            index={21}
            santaDay={santaDays[13]}
          />
          <PicCard
            y={141}
            x={1}
            marginY={-50}
            rotate={'-3deg'}
            placeSelf={'start'}
            fogDelay={2}
            width={200}
            index={20}
            santaDay={santaDays[13]}
          />
          <BigCard
            y={150}
            x={4}
            marginY={80}
            placeSelf={'center'}
            day={15}
            santaDay={santaDays[14]}
            openSantaDayAction={openSantaDayAction}
            headerImg={'/img/modal/15/bauble.png'}
            modalContent={<ModalDay15 />}
          />
          <PicCard
            y={151}
            x={4}
            marginY={80}
            placeSelf={'center'}
            width={330}
            index={22}
            santaDay={santaDays[14]}
          />
          <SmallDayCard
            y={160}
            x={7}
            placeSelf={'end'}
            marginY={90}
            rotateDirection={'right'}
            day={16}
            santaDay={santaDays[15]}
            openSantaDay={openSantaDayAction}
            headerImg={'/img/modal/16/bauble.png'}
            modalContent={<ModalDay16 />}
          />
          <PicCard
            y={160}
            x={1}
            marginY={90}
            placeSelf={'start'}
            rotate={'-2deg'}
            width={180}
            index={23}
            santaDay={santaDays[15]}
          />
          <SmallDayCard
            y={170}
            x={1}
            marginY={100}
            rotateDirection={'right'}
            day={17}
            santaDay={santaDays[16]}
            openSantaDay={openSantaDayAction}
            headerImg={'/img/modal/17/bauble.png'}
            modalContent={<ModalDay17 />}
          />
          <PicCard
            y={170}
            x={7}
            placeSelf={'end'}
            marginY={100}
            rotate={'-3deg'}
            width={170}
            index={24}
            santaDay={santaDays[16]}
          />
          <PicCard
            y={171}
            x={1}
            marginY={-50}
            marginX={5}
            rotate={'-3deg'}
            placeSelf={'start'}
            width={130}
            fogDelay={2}
            index={25}
            santaDay={santaDays[16]}
          />
          <SmallDayCard
            y={180}
            x={7}
            placeSelf={'end'}
            rotateDirection={'left'}
            marginY={-20}
            day={18}
            santaDay={santaDays[17]}
            openSantaDay={openSantaDayAction}
            headerImg={'/img/modal/18/bauble.png'}
            modalContent={<ModalDay18 />}
          />
          <PicCard
            y={190}
            x={4}
            marginY={100}
            placeSelf={'center'}
            width={330}
            index={26}
            santaDay={santaDays[18]}
          />
          <SmallDayCard
            y={190}
            x={1}
            marginY={130}
            marginX={30}
            size={50}
            fontSize={'1.8rem'}
            rotateDirection={'left'}
            day={19}
            santaDay={santaDays[18]}
            openSantaDay={openSantaDayAction}
            headerImg={'/img/modal/19/bauble.png'}
            modalContent={<ModalDay19 />}
          />
          <BigCard
            y={200}
            x={4}
            placeSelf={'center'}
            marginY={100}
            day={20}
            santaDay={santaDays[19]}
            openSantaDayAction={openSantaDayAction}
            headerImg={'/img/modal/20/bauble.png'}
            modalContent={<ModalDay20 />}
          />
          <PicCard
            y={209}
            x={7}
            placeSelf={'end'}
            marginY={100}
            rotate={'3deg'}
            width={220}
            index={27}
            santaDay={santaDays[20]}
          />
          <PicCard
            y={210}
            x={1}
            rotate={'2deg'}
            placeSelf={'start'}
            marginY={40}
            width={185}
            fogDelay={2}
            index={28}
            santaDay={santaDays[20]}
          />
          <SmallDayCard
            y={210}
            x={7}
            placeSelf={'end'}
            alignSelf={'start'}
            marginY={100}
            day={21}
            santaDay={santaDays[20]}
            openSantaDay={openSantaDayAction}
            headerImg={'/img/modal/21/bauble.png'}
            modalContent={<ModalDay21 />}
          />
          <PicCard
            y={211}
            x={7}
            marginY={40}
            placeSelf={'end'}
            rotate={'0deg'}
            width={200}
            fogDelay={4}
            index={29}
            santaDay={santaDays[20]}
          />
          <PicCard
            y={219}
            x={4}
            placeSelf={'center'}
            marginY={100}
            rotate={'1deg'}
            width={330}
            index={31}
            santaDay={santaDays[21]}
          />
          <SmallDayCard
            y={220}
            x={5}
            marginY={60}
            rotateDirection={'right'}
            day={22}
            santaDay={santaDays[21]}
            openSantaDay={openSantaDayAction}
            headerImg={'/img/modal/22/bauble.png'}
            modalContent={<ModalDay22 />}
          />
          <PicCard
            y={230}
            x={4}
            marginY={100}
            placeSelf={'center'}
            width={330}
            index={32}
            santaDay={santaDays[22]}
          />
          <SmallDayCard
            y={230}
            x={2}
            marginY={130}
            marginX={-10}
            size={80}
            fontSize={'2.4rem'}
            day={23}
            santaDay={santaDays[22]}
            openSantaDay={openSantaDayAction}
            headerImg={'/img/modal/23/bauble.png'}
            modalContent={<ModalDay23 />}
          />
          <PicCard
            y={240}
            x={4}
            placeSelf={'center'}
            marginY={120}
            width={330}
            index={33}
            santaDay={santaDays[23]}
          />
          <SmallDayCard
            y={240}
            x={6}
            size={45}
            fontSize={'1.5rem'}
            marginY={150}
            rotateDirection={'right'}
            day={24}
            santaDay={santaDays[23]}
            openSantaDay={openSantaDayAction}
            headerImg={'/img/modal/24/bauble.png'}
            modalContent={<ModalDay24 />}
          />
          <SantaCard
            y={250}
            x={4}
            marginY={100}
            placeSelf={'center'}
            day={25}
            santaDay={santaDays[24]}
            openSantaDayAction={openSantaDayAction}
            headerImg={'/img/modal/25/bauble.png'}
            modalContent={<ModalDay25 />}
          />
          <ImageCard
            uri={'/img/secret-santa.png'}
            y={250}
            x={4}
            placeSelf={'start'}
            marginY={118}
            marginX={-45}
            rotate={'4deg'}
            width={65}
          />
          <PicCard
            y={251}
            x={1}
            marginY={60}
            marginX={8}
            rotate={'3deg'}
            placeSelf={'start'}
            width={180}
            index={35}
            santaDay={santaDays[24]}
          />
          <ImageCard
            y={260}
            x={2}
            placeSelf={'end'}
            rotate={'0deg'}
            alignSelf={'end'}
            width={80}
            uri={'/img/gift-bag.png'}
          />
          <ImageCard
            y={260}
            x={4}
            marginY={-65}
            marginX={30}
            rotate={'0deg'}
            width={180}
            uri={'/img/christmas-tree.png'}
          />
        </div>
      </motion.div>
    </div>
  );
}
