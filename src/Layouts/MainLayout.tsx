import styled from "styled-components";
import {DeviceType,ThemeType,CardType} from "../types/componentsType"

import HeaderBar from "../components/HeaderBar"
import SearchBar from "../components/SearchBar"
import CardDisplay from "../components/CardDisplay"

import data from "../data/data.json"

type Props = {
    Theme:ThemeType;
    Device:DeviceType;
}

const MainLayoutComponent = styled.div`
    background-color: ${props=>[props.theme]};
    width: 100%; min-height: 100%;
`

function MainLayout({Theme,Device}:Props){

    const LayoutTheme = Theme.theme === "Dark" ? "#121721" : "#F4F6F8"
    const SearchBarComponent = Device.device === "Mobile" ? SearchBar.Mobile : SearchBar.Web

    return(
        <MainLayoutComponent theme={LayoutTheme}>
            <HeaderBar Theme={Theme} Device={Device} >
                <SearchBarComponent Theme={Theme} Device={Device}/>
            </HeaderBar>
            <CardDisplay Theme={Theme} Data={data as CardType[]}/>
        </MainLayoutComponent>
    )
}


export default MainLayout

