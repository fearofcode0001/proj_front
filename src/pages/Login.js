import React from "react";
import styled from "styled-components";

const Container =styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Body = styled.div`
    border: 1px solid black;
    width: 300px;
    height: 500px;    
`

const Login =()=>{

    return(
        <Container>
            <Body>

            </Body>
        </Container>
    );
};

export default Login;