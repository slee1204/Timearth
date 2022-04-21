import { useRouter } from "next/router";
import styled from 'styled-components';
import { Challenges } from "../data/challenge_content";
import React, {useState} from "react";

const Challenge_cont = styled.div`
    border: 1px solid lightgrey;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    padding: 10px;
    padding-top: 0;
    text-align: left;
    margin-bottom: 1em;
`

const ChallengeHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
`

const Button = styled.button`
    margin-left: auto;
    margin-top: 1em;
`

const ChallengeImg = styled.img`
    width: 20%;
    height: 80%;
`

export default function ChallengeCont(
    {
      chnum="0"  
    }
) {
    const [startbtn, setStartbtn] = React.useState(false);
    return <Challenge_cont>                                                                                           
         <ChallengeHeader>
             <h2>{Challenges[chnum].title}</h2>
             <ChallengeImg src={Challenges[chnum].img} />
         </ChallengeHeader>
        <h3>{Challenges[chnum].desc}</h3>
         <div>Earth minutes saved in a year: {Challenges[chnum].time} mins</div>
        <Button className={startbtn ? "secondary small started" : "secondary small"}
        onClick={
            ()=> {setStartbtn(!startbtn)}
        }>
         {startbtn ? "Started!" : "Start"}
        </Button>
    </Challenge_cont>
}