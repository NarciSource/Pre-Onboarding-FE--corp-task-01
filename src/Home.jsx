import { useState, useEffect, Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Octokit } from '@octokit/rest';
import keys from './keys.json'

function Home() {
    const [issues, setIssues] = useState([]);
    const [selectedNumber, setSelectedNumber] = useState(null);

    useEffect(()=> {
        (async function callIssues() {
            const url = "https://api.github.com/repos/angular/angular-cli/issues";
    
            const octokit = new Octokit({
                auth: keys.REACT_APP_GITHUB_AUTH,
            });
    
            let response = await octokit.request('GET '+url);
            setIssues([...issues, ...response.data]);
        })();
    }, []);


    return (
        <div>
            <div className='issue-list'>
                <h1>Angular / Angular-cli</h1>
                <ul>
                {issues.slice(0,5).map((item, idx)=> (
                    <Fragment key={idx}>
                        <li>
                            <Link to={`/detail/${item.number}`} onClick={()=> setSelectedNumber(item.number)}>
                                <div>
                                    <h3>{`#${item.number} ${item.title}`}</h3>
                                    <div>
                                        <span>작성자: {item.user.login}</span>
                                        ,&nbsp;
                                        <span>작성일: {item.created_at}</span>
                                    </div>
                                </div>
                                <div>
                                    <span>코멘트: {item.comments}</span>
                                </div>
                            </Link>

                            {selectedNumber === item.number && (
                                <div className='issue-detail'>
                                    <Outlet></Outlet>
                                </div>
                            )}
                        </li>
                        {idx%5===4 && (
                            <li>
                                <img src='/ads.jpg' alt='' />
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