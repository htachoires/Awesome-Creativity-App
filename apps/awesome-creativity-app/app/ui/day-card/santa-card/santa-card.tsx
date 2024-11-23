import DayCard from '../day-card';
import { SantaDay } from '../../../lib/santa-days/santa-day';

export interface SantaCardProps {
  day: number;
  x: number;
  y: number;
  marginY?: number;
  placeSelf?: string;
  marginX?: number;
  santaDay: SantaDay;
}

export function SantaCard({
  day,
  x,
  y,
  marginY,
  placeSelf,
  marginX,
  santaDay,
}: SantaCardProps) {
  return (
    <DayCard
      day={day}
      santaDay={santaDay}
      x={x}
      y={y}
      marginY={marginY}
      placeSelf={placeSelf}
      height={200}
      width={200}
      rotateClick={'-2deg'}
      marginX={marginX}
      color={'#F4D03F'}
      borderBackground={'#145A32'}
      borderRadius={'27% 73% 29% 71% / 72% 26% 74% 28% '}
      fontSize={'5rem'}
    />
  );
}

export default SantaCard;
