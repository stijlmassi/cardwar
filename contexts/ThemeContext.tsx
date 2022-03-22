import { createContext, useContext } from "react"

export type Theme = {
    dark: boolean
    setDark:(b: boolean) => void
}

export const ThemeContext = createContext<Theme>({
    dark: false, // set a default value
    setDark: () => {},
})

export const useThemeContext = () => useContext(ThemeContext)