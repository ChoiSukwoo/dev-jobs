import styled from "styled-components";
import {CardType} from "../types/componentsType"



type CardTheme = {
    backgroundColor:string,
    color:string
}

type Props = {
    Theme:string;
    Props:CardType;
}

const LightThema:CardTheme = {
    backgroundColor: "#FFFFFF",
    color: "#19202D"
}

const DarkThema:CardTheme = {
    backgroundColor: "#19202D",
    color: "#FFFFFF"
}



const StyledJobCard = styled.div`
    position:relative; display: flex; flex-direction:column; justify-content: flex-start;    align-items: flex-start;
    width:100%; min-height:228px; padding: 49px 32px 32px 32px;
    border-radius: 6px;

    background-color: ${props => props.theme.backgroundColor};
`

const StyledLogo = styled.div`
    width: 50px; height: 50px;
    position: absolute; top: -25px; left: 32px;
    border-radius: 15px;

    background-color: ${props => props.theme};
`

const StyledTime = styled.div`
    height: 20px; margin-bottom: 12px;
    display: flex; justify-content: flex-start; align-items: flex-start; column-gap: 12px;
    color:#6E8098;
`
const StyledDot = styled.div`
    width: 4px; height: 4px; margin:auto;
    background-color:#6E8098;
    border-radius: 999px;
`

const StyledPosition = styled.div`
    font-size: 20px; font-weight: 700;
    margin-bottom: 17px;
    cursor: pointer;

    &:hover{
        color: #6E8098;
    }

    color: ${props=>props.theme.color};
`

const StyledCompany = styled.div`
    font-size: 20px; color:#6E8098;
    flex: 1;
`

const StyledLocation = styled.div`
    font-size:14px;  color: #5964E0;
`


function JobCard({Theme,Props}:Props){

    const cartTheme = Theme == "Light" ? LightThema : DarkThema

    return (
    <StyledJobCard theme={cartTheme}>
        <StyledLogo className="center" theme={Props.logoBackground}>
        <img src={process.env.PUBLIC_URL+Props.logo} alt="planetImg"/>
        </StyledLogo>
        <StyledTime>{Props.postedAt}<StyledDot/>{Props.contract}</StyledTime>
        <StyledPosition theme={cartTheme}>{Props.position}</StyledPosition>
        <StyledCompany>{Props.company}</StyledCompany>
        <StyledLocation>{Props.location}</StyledLocation>
    </StyledJobCard>
    )
}


export default JobCard;