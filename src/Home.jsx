import { useState, useEffect, Fragment } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Octokit } from '@octokit/rest';
import keys from './keys.json'
import './Home.scss';

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
            <div className='issue-list'>
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
                                <div className='issue-detail'>
                                    <Outlet></Outlet>
                                </div>
                            )}
                        </li>
                        {idx%5===4 && (
                            <li>
                                <div className='ads'></div>
                            </li>
                        )}
                    </Fragment>
                ))}
                </ul>
            </div>
            <hr></hr>
        </div>
    );
}

export default Home;