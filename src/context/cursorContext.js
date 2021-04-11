import React, { createContext, useReducer, useContext } from 'react'

// Define the context
const CursorStateContext = createContext()
const CursorDispatchContext = createContext()

// Reducer
const cursorReducer = (state, action) => {
    switch(action.type) {
        case 'CURSOR_TYPE': {
            return {
                ...state,
                cursorType: action.cursorType,
            }
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

export const CursorProvider = ({children}) => {
    const [state, dispatch] = useReducer(cursorReducer, {
        cursorType: false,
        cursorStyles: ['pointer', 'hovered', 'locked'],
    })

    return (
        <CursorDispatchContext.Provider value={dispatch}>
            <CursorStateContext.Provider value={state}>
                {children}
            </CursorStateContext.Provider>
        </CursorDispatchContext.Provider>
    )
}

// Custom hooks to use dispatch and state
export const useCursorStateContext = () => useContext(CursorStateContext)
export const useCursorDispatchContext = () => useContext(CursorDispatchContext)