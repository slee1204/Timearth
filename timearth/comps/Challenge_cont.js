import { useRouter } from "next/router";
import styled from 'styled-components';
import { cat1, cat2, cat3, cat4, cat5, cat6 } from "../data/intro_content";

const Challenge_cont = styled.div`
    border: 1px solid lightgrey;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
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
    margin-top: 1em
`

const ChallengeImg = styled.img`
    width: 20%;
    height: 80%;
`

export default function ChallengeCont() {
    return <Challenge_cont>
        <ChallengeHeader>
            <h2>Challenge Category</h2>
            <ChallengeImg src={cat1.img} />
        </ChallengeHeader>
        <h3>Take the bus twice a week instead of driving to work!</h3>
        <div>Earth minutes saved in a year: 120 mins</div>
        <Button className="secondary small">Start</Button>
    </Challenge_cont>
}