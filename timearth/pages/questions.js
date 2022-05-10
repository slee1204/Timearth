import { useRouter } from "next/router";
import styled from 'styled-components';
import Breadcrumb from "../comps/Questions/Breadcrumb";
import Options from "../comps/Questions/Options";
import { getResults, qs } from "../data/question_content"
import Overlay from "../comps/Questions/Overlay";
import React, { useState, useEffect } from "react";

export const Layout = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-center: center;
    margin-top: 3em;
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
            <BackButton
                onClick={
                    () => {
                        r.back()
                    }
                }
            >Back</BackButton>
            {Number(qnum) < qs.length - 1 && <SkipButton
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
            >Skip</SkipButton>}
            <Breadcrumb />
            <Options
                q={qs[qnum].title}
                arr={qs[qnum].ops}
                c={qs[qnum].cat}
            />

            {
                Number(qnum) < qs.length - 1 &&
                <button
                    className="default"
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

                >Next</button>
            }
            {
                Number(qnum) >= qs.length - 1 &&
                <button
                    className="default"
                    onClick={
                        () => {
                            setOverlayOpen(true)
                            getResults()
                        }
                    }
                >See your score</button>
            }
            <div className="background-shape"></div>
            <Overlay trigger={OverlayOpen}></Overlay>
        </Layout>
    )
}