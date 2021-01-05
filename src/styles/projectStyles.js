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
    height: 350px;
    width: 100%;
`

export const ProjectThumbnail = styled.div`
    display: flex;
    height: 80%;
    width: 100%;
    position: relative;
`

export const ProjectDetail = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    width: 100%;
    padding: 32px;
    box-sizing: border-box;
    z-index: 1;
    position: relative;
`

export const ProjectTitle = styled.h2`
    font-size: 2.4rem;
    line-height: 3.4rem;
    width: 85%;
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
    opacity: .65;
    transition: .4s cubic-bezier(0.6, -0.05, 0.1, 0.99);
    object-fit: cover;
`

export const ProjectDescription = styled.div`
    margin: 10px;
    padding-bottom: 10px;
    border-bottom: 4px black solid;
`

export const ProjectSection = styled.div`

`

export const ResearchPage = styled.div`
    margin: 200px 0;
    width: 100%;
    background: ${props => props.theme.background};
`