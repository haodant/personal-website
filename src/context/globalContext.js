import React, { createContext, useReducer, useContext } from 'react'

// Define the context
const GlobalStateContext = createContext()
const GlobalDispatchContext = createContext()

// Reducer
const globalReducer = (state, action) => {
    switch(action.type) {
        case 'TOGGLE_THEME': {
            return {
                ...state, 
                currentTheme: action.theme
            }
        }
        case 'CURSOR_TYPE': {
            return {
                ...state,
                cursorType: action.cursorType,
            }
        }
        case 'POSITION': {
            return {
                ...state,
                imgPosition: action.position,
            }
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(globalReducer, {
        currentTheme: window.localStorage.getItem('theme') === null ? 'dark' : window.localStorage.getItem('theme'),
        cursorType: false,
        cursorStyles: ['pointer', 'hovered', 'locked'],
        imgPosition: [400, 400]
    })

    return (
        <GlobalDispatchContext.Provider value={dispatch}>
            <GlobalStateContext.Provider value={state}>
                {children}
            </GlobalStateContext.Provider>
        </GlobalDispatchContext.Provider>
    )
}

// Custom hooks to use dispatch and state
export const useGlobalStateContext = () => useContext(GlobalStateContext)
export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext)