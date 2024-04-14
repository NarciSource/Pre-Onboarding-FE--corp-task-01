import styled from "styled-components";

function AdsComp() {
    return <AdsDiv></AdsDiv>;
}

const AdsDiv = styled.div`
    width: 350px;
    height: 200px;
    background-image: url("/ads.jpg");
    background-size: cover;
    position: relative;

    &::before {
        content: "ads";
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(0, 0, 0, 0.5); /* 반투명 배경 */
        color: white;
        font-size: 20px;
    }
`;

export default AdsComp;
