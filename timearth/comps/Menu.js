import { useRouter } from "next/router";
import styled from 'styled-components';
import React from "react";

const OverlayComp = styled.div`
    width: 290px;
    height: 100%;
    z-index: 1;
    left: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    text-align: left;
    padding: 1.5rem;
    position: absolute;
    padding-top: 8em;
`
const MenuItem = styled.li`
    list-style-type: none;
    text-align: left;
    padding-bottom: .5em;
    font-weight: 600;
    font-size: 20px;
    line-height: 27px;
    cursor: pointer;

    &:hover {
        color: #FF9042;
      }
`
const LogoImg = styled.img`
    width: 172px;
    height: 54px;
    margin-bottom: 2em;
`
const Divider = styled.div`
    width: 100%;
    border: 0.5px solid #C4C4C4;
    margin-bottom: 2em;
`
const HamburgerComp = styled.div`
    position: absolute;
    left: 30px;
    top: 60px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    padding: 0;
    z-index: 2;

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => open ? '#000000' : '#000000'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }

    @media only screen and (min-width: 700px) {
        display: none;
    }
`

export const Menu = ({ open }) => {

    const r = useRouter();

    return (
        <OverlayComp open={open}>
            <LogoImg src="/logo-horizontal.svg" />
            <MenuItem
                onClick={
                    () => {
                        r.push(
                            {
                                pathname: "/intro"
                            }
                        )
                    }
                }>
                Log Activities
            </MenuItem>
            <Divider />
            <MenuItem
                onClick={
                    () => {
                        r.push(
                            {
                                pathname: "/challenges"
                            }
                        )
                    }
                }>
                Challenges
            </MenuItem>
            <Divider />
            <MenuItem
                onClick={
                    () => {
                        r.push(
                            {
                                pathname: "/about"
                            }
                        )
                    }
                }>
                About Us
            </MenuItem>
        </OverlayComp>
    )
}

export const Hamburger = ({ open, setOpen }) => {
    
    return (
        <HamburgerComp open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
        </HamburgerComp>
    )
}
