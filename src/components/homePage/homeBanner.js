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

import Panel from "../panel";

const HomeBanner = () => {

  return (
    <>
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
          <Link to={"/work/"} key="workpage">See my work.</Link>
        </Quoteline>
      </Quote>
      <Clouds />
    </Banner>
    <Panel />
    </>
  );
};

export default HomeBanner;
