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
  openSantaDayAction: (santaDay: SantaDay) => void;
  modalContent?: JSX.Element;
  headerImg?: string;
}

export function SantaCard({
  day,
  x,
  y,
  marginY,
  placeSelf,
  marginX,
  santaDay,
  openSantaDayAction,
  modalContent,
  headerImg,
}: SantaCardProps) {
  return (
    <DayCard
      day={day}
      santaDay={santaDay}
      openSantaDayAction={openSantaDayAction}
      x={x}
      y={y}
      marginY={marginY}
      placeSelf={placeSelf}
      height={200}
      width={200}
      rotateClick={'-2deg'}
      marginX={marginX}
      color={'var(--quarterly)'}
      borderBackground={'var(--terciary)'}
      headerImg={headerImg}
      modalContent={modalContent}
      borderRadius={'27% 73% 29% 71% / 72% 26% 74% 28% '}
      fontSize={'5rem'}
    />
  );
}

export default SantaCard;
