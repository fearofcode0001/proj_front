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
    animation: transY 2s ease-in-out; 
    @keyframes transY {
        0% {
          transform: translateY(400px); // 이 top 기준으로 400px 내려간 곳에서 시작할거다
          opacity: 0; // 처음에는 가려놓고 
        }
        100% {
          transform: translateY(0px);   // 그리고 도착지는 원래 지점
          opacity: 1; // 마지막에 슬슬 보여주기
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