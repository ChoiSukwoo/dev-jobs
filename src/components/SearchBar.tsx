import { useRef,RefObject } from "react";
import styled from "styled-components";
import {ThemeType,DeviceType,SizeTheme} from "../types/componentsType"


import Btn from '../components/Button'
import { ReactComponent as Search}from '../assets/desktop/icon-search.svg'
import { ReactComponent as Location}from '../assets/desktop/icon-location.svg'
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

const SearchBarCover = styled.div`
    display: flex;
    width:100%;  max-width: 1440px;
    background-color: ${props => props.theme.backgroundColor}; border-radius: 6px;
`
const SeachContentCover = styled.div`
    flex: 1; display: flex; column-gap: 16px; align-items: center;
    padding: 28px 32px;
    @media ${SizeTheme.tablet}{
        padding: 16px; 
    }
    cursor: pointer;
    color: ${props => props.theme.color};
    &:hover{
        color: ${props => props.theme.hoverColor};
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
    color: ${props => props.theme.color};
    &:hover{
        color: ${props => props.theme.hoverColor};
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
    color: ${props => props.theme.color};
    &:hover{
        color: ${props => props.theme.hoverColor};
    }
`
const SeachCheckCover = styled.div`
    display: flex; column-gap: 16px;
    height: 24px;
    align-items: center;
    color: ${props => props.theme.hoverColor};
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


function Web({Theme,Device}:Props) {

    const searchInput = useRef<HTMLInputElement>(null);
    const locationInput = useRef<HTMLInputElement>(null);
    const checkInput = useRef<HTMLInputElement>(null);

    const SearchBarTheme = Theme.theme === "Dark" ? DarkThema : LightThema
    const FillterText = Device.device === "Web" ? "FullTimeOnly" : "FullTime"


    return (
        <SearchBarCover theme={SearchBarTheme}>
            <SeachContentCover theme={SearchBarTheme} onClick={() => clickFocus(searchInput)}>
                <Search />
                <SeachContent type="text" placeholder="Filter by title, companies, expertise…" ref={searchInput} />
            </SeachContentCover>
            <SeachLocationCover theme={SearchBarTheme} onClick={() => { clickFocus(locationInput) }}>
                <Location />
                <SeachLocation type="text" placeholder="Filter by location…" ref={locationInput} />
            </SeachLocationCover>
            <SeachBtnCover>
                <SeachCheckCover theme={SearchBarTheme}>
                    <CheckBox></CheckBox>
                    <CheckContent>{FillterText}</CheckContent>
                </SeachCheckCover>
                <Btn width="123px">search</Btn>
            </SeachBtnCover>
        </SearchBarCover>
    )
}


function Mobile({Theme}:Props) {

    const searchInput = useRef<HTMLInputElement>(null);

    const SearchBarTheme = Theme.theme === "Dark" ? DarkThema : LightThema

    return (
        <SearchBarCover theme={SearchBarTheme}>
            <SeachContentCover theme={SearchBarTheme} onClick={() => clickFocus(searchInput)}>
                <SeachContent type="text" placeholder="Filter by title, companies, expertise…" ref={searchInput} />
                <Filter fill={SearchBarTheme.filterColor} />
                <Btn width="48px"><Search fill="#FFF" /></Btn>
            </SeachContentCover>
        </SearchBarCover>
    )
}


const SearchBar = {
    Web,
    Mobile
}

export default SearchBar