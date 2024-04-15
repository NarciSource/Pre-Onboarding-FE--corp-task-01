import { useLocation } from "react-router-dom";
import styled from "styled-components";

function Detail() {
    return <DetailDiv dangerouslySetInnerHTML={{ __html: useLocation().state.body }}></DetailDiv>;
}

const DetailDiv = styled.div`
    overflow: scroll;
    border: 1px solid;
    padding: 10px;
    font-size: 10px;
`;

export default Detail;
