import { useRouter } from "next/router";
import styled from 'styled-components';
import React, { useState } from "react";
import { getResults } from "../../data/question_content";

const OverlayComp = styled.div`
    width: 100%;
    height: 100%;
    background: white;
    border-radius: 8px;
    color: #000000;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: relative;
`
const Header = styled.div`
    width: 100%;
    height: 3em;
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
    position: relative;
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
    padding: 1.5em;
`
const Button = styled.button`
    margin: 1.5em;
`

export default function Overlay(props) {

    const r = useRouter();

    return (props.trigger) ? (<OverlayComp>
        <Header>Today’s Results</Header>
        <H2>You have increased the Earth’s lifespan by</H2>
        <Time>
            <Logo src="/logomark.svg" />
            <Result>{getResults()}</Result>
        </Time>
        <Button
            className="primary large"
            onClick={
                () => {
                    r.push(
                        {
                            pathname: "/results"
                        }
                    )
                }
            }>Learn More</Button>
        {props.children}
    </OverlayComp>) : "";
}



