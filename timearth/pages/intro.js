import styled from 'styled-components';
import CateGrid from '../comps/CateGrid'
import { PageTitle, BtnText } from '../data/intro_content';
import { useRouter } from 'next/router';
import { Hamburger, Menu } from "../comps/Menu";
import React from "react";
import NavBar from "../comps/NavBar";
import { useState } from 'react';

const Em = styled.span`
    color: #FF9042;
    font-style: normal;
    font-weight: 700;
`

const Logo = styled.img`
margin:0.5em;
width:7vw;
`
const EarthMin = styled.div`
font-family: 'Oxanium';
text-transform:uppercase;
font-weight: 400;
display:flex;
align-items:center;
justify-content:center;
font-size:5vw;
margin-bottom:0.5em;
@media only screen and (max-width: 600px) {
    font-size:8vw;
}
`

const LayoutComp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 6.5em;

    @media only screen and (max-width: 600px) and (max-height: 750px) {
        margin-top: 5em;
    }
`
export const Button = styled.button`
    margin: 3em;
`

export default function Intro() {

    const [open, setOpen] = React.useState(false);
    const node = React.useRef();
    const [intro, setIntro] = useState(true);

    const r = useRouter();

    return (
        <LayoutComp>
            <NavBar />
            <div className="menu" ref={node}>
                <Hamburger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
            </div>
            {intro && <div>
                <h1>{PageTitle[0]}</h1>
                <EarthMin><Logo src='/Logomark.svg' /> 60 minutes</EarthMin>
                <h4>Here on Timearth, <Em>Earth minutes</Em> refer to the number of minutes your actions can add to the Earth's lifespan.</h4>
                <h4>After you complete the questionnaire, you will receive your results in Earth minutes, like the example shown above.</h4>
            <Button
                className='primary large'
                onClick={
                    () => {
                        setIntro(!intro)
                    }
                }
            >{BtnText[0]}</Button></div>}
            {!intro && <div>
                <h1>{PageTitle[1]}</h1>
                <h4>Now let's see how many <Em>minutes</Em> you are adding to the Earth's lifespan! Complete our <Em>12-question quiz</Em> on the following categories:</h4>
            <CateGrid />
            <Button
                className='primary large'
                onClick={
                    () => {
                        r.push(
                            {
                                pathname: "/questions"
                            }
                        )
                    }
                }
            >{BtnText[1]}</Button></div>}
            
        </LayoutComp>
    )
}