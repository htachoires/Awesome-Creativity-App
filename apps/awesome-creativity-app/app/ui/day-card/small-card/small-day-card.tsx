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
  santaDay: SantaDay,
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
      height={100}
      width={100}
      color={'#922B21'}
      rotateClick={'2deg'}
      borderBackground={'#145A32'}
      delay={delay}
      borderRadius={rotateDirection == 'left' ? '91% 9% 88% 12% / 8% 89% 11% 92%' : '8% 89% 11% 92% / 91% 9% 88% 12%' }
    />
  );
}

export default SmallDayCard;
