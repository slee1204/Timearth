import { useRouter } from "next/router";
import styled from 'styled-components';
import { Challenges } from "../../data/challenge_content";
import React, {useState} from "react";
import Overlay from "./Overlay"

const Challenge_cont = styled.div`
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    padding: 10px;
    padding-top: 0;
    text-align: left;
    margin: 0.5em;
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
    const [startbtn, setStartbtn] = useState(false);
    const [challenge, setChallenge] = useState(false);
    return <Challenge_cont>                                                                                           
         <ChallengeHeader>
             <h2>{Challenges[chnum].title}</h2>
             <ChallengeImg src={Challenges[chnum].img} />
         </ChallengeHeader>
        <h3>{Challenges[chnum].desc}</h3>
         <div>Earth minutes saved in a year: {Challenges[chnum].time} mins</div>
        <Button className={startbtn ? "secondary small started" : "secondary small"}
        onClick={
            ()=> {
                setStartbtn(!startbtn); 
                setChallenge(true)}

        }>
         {startbtn ? "Started!" : "Start"}
        </Button>
        <Overlay type="challenge" trigger={challenge} setTrigger={setChallenge}></Overlay>
    </Challenge_cont>
}