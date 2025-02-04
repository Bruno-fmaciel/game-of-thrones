"use client";
import { createContext, useState, ReactNode } from "react";
import { padrao, stark, lannister, tyrell, targaryen, baratheon, martell } from "../styles/theme";


type ThemeType = typeof padrao; 
type ThemeContextType = {
  theme: ThemeType;
  changeTheme: (house: ThemeKeys) => void;
};


export const ThemeContext = createContext<ThemeContextType>({
  theme: padrao,
  changeTheme: () => {},
});

export const themes = { padrao, stark, lannister, tyrell, targaryen, baratheon, martell };


type ThemeKeys = keyof typeof themes;

interface ThemeProviderWrapperProps {
  children: ReactNode; 
}

export const ThemeProviderWrapper = ({ children }: ThemeProviderWrapperProps) => {
  const [theme, setTheme] = useState<ThemeType>(padrao); 

  const changeTheme = (house: ThemeKeys) => {
    setTheme(themes[house]);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};