import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

//Styled Components
import { Flex } from "../../styles/globalStyles";
import {
  ProjectContainer,
  DesignCodeContent,
  ProjectImage
} from "../../styles/projectStyles";
import { transition } from '../../styles/animation';

//Custom hook
import useWindowSize from "../../hooks/useWindowSize";

// Scroll Behavior
import { useInView } from "react-intersection-observer";

const transition2 = { duration: 0.6, ease: [0.43, 0, 0.2, 1] };

const Project = ({ project }) => {
  const size = useWindowSize();

  //Play video on mouseover
  let videoRef = useRef(null);

  const getPosition = () => {
    if (size.width >= 1390) {
      if (project.id % 3 === 1) {
        return "up";
      } else if (project.id % 3 === 2) {
        return "down";
      }
    } else if (size.width >= 937) {
      if (project.id % 2 === 1) {
        return "up";
      } else {
        return 'down';
      }
    }
  };

  const [hovered, setHovered] = useState(false);
  const animation = useAnimation();
  const [featuredRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-160px"
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
      whileHover={{ scale: 1.05 }}
      transition={{ type: "transform", ...transition2 }}
      animate={animation}
      initial="hidden"
      position={getPosition()}
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: transition }
        },
        hidden: {
          opacity: 0,
          y: 72
        }
      }}
      exit={{
        y: 800,
        opacity: 0,
        transition: { duration: 1, ease: transition }
      }}
    >
      <Link to={"/work/" + project.id} key={project.id}>
        <DesignCodeContent
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: transition }}
          onHoverStart={() => setHovered(!hovered)}
          onHoverEnd={() => setHovered(!hovered)}
          onMouseEnter={() => {
            if (videoRef.current) videoRef.current.play();
          }}
          onMouseLeave={() => {
            if (videoRef.current) videoRef.current.pause();
          }}
        >
          <Flex spaceBetween>
            <h3>{project.type}</h3>
            <motion.div
              animate={{ opacity: hovered ? 1 : 0 }}
              transition={{ duration: 0.6, ease: transition }}
              className="meta"
            >
              <h4>{project.stack}</h4>
            </motion.div>
          </Flex>
          <h2 className="project-title">
            {project.title}
            <span className="arrow">
              <motion.svg
                animate={{ x: hovered ? 48 : 0 }}
                transition={transition2}
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
        {project.video && size.width > 1024 ? (
            <video
              ref={videoRef}
              autoPlay={hovered ? true : false}
              loop
              muted
              src={project.video}
            />
        ) : (
          <ProjectImage
            src={project.smallImg ? `/img/${project.smallImg}` : `/img/${project.img}`}
            alt={project.title}
            loading="lazy"
          ></ProjectImage>
        )}
      </Link>
    </ProjectContainer>
  );
};

export default Project;
