import React from 'react'
// Styled component
import { Container, Flex } from '../styles/globalStyles'
import { FooterNav, FooterContent } from '../styles/footerStyles'


const Footer = () =>{
    return (
        <FooterNav>
            <Container>
                <Flex spaceBetween>
                    <FooterContent>
                        haodantan@gmail.com
                    </FooterContent>
                    <FooterContent>
                        Haodan Tan @2021
                    </FooterContent>
                    <FooterContent>
                        Toronto, Canada
                    </FooterContent>
                </Flex>
            </Container>
        </FooterNav>
    )
}

export default Footer