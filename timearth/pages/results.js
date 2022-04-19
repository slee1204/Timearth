import { useRouter } from "next/router";
import styled from 'styled-components';
import { PageTitle, BtnText1, BtnText2 } from '../data/res_content'
import NavBar from "../comps/NavBar";


const LayoutComp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 6.5em;
`

const Em = styled.span`
    color: #FF9042;
    font-style: normal;
    font-weight: 700;
`

const Divider = styled.div`
    width: 100%;
    border: 0.5px solid #C4C4C4;
    margin-bottom: 2em;
`
const Card = styled.div`
    width: 170px;
    height: 170px;
    margin-bottom: 23pt;
    background-color: #F6F6F6;
    border-radius: 10px;
    z-index: 1;
`

export default function Result() {

    const r = useRouter();
    return (
        <LayoutComp>
            <NavBar />
            <h1>{PageTitle}</h1>
            <h2>What You Did <Em>Great</Em></h2>
            <Card
                onClick={
                    () => {
                        r.push(
                            {
                                pathname: "/"
                            }
                        )
                    }
                }>
                <img src="/HappyEarth.svg" alt="Happy Earth" />
            </Card>
            <Divider />
            <h2>What Could Be <Em>Improved</Em></h2>
            <Card
                onClick={
                    () => {
                        r.push(
                            {
                                pathname: "/"
                            }
                        )
                    }
                }>
                <img src="/SadEarth.svg" alt="Sad Eart" />
            </Card>
            <button
                className="primary large"
                onClick={
                    () => {
                        r.push(
                            {
                                pathname: "/"
                            }
                        )
                    }
                }>{BtnText1}
            </button>
            <button
                className="primary large"
                onClick={
                    () => {
                        r.push(
                            {
                                pathname: "/"
                            }
                        )
                    }
                }>{BtnText2}
            </button>
        </LayoutComp>
    )
}