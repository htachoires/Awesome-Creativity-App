import DayCard from '../day-card';

export interface SantaCardProps {
  day: number;
  x: number;
  y: number;
  marginY?: number;
  placeSelf?: string;
}

export function SantaCard({ day, x, y, marginY, placeSelf }: SantaCardProps) {
  return (
    <DayCard
      day={day}
      x={x}
      y={y}
      marginY={marginY}
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
