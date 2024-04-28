import styled from "styled-components";

function AdsComp() {
    return (
        <AdsAnchor href="https://www.wanted.co.kr/">
            <div></div>
        </AdsAnchor>
    );
}

const AdsAnchor = styled.a`
    display: flex;
    justify-content: center;

    div {
        width: 350px;
        height: 200px;
        background-image: url(${process.env.PUBLIC_URL}/ads.jpg);
        background-size: cover;
        position: relative;
    }
    div::before {
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
