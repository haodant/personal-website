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

export const ProjectImage = styled(motion.img)`
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

export const ProjectPage = styled.div`
  margin: 200px 0;
  width: 100%;
`;

// Project summary
export const ProjectContainer = styled(motion.div)`
  position: relative;
  width: 26vw;
  margin: 0 40px;

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

  video {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    top: 0;
    display: block;
    overflow: hidden;
    object-fit: cover;
  }
`;

export const DesignCodeContent = styled(motion.div)`
  height: 260px;
  width: 100%;
  padding: 10px 80px;
  box-sizing: border-box;
  color: ${props => props.theme.text};
  h3 {
    font-size: 1rem;
    font-weight: 600;
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
    bottom: -120px;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 44px;
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
        left: -60px;
        width: 60px;
        path {
          fill: ${props => props.theme.text};
        }
      }
    }
  }
`;

// PROJECT DETAILS PAGE
export const ProjectDetail = styled(motion.div)`
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

export const ProjectContent = styled(motion.div)`
  width: 30%;
  margin-left: 40px;
  padding: 22px;
  color: ${props => props.theme.text};
  .project-type {
    color: ${props => props.theme.red};
    font-weight: 400;
  }
  .project-title {
    font-size: 2.2rem;
    font-weight: 400;
  }
  .project-description {
    font-size: 1.4rem;
  }
  span {
    font-size: 1.2rem;
    display: inline-block;
    padding-right: 12px;
    a {
      text-decoration: none;
      color: ${props => props.theme.text};
    }
    svg {
      width: 16px;
      height: 16px;
      path {
        fill: ${props => props.theme.text};
      }
    }
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  right: 5%;
  top: 50%;
  width: 56px;
  height: 56px;
  background-color: ${props => props.theme.background};
  opacity: 0.6;
  border-radius: 100%;
  &:before,
  &:after {
    position: absolute;
    left: 26px;
    top: 11px;
    content: " ";
    height: 36px;
    width: 4px;
    background-color: ${props => props.theme.text};
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

export const Showcase = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: -1;
  height: 100%;
  width: 100%;

  video,
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`;
