import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Banner = styled(motion.div)`
    margin: 0;
    padding: 0;
    background: ${props => props.theme.background};
    height: 100vh;
    width: 100%;
    position: relative;
`;

export const Quote = styled(motion.div)`
    position: absolute;
    width: 60%;
    bottom: 40vh;
    left: 10vw;
    color: ${props => props.theme.text};
    z-index: 11;
    svg {
        fill: ${props => props.theme.text};
    }
`

export const Headline = styled(motion.h2)`
    display: block;
    font-size: 2rem;
    font-weight: 900;
`

export const Quoteline = styled(motion.p)`
    display: block;
    font-size: 1.5rem;
    font-weight: 300;
    line-height: 1;
    a {
        color: inherit;
        font-style: italic;
        text-decoration: ${props => props.theme.red} wavy underline;
    }
`
// Content Section

export const HomeContentSection = styled(motion.div)`
    margin-bottom: 200px;

`

export const Content = styled.h2`
    width: 53%;
    font-size: 2.3rem;
    font-weight: 400;
    margin-left: 124px;
    color: ${props => props.theme.text};
`

//Featured Section
export const HomeFeaturedSection = styled(motion.div)`
    margin-bottom: 200px;
    position: relative;
    a {
        margin-bottom: 200px;
        position: relative;
        display: block;
    }
`

export const FeatureContent = styled(motion.div)`
    height: 480px;
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
    .featured-title {
        position: absolute;
        bottom: -128px;
        font-size: 7rem;
        font-weight: 900;
        line-height: 90px;
        margin: 0;
        .arrow {
            width: 120px;
            height: 80px;
            display: block;
            position: relative;
            overflow: hidden;
            svg {
                position: absolute;
                top: 16px;
                left: -48px;
                width: 108px;
                path {
                    fill: ${props => props.theme.text};
                }
            }
        }
    }
`

export const FeaturedProjects = styled.div`
    margin-top: 200px;
    button {
        background: ${props => props.theme.red};
        color: #fff;
        position: relative;
        padding: 20px;
        display: block;
        text-align: left;
        font-size: 1.4rem;
        line-height: 1;
        font-weight: 600;
        border: none;
        span {
            margin-right: 100px;
            display: block;
        }
        &:before, &:after {
            content: '';
            position: absolute;
            top: 50%;
            right: 20px;
            width: 35px;
            height: 7px;
            display: block;
            background: #fff;
            transform: translateY(-50%);
        }

        &:before {
            margin-top: -8px;
        }
        &:after {
            margin-top: 8px;
        }
    }

`
export const FeaturedVideo = styled.div`
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 480px;
    top: 0;
    display: block;
    overflow: hidden;
`

// About
export const HomeAboutSection = styled(motion.div)``

export const About = styled.div`
    width: 100%;
    h2 {
        width: 60%;
        font-size: 2.3rem;
        font-weight: 400;
        margin-left: 124px;
        color: ${props => props.theme.text};
    }
    p {
        max-width: 440px;
        font-size: 1rem;
        line-height: 1.6rem;
        margin-left: 124px;
        color: ${props => props.theme.text};
    }
`
export const Services = styled.div``

// Accordion
export const AccordionHeader = styled(motion.div)`
    width: 100%;
    color: ${props => props.theme.red};
    height: 32px;
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 1.15rem;
    margin: 8px 0;
`

export const AccordionIcon = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    margin-right: 8px;
    span {
        width: 16px;
        height: 4px;
        background: ${props => props.theme.red};
        transition: .1 ease-in-out;
    }
`

export const AccordionContent = styled(motion.div)`
    overflow: hidden;
    padding-left: 40px;
    span {
        width: 100%;
        margin: 8px 0;
        font-size: .875rem;
        color: ${props => props.theme.red};
        display: block;
        font-weight: 300;
    }
`
