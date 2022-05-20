import styled from 'styled-components';
import { catData } from '../data/global_content';
import { fadeIn } from '../data/animation';


const GridComp = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`
const CatCont = styled.div`
    width: 100%;
    height: 100%;
    padding: 1em;
    animation: ${props => props.fade} 1s;
    animation-delay: ${props => props.delay || "0s"};
`
const CatImg = styled.img`
    width: 15vw;
    height: 10vh;
`
const CatName = styled.div`
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
`

export default function CateGrid() {

    for (var i = 0; i < catData.length; i++) {
        return <GridComp className='setting'>
            <CatCont fade={fadeIn}>
                <CatImg src={catData[i].src} />
                <CatName>{catData[i].title}</CatName>
            </CatCont>
            <CatCont fade={fadeIn}>
                <CatImg src={catData[i+1].src} />
                <CatName>{catData[i+1].title}</CatName>
            </CatCont>
            <CatCont fade={fadeIn}>
                <CatImg src={catData[i+2].src} />
                <CatName>{catData[i+2].title}</CatName>
            </CatCont>
            <CatCont fade={fadeIn}>
                <CatImg src={catData[i+3].src} />
                <CatName>{catData[i+3].title}</CatName>
            </CatCont>
            <CatCont fade={fadeIn}>
                <CatImg src={catData[i+4].src} />
                <CatName>{catData[i+4].title}</CatName>
            </CatCont>
            <CatCont fade={fadeIn}>
                <CatImg src={catData[i+5].src} />
                <CatName>{catData[i+5].title}</CatName>
            </CatCont>
        </GridComp>
    }
} 