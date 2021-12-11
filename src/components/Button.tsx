import styled, { css } from "styled-components";
import {BtnType}  from "../types/componentsType"



const StyledButton = styled.div`
    display: flex;  justify-content: center;    align-items: center;
    cursor: pointer;

    ${({ theme }) => css`
    width:${theme.width}; height:${theme.height};   
    border-radius:${theme.borderRadius}px; font-size:${theme.fontSize}px;   
    font-size:${theme.fontSize}; color:${theme.color};   
    background-color:${theme.backgroundColor};

    &:hover{
        color:${theme.hoverColor};   
        background-color:${theme.hoverBackgroundColor}
    }
    `}
`

function Button(props:BtnType){
    return <StyledButton theme={props} onClick={props.onClick}>{props.children}</StyledButton>
}

Button.defaultProps = {
    width: '140px',
    height: '48px',
    borderRadius: 5,
    fontSize: 16,
    color: '#FFF',
    backgroundColor: '#5964E0',
    hoverColor: '#FFF',
    hoverBackgroundColor: "#939BF4",
    children: 'Button'
}


export default Button