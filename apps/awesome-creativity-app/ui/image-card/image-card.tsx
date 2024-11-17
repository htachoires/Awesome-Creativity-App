'use client';

import styles from './image-card.module.scss';
import GridItem from '../../components/grid-item/grid-item';

/* eslint-disable-next-line */
export interface ImageCardProps {
  uri: string;
  x?: number;
  y?: number;
  marginTop?: number;
  placeSelf?: string;
  rotate?: string;
  width: number;
}

export function ImageCard({
  uri,
  x,
  y,
  marginTop,
  placeSelf,
  rotate,
  width,
}: ImageCardProps) {
  return (
    <GridItem
        x={x}
        y={y}
        marginTop={marginTop}
        placeSelf={placeSelf}
    >
      <div
        style={{rotate:rotate}}
        className={styles['container']}
      >
        <img
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
