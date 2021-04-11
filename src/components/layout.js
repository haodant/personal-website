import React, { useState } from "react";

//styled components
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { normalize } from "styled-normalize";

// Components
import Header from "./header";
import Cursor from "./customCursor";
import Footer from './footer'

// Context
import { useCursorStateContext, useCursorDispatchContext } from '../context/cursorContext'
import { useThemeStateContext } from '../context/themeContext'

//Custom hook
import useWindowSize from "../hooks/useWindowSize";

const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    text-decoration: none;
    @media (min-width: 1000px) {
      cursor: none;
    }
  }

  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
  }

  body {
    background: ${props => props.theme.background};
    overscroll-behavior: none;
    overflow-x: hidden;
  }
`;

const Layout = ({ children }) => {
  const darkTheme = {
    background: "#151E27",
    text: "#cfbeb5",
    red: "#9b5555",
    filter: "brightness(0.85) contrast(0.9)"
  };

  const lightTheme = {
    background: "#f2f0e6",
    text: "#232623",
    red: "#9b5555",
    filter: "contrast(0.7)"
  };
  
  const size = useWindowSize();
  const { cursorStyles } = useCursorStateContext()
  const { currentTheme } = useThemeStateContext()
  const dispatchCursor = useCursorDispatchContext()


  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false;
    dispatchCursor({type: 'CURSOR_TYPE', cursorType: cursorType})
  };

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <ThemeProvider theme={currentTheme === 'dark'? darkTheme : lightTheme}>
      <GlobalStyle />
      {size.width > 1024 ? <Cursor toggleMenu={toggleMenu} /> : null}
      <Header
        onCursor={onCursor}
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
      />
      <main>{children}</main>
      <Footer onCursor={onCursor}></Footer>
    </ThemeProvider>
  );
};

export default Layout;
