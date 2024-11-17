import DayCard from '../day-card';

/* eslint-disable-next-line */
export interface BigCardProps {
  day: number;
  x?: number;
  y?: number;
  marginTop?: number;
  placeSelf?: string;
}

export function SmallCard({ day, x, y, marginTop, placeSelf }: BigCardProps) {
  return (
    <DayCard
      day={day}
      x={x}
      y={y}
      marginTop={marginTop}
      placeSelf={placeSelf}
      height={100}
      width={100}
      color={'#922B21'}
      borderBackground={"#145A32"}
      borderRadius={"91% 9% 88% 12% / 8% 89% 11% 92%"}
    />
  );
}

export default SmallCard;
