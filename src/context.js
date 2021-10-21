import { createContext, useReducer } from 'react'

export const ThemeContext = createContext()

const INITIAL_STATE = { darkMode: false };

const ACTIONS = {
    TOGGLE: "TOGGLE"
}
const themeReducer = (state, action ) => {
    switch (action.type){
        case ACTIONS.TOGGLE:
            return { darkMode: !state.darkMode };
        default:
            return state;
    }
}
export const ThemeProvider = ({children}) => {
    const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE)
    return (
        <ThemeContext.Provider value={{state, dispatch}}>
            {children}
        </ThemeContext.Provider>
    )
}