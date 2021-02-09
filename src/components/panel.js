import React from "react"

import { transition } from '../styles/animation'

// styled component
import { PanelAnimation } from '../styles/globalStyles'

const Panel = () => {
    return (
        <PanelAnimation
            initial={{ height: 0 }}
            animate={{
                height: [0, window.innerHeight, 0],
                bottom: [null, 0, 0]
            }}
            exit={{ 
                height: [0, window.innerHeight, 0],
                top: [null, 0, 0],
            }}
            transition={{ ...transition, duration: 2, times: [0, 0.5, 1] }}
        >
            
        </PanelAnimation>
    )
}

export default Panel