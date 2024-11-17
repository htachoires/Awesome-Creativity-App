import DayCard from '../day-card';

export interface BigCardProps {
  day: number;
  x?: number;
  y?: number;
  marginTop?: number;
  placeSelf?: string;
}

export function BigCard({ day, x, y, marginTop, placeSelf }: BigCardProps) {
  return (
    <DayCard
      day={day}
      x={x}
      y={y}
      marginTop={marginTop}
      placeSelf={placeSelf}
      height={100}
      width={150}
      color={'#F4D03F'}
      rotate={"-2deg"}
      borderBackground={"#145A32"}
      borderRadius={"16% 84% 16% 84% / 81% 12% 88% 19%"}
    />
  );
}

export default BigCard;
