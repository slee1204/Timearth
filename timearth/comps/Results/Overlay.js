import { useRouter } from "next/router";
import styled from 'styled-components';
import React, { useState } from "react";
import { goodResults, badResults, showGoodResults } from '../../data/res_content';
import { HeaderTxt } from "../../data/res_content"
import { getScore, showResults } from "../../data/question_content";

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
export default function Overlay(props) {

    const r = useRouter();

    return (props.trigger) ? (<div>
        <Background></Background>
        <OverlayComp>
            <Header>{HeaderTxt.good.txt}</Header>
            <img src="/transportation.svg"></img>
            <SubHeader onChange={
                () => {
                   
                }
            }>{goodResults[0].title}</SubHeader>
            <Desc>{goodResults[0].desc}</Desc>
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



// export function Good(props) {

//     return (props.trigger) ? (<div style = {DimBG}>
//     <Overlay>
//         <Header>{goodResults[0].header}</Header>
//         <img src="/transportation.svg"></img>
//             <SubHeader onChange={
//                 () => {
//                     getHighest();
//                 }
//             }></SubHeader>
//         <Desc>{goodResults[0].desc}</Desc>
//         <Button
//             className="primary large"
//             onClick={
//                 () => {
//                     props.setTrigger(false)
//                 }
//             }
//         >Close</Button>
//         {props.children}
//     </Overlay> </div>) : ""
// }





// export function Bad(props) {
//     return (props.trigger) ? (<div style = {DimBG}>
//     <Overlay>
//         <Header>{badResults[0].header}</Header>
//         <img src="/Water.svg"></img>
//         <SubHeader>{badResults[2].title}</SubHeader>
//         <Desc>{badResults[2].desc}</Desc>
//         <Button
//             className="primary large"
//             onClick={
//                 () => {
//                     props.setTrigger(false)
//                 }
//             }
//         >Close</Button>
//         {props.children}
//     </Overlay> </div>) : ""
// }