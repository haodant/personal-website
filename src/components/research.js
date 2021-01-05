import React from 'react'
import { Link, BrowserRouter, Switch, Route } from 'react-router-dom'
import ProjectSummary from './projects/projectSummary'
import ProjectBanner from './projects/projectBanner'

// Styled components
import { Container, Flex } from '../styles/globalStyles'
import { ResearchPage } from "../styles/projectStyles";

const projects = [
    {
      id: 1,
      subtitle: "Research",
      title: "A qualitative research on robot",
      img: "raven"
    },
    {
      id: 2,
      subtitle: "Research",
      title: "A qualitative research on culural connection",
      img: "connection"
    },
    {
      id: 1,
      subtitle: "Research",
      title: "A qualitative research on stereotype",
      img: "stereotype"
    }
  ];

const Research = () => {
    return (
        <ResearchPage>
            <Container>
                <ProjectBanner section={'Research'}></ProjectBanner>
                <Flex wrap>
                    {projects.map((project) => (
                        <ProjectSummary project={project}></ProjectSummary>
                    ))}
                </Flex>
            </Container>
        </ResearchPage>
    )
}

export default Research
