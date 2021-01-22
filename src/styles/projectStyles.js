import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Summary = styled(motion.div)`
  display: block;
  margin: 20px 0;
  padding: 0;
  &:hover {
    img {
      opacity: 0.4;
    }
  }
  height: 400px;
  width: 100%;
`;

export const ProjectThumbnail = styled.div`
  display: flex;
  height: 70%;
  width: 100%;
  position: relative;
`;

export const ProjectTitle = styled.h2`
  font-size: 2.4rem;
  line-height: 3.4rem;
  width: 95%;
  color: ${props => props.theme.text};
`;

export const ProjectSubtitle = styled.span`
  font-size: 1.6rem;
  opacity: 0.8;
  font-weight: 600;
  color: ${props => props.theme.text};
`;

export const ProjectImage = styled.img`
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  opacity: 0.8;
  transition: 0.4s cubic-bezier(0.6, -0.05, 0.1, 0.99);
  object-fit: cover;
`;

export const ProjectDescription = styled.div`
  margin: 10px;
  padding-bottom: 10px;
  border-bottom: 4px solid;
  border-color: ${props => props.theme.text};
  color: ${props => props.theme.text};
`;

export const ProjectSection = styled.h2`
  padding: 10px 30px;
  width: 100%;
  box-sizing: border-box;
  color: ${props => props.theme.text};
`;

export const ResearchPage = styled.div`
  margin: 200px 0;
  width: 100%;
`;

export const ProjectPage = styled.div`
  margin: 200px 0;
  width: 100%;
`;

// Design and Code Project
export const DesignCodeProjectSection = styled(motion.div)`
  margin-bottom: 200px;
  position: relative;
  a {
    margin-bottom: 200px;
    position: relative;
    display: block;
  }
`;

export const ProjectContainer = styled(motion.div)`
  position: relative;
  width: 26vw;
  padding: 0 44px;

  ${props =>
    props.position === "up" &&
    css`
      margin-top: -150px;
    `}
  ${props =>
    props.position === "down" &&
    css`
      margin-top: 150px;
    `}
    
    a {
    margin-bottom: 50px;
    position: relative;
    display: block;
  }
`;

export const DesignCodeContent = styled(motion.div)`
  height: 300px;
  width: 100%;
  padding: 56px 124px;
  box-sizing: border-box;
  color: ${props => props.theme.text};
  h3 {
    font-size: 1.4rem;
  }
  .meta {
    display: flex;
    h4 {
      &:last-child {
        margin-left: 1rem;
      }
    }
  }
  .project-title {
    position: absolute;
    bottom: -128px;
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 60px;
    margin: 0;
    .arrow {
      width: 100px;
      height: 80px;
      display: block;
      position: relative;
      overflow: hidden;
      svg {
        position: absolute;
        top: 16px;
        left: -100px;
        width: 100px;
        path {
          fill: ${props => props.theme.text};
        }
      }
    }
  }
`;

export const FeaturedVideo = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  display: block;
  overflow: hidden;
`;

// PROJECT DETAILS PAGE
export const ProjectDetail = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  color: ${props => props.theme.background};
`;

export const ProjectHeader = styled.div`
  position: absolute;
  top: 50%;
  right: 5%;
  h2 {
    color: ${props => props.theme.red};
  }
`;

export const ProjectContent = styled.div`
  width: 30%;
  padding-left: 40px;
  color: ${props => props.theme.text};
  h2 {
    font-size: 3rem;
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  right: 28px;
  top: 50%;
  width: 32px;
  height: 32px;
  &:before,
  &:after {
    position: absolute;
    left: 15px;
    content: " ";
    height: 36px;
    width: 4px;
    background-color:  ${props => props.theme.text};
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

export const Showcase = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 30%;
  z-index: -1;
  height: 100%;
  width: 100%;
  .showcase {
    position: absolute;
    height: 100%;
    margin: 0;
    z-index: -1;
    video,
    img {
      height: 100%;
    }
  }
`;
