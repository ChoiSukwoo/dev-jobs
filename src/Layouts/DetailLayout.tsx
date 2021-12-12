import styled from "styled-components";
import { useParams } from "react-router"
import {DeviceType,ThemeType,CardType,DataType} from "../types/componentsType"

import HeaderBar from "../components/HeaderBar"
import JobHeader from "../components/JobHeader"
import DetailContent from "../components/DetailContent"
import FooterBar from "../components/FooterBar"

import data from "../data/data.json"

type Props = {
    Theme:ThemeType;
    Device:DeviceType;
}

const DetailLayoutComponent = styled.div`
    display: flex; flex-direction: column;
    background-color: ${props=>[props.theme]};
    width: 100%; min-height: 100%;
`

function DetailLayout({Theme,Device}:Props){
    const { id } = useParams();
    let jobDate : DataType = data[3]

    data.forEach(element => {
        if(element.id == parseInt(id as string)){
            jobDate = element
        }
    });

    const LayoutTheme = Theme.theme === "Dark" ? "#121721" : "#F4F6F8"
    const FooterBarComponent = Device.device === "Mobile" ? FooterBar.Mobile : FooterBar.Web

    return(
        <DetailLayoutComponent theme={LayoutTheme}>
            <HeaderBar Theme={Theme} Device={Device} >
                <JobHeader Theme={Theme} Device={Device} content={jobDate}/>
            </HeaderBar>
            <DetailContent Theme={Theme} Device={Device} Data={jobDate} />
            <FooterBarComponent Theme={Theme} Data={jobDate} />
        </DetailLayoutComponent>
    )
}


export default DetailLayout

