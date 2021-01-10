import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

//Styled Components
import { Container, Flex } from '../../styles/globalStyles'
import { DesignCodeProjectSection, DesignCodeContent, FeaturedVideo } from "../../styles/projectStyles";

// Context
import { useGlobalStateContext, useGlobalDispatchContext } from '../../context/globalContext'

// Scroll Behavior
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'

const navRoutes = [
  {id: 0, title: 'research', path: '/research', video: 'featured-video.mp4'},
  {id: 1, title: 'code and design', path: '/code-design', video: 'easy.mp4'},
  {id: 2, title: 'art', path: '/art', video: 'make-it-zero.mp4'},
  {id: 3, title: 'CV', path: '/cv', video: 'it-takes-an-island.mp4'},
  {id: 4, title: 'NOT HUMBLE', path: '/not-humble', video: '50-beaches.mp4'}
]

const DesignCodeProject = () => {
  const [revealVideo, setRevealVideo] = useState({
    show: false,
    video: 'featured-video.mp4',
    key: "0"
  });

  const { cursorStyles } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()
  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false 
    dispatch({type: 'CURSOR_TYPE', cursorType: cursorType})
  }
    const [hovered, setHovered] = useState(false)
    const animation = useAnimation();
    const [featuredRef, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-300px'
    })

    useEffect(() => {
        if (inView) {
            animation.start('visible')
        }
    }, [animation, inView])

    return (
        <DesignCodeProjectSection 
            ref={featuredRef}
            animate={animation}
            initial="hidden"
            variants={{
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {duration: .6, ease: [0.6, 0.05, -0.01, 0.9]}
                },
                hidden: {
                    opacity: 0,
                    y: 72
                }
            }}
        >
            <Container>
                <Link to='/'>
                    <DesignCodeContent 
                        // onHoverStart={() => setHovered(!hovered)}
                        // onHoverEnd={() => setHovered(!hovered)}
                        onHoverStart={() => {
                          setRevealVideo({
                              show: true,
                              video: 'featured-video.mp4',
                              key: 1
                          })
                      }} 
                      onHoverEnd={() => {
                          setRevealVideo({
                              show: false,
                              video: 'featured-video.mp4',
                              key: 1
                          })
                      }} 
                        onMouseEnter={() => onCursor('hovered')} 
                        onMouseLeave={onCursor}
                    >
                        <Flex spaceBetween>
                            <h3>Client Work</h3>
                            <motion.div 
                                animate={{ opacity: hovered ? 1 : 0 }}
                                transition={{ duration: .6, ease: [.6, .05, -.01, .9] }}
                                className="meta"
                            >
                                <h4>New York Guqin Salon</h4>
                                <h4>2019</h4>
                            </motion.div>
                        </Flex>
                        <h2 className="project-title">
                            New York Guqin Salon
                            <span className="arrow">
                            <motion.svg
                                animate={{ x: hovered ? 48 : 0 }}
                                transition={{ duration: .6, ease: [.6, .05, -.01, .9] }}
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
                    <FeaturedVideo>
                      <video loop autoPlay muted src='video/featured-video.mp4' />
                    </FeaturedVideo>
                </Link>
            </Container>
        </DesignCodeProjectSection>
    )
}

export default DesignCodeProject