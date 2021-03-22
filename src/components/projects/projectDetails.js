import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { research } from "./project.data";
import Panel from '../panel';

// Styled components
import {
  ProjectDetail,
  CloseButton,
  ProjectContent,
  Showcase
} from "../../styles/projectStyles";

import { parent, child } from "../../styles/animation";

// Context
import {
  useGlobalStateContext,
  useGlobalDispatchContext
} from "../../context/globalContext";

//Custom hook
import useWindowSize from "../../hooks/useWindowSize";

const ProjectDetails = props => {
  const id = props.match.params.id;
  const project = research.find(project => project.id === Number(id));

  const { cursorStyles } = useGlobalStateContext();
  const dispatch = useGlobalDispatchContext();

  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false;
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType });
  };

  const size = useWindowSize();

  const renderLink = (content, link) => (
    <motion.span variants={child} onMouseEnter={() => onCursor("hovered")} onMouseLeave={onCursor}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {content}
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <title>Icons / Navigation / new-window</title>
          <g fill="none" fillRule="evenodd">
            <path
              d="M18 19H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h5c.55 0 1-.45 1-1s-.45-1-1-1H5a2 2 0 00-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55-.45 1-1 1zM14 4c0 .55.45 1 1 1h2.59l-9.13 9.13a.996.996 0 101.41 1.41L19 6.41V9c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1h-5c-.55 0-1 .45-1 1z"
              fillRule="nonzero"
            />
          </g>
        </svg>
      </a>
    </motion.span>
  );

  return (
    <>
        <ProjectDetail
          initial={{ visibility: "hidden" }}
          animate={{
            visibility: "visible",
            transition: { delay: 0.2 },
          }}
          exit={{
            visibility: "hidden",
            transition: { delay: 0.8 }
          }}
        >
          <ProjectContent variants={parent} initial="initial" animate="animate" exit="exit">
            <motion.h3 variants={child} className="project-type">
              {project.type}
            </motion.h3>
            <motion.h2 variants={child} className="project-title">
              {project.title}
            </motion.h2>
            <motion.p variants={child} className="project-description">{project.description}</motion.p>
            {project.github ? renderLink("Github", project.github) : null}
            {project.website ? renderLink("Website", project.website) : null}
            {project.link
              ? renderLink(
                  Object.keys(project.link)[0],
                  Object.values(project.link)[0]
                )
              : null}
            {project.vimeo ? renderLink("Vimeo", project.vimeo) : null}
            {project.pdf ? renderLink("pdf", project.pdf) : null}
          </ProjectContent>
          <Showcase>
            {project.video && size.width > 1024 ? (
              <motion.video
                src={project.video}
                loop
                autoPlay
                muted
              ></motion.video>
            ) : (
              <motion.img
                src={`/img/${project.img}`}
                alt={project.title}
              ></motion.img>
            )}
          </Showcase>
          {size.width > 1000 ? (
            <Link to="/work">
              <CloseButton
                onMouseEnter={() => onCursor("hovered")}
                onMouseLeave={onCursor}
              ></CloseButton>
            </Link>
          ) : null}
        </ProjectDetail>
        <Panel />
    </>
  );
};

export default ProjectDetails;
