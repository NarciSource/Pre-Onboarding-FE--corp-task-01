import { useState } from 'react';

function Home() {
    const [issues, setIssues] = useState([
        {
            title: "#111 issue title",
            author: "name",
            date: "2019년12월31일",
            comments: 67,
        }
    ]);

    return (
        <div>
            <h1>Angular / Angular-cli</h1>
            <ul>
            {issues.map((item, idx)=> (
                <li key={idx}>
                <div>
                    <h3>{item.title}</h3>
                    <div>
                    <span>작성자: {item.author}</span>
                    <sapn>작성일: {item.date}</sapn>
                    </div>
                </div>
                <div>
                    <span>코멘트: {item.comments}</span>
                </div>
                <hr></hr>
                </li>
            ))}
            </ul>
        </div>
    );
}

export default Home;