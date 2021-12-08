import { useState, useEffect } from 'react';


const useResize = () => {

    const [state, setState] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
        device: 'web'
    });

    const setWindowHeight = () => {
        let vh = window.innerHeight * 0.01
        document.documentElement.style.setProperty('--vh', vh + 'px')
    }

    const setDevice = () => {

        let nowDevice = 'mobile'

        if (window.innerWidth <= 767) {
            nowDevice = 'mobile'
        } else if (window.innerWidth <= 1023) {
            nowDevice = 'tablet'
        } else {
            nowDevice = 'web'
        }

        setState({
            x: window.scrollX,
            y: window.scrollY,
            device: nowDevice
        });
    };

    useEffect(() => {

        if (window) {
            setDevice()
            setWindowHeight()

            window.addEventListener("resize", () => {
                setDevice()
                setWindowHeight()
            });
        }

        return () => {
            window.removeEventListener("resize", () => {
                setDevice()
                setWindowHeight()
            });
        };
    }, []);

    return state.device;
};


export default useResize;