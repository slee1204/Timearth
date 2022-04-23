import styled from 'styled-components';
import React from 'react';
import { useRouter } from 'next/router';
import { qs } from '../../data/question_content';

const BreadcrumbComp = styled.div`
    display: flex;
    width: 330px;
    height: 57px;
    justify-content: space-between;
    align-items: flex-end;
`

const Category = styled.div`
    display:flex;
    flex-direction: column;
    width: 46px;
    height: 55px;
`
const CatImg = styled.img`
    width: 100%;
    height: 100%;   
`
const Bar = styled.div`
    width: 46px;
    height: 10px;
    background-color: ${props => style[props.style].color};
`

export const style = {
    default: {
        color: "#C4C4C4",
    },
    onPage: {
        color: "#FF9042",
    }
}

export default function Breadcrumb() {
    const r = useRouter();
    var { qnum } = r.query;

    if (qnum === undefined) {
        qnum = 0;

    }

    
//     return <BreadcrumbComp>
//     <Category>
//         <CatImg src={qs[qnum].img} />
//         <Bar style="onPage" />
//     </Category>
//     <Bar style="default" />
//     <Bar style="default" />
//     <Bar style="default" />
//     <Bar style="default" />
//     <Bar style="default" />
// </BreadcrumbComp>
    

}



