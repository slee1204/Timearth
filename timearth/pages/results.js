import { useRouter } from "next/router";
import styled from 'styled-components';
import { PageTitle, BtnText1, BtnText2 } from '../data/res_content'
import NavBar from "../comps/NavBar";
import { Hamburger, Menu } from "../comps/Menu";
import React, { useState } from "react";
import { Good, Bad } from "../comps/Results/Overlay"

const LayoutComp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5em;
`

const Em = styled.span`
    color: #FF9042;
    font-style: normal;
    font-weight: 700;
`

const Divider = styled.div`
    width: 100%;
    border: 0.5px solid #C4C4C4;

    @media only screen and (min-width: 700px) {
        display: none;
    }
`
const Card = styled.div`
    width: 170px;
    height: 170px;
    margin-bottom: 1.5em;
    background-color: #F6F6F6;
    border-radius: 10px;   
    display: flex;
    justify-content: center;
    align-item: center;
    cursor: pointer;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

    &:hover {
        filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.05));
      }

    @media only screen and (min-width: 700px) {
        width: 270px;
        height: 270px;
    }
`

const ResCont = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

const ResultBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: fit-content;

    @media only screen and (min-width: 700px) {
        margin: 0 2em 1em 2em;
    }

    @media only screen and (min-width: 1024px) {
        margin: 0 3em 1em 3em;
    }
`

const Button = styled.button`
    margin: 0.5em;
`

const Img = styled.img`
    width: 100%;
    height: 100%;

    &:hover {
        filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.05));
      }
`

export default function Result() {

    const r = useRouter();
    const [OverlayOpen, setOverlayOpen1] = useState(false);
    const [OverlayOpen2, setOverlayOpen2] = useState(false);
    const [open, setOpen] = React.useState(false);
    const node = React.useRef();

    return (
        <LayoutComp>
            <NavBar />
            <div className="menu" ref={node}>
                <Hamburger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
            </div>
            <h1>{PageTitle}</h1>
            <ResCont>
                <ResultBox>
                    <h2>What You Did <Em>Great</Em></h2>
                    <Card
                        onClick={
                            () => {
                                setOverlayOpen1(true);

                            }
                        }>
                        <Img src="/HappyEarth.svg" alt="Happy Earth" />
                    </Card>
                </ResultBox>
                <Divider />
                <ResultBox>
                    <h2>What Could Be <Em>Improved</Em></h2>
                    <Card
                        onClick={
                            () => {
                                setOverlayOpen2(true);
                            }
                        }>
                        <Img src="/SadEarth.svg" alt="Sad Earth" />
                    </Card>
                </ResultBox>
            </ResCont>

            <Button
                className="primary large"
                onClick={
                    () => {
                        r.push(
                            {
                                pathname: "/intro"
                            }
                        )
                    }
                }>{BtnText1}
            </Button>
            <Button
                className="primary large"
                onClick={
                    () => {
                        r.push(
                            {
                                pathname: "/challenges"
                            }
                        )
                    }
                }>{BtnText2}
            </Button>
            <Good trigger={OverlayOpen} setTrigger={setOverlayOpen1}></Good>
            <Bad trigger={OverlayOpen2} setTrigger={setOverlayOpen2}></Bad>
        </LayoutComp>
    )
}