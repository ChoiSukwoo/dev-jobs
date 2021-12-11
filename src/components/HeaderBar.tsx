import { useRef ,RefObject} from "react";
import styled from "styled-components";
import {ThemeType,SizeTheme} from "../types/componentsType"
import {DeviceType,DeviceValue} from "../types/componentsType"

import Btn from '../components/Button'
import { ReactComponent as DesktopBg}from '../assets/desktop/bg-pattern-header.svg'
import { ReactComponent as TabletBg}from '../assets/tablet/bg-pattern-header.svg'
import { ReactComponent as MobileBg}from '../assets/mobile/bg-pattern-header.svg'
import { ReactComponent as Logo}from '../assets/desktop/logo.svg'
import { ReactComponent as Sun}from '../assets/desktop/icon-sun.svg'
import { ReactComponent as Moon}from '../assets/desktop/icon-moon.svg'
import { ReactComponent as Search}from '../assets/desktop/icon-search.svg'
import { ReactComponent as Location}from '../assets/desktop/icon-location.svg'
import { ReactComponent as Check}from '../assets/desktop/icon-check.svg'
import { ReactComponent as Filter}from '../assets/mobile/icon-filter.svg'

type Props = {
    Theme:ThemeType;
    Device:DeviceType;
}
type HeaderTheme = {
    backgroundColor:string,
    color:string,
    hoverColor:string,
    filterColor:string
}
const LightThema:HeaderTheme = {
    backgroundColor: "#FFFFFF",
    color: "#19202D7B",
    hoverColor: "#19202D",
    filterColor:"#6E8098"
}
const DarkThema:HeaderTheme = {
    backgroundColor: "#19202D",
    color: "#FFFFFF7B",
    hoverColor : "#FFFFFF",
    filterColor:"#FFFFFF"
}
const HeaderCover = styled.div`
    position: relative;
    height:160px; width:100%; padding: 44px 165px; margin-bottom : 40px;
    @media ${SizeTheme.tablet}{
        padding: 32px 24px; 
    }
    display:flex; flex-direction:column;  align-items: center;
`
const HeaderCoverBg = styled.div`
    width: 100%;
    background-color: #5964E0; border-radius: 0 0 0 100px;
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
const SearchBarCover = styled.div`
    display: flex; justify-content: center;
    position: absolute; bottom: -40px;
    height: 80px; width:100%;
    padding: 0 165px;
    @media ${SizeTheme.tablet}{
        padding: 0 40px; 
    }
`
const SearchBar = styled.div`
    display: flex;
    width:100%;  max-width: 1440px;
    background-color: ${props=>props.theme.backgroundColor}; border-radius: 6px;
`
const SeachContentCover = styled.div`
    flex: 1; display: flex; column-gap: 16px; align-items: center;
    padding: 28px 32px;
    @media ${SizeTheme.tablet}{
        padding: 16px; 
    }
    cursor: pointer;
    color: ${props=>props.theme.color};
    &:hover{
        color: ${props=>props.theme.hoverColor};
    }
`
const SeachContent = styled.input`
    flex: 1; margin-top: 3px; width: 80px;
    color: inherit; font-size: 16px;
`
const SeachLocationCover = styled.div`
    display: flex; column-gap: 16px;
    width: 302px; padding: 28px 23px;
    @media ${SizeTheme.tablet}{
        width: 215px; 
    }
    border-left: 1px solid #97979720;
    border-right: 1px solid #97979720;
    cursor: pointer;
    color: ${props=>props.theme.color};
    &:hover{
        color: ${props=>props.theme.hoverColor};
    }
`
const SeachLocation = styled.input`
    flex: 1; margin-top: 3px; width: 80px;
    color: inherit; font-size: 16px;
`
const SeachBtnCover = styled.div`
    display: flex; column-gap: 26px; align-items: center;
    width: 345px; padding: 16px 16px 16px 32px;
    @media ${SizeTheme.tablet}{
        width: 252px; 
    }
    cursor: pointer;
    color: ${props=>props.theme.color};
    &:hover{
        color: ${props=>props.theme.hoverColor};
    }
`
const SeachCheckCover = styled.div`
    display: flex; column-gap: 16px;
    height: 24px;
    align-items: center;
    color: ${props=>props.theme.hoverColor};
`
const CheckBox = styled.div`
    width: 24px; height: 24px; border-radius: 3px;
    background-color: #9797970A;
`
const CheckContent = styled.div`
    margin-top: 3px;
`



function clickFocus(input:RefObject<HTMLInputElement>){
    if (input.current) {
        input.current.focus()
    }
}


function Web({Theme,Device}:Props){

    const searchInput = useRef<HTMLInputElement>(null);
    const locationInput = useRef<HTMLInputElement>(null);
    const checkInput = useRef<HTMLInputElement>(null);

    const SearchBarTheme = Theme.theme === "Dark" ? DarkThema : LightThema
    const SearchBarSlide = Theme.theme === "Dark" ? 1 : 0
    const Background = Device.device === "Web" ? DesktopBg : TabletBg
    const FillterText = Device.device === "Web" ? "FullTimeOnly" : "FullTime"

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
            <SearchBarCover>
                <SearchBar theme={SearchBarTheme}> 
                    <SeachContentCover theme={SearchBarTheme} onClick={()=>clickFocus(searchInput)}>
                        <Search/>
                        <SeachContent type="text" placeholder="Filter by title, companies, expertise…" ref={searchInput} />
                    </SeachContentCover>
                    <SeachLocationCover theme={SearchBarTheme} onClick={()=>{clickFocus(locationInput)}}>
                        <Location/>
                        <SeachLocation type="text" placeholder="Filter by location…" ref={locationInput}/>
                    </SeachLocationCover>
                    <SeachBtnCover>
                        <SeachCheckCover theme={SearchBarTheme}>
                            <CheckBox></CheckBox>
                            <CheckContent>{FillterText}</CheckContent>
                        </SeachCheckCover>
                        <Btn width="123px">search</Btn>
                    </SeachBtnCover>
                </SearchBar>
            </SearchBarCover>
        </HeaderCover>
    )
} 

function Mobile({Theme}:Props){
    
    const searchInput = useRef<HTMLInputElement>(null);

    const SearchBarTheme = Theme.theme === "Dark" ? DarkThema : LightThema
    const SearchBarSlide = Theme.theme === "Dark" ? 1 : 0
    
    return(
        <HeaderCover>
            <HeaderCoverBg><MobileBg/></HeaderCoverBg>
            <HeaderTitleCover>
                <Logo/>
                <ThemeToggleCover>
                    <Sun/>
                    <ThemeToggle onClick={()=>Theme.changeTheme()}><ThemeToggleSlider theme={SearchBarSlide}/><ThemeToggleCircle/></ThemeToggle>
                    <Moon/>
                </ThemeToggleCover>
            </HeaderTitleCover>

            <SearchBarCover>
                <SearchBar theme={SearchBarTheme}> 
                    <SeachContentCover theme={SearchBarTheme} onClick={()=>clickFocus(searchInput)}>
                        <SeachContent type="text" placeholder="Filter by title, companies, expertise…" ref={searchInput}/>
                        <Filter fill={SearchBarTheme.filterColor}/>
                        <Btn width="48px"><Search fill="#FFF"/></Btn>
                    </SeachContentCover>
                </SearchBar>
            </SearchBarCover>
        </HeaderCover>
    )
}



const Header = {Mobile,Web}


export default Header