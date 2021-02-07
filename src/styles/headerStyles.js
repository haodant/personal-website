import styled from "styled-components";
import { motion } from "framer-motion";

export const HeaderNav = styled(motion.div)`
  height: 0px;
  width: 100%;
  position: absolute;
  top: 72px;
  right: 0;
  left: 0;
  z-index: 99;
`;

export const Logo = styled.div`
  a {
    font-size: 1.8rem;
    font-weight: 600;
    color: ${props => props.theme.text};
  }
  span {
    height: 0.8rem;
    width: 0.8rem;
    background: ${props => props.theme.red};
    margin: 0 4px;
    border-radius: 100%;
    display: inline-block;
    position: relative;
  }
`;

export const Menu = styled.ul`
  display: flex;
  justify-content: flex-end;
  li {
    font-size: 1.2rem;
    font-weight: 600;
    list-style: none;
    padding: 16px;
    .link {
      color: ${props => props.theme.text};
      position: relative;
      display: flex;
      align-items: center;
    }
  }
`;
