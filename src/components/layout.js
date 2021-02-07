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

//Custom hook
import useWindowSize from "../hooks/useWindowSize";

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
    background: ${props => props.theme.background};
    overscroll-behavior: none;
    overflow-x: hidden;
  }
`;

const Layout = ({ children }) => {
  const darkTheme = {
    background: "#343833",
    text: "#cfbeb5",
    red: "#9b5555",
  };

  const lightTheme = {
    background: "#f2f0e6",
    text: "#232623",
    red: "#9b5555",
  };
  
  const size = useWindowSize();
  const { currentTheme, cursorStyles } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()

  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false;
    dispatch({type: 'CURSOR_TYPE', cursorType: cursorType})
  };

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <ThemeProvider theme={currentTheme === 'light'? lightTheme : darkTheme}>
      <GlobalStyle />
      {size.width > 1024 ? <Cursor toggleMenu={toggleMenu} /> : null}
      <Header
        onCursor={onCursor}
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
      />
      <Navigation onCursor={onCursor} toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <main>{children}</main>
      <Footer onCursor={onCursor}></Footer>
    </ThemeProvider>
  );
};

export default Layout;
