import React from "react";

// Styled components
import { Container, Flex } from "../../styles/globalStyles";
import {
  Summary,
  ProjectThumbnail,
  ProjectImage,
  ProjectDetail,
  ProjectTitle,
  ProjectSubtitle,
  ProjectDescription
} from "../../styles/projectStyles";

const ProjectSummary = ({ project }) => {
  return (
    <Summary key={project.id}>
      <Container>
        <ProjectThumbnail>
          <ProjectImage src={`/img/${project.img}`} alt={project.title}></ProjectImage>
          <ProjectDetail>
            <ProjectSubtitle>{project.subtitle}</ProjectSubtitle>
            <ProjectTitle>{project.title}</ProjectTitle>
          </ProjectDetail>
        </ProjectThumbnail>
        <ProjectDescription>
          This paper investigates whether empathy towards an interactive trash
          bin, particularly empathy induced by the bin’s anthropomorphic
          appearance and behavior, affects people’s evaluations of the artifact
          and their intention to use it to recycle. We performed an online
          survey in which 344 participants viewed a video showing a person
          interacting with a recycling bin in one of three conditions:
          non-interactive / control, non-anthropomorphic interactive, and
          anthropomorphic interactive.
        </ProjectDescription>
      </Container>
    </Summary>
  );
};

export default ProjectSummary;
