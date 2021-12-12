import styled from "styled-components"
import {ThemeType,SizeTheme, DataType} from "../types/componentsType"
import Btn from "../components/Button"

type Props = {
    Theme:ThemeType;
    Data:DataType
}

type FooterTheme = {
    titleColor:string
    backgroundColotr:string
}

const LightTheme : FooterTheme = {
    titleColor: "#19202D",
    backgroundColotr: "#FFFFFF"
}

const DarkTheme : FooterTheme ={
    titleColor: "#FFFFFF",
    backgroundColotr: "#19202D"
}

const FooterBarCover = styled.div`
    display: flex; align-items: center; justify-content: center;
    width: 100%; height: 96px;    padding: 23px 165px 22px 165px;
    @media ${SizeTheme.tablet}{
        padding: 23px 40px 22px 40px;
    }
    @media ${SizeTheme.mobile}{
        padding: 25px 24px 23px 24px;
    }
    background-color: ${props=>props.theme.backgroundColotr}; border-radius: 6px;
`

const FooterBarContents = styled.div`
    display:flex;
    width: 100%; max-width: 730px;
    @media ${SizeTheme.tablet}{
    }    max-width: 689px;
    @media ${SizeTheme.mobile}{
        max-width: 327px;
    }
`

const FooterBarTitleCover = styled.div`
    flex:1; display:flex; flex-direction: column; justify-content: space-between;
`


const FooterBarTitle =  styled.div`
    font-size: 20px; color: ${props => props.theme.titleColor}; font-weight:700;
`

const FooterBarContent =  styled.div`
    color: #6E8098;
`


function Web({Theme,Data}:Props){

    const FooterBarTheme = Theme.theme == "Dark" ? DarkTheme : LightTheme

    return(
        <FooterBarCover theme={FooterBarTheme}>
            <FooterBarContents>
                <FooterBarTitleCover>
                    <FooterBarTitle theme={FooterBarTheme}>{Data.position}</FooterBarTitle>
                    <FooterBarContent>So Digital Inc.</FooterBarContent>
                </FooterBarTitleCover>
                <Btn>Apply Now</Btn>
            </FooterBarContents>
        </FooterBarCover>
    )
}


function Mobile({Theme}:Props){

    const FooterBarTheme = Theme.theme == "Dark" ? DarkTheme : LightTheme

    return(
        <FooterBarCover theme={FooterBarTheme}>
            <FooterBarContents>
                <Btn width="100%">Apply Now</Btn>
            </FooterBarContents>
        </FooterBarCover>
    )
}


const FooterBar={
    Web,
    Mobile
}

export default FooterBar