import React from "react";
// Styled component
import { Container, Flex } from "../styles/globalStyles";
import { FooterNav, FooterContent } from "../styles/footerStyles";

const Footer = () => {
  return (
    <FooterNav>
      <Container>
        <Flex spaceBetween wraping>
          <FooterContent>
            ashleytanhd221@gmail.com, 
            <a href="https://www.linkedin.com/in/haodantan/"> LinkedIn</a>
          </FooterContent>
          <FooterContent>design & coded by me</FooterContent>
          <FooterContent>Toronto, Canada</FooterContent>
        </Flex>
      </Container>
    </FooterNav>
  );
};

export default Footer;
