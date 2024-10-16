import { createContext, useContext, useState } from "react";

const Themecon = createContext();
export const ThemeProvider=({children})=>{
    const [dark , setdark]=useState(false)

    return( <Themecon.Provider value={{dark,setdark}}>
        {children}
        </Themecon.Provider>
    )

    }
export const UseethemeContext=()=>{
    return (useContext( Themecon) )
}