import { useState, useEffect } from 'react';

const useTheme = () => {

    const [theme, setTheme] = useState("Dark");

    useEffect(() => { }, []);

    return {theme,setTheme};
}

export default useTheme