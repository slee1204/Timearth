import styled from 'styled-components';
import React from "react";
import { HeaderTxt, goodResults, badResults } from '../../data/res_content';
import { getScore } from "../../data/question_content";
import { catData } from "../../data/global_content"

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
    max-width: 50%;
    min-width: 330px;
    height: fit-content;
    background: white;
    border-radius: 8px;
    color: #000000;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
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

const SubHeader = styled.h2`
    margin: 0em;
    padding: 0 30px;
`

const Desc = styled.h2`
    font-weight: 400;
    padding: 0 30px;
`

const Button = styled.button`
    margin: 1em;
`

const Img = styled.img`
    padding: 10pt;
`
const scores = getScore();

export function Good(props) {
    return (props.trigger) ? (<div>
        <Background></Background>
        <OverlayComp>
            <Header>{HeaderTxt.good.txt}</Header>
            <Img src={catData[scores.high].src}></Img>
            <SubHeader>{goodResults[scores.high].title}</SubHeader>
            <Desc>{goodResults[scores.high].desc}</Desc>
            <Button
                className="primary large"
                onClick={
                    () => {
                        props.setTrigger(false);
                    }
                }
            >Close</Button>
            {props.children}
        </OverlayComp> </div>) : ""
}

export function Bad(props) {
    return (props.trigger) ? (<div>
        <Background></Background>
        <OverlayComp>
            <Header>{HeaderTxt.bad.txt}</Header>
            <Img src={catData[scores.low].src}></Img>
            <SubHeader>{badResults[scores.low].title}</SubHeader>
            <Desc>{badResults[scores.low].desc}</Desc>
            <Button
                className="primary large"
                onClick={
                    () => {
                        props.setTrigger(false);
                    }
                }
            >Close</Button>
            {props.children}
        </OverlayComp> </div>) : ""
}