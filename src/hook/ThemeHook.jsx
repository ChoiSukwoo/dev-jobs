import { useState, useEffect } from 'react';

const useTheme = () => {

    const [theme, setTheme] = useState("Light");

    useEffect(() => { }, []);

    return {theme,setTheme};
}

export default useTheme