import ChallengeCont from "../comps/Challenge_cont";
import { Hamburger, Menu } from "../comps/Menu";
import React from "react";
import NavBar from "../comps/NavBar";
import styled from 'styled-components';
import { BtnText } from "../data/challenge_content";

export const Layout = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-center: center;
    margin-top: 6.5em;

    @media only screen and (max-width: 600px) and (max-height: 750px) {
        margin-top: 4em;
    }
`
export const Button = styled.button`
    margin: 1em;
`

export default function Challenges() {

    const [open, setOpen] = React.useState(false);
    const node = React.useRef();


    return <Layout>
        <NavBar />
        <div className="menu" ref={node}>
            <Hamburger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
        </div>
        <h1>Challenges</h1>
        <h3>See how you can help the Earth extend its lifespan!</h3>
        <div className="challenges">
            <ChallengeCont></ChallengeCont>
            <ChallengeCont></ChallengeCont>
        </div>
        <Button className="primary large">{BtnText}</Button>
    </Layout>
}