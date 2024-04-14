import { useState, useEffect, Fragment } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Octokit } from '@octokit/rest';
import keys from './keys.json'
import styled from 'styled-components';

function Home() {
    const [issues, setIssues] = useState([]);
    const [selectedNumber, setSelectedNumber] = useState(null);
    const navigate = useNavigate();

    async function callIssues(page=1) {
        const url = "https://api.github.com/repos/{owner}/{repo}/issues";
        const octokit = new Octokit({
            auth: keys.REACT_APP_GITHUB_AUTH,
        });

        let response = await octokit.request('GET '+url, {
            owner: 'angular',
            repo: 'angular-cli',
            sort: 'comments',
            page,
            headers: {
                Accept: 'application/vnd.github.html+json',
            },
        });
        setIssues(prevIssues => [...prevIssues, ...response.data]);
    }

    useEffect(()=> {
        let page = 0;
        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight;
            const scrollTop = document.documentElement.scrollTop;
            const clientHeight = document.documentElement.clientHeight;
            const threshold = 10;

            if (scrollHeight - scrollTop  <= clientHeight + threshold) {
                page++;
                console.log(`${page}번째 이슈 목록 불러오는 중`);
                callIssues(page);
            }
        };

        callIssues();

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const formattedDate = dateString=> new Intl.DateTimeFormat('ko-KR').format(new Date(dateString));

    const linkEvent = (e, targetNumber)=> {
        if (selectedNumber === targetNumber) {
            e.preventDefault();
            setSelectedNumber(null);
            navigate(-1);
        } else {
            setSelectedNumber(targetNumber);
        }
    }

    return (
        <div>
            <ListDiv>
                <h1>Angular / Angular-cli</h1>
                <ul>
                {issues.map((item, idx)=> (
                    <Fragment key={idx}>
                        <li>
                            <Link to={`/detail/${item.number}`} state={{ body: item.body_html }} onClick={e=>linkEvent(e, item.number)}>
                                <div className='title'>
                                    <h3>{`#${item.number} ${item.title}`}</h3>
                                    <small>
                                        <span>작성자: {item.user.login}</span>
                                        ,&nbsp;
                                        <span>작성일: {formattedDate(item.created_at)}</span>
                                    </small>
                                </div>
                                <small className='comment'>
                                    <span>코멘트: {item.comments}</span>
                                </small>
                            </Link>

                            {selectedNumber === item.number && (
                                <div>
                                    <Outlet></Outlet>
                                </div>
                            )}
                        </li>
                        {idx%5===4 && (
                            <li>
                                <AdsDiv></AdsDiv>
                            </li>
                        )}
                    </Fragment>
                ))}
                </ul>
            </ListDiv>
        </div>
    );
}

const ListDiv = styled.div`
    h1 {
        text-align: center;   
    }
    h3 {
        margin: 5px 0;
        font-size: 15px;
    }
    small {
        font-size: 11px;
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
    .title {
        width: calc(100% - 100px);
        h3 {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
    .comment {
        width: 70px;
        display: flex;
        align-items: center;
    }
`;

const AdsDiv = styled.div`
    width: 350px;
    height: 200px;
    background-image: url('/ads.jpg');
    background-size: cover;
    position: relative;

    &::before {
        content: 'ads';
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(0, 0, 0, 0.5); /* 반투명 배경 */
        color: white;
        font-size: 20px;
    }
`

export default Home;