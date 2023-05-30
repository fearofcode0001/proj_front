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
    //이미지를 사용 하려면  ${0}양식 사용
    background-image:url(${bckimg});
    background-size: contain;
    animation: transX 3s ease-in-out; 
    //애니메이션 무한반복
    animation-iteration-count: infinite;
    @keyframes transX {
        0% {
          transform: translateX(400px); // 이 top 기준으로 400px 내려간 곳에서 시작할거다

        }
        100% {
          transform: translateX(0px);   // 그리고 도착지는 원래 지점

        }
      }
   
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