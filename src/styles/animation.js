export const transition = [0.6, 0.05, -0.01, 0.9];

export const parent = {
    initial: { opacity: 0 },
    animate: {   
      opacity: 1,
      transition: {
        delay: 1,
        staggerChildren: 0.05
      }
    },
    exit: { opacity: 0 },
  };

export const child = {
    initial: { 
      y: 800,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.2, ease: transition }
    },
    exit: {
      y: 800,
      opacity: 0,
      transition: { duration: 1.2, ease: transition }
    }
  };
