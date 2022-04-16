import ChallengeCont from "../comps/Challenge_cont";
import Menu from "../comps/Menu";
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
    return <Layout>
        <Menu></Menu>
        <h1>Challenges</h1>
        <h3>See how you can help the Earth extend its lifespan!</h3>
        <div className="challenges">
            <ChallengeCont></ChallengeCont>
            <ChallengeCont></ChallengeCont>
        </div>
        <Button className="primary large">{BtnText}</Button>
    </Layout>
}