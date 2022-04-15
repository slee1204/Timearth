import styled from 'styled-components';
import { cat1, cat2, cat3, cat4, cat5, cat6 } from "../data/intro_content"

const BreadcrumbComp = styled.div`
    display: flex;
    width: 330px;
    height: 57px;
    margin-top: 5em;
    justify-content: space-between;
`

const Category = styled.div`
    display:flex;
    flex-direction: column;
    width: 46px;
    height: 55px;
`
const CatImg = styled.img`
    width: 100%;
    height: 100%;   
`
const Bar = styled.div`
    width: 46px;
    height: 10px;
    background-color: #FF9042;
`


export default function Breadcrumb() {
    return <BreadcrumbComp>
        <Category>
            <CatImg src={cat1.img}></CatImg>
            <Bar></Bar>
        </Category>
        <Category>
            <CatImg src={cat2.img}></CatImg>
            <Bar></Bar>
        </Category>
        <Category>
            <CatImg src={cat3.img}></CatImg>
            <Bar></Bar>
        </Category>
        <Category>
            <CatImg src={cat4.img}></CatImg>
            <Bar></Bar>
        </Category>
        <Category>
            <CatImg src={cat5.img}></CatImg>
            <Bar></Bar>
        </Category>
        <Category>
            <CatImg src={cat6.img}></CatImg>
            <Bar></Bar>
        </Category>
        
    </BreadcrumbComp>
}