import React from "react";
import Project from "./projects/project";

import { research } from "./projects/project.data";

// Styled components
import { Container, Flex } from "../styles/globalStyles";
import { ProjectPage } from "../styles/projectStyles";

const stagger = {
  animate: {   
    transition: {
      staggerChildren: 0.05
    }
  }
};

const Work = () => {
  return (
    <ProjectPage initial="initial" animate="animate" exit="exit">
      <Container>
        <Flex wraping variants={stagger}>
        {research.map((project, index) => (
            <Project key={`research${index}`} project={project}></Project>
          ))}
        </Flex>
      </Container>
    </ProjectPage>
  );
};

export default Work;
