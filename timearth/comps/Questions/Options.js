import styled from 'styled-components';
import { useRouter } from "next/router";
import React, {useState, useContext} from 'react';
import { qs } from '../../data/question_content';
import AppContext from '../../src/context/AppContext';

export const OptionTitle = styled.h2`
    margin-top: 0;
`
export const OptionBtn = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 310px;
    height: 50px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    margin-bottom: 20px;
    margin-right: 20px;
    padding: 1em;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
`

export const OptionCont = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`


export default function Options(
    {
        q = "question",
        arr = [],
        c = "category"
    }
) {
    const r = useRouter();
    var { qnum } = r.query;

    if (qnum === undefined) {
        qnum = 0;
    }


    const { optionChosen, setOptionChosen } = useContext(AppContext);

    return <div>
        <h1>{c}</h1>
        <OptionTitle>
            {q}
        </OptionTitle>
        <OptionCont>
            {
                arr.map((o, i) => <OptionBtn onClick={()=> {
                    setOptionChosen(o.score);
                }}>{o.txt}
                    <input
                        type='radio'
                        className='radio'
                        name='selected' />
                </OptionBtn>)
            }
        </OptionCont>
    </div>
}

