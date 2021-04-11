import React, { useState, useEffect } from 'react'

import { Cursor } from '../styles/globalStyles'

// Context
import { useCursorStateContext } from '../context/cursorContext'

const CustomCursor = ({toggleMenu}) => {
    const { cursorType } = useCursorStateContext();
    const [mousePosition, setMousePosition] = useState({
        x: 100,
        y: 100
    })

    const onMouseMove = event => {
        const { pageX: x, pageY: y } = event;
        setMousePosition({x, y})
    }

    useEffect(() => {
        document.addEventListener('mousemove', onMouseMove);
        return () => {
            document.removeEventListener('mousemove', onMouseMove)
        }
    }, [])
    return (
        <Cursor 
            className={`${!!cursorType? "hovered": ""} ${cursorType} ${toggleMenu ? "nav-open" : ""}`}
            style={{left: `${mousePosition.x}px`, top: `${mousePosition.y - window.scrollY}px`}}
        />
    )
}

export default CustomCursor;