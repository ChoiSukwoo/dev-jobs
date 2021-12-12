import styled from "styled-components"
import {ThemeType,SizeTheme,CardType} from "../types/componentsType"
import JobCard from "../components/JobCard"

type Props = {
    Theme:ThemeType,
    Data:CardType[]
}

const CardLayoutCover = styled.div`
    display: flex; justify-content: center;
    width:100%; padding: 80px 165px 104px 165px; margin-bottom : 40px;
    @media ${SizeTheme.tablet}{
        padding:  45px 40px 61px 40px;
    }
    @media ${SizeTheme.tablet}{
        padding:  32px 24px 62px 24px;
    }
`

const CardLayout = styled.div`
    display: grid;  grid-template-columns: repeat(3, auto); column-gap: 30px; row-gap: 65px;
    @media ${SizeTheme.tablet}{
        grid-template-columns: repeat(2, auto); column-gap: 11px; 
    }
    @media ${SizeTheme.mobile}{
        padding:  32px 24px 62px 24px; row-gap: 24px;
        grid-template-columns: repeat(1, auto);
    }
    width: 100%; max-width: 1440px;
`

function CardDisplay({Theme,Data}:Props){
 
    const JobCards = Data.map((data,index)=><JobCard Theme={Theme.theme} Props={data} key={index}/>)

    return(
        <CardLayoutCover>
            <CardLayout>
                {JobCards}
            </CardLayout>
        </CardLayoutCover>
    )
}


export default CardDisplay