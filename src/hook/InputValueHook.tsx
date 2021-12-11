import { useState, useEffect } from 'react';

export const useInputValue = () => {

    const [value, setValue] = useState("") ;

    useEffect(() => { }, []);

    return {value,setValue};
}



export const useInputCheck = (check:boolean = false) => {

    const [value, setValue] = useState(check) ;

    useEffect(() => { }, []);

    return {value,setValue};
}

