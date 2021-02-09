import styled, { css } from 'styled-components'

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
    padding: 10px 5px;
    transition: all 0.2s ease-in-out;

    @media (max-width: 600px) {
        font-size: 0.8rem;
        padding: 5px 5px;
    }
`