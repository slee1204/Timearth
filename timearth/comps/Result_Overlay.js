import { useRouter } from "next/router";
import styled from 'styled-components';
import React, { useState } from "react";
import Overlay from "react-overlay-component";


const OverlayComp = styled.div`
    width: 100%;
    height: 360px;
    background: #FFFFFF;
    border-radius: 8px;
    color: #000000;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`
const Header = styled.div`
    width: 100%;
    height: 80px;
    left: 0px;
    top: 0px;
    background: #6B97ED;
    font-weight: 700;
    font-size: 28px;
    line-height: 38px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px 8px 0 0;
`
const Logo = styled.img`
    width: 3em;
    margin: .3em;
`
const Result = styled.div`
    font-family: 'Oxanium';
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 60px;
    text-align: center;
    color: #000000;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`
const Time = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
`
const H2 = styled.div`
    font-weight: 600;
    font-size: 22px;
    line-height: 30px;
    text-align: center;
    padding: 0 3em 0 3em;
`

export const Overlay = () => {

    const r = useRouter();

    return <OverlayComp>
        <Header>Today’s Results</Header>
        <H2>You have increased the Earth’s lifespan by</H2>
        <Time>
            <Logo src="/logomark.svg" />
            <Result>00:00:00</Result>
        </Time>
        <button
            className="primary large"
            onClick={
                () => {
                    r.push(
                        {
                            pathname: "/results"
                        }
                    )
                }
            }>Learn More</button>
    </OverlayComp>
}



