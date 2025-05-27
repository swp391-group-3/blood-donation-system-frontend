import { createContext } from 'react';

export const ThemeContext = createContext<{
    isDarkTheme: boolean;
    toggleTheme: () => void;
}>({
    isDarkTheme: false,
    toggleTheme: () => {},
});
