import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

// Styled components
import { Container, Flex } from '../styles/globalStyles'
import { Nav, NavHeader, CloseNav, NavList, NavVideos } from '../styles/navigationStyles'

const navRoutes = [
    {id: 0, title: 'research', path: '/research', video: 'featured-video.mp4'},
    {id: 1, title: 'code and design', path: '/code-design', video: 'easy.mp4'},
    {id: 3, title: 'CV', path: '/cv', video: 'it-takes-an-island.mp4'},
    {id: 4, title: 'About', path: '/about', video: '50-beaches.mp4'}
]

const Navigation = ({toggleMenu, setToggleMenu}) => {
    const [revealVideo, setRevealVideo] = useState({
        show: false,
        video: 'featured-video.mp4',
        key: "0"
    });

    return (
        <>
                {toggleMenu && (
                    <BrowserRouter>
                    <Nav 
                        initial={{x: '-100%'}} 
                        exit={{x: '-100%'}} 
                        animate={{ x: toggleMenu ? 0 : '-100%'}} 
                        transition={{duration: .8, ease: [0.6, 0.05, -0.01, 0.9]}}>
                    <Container>
                        <NavHeader>
                            <Flex spaceBetween noHeight>
                                <h2>Haodan Tan</h2>
                                <CloseNav 
                                    onClick={() => setToggleMenu(!toggleMenu)} 
                                >
                                    <button>
                                        <span></span>
                                        <span></span>
                                    </button>
                                </CloseNav>
                            </Flex>
                        </NavHeader>
                        <NavList>
                            <ul>
                                {navRoutes.map(route => (
                                    <motion.li 
                                        key={route.id}
                                        onHoverStart={() => {
                                            setRevealVideo({
                                                show: true,
                                                video: route.video,
                                                key: route.id
                                            })
                                        }} 
                                        onHoverEnd={() => {
                                            setRevealVideo({
                                                show: false,
                                                video: route.video,
                                                key: route.id
                                            })
                                        }} 
                                    >
                                        <NavLink to={route.path}>
                                            <motion.div 
                                                initial={{ x: -108 }} 
                                                whileHover={{ 
                                                    x: -40,
                                                    transition: {
                                                        duration: 0.4,
                                                        ease: [0.6, 0.05, -0.01, 0.9]
                                                    }
                                                }}
                                                className="link"
                                            >
                                                <span className="arrow">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 101 57"
                                                    >
                                                    <path
                                                        d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                                                        fill="#FFF"
                                                        fillRule="evenodd"
                                                    ></path>
                                                    </svg>
                                                </span>
                                                {route.title}
                                            </motion.div>
                                        </NavLink>
                                    </motion.li>
                                ))}
                            </ul>
                        </NavList>
                        <NavVideos>
                            <motion.div animate={{ width: revealVideo.show ? 0 : "100%"}} className="reveal"></motion.div>
                            <div className="video">
                                <AnimatePresence exitBeforeEnter>
                                    <motion.video
                                        key={revealVideo.key} 
                                        initial={{opacity: 0}}
                                        exit={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        transition={{
                                            durantion: 0.2,
                                            ease: 'easeInOut'
                                        }}
                                        src={`/video/${revealVideo.video}`}
                                        loop
                                        autoPlay
                                    ></motion.video>
                                </AnimatePresence>
                            </div>
                        </NavVideos>
                    </Container>
                </Nav>
                </BrowserRouter>
                )}
        </>
    )
}

export default Navigation