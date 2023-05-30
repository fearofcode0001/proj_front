import React ,{css, useState}from "react";
import styled from "styled-components";
import bckimg from "../img/fog.jpg"

const Container =styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`
const Side=styled.div`
    width: 300px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: rgba(0,0,0,0.5);
    z-index: 1;
    position: fixed;
    left:-280px;
    transition: transform 0.5s ease-in-out;
    &:hover{
        transform: translateX(280px);
    }

    /* transition: transform 0.3s ease-in-out;
    transform: translateX(-300px);
    ${props => props.active && css`
        transform: translateX(300px); 
    `} */
`

const MainBody=styled.div`
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
    .top{
        padding: 0 20px 0 10px;
        display: flex;
        justify-content: space-between;
    }
    .top1{
        height: 70px;
        font-weight: bolder;
        font-size: 50px;
    }
    .top2{
        color: rgb(100,100,100);
        font-size: 12px;
    }
    .bottom{
        color: rgb(100,100,100);
    }
`

const ToggleButton = styled.button`
    background: none;
    border: none;
    font-size: 17px;
`;

const Body = styled.div`
    width: 100%;
    height: 100%;
    //이미지를 사용 하려면  ${0}양식 사용
    background-image:url(${bckimg});
    background-size: contain;
    background-repeat: none;
    animation: transX 15s linear; 
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
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
        console.log(isOpen)
            
      };
    
    return(
        <Container>
            <Side>           
            </Side>
            <MainBody>
                <Head>
                    <div className="top">
                        <div className="top1">
                            iMMUTABLE
                        </div>
                        <div className="top2">
                            login
                        </div>
                    </div>
                    <div className="bottom" >
                        <ToggleButton onClick={toggleSidebar}>Menu</ToggleButton> 
                    </div>
                </Head>
                <Body>                
                </Body>
                <Foot>
                    copyrightsⓒ iMMUTABLE allrights reserved
                </Foot>
            </MainBody>
        </Container>

    );
};

export default Main;