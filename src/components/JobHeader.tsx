import { useRef,RefObject } from "react";
import styled from "styled-components";
import {ThemeType,DeviceType,SizeTheme,JobHeaderType,BtnType} from "../types/componentsType"

import Btn from '../components/Button'


type Props = {
    content:JobHeaderType,
    Theme:ThemeType;
    Device:DeviceType;
}

type JobHeaderBarTheme ={
    backgroundColor:string,
    color : string
}

const LightTheme : JobHeaderBarTheme = {
    backgroundColor: "#FFFFFF",
    color : "#19202D"
}

const DarkTheme : JobHeaderBarTheme = {
    backgroundColor: "#19202D",
    color : "#FFFFFF"
}

const BtnDarkTheme ={
    color: "#FFFFFF",
    hoverColor: "#FFFFFF",
    backgroundColor: "#FFFFFF0A",
    hoverBackgroundColor: "#FFFFFF19",
}

const BtnLightTheme ={
    color: "#5964E0",
    hoverColor: "#5964E0",
    backgroundColor: "#5964E00A",
    hoverBackgroundColor: "#5964E023",
}

const SearchBarCover = styled.div`
    display: flex; align-items: center; justify-content: center;
    @media ${SizeTheme.mobile}{
        flex-direction: column;
    }
    width: 100%; max-width: 730px; height: 140px;
    @media ${SizeTheme.tablet}{
        max-width: 689px;
    }
    @media ${SizeTheme.mobile}{
        width: 327px;
        height: 205px;
    }
    background-color: ${props => props.theme.backgroundColor}; border-radius: 6px;
`

const Logo = styled.div`
    width: 140px; height: 140px;
    border-radius: 6px 0 0 6px;
    @media ${SizeTheme.mobile}{
        width: 50px; height: 50px;
        border-radius: 15px;
        position: relative; top: -25px;
    }
    background-color: ${props => props.theme};
`

const TitleCover = styled.div`
    flex: 1; display: flex; flex-direction: column; row-gap: 13px; align-items: flex-start;
    margin:0 40px;
    @media ${SizeTheme.mobile}{
        align-items: center;
        margin-bottom: 24px;
    }
`

const Title = styled.div`
    font-size: 24px; font-weight: 700; color: ${props => props.theme.color};
    @media ${SizeTheme.mobile}{
        font-size: 20px;
    }
`

const TitleContent = styled.div`
    color: #6E8098;
`

const BtnCover = styled.div`
    margin:0 43px ;
    @media ${SizeTheme.mobile}{
        margin-bottom: 32px;
    }
`

export default function SearchBar({Theme,Device,content}:Props) {

    const JobHeaderTheme = Theme.theme === "Dark" ? DarkTheme : LightTheme
    const BtnTheme = Theme.theme === "Dark" ? BtnDarkTheme : BtnLightTheme

    return (
        <SearchBarCover theme={JobHeaderTheme}>
            <Logo className="center" theme={content.logoBackground}>
                <img src={process.env.PUBLIC_URL+content.logo} alt="LogoImg"/>
            </Logo>
            <TitleCover>
                <Title theme={JobHeaderTheme}>{content.company}</Title>
                <TitleContent>{content.company}.com</TitleContent>
            </TitleCover>
            <BtnCover>
                <Btn  color={BtnTheme.color} hoverColor={BtnTheme.hoverColor} backgroundColor={BtnTheme.backgroundColor} hoverBackgroundColor={BtnTheme.hoverBackgroundColor}  >Company Site</Btn>
            </BtnCover>
        </SearchBarCover>
    )
}