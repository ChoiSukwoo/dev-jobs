import styled, {css} from "styled-components"
import { ThemeType, SizeTheme,DataType,DeviceType } from "../types/componentsType"

import ListItem from "../components/listItem"
import Btn from "../components/Button"

type Props = {
    Theme:ThemeType
    Device:DeviceType
    Data:DataType
}

type ContentTheme = {
    titleColor:string
    color:string
    BgColor:string
}

const LightContentTheme:ContentTheme = {
    titleColor: "#19202D",
    color: "#6E8098",
    BgColor: "#FFFFFF"
}

const DarkContentTheme:ContentTheme = {
    titleColor: "#FFFFFF",
    color: "#9DAEC2",
    BgColor: "#19202D"
}

const ContentCover = styled.div`
    flex:1; display: flex; justify-content: center;
    width: 100%; padding: 90px 165px 80px 165px;

    @media ${SizeTheme.tablet}{
        padding: 90px 40px 53px 40px ; 
    }
    @media ${SizeTheme.mobile}{
        padding: 175px 24px 64px 24px;
    }
`

const Content = styled.div`
    width:100%;  max-width: 730px; height:fit-content; padding: 48px; 
    border-radius: 6px;
    @media ${SizeTheme.tablet}{
        max-width: 689px;
    }
    @media ${SizeTheme.mobile}{
        max-width: 327px; padding: 40px 24px;
    }
    ${({ theme }) => css`
        background-color:${theme.BgColor};
        color:${theme.color};
    `}
`

const Header = styled.div`
    display: flex; align-items: center;
    margin-bottom: 40px;
    @media ${SizeTheme.mobile}{
        flex-direction: column; row-gap: 50px;
        margin-bottom: 32px;
    }
`

const HedarInfo = styled.div`
    flex:1; display:flex; flex-direction: column;
`

const HedarInfoTime = styled.div`
    height: 19px;
    display: flex; column-gap: 12px; 
    color:#6E8098;
    width:fit-content; margin-bottom: 8px;
` 
const Dot = styled.div`
    width: 4px; height: 4px; margin:auto;
    background-color:#6E8098;
    border-radius: 999px;
`

const HedarInfoPosition = styled.div`
    min-height: 34px;
    color: ${props=>props.theme.titleColor}; font-size: 28px; font-weight: 700;
    margin-bottom: 14px;
    @media ${SizeTheme.mobile}{
        min-height: 20px;
        font-size: 20px;
    }
`

const HedarInfoLocation = styled.div`
    font-size: 14px; font-weight: 700; color:#5964E0;
`

const DescriptionCover = styled.div`
    display:flex; flex-direction:column; row-gap: 40px;
`

const Title = styled.div`
    font-size:20px; font-weight:700; color:${props=>props.theme.titleColor};
    margin-bottom: 28px;
`

const Contents = styled.div`
    line-height: 26px;
    margin-bottom: 24px;
`

const List = styled.div`
    display: flex; flex-direction: column; row-gap: 8px;
`

const ContentsCover = styled.div`
`



export default function DetaileContent({Theme,Device,Data}:Props){

    const ContentTheme = Theme.theme ==="Dark" ? DarkContentTheme :LightContentTheme

    const RequirementList = Data.requirements.items.map((data,index)=> <ListItem bullet={"ㆍ"} contents={data} color={ContentTheme.color}/>)
    const roleList = Data.role.items.map((data,index)=> <ListItem bullet={String(index+1)} contents={data} color={ContentTheme.color}/>)
    
    const Button = Device.device == "Mobile" ? <Btn width="100%" >Apply Now</Btn> : <Btn>Apply Now</Btn>

    return(
        <ContentCover>
            <Content theme={ContentTheme}>
                <Header>
                    <HedarInfo>
                        <HedarInfoTime>{Data.postedAt}<Dot/>{Data.contract}</HedarInfoTime>
                        <HedarInfoPosition theme={ContentTheme}>{Data.position}</HedarInfoPosition>
                        <HedarInfoLocation>{Data.location}</HedarInfoLocation>
                    </HedarInfo>
                    {Button}
                </Header>
                <DescriptionCover>
                    <ContentsCover>
                        <Contents>{Data.description}</Contents>
                    </ContentsCover>
                    <ContentsCover>
                        <Title theme={ContentTheme}>Requirements</Title>
                        <Contents>{Data.requirements.content}</Contents>
                        <List>{RequirementList}</List>
                    </ContentsCover>
                    <ContentsCover>
                        <Title theme={ContentTheme}>What You Will Do</Title>
                        <Contents>{Data.role.content}</Contents>
                        <List>{roleList}</List>
                    </ContentsCover>
                </DescriptionCover>
            </Content>
        </ContentCover>
    )
}