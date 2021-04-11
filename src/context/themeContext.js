import React, { createContext, useReducer, useContext } from 'react'

// Define the context
const ThemeStateContext = createContext()
const ThemeDispatchContext = createContext()

// Reducer
const themeReducer = (state, action) => {
    switch(action.type) {
        case 'TOGGLE_THEME': {
            return {
                ...state, 
                currentTheme: action.theme
            }
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

export const ThemeProvider = ({children}) => {
    const [state, dispatch] = useReducer(themeReducer, {
        currentTheme: window.localStorage.getItem('theme') === null ? 'dark' : window.localStorage.getItem('theme'),
    })

    return (
        <ThemeDispatchContext.Provider value={dispatch}>
            <ThemeStateContext.Provider value={state}>
                {children}
            </ThemeStateContext.Provider>
        </ThemeDispatchContext.Provider>
    )
}

// Custom hooks to use dispatch and state
export const useThemeStateContext = () => useContext(ThemeStateContext)
export const useThemeDispatchContext = () => useContext(ThemeDispatchContext)