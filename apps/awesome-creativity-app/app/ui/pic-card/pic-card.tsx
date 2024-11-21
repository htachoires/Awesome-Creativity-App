'use client';

import ImageCard from '../image-card/image-card';

/* eslint-disable-next-line */
export interface ImageCardProps {
  index: number;
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

export function PicCard({
  index,
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
    <ImageCard
      x={x}
      y={y}
      placeSelf={placeSelf}
      alignSelf={alignSelf}
      marginX={marginX}
      marginY={marginY}
      rotate={rotate}
      width={width}
      delay={delay}
      uri={`/img/us/pic-${index}.jpg`}
    />
  );
}

export default PicCard;
