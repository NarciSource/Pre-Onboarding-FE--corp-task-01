import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import axios from 'axios';

function Home() {
    const [issues, setIssues] = useState([
    ]);

    (async function callIssues() {
        const url = "https://api.github.com/repos/angular/angular-cli/issues";    

        let response = await axios.get(url);
        setIssues([...issues, ...response.data]);
    })();


    return (
        <div>
            <div className='issue-list'>
                <h1>Angular / Angular-cli</h1>
                <ul>
                {issues.map((item, idx)=> (
                    <li key={idx}>
                        <Link to={`/detail/${item.number}`}>
                            <div>
                                <h3>{`#${item.number} ${item.title}`}</h3>
                                <div>
                                    <span>작성자: {item.user.login}</span>
                                    ,&nbsp;
                                    <sapn>작성일: {item.created_at}</sapn>
                                </div>
                            </div>
                            <div>
                                <span>코멘트: {item.comments}</span>
                            </div>
                        </Link>
                    </li>
                ))}
                </ul>
            </div>
            <hr></hr>

            <div className='issue-detail'>
                <Outlet></Outlet>
            </div>
        </div>
    );
}

export default Home;