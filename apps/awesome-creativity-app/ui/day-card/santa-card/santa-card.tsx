import DayCard from '../day-card';

export interface SantaCardProps {
  day: number;
  x?: number;
  y?: number;
  marginTop?: number;
  placeSelf?: string;
}

export function SantaCard({ day, x, y, marginTop, placeSelf }: SantaCardProps) {
  return (
    <DayCard
      day={day}
      x={x}
      y={y}
      marginTop={marginTop}
      placeSelf={placeSelf}
      height={200}
      width={200}
      color={'#F4D03F'}
      borderBackground={"#145A32"}
      borderRadius={"27% 73% 29% 71% / 72% 26% 74% 28% "}
    />
  );
}

export default SantaCard;
