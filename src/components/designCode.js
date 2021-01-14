import React from "react";
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";
import ResearchProject from "./projects/researchProject";
import ProjectBanner from "./projects/projectBanner";
import DesignCodeProject from "./projects/designCodeProject";

import { research } from './projects/project.data';

// Styled components
import { Container, Flex } from "../styles/globalStyles";
import { ResearchPage } from "../styles/projectStyles";


const DesignCode = () => {
  return (
    <ResearchPage>
      <Container>
        <ProjectBanner section={"Design and Code"}></ProjectBanner>
            <DesignCodeProject></DesignCodeProject>
            <DesignCodeProject></DesignCodeProject>
            <DesignCodeProject></DesignCodeProject>
            <DesignCodeProject></DesignCodeProject>
      </Container>
    </ResearchPage>
  );
};

export default DesignCode;
