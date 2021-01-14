import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

export const FooterNav = styled.div`
    position: relative;
    bottom: 50px;
    height: 0;
`

export const FooterContent= styled.div`
    color: ${props => props.theme.text};
    font-size: 1rem;
    font-weight: 400;
    line-height: .5rem;
    text-align: center;
    flex: 1;
    ${props => props.wider && css`
        flex: 2;
    `}
`