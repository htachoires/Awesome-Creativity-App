import { motion, Variants } from 'framer-motion';

export interface GridItemProps {
  x?: number;
  y?: number;
  marginTop?: number;
  placeSelf?: string;
  children?: any;
}

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
    },
  },
};

export function GridItem({
  x,
  y,
  marginTop,
  placeSelf,
  children,
}: GridItemProps) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      style={{
        gridColumnStart: x,
        gridRowStart: y,
        marginTop: marginTop,
        placeSelf: placeSelf,
      }}
    >
      <motion.div variants={cardVariants}>{children}</motion.div>
    </motion.div>
  );
}

export default GridItem;
