import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Store from "../store/store";
import IssueHeaderComp from "./IssueHeaderComp";

function IssueComp({ issue }) {
    const navigate = useNavigate();
    const [selectedNumber, setSelectedNumber] = useState(Store);

    const linkEvent = (targetNumber) => (e) => {
        if (selectedNumber === targetNumber) {
            e.preventDefault();
            setSelectedNumber(null);
            navigate(-1);
        } else {
            setSelectedNumber(targetNumber);
        }
    };

    return (
        <IssueDiv>
            <Link to={`/detail/${issue.number}`} state={{ body: issue.body_html }} onClick={linkEvent(issue.number)}>
                <IssueHeaderComp issue={issue}></IssueHeaderComp>
            </Link>

            {selectedNumber === issue.number && <Outlet></Outlet>}
        </IssueDiv>
    );
}

const IssueDiv = styled.div`
    & > a {
        display: flex;
        text-decoration: none;
        color: inherit;
    }
    & > a:hover {
        color: inherit;
    }
`;

export default IssueComp;
