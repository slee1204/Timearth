import { useRouter } from "next/router";
import styled from 'styled-components';
import { PageTitle, BtnText } from '../data/index_content'
import { Hamburger, Menu } from "../comps/Menu";
import React from "react";
import NavBar from "../comps/NavBar";

const LayoutComp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 6.5em;
`

const Em = styled.span`
    color: #6B97ED;
    font-style: normal;
    font-weight: 700;
`

export default function Home() {

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
            <img className="logomark" src="/logomark.svg" alt="Timearth Logomark" />
            <h1>{PageTitle}</h1>
            <h4>Log your daily activities and see how many <Em>Earth minutes</Em> you have saved today!</h4>
            <div className="background-shape" />
            <button
                className="default"
                onClick={
                    () => {
                        r.push(
                            {
                                pathname: "/intro"
                            }
                        )
                    }
                }>{BtnText}
            </button>
        </LayoutComp>
    )
}