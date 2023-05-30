import React from "react";
import styled from "styled-components";
import bckimg from "../img/fog.jpg"

const Container =styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow:scroll;
    ::-webkit-scrollbar {
	display:none
    }
`

const Head = styled.div`
    width: 100%;
    height: 180px;
    display: flex;
    flex-direction: column;
    padding: 0 0 0 20px;
    .top{
        height: 70px;
        font-weight: bolder;
        font-size: 50px;
    }
    .bottom{
        color: rgb(100,100,100);
        font-weight: bolder;
        cursor: pointer;
        
    }
`

const Body = styled.div`
    width: 100%;
    height: 100%;
    //이미지를 사용 하려면  ${0}양식 사용
    background-image:url(${bckimg});
    background-size: contain;
    background-repeat: none;
    animation: transX 10s; 
    //애니메이션 무한반복
    animation-iteration-count: infinite;
    @keyframes transX {
        0% {
          transform: translateX(800px); // 이 top 기준으로 400px 내려간 곳에서 시작할거다
        }
        100% {
          transform: translateX(-800px);   // 그리고 도착지는 원래 지점
        }
      } 
    overflow:scroll;
    ::-webkit-scrollbar {
	display:none /* Chrome , Safari , Opera */
}
`

const Foot = styled.div`
    width: 100%;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 9px;
    color: rgb(100,100,100);
`

const Main= () =>{
    
    return(
        <Container>
            <Head>
                <div className="top">
                    iMMUTABLE
                </div>
                <div className="bottom">
                   menu
                </div>
            </Head>
            <Body>                
            </Body>
            <Foot>
                copyrightsⓒ
            </Foot>
        </Container>

    );
};

export default Main;