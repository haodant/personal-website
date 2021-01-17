import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

//Styled Components
import { Container, Flex } from "../../styles/globalStyles";
import {
  ProjectContainer,
  DesignCodeContent,
  FeaturedVideo,
  ProjectImage
} from "../../styles/projectStyles";

// Context
import {
  useGlobalStateContext,
  useGlobalDispatchContext
} from "../../context/globalContext";

// Scroll Behavior
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const Project = ({ project }) => {
  //Play video on mouseover
  let videoRef = useRef(null);

  const getPosition = () => {
      if (project.id % 3 === 1) {
          return 'up';
      } else if (project.id % 3 === 2) {
          return 'down';
      }
  }

  const { cursorStyles } = useGlobalStateContext();
  const dispatch = useGlobalDispatchContext();
  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false;
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType });
  };
  const [hovered, setHovered] = useState(false);
  const animation = useAnimation();
  const [featuredRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-300px"
  });

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);

  return (
    <ProjectContainer
        key={project.id}
      ref={featuredRef}
      animate={animation}
      whileHover={{scale: 1.05}}
      transition={{type: "transform", duration: 0.8, ease: [0.4, 0, 0.2, 1]}}
      initial="hidden"
      position={getPosition()}
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }
        },
        hidden: {
          opacity: 0,
          y: 72
        }
      }}
    >
      <Container>
        <Link to="/">
          <DesignCodeContent
            onHoverStart={() => setHovered(!hovered)}
            onHoverEnd={() => setHovered(!hovered)}
            onMouseEnter={() => {
              onCursor("hovered");
              videoRef?.current.play();
            }}
            onMouseLeave={() => {
                onCursor();
                videoRef?.current.pause();
            }}
          >
            <Flex spaceBetween>
              <h3>{project.subtitle}</h3>
              <motion.div
                animate={{ opacity: hovered ? 1 : 0 }}
                transition={{ duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }}
                className="meta"
              >
                <h4>2019</h4>
              </motion.div>
            </Flex>
            <h2 className="project-title">
              {project.title}
              <span className="arrow">
                <motion.svg
                  animate={{ x: hovered ? 48 : 0 }}
                  transition={{ duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 101 57"
                >
                  <path
                    d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                    fill="#FFF"
                    fillRule="evenodd"
                  ></path>
                </motion.svg>
              </span>
            </h2>
          </DesignCodeContent>
          {project.video ? (
            <FeaturedVideo>
            <video
                ref={videoRef}
                autoPlay={hovered ? true : false}
                loop
                muted
                src="video/featured-video.mp4"
            />
            </FeaturedVideo>
          ) : (
            <ProjectImage
            src={`/img/${project.img}`}
            alt={project.title}
          ></ProjectImage>
          )}

        </Link>
      </Container>
    </ProjectContainer>
  );
};

export default Project;
