import React from "react";
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";
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
        <ProjectBanner section={"Design and Code"}></ProjectBanner>
        <Flex wraping>
        {research.map((project, index) => (
            <Project key={`research${index}`} project={project}></Project>
          ))}
          <Project></Project>
          <Project up></Project>
          <Project down></Project>
          <Project></Project>
          <Project up></Project>
          <Project down></Project>
          <Project></Project>
          <Project up></Project>
          <Project down></Project>
        </Flex>
      </Container>
    </ProjectPage>
  );
};

export default DesignCode;
