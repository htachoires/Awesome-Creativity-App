import DayCard from '../day-card';

export interface BigCardProps {
  day: number;
  x: number;
  y: number;
  marginX?: number;
  marginY?: number;
  placeSelf?: string;
  delay?: number;
  alignSelf?: string;
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
}: BigCardProps) {
  return (
    <DayCard
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
      rotate={'2deg'}
      borderBackground={'#145A32'}
      delay={delay}
      borderRadius={'91% 9% 88% 12% / 8% 89% 11% 92%'}
    />
  );
}

export default SmallDayCard;
