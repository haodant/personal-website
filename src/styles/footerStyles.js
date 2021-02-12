import styled from 'styled-components'
import { motion } from 'framer-motion'

export const FooterNav = styled(motion.div)`
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
    padding: 10px 5px;
    transition: all 2s cubic-bezier(0.6, -0.05, 0.1, 0.99);;

    @media (max-width: 600px) {
        font-size: 0.8rem;
        padding: 5px 5px;
    }
`