'use client';

import styles from './image-card.module.scss';
import GridItem from '../../components/grid-item/grid-item';

/* eslint-disable-next-line */
export interface ImageCardProps {
  uri: string;
  x: number;
  y: number;
  marginY?: number;
  marginX?: number;
  placeSelf?: string;
  rotate?: string;
  width: number;
  delay?: number;
  alignSelf?: string;
}

export function ImageCard({
  uri,
  x,
  y,
  marginY,
  placeSelf,
  rotate,
  width,
  delay,
  marginX,
  alignSelf,
}: ImageCardProps) {
  return (
    <GridItem x={x} delay={delay} y={y} marginY={marginY} placeSelf={placeSelf} alignSelf={alignSelf}>
      <div style={{ rotate: rotate }} className={styles['container']}>
        <img
          style={{ marginLeft: marginX }}
          className={styles['img-card']}
          src={uri}
          alt="photo"
          width={width}
        />
      </div>
    </GridItem>
  );
}

export default ImageCard;
