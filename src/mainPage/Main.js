import React ,{css, useState}from "react";
import styled from "styled-components";
import bckimg from "../img/fog.jpg"
import side from "../img/side.png"

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
    align-items: center;
    justify-content: center;
    font-size: 9px;
    color: rgb(100,100,100);
`

const Main= () =>{
    const [isOpen, setIsOpen] = useState(0);
    const [isLogin, setIsLogin] = useState(true);
    

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
                                            {s.name}
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
                <Foot>
                    copyrightsⓒ iMMUTABLE allrights reserved
                </Foot>
            </MainBody>
        </Container>

    );
};

export default Main;