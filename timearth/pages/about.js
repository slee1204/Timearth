import { useRouter } from "next/router";
import styled from 'styled-components';
import { PageTitle, BtnText } from '../data/about_content'
import NavBar from "../comps/NavBar";
import { Hamburger, Menu } from "../comps/Menu";
import React, { useState, useRef } from "react";
import { logoData } from "../data/global_content";

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

const Em = styled.span`
    color: #FF9042;
    font-style: normal;
    font-weight: 700;
`

const DescCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: center; 
`
export const Button = styled.button`
    bottom: 8.77%;
    position: absolute;
`

export default function About() {

    const [open, setOpen] = useState(false);
    const node = useRef();
    const r = useRouter();

    return (
        <div className="setting">
            <NavBar />
            <div className="menu" ref={node}>
                <Hamburger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
            </div>
            <LayoutComp>
                <img src={logoData.src} alt="Timearth Logomark" />
                <h1>{PageTitle}</h1>
                <DescCont>
                    <h2>Our planet is in <Em>danger.</Em></h2>
                    <h4>Human actions are the leading cause of climate change. Factors such as transportation and water usage change yield detrimental effects over time.</h4>
                </DescCont>
                <DescCont>
                    <h2>Our <Em>Purpose</Em></h2>
                    <h4>This app was created to bring awareness to the impact our everyday actions can have on the planet.</h4>
                </DescCont>
            </LayoutComp>
            <Button
                className="primary large"
                onClick={
                    () => {
                        r.push(
                            {
                                pathname: "/"
                            }
                        )
                    }
                }>{BtnText}
            </Button>
        </div>
    )
}