import { useRouter } from "next/router";
import styled from 'styled-components';
import { PageTitle, BtnText } from '../data/index_content'
import { Hamburger, Menu } from "../comps/Menu";
import React from "react";
import NavBar from "../comps/NavBar";
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
    color: #6B97ED;
    font-style: normal;
    font-weight: 700;
`

const Logo = styled.img`
    width: 40%;
    height: 40%;

    @media only screen and (min-width: 700px) {
        width: 20%;
        height: 20%;
    }

    @media only screen and (min-height: 1024px) {
        width: 30%;
        height: 30%;
    }
`

export default function Home() {

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
                <Logo src={logoData.src} alt="Timearth Logomark" />
                <h1>{PageTitle}</h1>
                <h4>Log your daily activities and see how many <Em>Earth minutes</Em> you have saved today!</h4>
            </LayoutComp>
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
        </div>
    )
}