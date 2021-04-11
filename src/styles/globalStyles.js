import styled, { css } from 'styled-components'
import { motion } from "framer-motion"

export const Container = styled.div`
    flex-grow: 1;
    margin: 0 auto;
    padding: 0 32px;
    position: relative;
    width: auto;
    height: 100%;
    ${props => props.fluid && css`
        padding: 0;
        margin: 0;
        max-width: 100%;
    `}

`

export const Flex = styled(motion.div)`
    position: relative;
    display: flex;
    align-items: center;

    ${props => props.spaceBetween && css`
        justify-content: space-between;
    `}
    ${props => props.flexEnd && css`
        justify-content: flex-end;
    `}
    ${props => props.alignTop && css`
        align-items: flex-start;
    `}
    ${props => props.noHeight && css`
        height: 0;
    `}
    ${props => props.wraping && css`
        flex-wrap: wrap;
    `}
`

export const Cursor = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 32px;
    height: 32px;
    background: ${props => props.theme.red};
    border-radius: 100%;
    transform: translate(-50%, -50%);
    transition: all .1s ease-in-out;
    transition-property: width, height, border;
    will-change: width, height, transform, border;
    pointer-events: none;
    z-index: 999;
    &.hovered {
        background: transparent !important;
        width: 56px;
        height: 56px;
        border: 4px solid ${props => props.theme.red}
    }
    &.pointer {
        border: 4px solid ${props => props.theme.text};
    }
    &.nav-open {
        background: ${props => props.theme.text}
    }
    &.locked {
        background: transparent !important;
        width: 56px;
        height: 56px;
        border: 4px solid ${props => props.theme.red};
        top: ${props => props.theme.top} !important;
        left: ${props => props.theme.left} !important;
    }
`

export const PanelAnimation = styled(motion.div)`
    background-color: ${props => props.theme.text};
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 11;

    .shape-outer {
        position: relative;
        z-index: 11;
        top: 100%;
        pointer-events: none;
      }
      
      .shape {
        height: 100vh;
        width: 100%;
        display: block;
        transform-origin: 50% 0;
        fill: ${props => props.theme.text};
        will-change: transform;
      }
`