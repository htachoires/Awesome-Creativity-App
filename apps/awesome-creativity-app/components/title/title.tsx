'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';
import styles from './title.module.scss';

const defaultAnimation: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export default function Title() {
  const words = "Calendrier de l'Avant 2024 pour mon Chat ❄️❤️";

  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.5, once: true });

  return (
    <div className={styles.container}>
      <motion.span
        className={styles.title}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          visible: { transition: { staggerChildren: 0.08 } }
        }}
      >
        {words.split('').map((char, charIndex) => (
          <motion.span
            ref={ref}
            variants={defaultAnimation}
            key={`${char}-${charIndex}`}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    </div>
  );
}
