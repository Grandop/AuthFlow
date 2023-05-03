import React, { createContext, useEffect, useState } from "react";
import { ThemeProvider as ThemeProviderStyled } from "styled-components/native";
import { darkTheme } from "./darkTheme";
import { lightTheme } from "./lightTheme";
import AsyncStorage from "@react-native-async-storage/async-storage";

export enum TypeTheme {
  light = 'light',
  dark = 'dark'
}

const themes = {
  dark: darkTheme,
  light: lightTheme,
}

export const ThemeContext = createContext({
  theme: TypeTheme.light,
  toggleTheme: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const ThemeContextProvider = ({children}: Props) => {
  const [theme, setTheme] = useState(TypeTheme.light);

  useEffect(() => {
    loadTheme()
  }, [])

  const loadTheme = async () => {
    const savedTheme = await AsyncStorage.getItem('@theme')
    if(savedTheme) {
      setTheme(savedTheme);
    }
  }

  const toggleTheme = () => {
    let selectTheme;
    if(theme === TypeTheme.light) {
      selectTheme = TypeTheme.dark
    } else {
      selectTheme = TypeTheme.light
    }
    setTheme(selectTheme);
    AsyncStorage.setItem('@theme', selectTheme)
  }

  return(
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <ThemeProviderStyled theme={themes[theme]}>
        {children}
      </ThemeProviderStyled>
    </ThemeContext.Provider>
  );
};

