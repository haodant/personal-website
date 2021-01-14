import React from "react";
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";
import ProjectBanner from "./projects/projectBanner";
import DesignCodeProject from "./projects/designCodeProject";
import Project from "./projects/project";

import { research } from "./projects/project.data";

// Styled components
import { Container, Flex } from "../styles/globalStyles";
import { ProjectPage, ResearchPage } from "../styles/projectStyles";

const DesignCode = () => {
  return (
    <ProjectPage>
      <Container>
        <ProjectBanner section={"Design and Code"}></ProjectBanner>
        <Flex wrap>
          <Project></Project>
          <Project></Project>
          <Project></Project>
          <Project></Project>
          <Project></Project>
          <Project></Project>
          <Project></Project>
          <Project></Project>
        </Flex>
      </Container>
    </ProjectPage>
  );
};

export default DesignCode;
