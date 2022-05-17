import { useRouter } from "next/router";
import styled from 'styled-components';
import React, { useState } from "react";
import { goodResults, badResults } from '../data/res_content';
import { storeChoice } from "../data/question_content";
import { BadScore, GreatScore } from "../data/question_content";

const DimBG = {
    background: 'rgba(0,0,0,0.7)',
    width: '100%',
    height: '100%',
    display: 'flex',
    "flex-direction": 'column',
    "justify-content": 'space-around',
    "align-items": 'center',
    position: 'absolute'
}

const Overlay = styled.div`
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
// export function greatResults() {

//     var answers = [];
//     if ( Number(answers[0]) + Number(answers[1]) > Number(answers[2]) + Number(answers[3]) 
//         && Number(answers[0]) + Number(answers[1]) > Number(answers[4]) + Number(answers[5])
//         && Number(answers[0]) + Number(answers[1]) > Number(answers[6]) + Number(answers[7])
//         && Number(answers[0]) + Number(answers[1]) > Number(answers[8]) + Number(answers[9])
//         && Number(answers[0]) + Number(answers[1]) > Number(answers[10]) + Number(answers[11])) {
//         return goodResults[0].title
//     }
//     if ( Number(answers[2]) + Number(answers[3]) > Number(answers[0]) + Number(answers[1]) 
//         && Number(answers[2]) + Number(answers[3]) > Number(answers[4]) + Number(answers[5])
//         && Number(answers[2]) + Number(answers[3]) > Number(answers[6]) + Number(answers[7])
//         && Number(answers[2]) + Number(answers[3]) > Number(answers[8]) + Number(answers[9])
//         && Number(answers[2]) + Number(answers[3]) > Number(answers[10]) + Number(answers[11])) {
//         return goodResults[1].title
//     }
//     if ( Number(answers[4]) + Number(answers[5]) > Number(answers[2]) + Number(answers[3]) 
//         && Number(answers[4]) + Number(answers[5]) > Number(answers[0]) + Number(answers[1])
//         && Number(answers[4]) + Number(answers[5]) > Number(answers[6]) + Number(answers[7])
//         && Number(answers[4]) + Number(answers[5]) > Number(answers[8]) + Number(answers[9])
//         && Number(answers[4]) + Number(answers[5]) > Number(answers[10]) + Number(answers[11])) {
//         return goodResults[2].title
//     }
//     if ( Number(answers[6]) + Number(answers[7]) > Number(answers[2]) + Number(answers[3]) 
//         && Number(answers[6]) + Number(answers[7]) > Number(answers[4]) + Number(answers[5])
//         && Number(answers[6]) + Number(answers[7]) > Number(answers[0]) + Number(answers[1])
//         && Number(answers[6]) + Number(answers[7]) > Number(answers[8]) + Number(answers[9])
//         && Number(answers[6]) + Number(answers[7]) > Number(answers[10]) + Number(answers[11])) {
//         return goodResults[3].title
//     }
//     if ( Number(answers[8]) + Number(answers[9]) > Number(answers[2]) + Number(answers[3]) 
//         && Number(answers[8]) + Number(answers[9]) > Number(answers[4]) + Number(answers[5])
//         && Number(answers[8]) + Number(answers[9]) > Number(answers[6]) + Number(answers[7])
//         && Number(answers[8]) + Number(answers[9]) > Number(answers[0]) + Number(answers[1])
//         && Number(answers[8]) + Number(answers[9]) > Number(answers[10]) + Number(answers[11])) {
//         return goodResults[4].title
//     }
//     if ( Number(answers[10]) + Number(answers[11]) > Number(answers[2]) + Number(answers[3]) 
//         && Number(answers[10]) + Number(answers[11]) > Number(answers[4]) + Number(answers[5])
//         && Number(answers[10]) + Number(answers[11]) > Number(answers[6]) + Number(answers[7])
//         && Number(answers[10]) + Number(answers[11]) > Number(answers[8]) + Number(answers[9])
//         && Number(answers[10]) + Number(answers[11]) > Number(answers[0]) + Number(answers[1])) {
//         return goodResults[5].title
//     }
// }



export function Good(props) {

    return (props.trigger) ? (<div style = {DimBG}>
    <Overlay>
        <Header>{goodResults[0].header}</Header>
        <img src={goodResults[GreatScore].src}></img>
        <SubHeader>{goodResults[GreatScore].title}</SubHeader>
        <Desc>{goodResults[GreatScore].desc}</Desc>
        <Button
            className="primary large"
            onClick={
                () => {
                    props.setTrigger(false)
                }
            }
        >Close</Button>
        {props.children}
    </Overlay> </div>) : ""
}





export function Bad(props) {
    return (props.trigger) ? (<div style = {DimBG}>
    <Overlay>
        <Header>{badResults[0].header}</Header>
        <img src={badResults[BadScore].src}></img>
        <SubHeader>{badResults[BadScore].title}</SubHeader>
        <Desc>{badResults[BadScore].desc}</Desc>
        <Button
            className="primary large"
            onClick={
                () => {
                    props.setTrigger(false)
                }
            }
        >Close</Button>
        {props.children}
    </Overlay> : </div>) : ""
}