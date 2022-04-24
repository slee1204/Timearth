import { useRouter } from "next/router";
import styled from 'styled-components';
import React, { useState } from "react";

const Overlay = styled.div`
    max-width: 70%;
    height: fit-content;
    background: white;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
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
`

const Desc = styled.h2`
    font-weight: 400;
`


const Button = styled.button`
    margin: 1em;
`

export default function Results(props) {

    return (props.trigger) ? (<Overlay>
        <Header>Header</Header>
        <img src="/transportation.svg"></img>
        <SubHeader>You had plant-based meals for most of this week!</SubHeader>
        <Desc> A global shift to a plant-based diet could reduce greenhouse gases caused by food production by 70% within 30 years.</Desc>
        <Button
            className="primary large"
            onClick={
                () => {
                    props.setTrigger(false)
                }
            }
        >Back</Button>
        {props.children}
    </Overlay>) : ""
}