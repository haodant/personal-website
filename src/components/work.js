import React from "react";
import Project from "./projects/project";

import { research } from "./projects/project.data";

// Styled components
import { Container, Flex } from "../styles/globalStyles";
import { ProjectPage } from "../styles/projectStyles";


const Work = () => {
  return (
    <ProjectPage>
      <Container>
        <Flex wraping>
        {research.map((project, index) => (
            <Project key={`research${index}`} project={project}></Project>
          ))}
        </Flex>
      </Container>
    </ProjectPage>
  );
};

export default Work;
