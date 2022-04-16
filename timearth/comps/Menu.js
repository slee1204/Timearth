import { useRouter } from "next/router";
import styled from 'styled-components';

const Hamburger = styled.img`
    position: absolute;
    width: 30px;
    height: 26px;
    left: 30px;
    top: 60px;
    cursor: pointer;
`
const MenuOverlay = styled.div`
    width: 290px;
    height: 100%;
    background-color: white;
    position: fixed;
    z-index: 1;
    left:0;
    bottom: 0;
    display: flex;
    flex-direction: column;
`
const MenuItem = styled.li`
    list-style-type: none;
    text-align: left;
    padding-bottom: .5em;
    font-weight: 600;
    font-size: 20px;
    line-height: 27px;
`
const LogoImg = styled.img`
    width: 70%;
    margin: 2em;
    float: left;
    margin-top: 4em;
`
const Divider = styled.img`
    width: 80%;
    border: 0.5px solid #C4C4C4;
    float: left;
    margin-bottom: 3em;
`

export function showMenu() {
    return <MenuOverlay>
        <LogoImg src="/logo-horizontal.svg" />
        <ul>
            <Lists txt="Log Activities" />
            <Divider />
            <Lists txt="Challenges" />
            <Divider />
            <Lists txt="About Us" />
            <Divider />
        </ul>
    </MenuOverlay>
}

export function Lists({
    txt = "Item #1"
}) {
    return <MenuItem>
        {txt}
    </MenuItem>
}

export default function Menu() {
    const r = useRouter();
    return <Hamburger
        src="/hamburger.svg"
        alt="Hamburger Menu"
        onClick={
            () => {
                r.showMenu()
            }
        }
    />
}