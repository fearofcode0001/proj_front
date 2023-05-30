import React from "react";
import styled from "styled-components";
import bckimg from "../img/fog.jpg"

const Container =styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
`
const Head = styled.div`
    width: 100%;
    height: 180px;
    background-color: rgb(28,20,243);
    display: flex;

`
const Body = styled.div`
    width: 100%;
    height: 100%;
`
const Foot = styled.div`
    width: 100%;
    height: 180px;
    background-color: rgb(28,20,243);
`
const Main= () =>{
    
    return(
        <Container>
            <Head>
            </Head>
            <Body>                
            </Body>
            <Foot>
            </Foot>

        </Container>

    );
};

export default Main;