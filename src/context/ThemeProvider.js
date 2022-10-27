import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const themeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [darkmode, setDarkMode] = useState(false);

    return (
        <themeContext.Provider value={{ darkmode, setDarkMode }}>
            {children}
        </themeContext.Provider>
    );
};

export default ThemeProvider;