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
}

export function BigCard({
  day,
  x,
  y,
  marginY,
  placeSelf,
  delay,
  santaDay,
}: BigCardProps) {
  return (
    <DayCard
      day={day}
      santaDay={santaDay}
      x={x}
      y={y}
      delay={delay}
      marginY={marginY}
      placeSelf={placeSelf}
      height={130}
      width={170}
      color={'#F4D03F'}
      rotateClick={'-2deg'}
      borderBackground={'#145A32'}
      fontSize={'4rem'}
      borderRadius={'16% 84% 16% 84% / 81% 12% 88% 19%'}
    />
  );
}

export default BigCard;
