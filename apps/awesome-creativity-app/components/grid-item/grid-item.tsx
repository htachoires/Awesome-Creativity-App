import { motion, Variants } from 'framer-motion';

export interface GridItemProps {
  x: number;
  y: number;
  marginX?: string;
  marginY?: number;
  placeSelf?: string;
  children?: any;
  delay?: number;
  alignSelf?: string | undefined;
}

export function GridItem({
  x,
  y,
  marginY,
  placeSelf,
  children,
  delay,
  marginX,
  alignSelf,
}: GridItemProps) {
  const cardVariants: Variants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 50,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
        delay: delay ?? 0,
      },
    },
  };

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      style={{
        gridColumnStart: x,
        gridRowStart: y,
        marginTop: marginY,
        marginLeft: marginX,
        placeSelf: placeSelf,
        alignSelf: alignSelf
      }}
    >
      <motion.div variants={cardVariants}>{children}</motion.div>
    </motion.div>
  );
}

export default GridItem;
