'use client';

import { useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState('none');
  const [targetDate, setDate] = useState<Date | null>(null);

  useEffect(() => {
    setDate(new Date('2024-12-01T00:00:00'));
    getFormattedTimeLeft();

    const timer = setTimeout(() => setIsVisible('grid'), 3700);
    return () => clearTimeout(timer);
  }, []);

  function getFormattedTimeLeft(): string {
    const now = new Date();

    // @ts-ignore
    const difference = targetDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      return `${days}j${String(hours).padStart(2, '0')}h${String(
        minutes
      ).padStart(2, '0')}m${String(seconds).padStart(2, '0')}s`;
    } else {
      return '0j00h00:00';
    }
  }

  const cardVariants: Variants = {
    offscreen: {
      y: 250,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 2,
      },
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getFormattedTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate, getFormattedTimeLeft]);

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      variants={cardVariants}
      style={{
        display: isVisible,
        textAlign: 'center',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginTop: '1.5rem',
        color: 'white',
      }}
    >
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [3, -3, 0, 3] }} // Smooth up and down motion
        transition={{
          duration: 1, // Total time for one cycle (up and down)
          repeat: Infinity, // Keep repeating
          ease: 'easeInOut', // Smooth transitions
        }}
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            padding: '0.5rem',
            backgroundColor: '#145A32',
            borderRadius: '87% 13% 89% 11% / 22% 73% 27% 78% ',
            boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px',
          }}
        >
          <div
            style={{
              backgroundColor: '#922B21',
              padding: '1rem',
              borderRadius: '87% 13% 89% 11% / 22% 73% 27% 78% ',
            }}
          >
            {timeLeft?.split('').map((char, index) => (
              <motion.span
                key={`${char}-${index}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                style={{
                  display: 'inline-block',
                  minWidth: '17px',
                  fontFamily: 'Caveat Brush, cursive',
                }}
              >
                {char}
              </motion.span>
            )) ?? (
              <span
                style={{
                  display: 'inline-block',
                  minWidth: '17px',
                  letterSpacing: 7,
                  fontFamily: 'Caveat Brush, cursive',
                }}
              >
                0j00h00m00s
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
