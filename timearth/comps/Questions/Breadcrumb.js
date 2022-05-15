import styled from "styled-components";
import { qs } from "../../data/question_content";
import { useRouter } from "next/router";
import React from "react";

const BreadcrumbComp = styled.div`
  display: flex;
  width: 330px;
  height: 57px;
  justify-content: space-between;
  align-items: flex-end;
`;
const Category = styled.div`
  display: flex;
  flex-direction: column;
  width: 46px;
  height: 55px;
`;
const CatImg = styled.img`
  width: 100%;
  height: 100%;
  visibility: ${props => props.visibility || "hidden"};
`;
const Bar = styled.div`
  width: 46px;
  height: 10px;
  background-color: ${props => props.color || "#C4C4C4"};
  `;

const breadcomp_data = {
    inactive: {
        color: "#C4C4C4",
        visibility: "hidden"
    },
    active: {
        color: "#FF9042",
        visibility: "visible"
    }
}

export default function Breadcrumb() {
    const r = useRouter();
    var { qnum, type } = r.query;

    if (qnum === undefined) {
        qnum = 0;
    }

    return <BreadcrumbComp>
        <Category>
            <CatImg
                src={qs[qnum].img}
                visibility={(type === "Transportation") ? breadcomp_data.active.visibility : breadcomp_data.inactive.visibility} />
            <Bar color={breadcomp_data.active.color} />
        </Category>
        <Category>
            <CatImg
                src={qs[qnum].img}
                visibility={type === "Eating Habits" ? breadcomp_data.active.visibility : breadcomp_data.inactive.visibility} />
            <Bar color={qnum >= 2 ? breadcomp_data.active.color : breadcomp_data.inactive.color} />
        </Category>
        <Category>
            <CatImg
                src={qs[qnum].img}
                visibility={type === "Water Usage" ? breadcomp_data.active.visibility : breadcomp_data.inactive.visibility} />
            <Bar color={qnum >= 4 ? breadcomp_data.active.color : breadcomp_data.inactive.color} />
        </Category>
        <Category>
            <CatImg
                src={qs[qnum].img}
                visibility={type === "Electricity Usage" ? breadcomp_data.active.visibility : breadcomp_data.inactive.visibility} />
            <Bar color={qnum >= 6 ? breadcomp_data.active.color : breadcomp_data.inactive.color} />
        </Category>
        <Category>
            <CatImg
                src={qs[qnum].img}
                visibility={type === "Waste" ? breadcomp_data.active.visibility : breadcomp_data.inactive.visibility} />
            <Bar color={qnum >= 8 ? breadcomp_data.active.color : breadcomp_data.inactive.color} />
        </Category>
        <Category>
            <CatImg
                src={qs[qnum].img}
                visibility={type === "Shopping Habits" ? breadcomp_data.active.visibility : breadcomp_data.inactive.visibility} />
            <Bar color={qnum >= 10 ? breadcomp_data.active.color : breadcomp_data.inactive.color} />
        </Category>
    </BreadcrumbComp>
}