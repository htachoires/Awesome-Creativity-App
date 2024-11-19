import DayCard from '../day-card';

export interface BigCardProps {
  day: number;
  x: number;
  y: number;
  marginY?: number;
  placeSelf?: string;
  delay?: number;
  isOpened: boolean;
}

export function BigCard({
  day,
  x,
  y,
  marginY,
  placeSelf,
  delay,
  isOpened,
}: BigCardProps) {
  return (
    <DayCard
      day={day}
      isOpened={isOpened}
      x={x}
      y={y}
      delay={delay}
      marginY={marginY}
      placeSelf={placeSelf}
      height={130}
      width={170}
      color={'#F4D03F'}
      rotate={'-2deg'}
      borderBackground={'#145A32'}
      fontSize={'4rem'}
      borderRadius={'16% 84% 16% 84% / 81% 12% 88% 19%'}
    />
  );
}

export default BigCard;
