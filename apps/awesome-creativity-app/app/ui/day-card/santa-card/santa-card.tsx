import DayCard from '../day-card';

export interface SantaCardProps {
  day: number;
  x: number;
  y: number;
  marginY?: number;
  placeSelf?: string;
  marginX?: number;
  isOpened: boolean;
}

export function SantaCard({
  day,
  x,
  y,
  marginY,
  placeSelf,
  marginX,
  isOpened,
}: SantaCardProps) {
  return (
    <DayCard
      day={day}
      isOpened={isOpened}
      x={x}
      y={y}
      marginY={marginY}
      placeSelf={placeSelf}
      height={200}
      width={200}
      marginX={marginX}
      color={'#F4D03F'}
      borderBackground={'#145A32'}
      borderRadius={'27% 73% 29% 71% / 72% 26% 74% 28% '}
      fontSize={'5rem'}
    />
  );
}

export default SantaCard;
