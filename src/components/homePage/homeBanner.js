import React, { useRef } from "react";
import Clouds from "../threejs/clouds"

import {
  Banner,
  Headline,
  Quote,
  Quoteline
} from "../../styles/homeStyles";
import { transition, parent, child } from "../../styles/animation";

//Custom hook
import useWindowSize from "../../hooks/useWindowSize";

const HomeBanner = () => {
  const size = useWindowSize();

  return (
    <Banner
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 1.2, ease: transition }
      }}
      exit={{ opacity: 0 }}
    >
      <Quote variants={parent} initial="initial" animate="animate">
        <Headline variants={child}>Hi there,</Headline>
        <Quoteline variants={child}>
          I am a HCI researcher / engineer. 
        </Quoteline>
        {/* <Quoteline variants={child}>
          I care about creating emotional and relational experiences using interactive technologies.
        </Quoteline> */}
      </Quote>
      <Clouds />
    </Banner>
  );
};

export default HomeBanner;
