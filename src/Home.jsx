import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

function Home() {
    const [issues, setIssues] = useState([
        {
            num: 111,
            title: "issue title",
            author: "name",
            date: "2019년12월31일",
            comments: 67,
        }
    ]);

    return (
        <div>
            <div className='issue-list'>
                <h1>Angular / Angular-cli</h1>
                <ul>
                {issues.map((item, idx)=> (
                    <li key={idx}>
                        <Link to={`/detail/${item.num}`}>
                            <div>
                                <h3>{`#${item.num} ${item.title}`}</h3>
                                <div>
                                    <span>작성자: {item.author}</span>
                                    <sapn>작성일: {item.date}</sapn>
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