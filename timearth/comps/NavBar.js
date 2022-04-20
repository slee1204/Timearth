import styled from 'styled-components';
import { useRouter } from "next/router";

const NavbarComp = styled.div`
    width: 100%;
    background-color: #6B97ED;
    top: 0;
    position: absolute;
    display: flex;
    justify-content: space-between;
    
    @media only screen and (max-width: 700px) {
        display: none;
    }
`

const MenuItem = styled.li`
    list-style-type: none;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: white;
    padding: 0.8em;
    cursor:pointer;

    &:hover {
        color: white;
        text-decoration: underline;
    }
`

const Lists = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    align-items: center;
`

const Logo = styled.img`
    width: 8em;
    padding-left: 1em;
    cursor: pointer;
`

export default function NavBar() {

    const r = useRouter();

    return <NavbarComp>
        <Logo
            src="/logo-horizontal.svg"
            onClick={
                () => {
                    r.push(
                        {
                            pathname: "/"
                        }
                    )
                }
            } />
        <Lists>
            <MenuItem
                onClick={
                    () => {
                        r.push(
                            {
                                pathname: "/intro"
                            }
                        )
                    }
                }>Log Activities</MenuItem>
            <MenuItem
                onClick={
                    () => {
                        r.push(
                            {
                                pathname: "/challenges"
                            }
                        )
                    }
                }>Challenges</MenuItem>
            <MenuItem
                onClick={
                    () => {
                        r.push(
                            {
                                pathname: "/about"
                            }
                        )
                    }
                }>About Us</MenuItem>
        </Lists>
    </NavbarComp>
}