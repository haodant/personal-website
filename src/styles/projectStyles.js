import styled from "styled-components"
import { motion } from 'framer-motion'

export const Summary = styled.div`
    display: block;
    margin: 32px 0;
    padding: 0;
    &:hover {
        img {
            opacity: 0.4;
        }
    }
    height: 400px;
    width: 48%;
`

export const ProjectThumbnail = styled.div`
    display: flex;
    height: 60%;
    width: 100%;
    position: relative;
`

export const ProjectDetail = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 32px;
    box-sizing: border-box;
    z-index: 1;
    position: relative;
`

export const ProjectTitle = styled.h2`
    font-size: 2.4rem;
    line-height: 3.4rem;
    width: 95%;
    color: ${props => props.theme.text};
`

export const ProjectSubtitle = styled.span`
    font-size: 1.6rem;
    opacity: 0.8;
    font-weight: 600;
    color: ${props => props.theme.text};
`

export const ProjectImage = styled.img`
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    opacity: .8;
    transition: .4s cubic-bezier(0.6, -0.05, 0.1, 0.99);
    object-fit: cover;
`

export const ProjectDescription = styled.div`
    margin: 10px;
    padding-bottom: 10px;
    border-bottom: 4px black solid;
`

export const ProjectSection = styled.div`
    width: 100%;
    height: 40px;
    background-color: ${props => props.theme.red};

`

export const ResearchPage = styled.div`
    margin: 200px 0;
    width: 100%;
    background: ${props => props.theme.background};
`