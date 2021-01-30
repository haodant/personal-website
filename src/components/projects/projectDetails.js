import React, { useEffect, useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

import { research } from "./project.data";

// Styled components
import {
  ProjectDetail,
  CloseButton,
  ProjectContent,
  Showcase
} from "../../styles/projectStyles";

// Context
import {
  useGlobalStateContext,
  useGlobalDispatchContext
} from "../../context/globalContext";

//Ease
const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const firstName = {
  initial: {
    y: 0
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: -1
    }
  }
};

const lastName = {
  initial: {
    y: 0
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: 1
    }
  }
};

const ProjectDetails = props => {
  const id = props.match.params.id;
  const project = research.find(project => project.id == id);

  const { cursorStyles } = useGlobalStateContext();
  const dispatch = useGlobalDispatchContext();

  const { imgPosition } = useGlobalStateContext();

  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false;
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType });
  };

  return (
    <ProjectDetail initial="initial" animate="animate" exit="exit">
      <ProjectContent initial={{ opacity: 0 }}>
        <h2 className="project-type">{project.type}</h2>
        <h2 className="project-title">{project.title}</h2>
        <p>{project.description}</p>
        <a>link</a>
      </ProjectContent>
      <Showcase
        initial={{
          x: imgPosition[0],
          y: imgPosition[1],
          width: "calc(26vw*1.05)",
          height: "273px",
        }}
        animate={{
          x: '30%',
          y: 0,
          width: "90%",
          height: "100%",
          transition: { delay: 0.2, ...transition }
        }}
      >
        {project.video ? (
          <motion.video
            src="video/featured-video.mp4"
            loop
            autoPlay
          ></motion.video>
        ) : (
          <motion.img
            src={`/img/${project.img}`}
            alt={project.title}
          ></motion.img>
        )}
      </Showcase>
      <Link to="/work">
        <CloseButton
          onMouseEnter={() => onCursor("hovered")}
          onMouseLeave={onCursor}
        ></CloseButton>
      </Link>
    </ProjectDetail>
  );
};

export default ProjectDetails;
