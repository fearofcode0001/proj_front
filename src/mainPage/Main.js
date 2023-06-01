import React ,{css, useState}from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import bckimg from "../img/fog.jpg"
import side from "../img/side.png"
import chat from "../img/chat.png"

const Sidemenu = [
    //버튼을 카테고리로 분류하여 값을 쉽게 가져오기 위해 name으로 설정한다.
    { name : "SHOP"},
    { name : "CONTENTS"},
    { name : "BRAND"},
    { name : "LOOKBOOK"},
    { name : "NOTICE"}
  ]

  const IsLoginFalse = [
    { name : "login"}
  ]
  const IsLoginTrue = [
    { name : "logout"},
    { name : "mypage"},    
    { name : "cart"},    
    { name : "FAQ"}
  ]

const SideButton = styled.button`
    display:flex;
    align-items: center;
    justify-content: center;
    width:300px;
    height: 90px;
    min-height: 40px;
    background-color:rgba(255,255,255,0);
    border: none;
    font-size: 17px;
    &:hover{
        background-color: rgba(190,190,190,0.5);
    }
    ${props => props.active && css`   // *&* props가 active이면 css를 재정의 한다.
        background-color: rgba(190,190,190,0.5);        
     `}
`
const TopButton = styled.button`
    border: none;
    background-color: white;
    &:hover{
        color: rgba(0,0,0,0.5);
    }
`

const Container =styled.div`
    width: 100%;
    height: 100vh;
    display: flex;   
    a{
        text-decoration: none;
        color: black;
        &:hover{
            color: rgba(0,0,0,0.5);
        }
    } 
`


const Side=styled.div`
    width: 300px;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: rgba(255,255,255,0.9);
    z-index: 1;
    position: fixed;
    transition: transform 1.3s ease-in-out;
    left: -300px;
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
        display: flex;
        justify-content: center;
        align-items: center;
        color: rgb(100,100,100);
        font-size: 13px;
    }
    .bottom{
        color: rgb(100,100,100);
    }
`

const ToggleButton = styled.button`
    background: none;
    border: none;
    font-size: 17px;
    img{
        padding: 0 0 0 5px;
        width: 25px;
    }
    &:hover{
        color: rgb(120,120,120);
    }
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
          transform: translateX(800px); // 이 top 기준으로 400px 내려간 곳에서 시작
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
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 9px;
    color: rgb(100,100,100);
    .topFoot{
        width: 50%;    
        display:flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
    .bottomFoot{
        width: 50%;    
        display:flex;
        justify-content: center;
        align-items: center;
    }
    //홈페이지 하단 이메일 입력
    .footInput{
        outline: none;
        width: 170px;
        border-top: none;
        border-left: none;
        border-right:none;
        border-bottom: 1px solid;
        font-size:5px;
        ::placeholder{
            font-size: 5px;
            opacity: 0.5;
        }
    }
`
//채팅
const Chat =styled.div`
    width: 240px;
    height: 650px;
    position: absolute;
    bottom: 6rem;
    right: 2rem;
    background-color: white;
    background-color: rgba(255,255,255,0.8);
    border: 1px solid black;
    .topChat{
        height: 50px;
        border-bottom: 1px solid rgba(0,0,0,0.5);       
    }
    .midChat{
        height: 85%;
        overflow-y: scroll;
        ::-webkit-scrollbar {
        display: none;
        }
        border-bottom: 1px solid rgba(0,0,0,0.5);
    }
    .bottomChat{
        height: 45px;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    //채팅타이핑input
    .chatInput{
        width: 78%;
        height: 35px;
        border: none;
        border-radius: 10px;
        outline: none;
        background-color: rgba(0,0,0,0);
    }
    //채팅 send기능 버튼
    .sendButton{
        width: 18%;
        height: 30px;
        border: none;
        border-radius: 4px;
        background-color: rgba(0,0,0,0);    
    }

`
//채팅 on/off버튼
const ChatButton=styled.button`
    position: absolute;
    width: 50px;
    height: 50px;
    right: 2rem;
    bottom: 3rem;
    background-image: url(${chat});
    background-size: 85%;
    background-repeat: no-repeat;
    background-position: 40%;
    border: none;
    background-color: white;
`

const Main= () =>{
    const [isOpen, setIsOpen] = useState(0);
    const [isLogin, setIsLogin] = useState(false);
    const [openChat, setOpenChat] = useState(false);
    const onChat=()=>{
        setOpenChat(!openChat);
    }

    const toggleSidebar = () => {
        if(isOpen===300){
            setIsOpen(0);
        }else if(isOpen=== 0){
            setIsOpen(300);
        }
        console.log(isOpen) ; 
      };
    
    return(
        <Container>
            <Side style={{transform: `translateX(${isOpen}px)`}}> 
                <div className="sideMenu">
                    {Sidemenu.map(s=>(
                        <SideButton key={s.name}>
                            {s.name}
                        </SideButton>
                    ))}
                </div>
                
                <div className="closeButton">
                    <ToggleButton ToggleButton onClick={toggleSidebar}>close</ToggleButton> 
                </div>
                
            </Side>
            <MainBody>
                <Head>
                    <div className="top">
                        <div className="top1">
                            iMMUTABLE
                        </div>
                        <div className="top2">
                          {IsLoginFalse.map(s=>( isLogin===false &&
                                        <TopButton key={s.name}>
                                            <Link to="/Login">{s.name}</Link>
                                        </TopButton>
                                    ))}
                          {IsLoginTrue.map(s=>( isLogin===true &&
                                        <TopButton key={s.name}>
                                            {s.name}
                                        </TopButton>
                                    ))}
                            
                        </div>
                    </div>
                    <div className="bottom" >
                        <ToggleButton onClick={toggleSidebar}><img src={side}/> </ToggleButton> 
                    </div>
                     
                </Head>
               
                <Body>
                            
                </Body>
                <ChatButton onClick={onChat}/>
                {openChat  && 
                    <Chat>
                        <div className="topChat">
                            head & img
                        </div>
                        <div className="midChat">
                            chat message
                        </div>
                        <div className="bottomChat">
                            <input type="text" className="chatInput" placeholder="내용을 입력하세요"/>
                            <input type="button" className="sendButton" value="send"/>
                        </div>
                    </Chat>} 
                <Foot>
                    <div className="topFoot">
                        join the Conversation
                        <input type="text"className="footInput" placeholder="email address"></input>
                    </div>
                    <div className="bottomFoot">copyrightsⓒ iMMUTABLE allrights reserved</div>
                </Foot>
            </MainBody>
        </Container>

    );
};

export default Main;