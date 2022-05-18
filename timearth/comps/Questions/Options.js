import styled from 'styled-components';
import { useRouter } from "next/router";
import { storeChoice, convertToScore } from '../../data/question_content';
import React, { useState, useEffect } from 'react'

export const OptionTitle = styled.h2`
    margin-top: 0;
`
export const OptionCont = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 310px;
    height: 50px;
    background: ${props => props.bg || "#FFFFFF"};
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    margin-bottom: 20px;
    padding: 1em;
    font-weight: ${props => props.fontweight || "400"};
    font-size: 18px;
    line-height: 25px;
    color: ${props => props.txtcolor || "#000000"};
    transition: ${props => props.transition};
    text-align: left;
    cursor: pointer;
`

export const OpsSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`
export const Input = styled.input`
    border: solid 1px;
    border-radius: 6px;
    width: 50px;
    height: 30px;
    text-align: right;
    font-size: 16px;
`

export const RadioBtn = styled.input`
    width: 28px;
    height: 28px;
    border: ${props => props.border || "solid 2px #DADADA"};
    border-radius: 50%;
    -webkit-appearance: none;
`

const ops_data = {
    inactive: {
        bg: "#FFFFFF",
        txtcolor: "#000000",
        fontweight: "400",
        border: "solid 2px #DADADA",
    },
    active: {
        bg: "#6B97ED",
        txtcolor: "#FFFFFF",
        fontweight: "600",
        transition: "background .3s",
        border: "solid 6px #FFFFFF",
    },
    hover: {
        bg: "#6B97ED",
        txtcolor: "#FFFFFF",
        fontweight: "600"
    }
}



export default function Options({ q = "question", arr = [], c = "category", active = true }) {

    const r = useRouter();
    var { qnum } = r.query;


    const [selectedVal, setSelectedVal] = useState([]);
    const [buttonState, setButtonState] = useState("inactive");

    // useEffect(() => {
    //     if (arr.length > 0) {
    //         setButtonState(
    //             arr.map(() => {
    //                 "inactive"
    //             })
    //         )
    //         console.log(arr);
    //     }
    // }, [arr])

    useEffect(() => {
        setButtonState("inactive")
    }, [qnum])

    if (qnum === undefined) {
        qnum = 0;
    }

    if ((qnum == 6) || (qnum == 8)) {
        return <div>
            <h1>{c}</h1>
            <OptionTitle>
                {q}
            </OptionTitle>
            <OpsSection>
                {
                    arr.map((o, i) => <OptionCont key={o.txt}>{o.txt}
                        <div>
                            <Input
                                type="text"
                                maxLength="4"
                                pattern="\d{4}"
                                placeholder='#'
                                onChange={
                                    (e) => {
                                        selectedVal[i] = Number(e.target.value);
                                        var input_sum = Number(e.target.value);
                                        var initialValue = 0;
                                        input_sum = Number(selectedVal.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue));
                                        console.log(selectedVal, "Sum of the array is " + input_sum);
                                        storeChoice(qnum, convertToScore(input_sum));
                                    }
                                }
                            />
                            {
                                (qnum == 6) && <span className='unit'>mins</span>
                            }
                            {
                                (qnum == 8) && <span className='unit'>items</span>
                            }
                        </div>
                    </OptionCont>)
                }
            </OpsSection>
        </div>
    }

    return <div>
        <h1>{c}</h1>
        <OptionTitle>
            {q}
        </OptionTitle>
        <OpsSection>
            {
                arr.map((o, i) =>
                    <OptionCont
                        bg={buttonState === i ? ops_data.active.bg : ops_data.inactive.bg}
                        txtcolor={buttonState === i ? ops_data.active.txtcolor : ops_data.inactive.txtcolor}
                        fontweight={buttonState === i ? ops_data.active.fontweight : ops_data.inactive.fontweight}
                        transition={buttonState === i ? ops_data.active.transition : ops_data.inactive.transition}
                        key={o.txt}
                        onClick={
                            () => {
                                setButtonState(i)
                                storeChoice(qnum, o.score)
                                // const inps = [...buttonState];
                                // inps[i] = "active";
                            }
                        }
                    >{o.txt}
                        <RadioBtn
                            border={buttonState === i ? ops_data.active.border : ops_data.inactive.border}
                            type='radio'
                        />
                    </OptionCont>
                )
            }
        </OpsSection>
    </div>
}