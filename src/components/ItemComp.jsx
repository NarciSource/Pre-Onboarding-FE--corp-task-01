import styled from "styled-components";

function ItemComp({ item }) {
    const formattedDate = (dateString) => new Intl.DateTimeFormat("ko-KR").format(new Date(dateString));

    return (
        <ItemDiv>
            <div className="title">
                <h3>{`#${item.number} ${item.title}`}</h3>
                <small>
                    <span>작성자: {item.user.login}</span>
                    ,&nbsp;
                    <span>작성일: {formattedDate(item.created_at)}</span>
                </small>
            </div>
            <small className="comment">
                <span>코멘트: {item.comments}</span>
            </small>
        </ItemDiv>
    );
}

const ItemDiv = styled.div`
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

export default ItemComp;
