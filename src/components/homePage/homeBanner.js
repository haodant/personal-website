import React from "react";
import { Link } from "react-router-dom";
import Clouds from "../threejs/clouds"

import {
  Banner,
  Headline,
  Quote,
  Quoteline
} from "../../styles/homeStyles";
import { transition, parent, child } from "../../styles/animation";


// Context
import {
  useGlobalStateContext,
  useGlobalDispatchContext
} from "../../context/globalContext";

const HomeBanner = () => {
  const { cursorStyles } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()

  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false;
    dispatch({ type: 'CURSOR_TYPE', cursorType: cursorType })
  };

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
        <Quoteline variants={child}>
          <Link to={"/work/"} key="workpage" onMouseEnter={() => onCursor("hovered")}
              onMouseLeave={onCursor}>
            See my work.</Link>
        </Quoteline>
      </Quote>
      <Clouds />
    </Banner>
  );
};

export default HomeBanner;
