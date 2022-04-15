import { useRouter } from "next/router";
import styled from 'styled-components';
import Breadcrumb from "../comps/Breadcrumb";
import { BtnText } from "../data/intro_content";
import { CategoryName, Question } from "../data/question_content";

export const Layout = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-center: center;
`

export const SelectionCont = styled.div`
    width: 310px;
    height: 50px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    margin: .8em;
`
export const BackButton = styled.div`
    position: absolute;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    cursor: pointer;
    left: 14px;
    top: 45px;
`
export const SkipButton = styled.div`
    position: absolute;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    cursor: pointer;
    color: #BFBFBF;
    right: 30px;
    top: 45px;
`

export default function Questions() {

    const r = useRouter();

    return (
        <Layout>
            <BackButton
                onClick={
                    () => {
                        r.back()
                    }
                }
            >Back</BackButton>
            <SkipButton>Skip</SkipButton>
            <Breadcrumb />
            <h1>{CategoryName}</h1>
            <h2>{Question}</h2>
            <div className="section-selection">
                <SelectionCont></SelectionCont>
                <SelectionCont></SelectionCont>
                <SelectionCont></SelectionCont>
                <SelectionCont></SelectionCont>
            </div>
            <div className="background-shape"></div>
            <button className="default">Next</button>
        </Layout>
    )
}