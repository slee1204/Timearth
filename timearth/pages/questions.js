import { useRouter } from "next/router";
import styled from 'styled-components';
import Breadcrumb from "../comps/Questions/Breadcrumb";
import Options from "../comps/Questions/Options";
import { getScore, getResults, qs, storeChoice } from "../data/question_content"
import Overlay from "../comps/Questions/Overlay";
import React, { useState, useEffect } from "react";
import { FaChevronLeft, HiChevronRight } from 'react-icons/fa';

export const Layout = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-center: center;
    margin-top: 3em;
`

export const BackButton = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    cursor: pointer;
    display: flex;
    align-items: center;
`

export const SkipButton = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    cursor: pointer;
    color: #C4C4C4;
`

const StyledIcon = styled(FaChevronLeft)`
    width: 60%;
    height: 60%;
`

const BtnLarge = styled.button`
    background-color: ${props => props.bg || "#DADADA"};;
    position: absolute;
    bottom: 15.88%;
`

export const TopBtns = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

const btn_data = {
    inactive: {
        bg: "#EDEDED",
    },
    active: {
        bg: "#FFFFFF",
    }
}


export default function Questions() {

    const r = useRouter();
    const [OverlayOpen, setOverlayOpen] = useState(false);

    useEffect(() => {
        if (!r.isReady) return;
        r.push({
            pathname: "/questions",
            query: {
                qnum: 0,
                type: qs[0].cat
            }
        })
    }, [])

    var { qnum, type } = r.query;

    if (qnum === undefined) {
        qnum = 0;
    }

    return (
        <Layout>
            <TopBtns>
                <BackButton
                    onClick={() => { r.back() }}>
                    <StyledIcon />
                    <span>Back</span>
                </BackButton>
                {
                    Number(qnum) < qs.length - 1 && <SkipButton
                        onClick={
                            () => {
                                r.push({
                                    pathname: "/questions",
                                    query: {
                                        qnum: Number(qnum) + 1 > qs.length - 1 ? qs.length - 1 : Number(qnum) + 1,
                                        type: qs[Number(qnum) + 1].cat
                                    }
                                })
                            }
                        }>Skip</SkipButton>
                }
            </TopBtns>
            <Breadcrumb />
            <Options
                q={qs[qnum].title}
                arr={qs[qnum].ops}
                c={qs[qnum].cat}
                active ={true}
            />
            {
                Number(qnum) < qs.length - 1 &&
                <BtnLarge
                    bg={btn_data.inactive.bg}
                    onClick={
                        () => {
                            r.push({
                                pathname: "/questions",
                                query: {
                                    qnum: Number(qnum) + 1 > qs.length - 1 ? qs.length - 1 : Number(qnum) + 1,
                                    type: qs[Number(qnum) + 1].cat
                                }
                            })
                        }
                    }

                >Next</BtnLarge>
            }
            {
                Number(qnum) >= qs.length - 1 &&
                <BtnLarge
                    onClick={
                        () => {
                            setOverlayOpen(true)
                            getResults();
                        }
                    }
                >See your score</BtnLarge>
            }
            <div className="background-shape"></div>
            <Overlay type="result" trigger={OverlayOpen}></Overlay>
        </Layout>
    )
}