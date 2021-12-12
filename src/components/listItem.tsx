import styled, { css } from "styled-components"
import {listItemType} from "../types/componentsType"

type Porps = {
    bullet:string,
    contents:string,
    fontSize: string,
    lineHeight:string,
    fontWeight:number,
    color: string,
    bulletSize:string,
    bulletWeight:number,
    bulletWidth: string,
    bulletColor:string
}

const ListItemCover = styled.div`
    width: 100%; display: flex;
`

const Contents = styled.div`
    flex: 1; 
    width:100%;
    ${({theme})=>css`
        font-size: ${theme.fontSize}; font-weight: ${theme.fontWeight}; color:${theme.color}; line-height: ${theme.lineHeight};
    `}
`

const Bullet = styled.div`
    ${({theme})=>css`
        font-size: ${theme.bulletSize}; font-weight: ${theme.bulletWeight}; color:${theme.bulletColor}; line-height: ${theme.lineHeight};
        width:${theme.bulletWidth}
    `}
`

export default function listItem(props:Porps){
    return(
        <ListItemCover>
            <Bullet theme={props}>{props.bullet}</Bullet>
            <Contents theme={props}>{props.contents}</Contents>
        </ListItemCover>
    )
}

listItem.defaultProps = {
    fontSize: '16px',
    lineHeight:'26px',
    fontWeight:400,
    color: '#FFF',
    bulletSize:'16px',
    bulletWeight:700,
    bulletWidth: '36px',
    bulletColor:'#5964E0'
}