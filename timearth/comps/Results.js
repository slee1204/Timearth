import { useRouter } from "next/router";
import styled from 'styled-components';
import React, { useState } from "react";
import { goodResults, badResults } from '../data/res_content'

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

export function Good(props) {

    return (props.trigger) ? (<Overlay>
        <Header>{goodResults[0].header}</Header>
        <img src="/transportation.svg"></img>
        <SubHeader>{goodResults[0].title}</SubHeader>
        <Desc>{goodResults[0].desc}</Desc>
        <Button
            className="primary large"
            onClick={
                () => {
                    props.setTrigger(false)
                }
            }
        >Close</Button>
        {props.children}
    </Overlay>) : ""
}

export function Bad(props) {

    return (props.trigger) ? (<Overlay>
        <Header>{badResults[0].header}</Header>
        <img src="/Water.svg"></img>
        <SubHeader>{badResults[2].title}</SubHeader>
        <Desc>{badResults[2].desc}</Desc>
        <Button
            className="primary large"
            onClick={
                () => {
                    props.setTrigger(false)
                }
            }
        >Close</Button>
        {props.children}
    </Overlay>) : ""
}