import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const FindEmail = () => {

    return(
        <Container>
            <div className="item">
                <input type="text" placeholder="EMAIL"/>
            </div>
            <div className="item">
                <input type="text" placeholder="NAME"/>
            </div>
            <div className="FindBtn">
                <button>FIND</button>
            </div>
        </Container>
    );
};

export default FindEmail;