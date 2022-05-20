import styled from 'styled-components';
import CateGrid from '../comps/CateGrid'
import { PageTitle, BtnText } from '../data/intro_content';
import { useRouter } from 'next/router';
import { Hamburger, Menu } from "../comps/Menu";
import React, { useState, useRef } from "react";
import NavBar from "../comps/NavBar";
import { logoData, color } from '../data/global_content';
import CountUp from 'react-countup';

const SubHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 70%;
    height: 100%;
    margin-bottom: 1em;

    @media only screen and (min-width: 1024px) and (min-height: 600px){
        width: 30%;
        height: 30%;
    }

    @media only screen and (min-height: 1024px) {
        width: 40%;
        height: 40%;
    }
`

const Em = styled.span`
    color: ${props => props.color};
    font-style: normal;
    font-weight: 700;
`

const Logo = styled.img`
    width: 10vw;
    height: 10vh;

    @media only screen and (min-height: 1024px) {
        width: 8vw;
        height: 8vh;
    }
`

const EarthMin = styled.div`
    font-family: 'Oxanium';
    text-transform: uppercase;
    font-weight: 400;
    font-size: 24pt;
    display: flex;
    justify-content: space-around;
`

const LayoutComp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 40%;
    transform: translate(0, -40%);
    width: 90%;
`
export const Button = styled.button`
    bottom: 8.77%;
    position: absolute;
`

export default function Intro(arr = []) {

    const [open, setOpen] = useState(false);
    const node = useRef();
    const [intro, setIntro] = useState(true);

    const r = useRouter();

    return (
        <div className='setting'>
            <NavBar />
            <div className="menu" ref={node}>
                <Hamburger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
            </div>
            {intro ? <LayoutComp>
                <h1>{PageTitle[0]}</h1>
                <SubHeader>
                    <Logo src={logoData.src} />
                    <EarthMin>
                        <CountUp
                            start={0.00}
                            end={10}
                            duration={.5}
                            decimal={2}
                        >
                            {({ countUpRef, start }) => (
                                <strong ref={countUpRef} />
                            )}
                        </CountUp>
                        <div>minutes</div>
                    </EarthMin>
                </SubHeader>
                <h4>Here on Timearth, <br /><Em color={color.primaryOrange}>Earth minutes</Em> refer to the number of minutes your actions can add to the Earth's lifespan.</h4>
                <h4>After you complete the questionnaire, you will receive your results in <Em color={color.primaryOrange}>Earth minutes</Em>, like the example shown above.</h4>
            </LayoutComp> : <LayoutComp>
                <h1>{PageTitle[1]}</h1>
                <h4>Now let's see how many <Em color={color.primaryOrange}>minutes</Em> you are adding to the Earth's lifespan! <br></br>Complete our <Em color={color.primaryOrange}>12-question quiz</Em> on the following categories:</h4>
                <CateGrid />
            </LayoutComp>}
            {
                intro ? <Button
                    className='primary large'
                    onClick={
                        () => {
                            setIntro(!intro)
                        }
                    }
                >{BtnText[0]}</Button> : <Button
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
                >{BtnText[1]}</Button>
            }
        </div>
    )
}