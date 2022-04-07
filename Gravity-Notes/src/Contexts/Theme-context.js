import { createContext, useContext, useState } from "react";

const themeContext = createContext();

const ThemeProvider = ({children})=>{
    const [darkTheme, setDarkTheme] = useState(false);
 return(
     <themeContext.Provider value={{darkTheme, setDarkTheme}}>
         {children}
     </themeContext.Provider>
 );
}

const useTheme = ()=> useContext(themeContext);
export {useTheme, ThemeProvider}