import styled from 'styled-components';
import CateGrid from '../comps/CateGrid'
import { PageTitle, BtnText } from '../data/intro_content';
import Menu from '../comps/Menu'
import { useRouter } from 'next/router';

const Em = styled.span`
    color: #FF9042;
    font-style: normal;
    font-weight: 700;
`

const LayoutComp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 6.5em;

    @media only screen and (max-width: 600px) and (max-height: 750px) {
        margin-top: 5em;
`

export default function Intro() {

    const r = useRouter();
    return (
        <LayoutComp>
            <Menu />
            <h1>{PageTitle}</h1>
            <h4>Calculate how many Earth minutes you saved today based our <Em>12-question quiz</Em> on the following categories:</h4>
            <CateGrid />
            <button
                className='primary large'
                onClick={
                    () => {
                        r.push(
                            {
                                pathname: "/questions"
                            }
                        )
                    }
                }
            >{BtnText}</button>
        </LayoutComp>
    )
}