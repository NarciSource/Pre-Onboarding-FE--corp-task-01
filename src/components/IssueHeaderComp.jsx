import styled from "styled-components";

function IssueHeaderComp({ issue }) {
    const formattedDate = (dateString) => new Intl.DateTimeFormat("ko-KR").format(new Date(dateString));

    return (
        <IssueHeaderDiv>
            <div className="title">
                <h3>{`#${issue.number} ${issue.title}`}</h3>
                <small>
                    <span>작성자: {issue.user.login}</span>
                    ,&nbsp;
                    <span>작성일: {formattedDate(issue.created_at)}</span>
                </small>
            </div>
            <small className="comment">
                <span>코멘트: {issue.comments}</span>
            </small>
        </IssueHeaderDiv>
    );
}

const IssueHeaderDiv = styled.div`
    display: flex;
    width: 100%;
    h3 {
        margin: 5px 0;
        font-size: 15px;
    }
    small {
        font-size: 11px;
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

export default IssueHeaderComp;
