import styled from 'styled-components';
import CateGrid from '../comps/CateGrid'
import { PageTitle, BtnText } from '../data/intro_content';
import { useRouter } from 'next/router';
import { Hamburger, Menu } from "../comps/Menu";
import React from "react";
import NavBar from "../comps/NavBar";

const Em = styled.span`
    color: #FF9042;
    font-style: normal;
    font-weight: 700;
`

const LayoutComp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 6.5em;

    @media only screen and (max-width: 600px) and (max-height: 750px) {
        margin-top: 5em;
`
export const Button = styled.button`
    margin: 3em;
`

export default function Intro() {

    const [open, setOpen] = React.useState(false);
    const node = React.useRef();

    const r = useRouter();

    return (
        <LayoutComp>
            <NavBar />
            <div className="menu" ref={node}>
                <Hamburger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
            </div>
            <h1>{PageTitle}</h1>
            <h4>Let's see how many <Em>minutes</Em> you can add to the Earth's lifespan! Calculate your Earth minutes based our <Em>12-question quiz</Em> on the following categories:</h4>
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
            >{BtnText}</Button>
        </LayoutComp>
    )
}