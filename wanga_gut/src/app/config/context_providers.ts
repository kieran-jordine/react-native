import {Dispatch, SetStateAction, createContext, useRef, useState} from 'react';
import {useColorScheme} from 'react-native';
import {DarkTheme, DefaultTheme} from '@react-navigation/native';
import {MD3LightTheme, MD3DarkTheme} from 'react-native-paper';

const NavDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: 'white',
  },
};

export function useThemeContextProvider() {
  const scheme = useRef(useColorScheme()).current;
  const [theme, setTheme] = useState<ThemeContextMode>(
    scheme === 'dark' ? 'dark' : 'light',
  );
  const navTheme = theme === 'dark' ? NavDarkTheme : DefaultTheme;
  const paperTheme = theme === 'dark' ? MD3DarkTheme : MD3LightTheme;

  return {
    theme,
    setTheme,
    navTheme,
    paperTheme,
  };
}

export const ThemeContext = createContext<ThemeContextObject>({
  theme: 'dark',
  setTheme: () => {},
});
export type ThemeContextMode = 'light' | 'dark';
export type ThemeContextObject = {
  theme: ThemeContextMode;
  setTheme: Dispatch<SetStateAction<ThemeContextMode>>;
};
