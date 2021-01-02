import React, { useState } from "react";

//styled components
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { normalize } from "styled-normalize";

// Components
import Header from "./header";
import Cursor from "./customCursor";
import Navigation from './navigation'
import Footer from './footer'

// Context
import {
  useGlobalStateContext,
  useGlobalDispatchContext
} from "../context/globalContext";

const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    text-decoration: none;
    cursor: none;
  }

  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, 'Open Sans', 'Helvetica Neue';
    background: ${props => props.theme.background};
    overscroll-behavior: none;
    overflow-x: hidden;
  }
`;

const Layout = ({ children }) => {
  const [hamburgerPosition, setHamburgerPosition] = useState({
    x: 0,
    y: 0
  });

  const darkTheme = {
    background: "#000",
    text: "#cfbeb5",
    red: "#9b5555",
    left: `${hamburgerPosition.x}px`,
    top: `${hamburgerPosition.y}px`
  };

  const lightTheme = {
    background: "#fff",
    text: "#343833",
    red: "#9b5555",
    left: `${hamburgerPosition.x}px`,
    top: `${hamburgerPosition.y}px`
  };

  const { currentTheme, cursorStyles } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()

  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false;
    dispatch({type: 'CURSOR_TYPE', cursorType: cursorType})
  };

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <ThemeProvider theme={currentTheme === 'dark'? darkTheme : lightTheme}>
      <GlobalStyle />
      <Cursor toggleMenu={toggleMenu} />
      <Header
        onCursor={onCursor}
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        hamburgerPosition={hamburgerPosition}
        setHamburgerPosition={setHamburgerPosition}
      />
      <Navigation onCursor={onCursor} toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <main>{children}</main>
      <Footer onCursor={onCursor}></Footer>
    </ThemeProvider>
  );
};

export default Layout;
