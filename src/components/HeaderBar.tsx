import styled from "styled-components";
import {ThemeType,DeviceType,SizeTheme} from "../types/componentsType"

import { ReactComponent as DesktopBg}from '../assets/desktop/bg-pattern-header.svg'
import { ReactComponent as TabletBg}from '../assets/tablet/bg-pattern-header.svg'
import { ReactComponent as MobileBg}from '../assets/mobile/bg-pattern-header.svg'
import { ReactComponent as Logo}from '../assets/desktop/logo.svg'
import { ReactComponent as Sun}from '../assets/desktop/icon-sun.svg'
import { ReactComponent as Moon}from '../assets/desktop/icon-moon.svg'


type Props = {
    Theme:ThemeType;
    Device:DeviceType;
    children: string | JSX.Element;
}

const HeaderCover = styled.div`
    position: relative;
    height:160px; width:100%; padding: 44px 165px; margin-bottom : 40px;
    @media ${SizeTheme.tablet}{
        padding: 32px 24px; 
    }
    @media ${SizeTheme.mobile}{
        height: 132px;
    }
    display:flex; flex-direction:column;  align-items: center;
`
const HeaderCoverBg = styled.div`
    width: 100%; overflow:hidden;
    background-color: #5964E0; border-radius: 0 0 0 100px;
    @media ${SizeTheme.mobile}{
        border-radius: 0;
    }
    position: absolute; left: 0; top:0;
`
const HeaderTitleCover = styled.div`
    display: flex; justify-content: space-between;
    max-width:1440px; width: 100%;
    z-index: 0;
`
const ThemeToggleCover = styled.div`
    display: flex; justify-content: space-between; align-items: center;
    width: 112px; height: 24px;
`
const ThemeToggleCircle = styled.div`
    width: 14px; height: 14px;
    background-color:#5964E0; border-radius: 7px;
`
const ThemeToggleSlider = styled.div`
    transition-duration: 0.5s;
    flex:${props => props.theme};
`
const ThemeToggle = styled.div`
    display: flex; 
    background-color:#FFF; border-radius: 12px;
    width: 48px; height: 24px; padding: 5px;
    cursor: pointer;

    &:hover ${ThemeToggleCircle}{
        background-color: #939BF4;
    }
`
const HeaderContent = styled.div`
    display: flex; justify-content: center;
    position: absolute; bottom: -40px;
    height: 80px; width:100%;
    padding: 0 165px;
    @media ${SizeTheme.tablet}{
        padding: 0 40px; 
    }
    @media ${SizeTheme.mobile}{
        padding: 0 24px; 
    }
`


export default function Header({Theme,Device,children}:Props){


    const SearchBarSlide = Theme.theme === "Dark" ? 1 : 0
    const Background = Device.device === "Web" ? DesktopBg : Device.device == "Tablet" ? TabletBg : MobileBg

    return(
        <HeaderCover>
            <HeaderCoverBg><Background/></HeaderCoverBg>
            <HeaderTitleCover>
                <Logo/>
                <ThemeToggleCover>
                    <Sun/>
                    <ThemeToggle onClick={()=>Theme.changeTheme()}><ThemeToggleSlider theme={SearchBarSlide}/><ThemeToggleCircle/></ThemeToggle>
                    <Moon/>
                </ThemeToggleCover>
            </HeaderTitleCover>
            <HeaderContent>
                {children}
            </HeaderContent>
        </HeaderCover>
    )
} 