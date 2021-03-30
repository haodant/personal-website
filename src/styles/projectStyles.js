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
  filter: ${props => props.theme.filter};
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

export const ProjectPage = styled(motion.div)`
  margin: 200px 0;
  width: 100%;
  @media (max-width: 590px) {
    margin: 150px 0;
  }
`;

// Project summary
export const ProjectContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  margin: 20px 40px;
  @media (max-width: 590px) {
    margin: 20px 0;
  }
  @media (min-width: 937px) {
    max-width: 38vw;
  }
  @media (min-width: 1390px) {
    max-width: 26vw;
  }

  ${props =>
    props.position === "up" &&
    css`
      margin-top: -130px;
    `}
  ${props =>
    props.position === "down" &&
    css`
      margin-top: 130px;
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
    filter: ${props => props.theme.filter};
  }
`;

export const DesignCodeContent = styled(motion.div)`
  height: 260px;
  width: 100%;
  padding: 10px 20px 10px 40px;
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

  @media (max-width: 590px) {
    padding: 10px;
    h3 {
      margin-top: 0px;
    }
    .project-title {
      bottom: -110px;
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 30px;
    }
  }
`;

// PROJECT DETAILS PAGE
export const ProjectDetail = styled(motion.div)`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  color: ${props => props.theme.background};

  @media (max-width: 1000px) {
    height: auto;
    align-items: flex-start;
    flex-direction: column;
    margin-top: 130px;
  }
`;

export const ProjectContent = styled(motion.div)`
  width: 40%;
  margin-left: 30px;
  padding: 26px;
  color: ${props => props.theme.text};
  .project-type {
    color: ${props => props.theme.red};
    font-weight: 400;
  }
  .project-title {
    font-size: 2.5rem;
    font-weight: 400;
    margin: 28px 0;
  }
  .project-description {
    font-size: 1.2rem;
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
  @media (max-width: 600px) {
    width: 90%;
    margin-left: 10px;
    .project-title {
      font-size: 1.6rem;
    }
    .project-description {
      font-size: 1rem;
    }
    span {
      font-size: 0.8rem;
      svg {
        width: 10px;
        height: 10px;
      }
    }
  }
  @media (max-width: 1000px) {
    width: 90%;
  }
  @media (max-width: 1200px) {
    .project-title {
      margin: 20px 0;
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
    transition: all 0.25s ease-out;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }

  &:hover {
    &:before,
    &:after {
      transform: rotate(90deg);
    }
  }
`;

export const Showcase = styled(motion.div)`
  z-index: -1;
  height: 100%;
  width: 100%;

  video,
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
    filter: ${props => props.theme.filter};
  }
`;
