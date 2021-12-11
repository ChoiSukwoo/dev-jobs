import { useState, useEffect } from 'react';
import {DeviceValue} from '../types/componentsType'

const useResize = () => {

    const [state, setState] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
        device: "Web" as DeviceValue
    });

    const setWindowHeight = () => {
        let vh = window.innerHeight * 0.01
        document.documentElement.style.setProperty('--vh', vh + 'px')
    }

    const setDevice = () => {

        let nowDevice = "Web" as DeviceValue

        if (window.innerWidth <= 767) {
            nowDevice = "Mobile"
        } else if (window.innerWidth <= 1023) {
            nowDevice =  "Tablet"
        } else {
            nowDevice =  "Web"
        }

        setState({
            width: window.scrollX,
            height: window.scrollY,
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

    return { device:state.device};
};


export default useResize;