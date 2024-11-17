import styles from './image-card.module.scss';

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
    <div
      className={styles['container']}
      style={{
        gridColumnStart: x,
        gridRowStart: y,
        marginTop: marginTop,
        placeSelf: placeSelf,
        rotate: rotate,
      }}
    >
      <img className={styles['img-card']} src={uri} alt="photo" width={width} />
    </div>
  );
}

export default ImageCard;
