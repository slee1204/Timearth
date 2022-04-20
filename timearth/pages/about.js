import { useRouter } from "next/router";
import styled from 'styled-components';
import { PageTitle, BtnText } from '../data/about_content'
import NavBar from "../comps/NavBar";

const LayoutComp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 6.5em;
`

const Em = styled.span`
    color: #FF9042;
    font-style: normal;
    font-weight: 700;
`



const DescCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: center;
    width: 320px;    
`



export default function Home() {

    const r = useRouter();
    return (
        <LayoutComp>
            <NavBar />
            <img className="logomark" src="/logomark.svg" alt="Timearth Logomark" />
            <h1>{PageTitle}</h1>
            <h2>Our planet is in <Em>danger.</Em></h2>
            <DescCont>
                <h4>
                    Human actions are the leading
                    cause of climate change.
                    Factors such as transportation and water usage change
                    yield detrimental effects over time.
                </h4>
            </DescCont>
            <h2>Our <Em>Purpose</Em></h2>
            <DescCont>
                <h4>
                    This app was created to bring
                    awareness to the impact our everyday
                    actions can have on the planet.
                </h4>
            </DescCont>
            <button
                className="primary large"
                onClick={
                    () => {
                        r.push(
                            {
                                pathname: "/"
                            }
                        )
                    }
                }>{BtnText}
            </button>
        </LayoutComp>
    )
}