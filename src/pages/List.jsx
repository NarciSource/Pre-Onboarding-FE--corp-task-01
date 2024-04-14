import { useState, useEffect, Fragment } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import callIssuesWithHook from "../network/CallIssues";
import ItemComp from "../components/ItemComp";
import AdsComp from "../components/AdsComp";

function List() {
    const [issues, setIssues] = useState([]);
    const [selectedNumber, setSelectedNumber] = useState(null);
    const navigate = useNavigate();
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

    const linkEvent = (e, targetNumber) => {
        if (selectedNumber === targetNumber) {
            e.preventDefault();
            setSelectedNumber(null);
            navigate(-1);
        } else {
            setSelectedNumber(targetNumber);
        }
    };

    return (
        <ListDiv>
            <h1>Angular / Angular-cli</h1>
            <ul>
                {issues.map((item, idx) => (
                    <Fragment key={idx}>
                        <li>
                            <Link to={`/detail/${item.number}`} state={{ body: item.body_html }} onClick={(e) => linkEvent(e, item.number)}>
                                <ItemComp item={item}></ItemComp>
                            </Link>

                            {selectedNumber === item.number && <Outlet></Outlet>}
                        </li>
                        {idx % 5 === 4 && (
                            <li>
                                <AdsComp></AdsComp>
                            </li>
                        )}
                    </Fragment>
                ))}
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
    li a {
        display: flex;
        text-decoration: none;
        color: inherit;
    }
    li a:hover {
        color: inherit;
    }
`;

export default List;
