import { useState, Fragment } from "react";
import styled from "styled-components";
import Store from "../store/store";
import IssueComp from "../components/IssueComp";
import AdsComp from "../components/AdsComp";
import LoadMore from "../components/LoadMore";

function List() {
    const [issues, setIssues] = useState([]);
    const [selectedNumber, setSelectedNumber] = useState(null);

    return (
        <ListDiv>
            <h1>Angular / Angular-cli</h1>
            <ul>
                <Store.Provider value={{ selectedNumber, setSelectedNumber, setIssues }}>
                    {issues.map((issue, idx) => (
                        <Fragment key={idx}>
                            <li>
                                <IssueComp issue={issue}></IssueComp>
                            </li>
                            {idx % 5 === 4 && (
                                <li>
                                    <AdsComp></AdsComp>
                                </li>
                            )}
                        </Fragment>
                    ))}
                    <LoadMore></LoadMore>
                </Store.Provider>
            </ul>
        </ListDiv>
    );
}

const ListDiv = styled.div`
    h1 {
        text-align: center;
    }
    li {
        list-style: none;
        padding: 12px 0;
        border-bottom: 1px solid black;
    }
`;

export default List;
