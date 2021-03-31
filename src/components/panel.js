import React from "react";
import { motion } from "framer-motion"

import { transition } from "../styles/animation";

// styled component
import { PanelAnimation } from "../styles/globalStyles";

const Panel = () => {
  const outputRange = [
    `
    M -44,-50 C -52.71,28.52 15.86,8.186 184,14.69 383.3,22.39 462.5,12.58 638,14 835.5,15.6 987,6.4 1194,13.86 1661,30.68 1652,-36.74 1582,-140.1 1512,-243.5 15.88,-589.5 -44,-50 Z
    `,
    `
    M -44,-50 C -137.1,117.4 67.86,445.5 236,452 435.3,459.7 500.5,242.6 676,244 873.5,245.6 957,522.4 1154,594 1593,753.7 1793,226.3 1582,-126 1371,-478.3 219.8,-524.2 -44,-50 Z
    `
  ];

  return (
    <PanelAnimation
      initial={{ top: -20, height: "100vh" }}
      animate={{
        height: 0,
        bottom: null
      }}
      exit={{
        height: window.innerHeight,
        top: 0,
        transition: { ...transition, duration: 0.6 }
      }}
      transition={{ ...transition, duration: 0.8 }}
    >
      <motion.div className="shape-outer">
        <motion.svg 
          initial={{ scaleY: 1.8 }}
          animate={{ scaleY: 1, transition:{ duration: 0.6, easing: transition} }}
          exit={{ scaleY: 1.8, transition:{ duration: 0.6, easing: transition}}}
          className="shape" width="100%" height="100vh" preserveAspectRatio="none" viewBox="0 0 1440 800"  xmlns="http://www.codrops.com/">
          <motion.path 
            initial={{ d: outputRange[1] }}
            animate={{
              transition: {
                duration: 0.6,
                easing: transition,
              },
                d: outputRange[0]
            }}
            exit={{              transition: {
              duration: 0.6,
              easing: transition,
            },
              d: outputRange[1]}}
            d="M -44,-50 C -52.71,28.52 15.86,8.186 184,14.69 383.3,22.39 462.5,12.58 638,14 835.5,15.6 987,6.4 1194,13.86 1661,30.68 1652,-36.74 1582,-140.1 1512,-243.5 15.88,-589.5 -44,-50 Z"></motion.path>
        </motion.svg>
      </motion.div>
    </PanelAnimation>
  );
};

export default Panel;
