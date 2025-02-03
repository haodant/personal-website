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
  &:hover {
    a {
      color: ${props => props.theme.hover};
    }
  }
  a {
    font-size: 1.6rem;
    font-weight: 600;
    color: ${props => props.theme.text};
  }
  span {
    height: 1rem;
    width: 1rem;
    background: ${props => props.theme.red};
    margin: 0 2px;
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
      &:hover {
        color: ${props => props.theme.hover};
      }
    }
    .active {
      .link {
        color: ${props => props.theme.red};
      }
    }
  }
`;

// theme toggle animation reference: https://web.dev/patterns/theming/theme-switch#css
export const Button = styled(motion.button)`
  background: transparent;
  border: none;
  align-items: center;
  padding: 16px;
  .sun-and-moon > :is(.moon, .sun, .sun-beams) {
    transform-origin: center;
  }

  .sun-and-moon > :is(.moon, .sun) {
    fill: ${props => props.theme.text};
  }

  &:is(:hover, :focus-visible) > .sun-and-moon > :is(.moon, .sun) {
    fill: ${props => props.theme.hover};
  }

  .sun-and-moon > .sun-beams {
    stroke: ${props => props.theme.text};
    stroke-width: 2px;
  }

  &:is(:hover, :focus-visible) .sun-and-moon > .sun-beams {
    stroke: ${props => props.theme.hover};
  }

  .sun-and-moon > .sun {
    transform: ${props => props.theme.themeToggleTransformSun};
  }

  .sun-and-moon > .sun-beams {
    opacity: ${props => props.theme.themeToggleOpacitySunBeams};
  }

  .sun-and-moon > .moon > circle {
    transform: ${props => props.theme.themeToggleTransformMoon};
  }

  @supports (cx: 1) {
    .sun-and-moon > .moon > circle {
      cx: ${props => props.theme === 'dark' ? "17" : ""};
      transform: ${props => props.theme === 'dark' ? "translateX(0)" : ""};
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    .sun-and-moon > .sun {
      transition: transform .5s ease; //var(--ease-elastic-3);
    }

    .sun-and-moon > .sun-beams {
      transform: ${props => props.theme.themeToggleRotate};
      transition: transform ${props => props.theme.themeToggleTransitionDuration} ease, opacity ${props => props.theme.themeToggleTransitionDuration} ease; //var(--ease-elastic-4) var(--ease-3)
    }

    .sun-and-moon .moon > circle {
      transition: transform .25s ease; //var(--ease-out-5);
    }

    @supports (cx: 1) {
      .sun-and-moon .moon > circle {
        transition: cx .25s ease; //var(--ease-out-5);
      }
    }

    [data-theme="dark"] .sun-and-moon > .sun {
      transition-timing-function: ease; //var(--ease-3);
      transition-duration: .25s;
      transform: scale(1.75);
    }

    [data-theme="dark"] .sun-and-moon > .moon > circle {
      transition-duration: .5s;
      transition-delay: .25s;
    }
  }
`
