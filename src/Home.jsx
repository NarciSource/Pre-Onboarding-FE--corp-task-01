import { useState, useEffect, Fragment } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Octokit } from '@octokit/rest';
import keys from './keys.json'
import './Home.scss';

function Home() {
    const [issues, setIssues] = useState([]);
    const [selectedNumber, setSelectedNumber] = useState(null);
    const navigate = useNavigate();

    useEffect(()=> {
        (async function callIssues() {
            const url = "https://api.github.com/repos/angular/angular-cli/issues";
    
            const octokit = new Octokit({
                auth: keys.REACT_APP_GITHUB_AUTH,
            });
    
            let response = await octokit.request('GET '+url, {
                headers: {
                    Accept: 'application/vnd.github.html+json',
                },
            });

            setIssues([...issues, ...response.data]);
        })();
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
                {issues.slice(0,7).map((item, idx)=> (
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