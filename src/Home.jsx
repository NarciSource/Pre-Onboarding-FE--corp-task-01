import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import axios from 'axios';

function Home() {
    const [issues, setIssues] = useState([]);
    const [selectedNumber, setSelectedNumber] = useState(null);

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
                ))}
                </ul>
            </div>
            <hr></hr>
        </div>
    );
}

export default Home;