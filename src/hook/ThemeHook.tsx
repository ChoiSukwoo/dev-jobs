import { useState, useEffect } from 'react';
import {ThemeValue} from '../types/componentsType'

const useTheme = () => {

    const [theme, setTheme] = useState("Dark" as ThemeValue) ;

    function changeTheme(){
        if(theme === "Dark"){
            setTheme("Light")
        }else{
            setTheme("Dark")
        }
    }
    useEffect(() => { }, []);

    return {theme,changeTheme};
}

export default useTheme