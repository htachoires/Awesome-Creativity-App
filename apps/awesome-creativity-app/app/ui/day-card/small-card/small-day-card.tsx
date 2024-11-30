import DayCard from '../day-card';
import { SantaDay } from '../../../lib/santa-days/santa-day';

export interface BigCardProps {
  day: number;
  x: number;
  y: number;
  marginX?: number;
  marginY?: number;
  placeSelf?: string;
  delay?: number;
  alignSelf?: string;
  rotateDirection?: string;
  santaDay: SantaDay;
  fontSize?: string;
  size?: number;
  openSantaDay: (santaDay: SantaDay) => void;
  modalContent?: JSX.Element;
}

export function SmallDayCard({
  day,
  x,
  y,
  marginY,
  placeSelf,
  delay,
  alignSelf,
  marginX,
  rotateDirection = 'left',
  santaDay,
  size,
  fontSize,
  openSantaDay,
  modalContent,
}: BigCardProps) {
  return (
    <DayCard
      santaDay={santaDay}
      day={day}
      x={x}
      y={y}
      marginX={marginX}
      marginY={marginY}
      placeSelf={placeSelf}
      alignSelf={alignSelf}
      fontSize={fontSize}
      height={size ?? 100}
      modalContent={modalContent}
      width={size ?? 100}
      color={'var(--secondary)'}
      borderBackground={'var(--terciary)'}
      openSantaDayAction={openSantaDay}
      rotateClick={'2deg'}
      delay={delay}
      borderRadius={
        rotateDirection == 'left'
          ? '91% 9% 88% 12% / 8% 89% 11% 92%'
          : '8% 89% 11% 92% / 91% 9% 88% 12%'
      }
    />
  );
}

export default SmallDayCard;
