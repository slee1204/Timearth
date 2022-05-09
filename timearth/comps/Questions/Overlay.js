import { useRouter } from "next/router";
import styled from 'styled-components';
import React, { useState } from "react";
import { getResults } from "../../data/question_content";

const Background = styled.div`
    background-color: black;
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0.7;
`

const OverlayComp = styled.div`
    background: white;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    color: #000000;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 330px;
    height: fit-content;
    position: absolute;
    top: 0;
    left: 0;
    top:50%;
    left:50%;
    z-index: 10;
    transform:translate(-50%, -50%);
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
    const { total, setTotal } = useContext(AppContext);

    return (props.trigger) ? (<div>
        <Background></Background>
        <OverlayComp>
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
        </OverlayComp>         </div>) : "";
}



