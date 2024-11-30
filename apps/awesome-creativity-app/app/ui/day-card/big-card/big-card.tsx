import DayCard from '../day-card';
import { SantaDay } from '../../../lib/santa-days/santa-day';

export interface BigCardProps {
  day: number;
  x: number;
  y: number;
  marginY?: number;
  placeSelf?: string;
  delay?: number;
  santaDay: SantaDay;
  openSantaDayAction: (santaDay: SantaDay) => void;
}

export function BigCard({
  day,
  x,
  y,
  marginY,
  placeSelf,
  delay,
  santaDay,
  openSantaDayAction,
}: BigCardProps) {
  return (
    <DayCard
      day={day}
      santaDay={santaDay}
      openSantaDayAction={openSantaDayAction}
      x={x}
      y={y}
      delay={delay}
      marginY={marginY}
      placeSelf={placeSelf}
      height={130}
      width={170}
      color={'var(--quarterly)'}
      rotateClick={'-2deg'}
      borderBackground={'var(--terciary)'}
      fontSize={'4rem'}
      borderRadius={'16% 84% 16% 84% / 81% 12% 88% 19%'}
    />
  );
}

export default BigCard;
