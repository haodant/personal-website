import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

// styled components
import { Container, Flex } from "../styles/globalStyles";
import { HeaderNav, Logo, Menu } from "../styles/headerStyles";

// Context
import {
  useGlobalStateContext,
  useGlobalDispatchContext
} from "../context/globalContext";

const Header = ({
  onCursor,
}) => {
  const dispatch = useGlobalDispatchContext();
  const { currentTheme } = useGlobalStateContext();

  const toggleTheme = () => {
    if (currentTheme === "dark") {
      dispatch({ type: "TOGGLE_THEME", theme: "light" });
    } else {
      dispatch({ type: "TOGGLE_THEME", theme: "dark" });
    }
  };

  useEffect(() => {
    window.localStorage.setItem("theme", currentTheme);
  }, [currentTheme]);

  const navRoutes = [
    { id: "work", title: "work", path: "/work" },
    // { id: "about", title: "about", path: "/about" }
  ];

  return (
    <HeaderNav
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -72, opacity: 0 }}
      transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
    >
      <Container>
        <Flex spaceBetween noHeight>
          <Logo
            onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={onCursor}
          >
            <NavLink to="/" key='home'>Ha</NavLink>
            <span
              onClick={toggleTheme}
              onMouseEnter={() => onCursor("pointer")}
              onMouseLeave={onCursor}
            ></span>
            <NavLink to="/" key='home2'>dan Tan</NavLink>
          </Logo>

          <Menu>
              {navRoutes.map(route => (
                <motion.li
                  key={`li-${route.id}`}
                  onMouseEnter={() => onCursor("pointer")}
                  onMouseLeave={onCursor}
                >
                  <NavLink to={route.path} key={route.id} activeClassName="active">
                    <motion.div className="link">{route.title}</motion.div>
                  </NavLink>
                </motion.li>
              ))}
          </Menu>
        </Flex>
      </Container>
    </HeaderNav>
  );
};

export default Header;
