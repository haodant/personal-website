import React from "react";
import { Link } from "react-router-dom";
import ProjectBanner from "./projects/projectBanner";
import Project from "./projects/project";

import { research } from "./projects/project.data";

// Styled components
import { Container, Flex } from "../styles/globalStyles";
import { ProjectPage } from "../styles/projectStyles";


const DesignCode = () => {
  return (
    <ProjectPage>
      <Container>
        {/* <ProjectBanner section={"Design and Code"}></ProjectBanner> */}
        <Flex wraping>
        {research.map((project, index) => (
            <Project key={`research${index}`} project={project}></Project>
          ))}
        </Flex>
      </Container>
    </ProjectPage>
  );
};

export default DesignCode;
