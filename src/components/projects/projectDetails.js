import React, { useEffect, useState, useRef } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

import { research } from "./project.data";

// Styled components
import { Container, Flex } from "../../styles/globalStyles";
import { ProjectDetail, ProjectHeader, CloseButton, ProjectContent, Showcase  } from "../../styles/projectStyles";

// Context
import { useGlobalStateContext, useGlobalDispatchContext } from '../../context/globalContext'

// Custom hook
import useElementPosition from '../../hooks/useElementPosition'

// Components
// import ScrollForMore from "../components/scrollForMore";
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

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const [canScroll, setCanScroll] = useState(false);

  //Close Button
  const { cursorStyles } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()

  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false 
    dispatch({type: 'CURSOR_TYPE', cursorType: cursorType})
  }

  useEffect(() => {
    if (canScroll === false) {
      document.querySelector("body").classList.add("no-scroll");
    } else {
      document.querySelector("body").classList.remove("no-scroll");
    }
  }, [canScroll]);

  return (
    <ProjectDetail>
        <ProjectHeader>
          <Flex spaceBetween noHeight>
            <h2>{project.type}</h2>
            <Link to="/work">
                <CloseButton onMouseEnter={() => onCursor('hovered')} onMouseLeave={onCursor}></CloseButton>
            </Link>
          </Flex>
        </ProjectHeader>

        <ProjectContent>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <a>link</a>
        </ProjectContent>
        <Showcase>
          <div className="showcase">
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
          </div>
        </Showcase>
    </ProjectDetail>
  );
};

export default ProjectDetails;
