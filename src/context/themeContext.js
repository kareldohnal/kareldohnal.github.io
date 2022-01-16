import React, {useContext, useState} from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import light from "./themes/light"
import dark from "./themes/dark"
import {LanguageContext} from "./languageContext";

const themes = {
  light,
  dark,
}

function getTheme(theme) {
  return themes[theme]
}

export const CustomThemeContext = React.createContext(
  {
    currentTheme: 'light',
    setTheme: null,
  },
)

const CustomThemeProvider = ({children}) => {
  // Read current theme from localStorage or maybe from an api
  const currentTheme = localStorage.getItem('appTheme') || 'normal'

  // State to hold the selected theme name
  const [themeName, _setThemeName] = useState(currentTheme)

  // Retrieve the theme object by theme name
  const theme = getTheme(themeName)

  // Wrap _setThemeName to store new theme names in localStorage
  const setThemeName = (name) => {
    localStorage.setItem('appTheme', name)
    _setThemeName(name)
  }

  return (
    <CustomThemeContext.Provider value={{theme, themeName, setThemeName}}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  )
}

export const useCustomTheme = () => useContext(CustomThemeContext);
export default CustomThemeProvider
