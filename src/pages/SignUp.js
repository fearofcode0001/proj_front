import React from "react";
import styled from "styled-components";

const SignUp = () => {
    const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    overflow-y: scroll;
    `;
    const InerContainer = styled.div`
    .top1{
        font-weight: bolder;
        font-size: 50px;
    }
    `;
    return(
        <Container>
            <InerContainer>
                <div className="top1">
                    iMMUTABLE
                </div>
            </InerContainer>
        </Container>
    );
};

export default SignUp