import React, {createContext} from 'react';
import { useState } from 'react';

export const ThemeContext = createContext();

export default function ThemeContextProvider({children}) {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleDarkMode = () => setIsDarkMode(prev => !prev);

    return <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
        {children}
    </ThemeContext.Provider>
}