import { useState, useEffect, Fragment } from "react";
import styled from "styled-components";
import Store from "../store/store";
import callIssuesWithHook from "../network/callIssues";
import IssueComp from "../components/IssueComp";
import AdsComp from "../components/AdsComp";

function List() {
    const [issues, setIssues] = useState([]);
    const [selectedNumber, setSelectedNumber] = useState(null);
    const callIssues = callIssuesWithHook(setIssues);

    useEffect(() => {
        let page = 0;
        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight;
            const scrollTop = document.documentElement.scrollTop;
            const clientHeight = document.documentElement.clientHeight;
            const threshold = 10;

            if (scrollHeight - scrollTop <= clientHeight + threshold) {
                page++;
                console.log(`${page}번째 이슈 목록 불러오는 중`);
                callIssues(page);
            }
        };

        callIssues();

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <ListDiv>
            <h1>Angular / Angular-cli</h1>
            <ul>
                <Store.Provider value={{ selectedNumber, setSelectedNumber }}>
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
