import React from "react";

import { transition } from "../styles/animation";

// styled component
import { PanelAnimation } from "../styles/globalStyles";

const Panel = () => {
  return (
    <PanelAnimation
      initial={{ top: 0, height: "100vh" }}
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
    ></PanelAnimation>
  );
};

export default Panel;
