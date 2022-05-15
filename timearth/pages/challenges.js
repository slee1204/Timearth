import ChallengeCont from "../comps/Challenges/Challenge_cont";
import { Hamburger, Menu } from "../comps/Menu";
import React, {useState} from "react";
import NavBar from "../comps/NavBar";
import styled from 'styled-components';
import { BtnText } from "../data/challenge_content";
import ChallengesList from "../comps/Challenges/Challenge_cont";

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
export const AllChallenges = styled.div`
display:grid;
grid-template-columns: 1fr 1fr;
@media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
`

export default function ChallengesPage() {
    

    const [open, setOpen] = React.useState(false);
    const [more, setMore] = React.useState(false);
    const [btntext, setBtntext] = React.useState(false);

    const node = React.useRef();

    return <Layout>
        <NavBar />
        <div className="menu" ref={node}>
            <Hamburger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
        </div>
        <h1>Challenges</h1>
        <h3>See how you can help the Earth extend its lifespan!</h3>
        <AllChallenges>
            <ChallengeCont chnum="0"></ChallengeCont>
            <ChallengeCont chnum="1"></ChallengeCont>
            <ChallengeCont chnum="2"></ChallengeCont>
            <ChallengeCont chnum="3"></ChallengeCont>
            <ChallengeCont chnum="4"></ChallengeCont>
            <ChallengeCont chnum="5"></ChallengeCont>
        </AllChallenges>
        {/* <Button className="primary large"
        onClick={
         ()=> {setMore(!more); setBtntext(!btntext)}
        }>{btntext ? "Show Less" : "Show More"}</Button>
        {} */}
    </Layout>
}