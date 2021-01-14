import React, { useState, useEffect } from "react";

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

// Scroll Behavior
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'

const ResearchProject = ({ project }) => {
  const animation = useAnimation();
  const [researchRef, inView] = useInView({
      triggerOnce: true,
      rootMargin: '-300px'
  })

  useEffect(() => {
      if (inView) {
          animation.start('visible')
      }
  }, [animation, inView])


  return (
    <Summary
      key={project.id}
      ref={researchRef}
      animate={animation}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }
        },
        hidden: {
          opacity: 0,
          y: 72
        }
      }}
    >
      <Container>
        <ProjectThumbnail>
          <ProjectImage
            src={`/img/${project.img}`}
            alt={project.title}
          ></ProjectImage>
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

export default ResearchProject;
