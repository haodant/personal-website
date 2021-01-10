import React from "react";
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";
import ProjectSummary from "./projects/projectSummary";
import ProjectBanner from "./projects/projectBanner";

import { research } from './projects/project.data';

// Styled components
import { Container, Flex } from "../styles/globalStyles";
import { ResearchPage } from "../styles/projectStyles";


const Research = () => {
  return (
    <ResearchPage>
      <Container fluid>
        <ProjectBanner section={"Research"}></ProjectBanner>
        <Flex wrap>
          {research.map(project => (
            <ProjectSummary project={project}></ProjectSummary>
          ))}
        </Flex>
      </Container>
    </ResearchPage>
  );
};

export default Research;
