import { useRouter } from "next/router";
import styled from 'styled-components';
import React, { useState } from "react";
import { Challenges } from "../../data/challenge_content"


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
const H2 = styled.div`
    font-weight: 600;
    font-size: 22px;
    line-height: 30px;
    text-align: center;
    padding: 1.5em;
`

const OverlayComp = styled.div`
    background: white;
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
const Button = styled.button`
    margin: 1.5em;
`
const Time = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
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
const DateBtn = styled.div`
    background-color: {dbtn ? "#f0f0f0" : "#FF9042"};
    height: 2em;
    width:2em;
    margin:.2em;
    border-radius: 4px;
    font-weight:bold;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
`
const DateCont = styled.div`
    display:flex;
    justify-content:space-between;
`

export function DateButton(props) {
    const [dbtn, setDBtn] = useState(false);
    return <DateBtn className={
        dbtn ? "selected-date" : "" }
        onClick={
        ()=>{
            setDBtn(!dbtn)
        }
    }>
        {props.d}
    </DateBtn>
}

export default function Overlay(props) { 

    const [ch, SetCh] = useState(true);

        return (props.trigger) ? (<div>
            <Background></Background>       
            { ch && <OverlayComp>
                <Header>Start Challenge</Header>
                <H2>Choose the days that you will complete this challenge.</H2>
                <DateCont>
                <DateButton d="S"></DateButton>
                <DateButton d="M"></DateButton>
                <DateButton d="T"></DateButton>
                <DateButton d="W"></DateButton>
                <DateButton d="Th"></DateButton>
                <DateButton d="F"></DateButton>
                <DateButton d="Sa"></DateButton>
                </DateCont>
                <Button
                    className="primary large"
                    onClick={
                        (e) => {
                           SetCh(!ch);
                        }
                    }>Start</Button>
                    
                {props.children}
            </OverlayComp> }
            { !ch && <OverlayComp>
                <Header>Good Luck!</Header>
                <H2>This challenge will increase the Earth's Lifespan by</H2>
                <DateCont>
                <Time>
                    <Logo src="/Logomark.svg" />
                    <Result>{Challenges[0].time} mins</Result>
                </Time>
                </DateCont>
                <Button
                    className="primary large"
                    onClick={
                        (e) => {
                           props.setTrigger(false);
                        }
                    }>Close</Button>
                    
                {props.children}
            </OverlayComp> }
            </div>) : "";
    }