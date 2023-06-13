import React, {useState, useRef} from "react";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import ModifyingInfo from "./ModifyingInfo";




const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`

const TopButton = styled.button`
    border: none;
    background-color: white;
   
    &:hover{
        color: rgba(0,0,0,0.5);
    }
`  

const MainBody = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;

`
const Head = styled.div`
    width: 100%;
    display: flex;
    
    a{
        text-decoration: none;
        color: black;
    }
    .nav{
        width: 100%;
        padding: 0 20px 0 10px;
        display: flex;
        justify-content: space-between;
    }
   
    .nav1{
        height: 70px;
        font-weight: bolder;
        font-size: 50px;
    }

    .nav2{
        display: flex;
        justify-content: center;
        align-items: center;
        color: rgb(100,100,100);
        font-size: 13px;
    }
`


const InnerContainer = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`


const Body = styled.div`
    /* border: 1px solid black; */
    display: flex;
    width: 1200px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    
    a{
        text-decoration: none;
        color: black;
    }
   
    .box{
        display: flex;
        width: 500px;
        height: 160px;
        border: 1px solid #ccc;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        
        .title{
            margin-bottom: 10px;
            display: flex;
            font-size: 15px;
            font-weight: bolder;
            align-items: center;
            justify-content: center;
        }

        .tt1{
            color: #656165;
            font-size: 11px;
            margin-left: 20px;
        }

        .tt2{
            display: flex;
            align-items: center;
            justify-content: center;
            color: #a19aa2;
            font-size: 10px;
        }
    }

    @media only screen and (max-width: 1000px) {
            .box{
                height: 100px;
            }
    }

`

const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    
    .fotbox{
        height: 100px;
    }

    .tt1{
        display: flex;
        align-items: center;
        justify-content: center;
        color: #8b9192;
        font-size: 14px;
        font-weight: 600;
    }


    .tt2{
        display: flex;
        align-items: center;
        justify-content: center;
        color: #c1c2c8;
        font-size: 12px;
    }

`

const IsLoginFalse = [
    { name : "login"}
  ]
  const IsLoginTrue = [
    { name : "logout"}, 
    { name : "cart"},    
    { name : "FAQ"}
  ]



const Mypage = () =>{
 
    const [isLogin, setIsLogin] = useState(true);

    const navigate = useNavigate();
    const onChangePage=(e)=>{
       if(e==="logout"){
            setIsLogin(false);
        }
        else if (e==="FAQ") {
            navigate("/FAQ")
        }
        else if (e==="cart") {
            navigate("/Cart")
        }
    }
    

 

    return(
        <Container>
            <MainBody>
            <Head>
                <div className="nav">
                <a href="/"><div className="nav1" >
                     iMMUTABLE
                    </div></a>
                    <div className="nav2">
                    {IsLoginFalse.map(s=>( isLogin===false &&
                                        <TopButton key={s.name}>
                                            <Link to="/Login">{s.name}</Link>
                                        </TopButton>
                                    ))}
                           {IsLoginTrue.map(s=>( isLogin===true &&
                                        <TopButton key={s.name} onClick={()=>onChangePage(s.name)}>
                                            {s.name}
                                        </TopButton>
                                    ))}
                    </div>
                </div>
            </Head>
            <InnerContainer>   
                <Body>
                    <div className="box">
                       <div className="title">ORDER <div className="tt1"> 주문내역조회</div></div>
                       <div className="tt2">
                        고객님께서 주문하신 상품의 주문내역을 확인할 수 있습니다. 
                       </div>
                    </div>
                    <a href="ModifyingInfo">
                    <div className="box">
                        <div className="title">PROFILE <div className="tt1"> 회원 정보</div></div>
                       <div className="tt2">
                        회원이신 고객님의 개인정보 및 수정하는 공간입니다.
                       </div> 
                       <div className="tt2">
                       개인정보를 최신 정보로 유지하시면 보다 간편히 쇼핑을 즐길실 수 있습니다.
                       </div>
                    </div> </a>
                    <div className="box">
                    <div className="title"> WISHLSIT <div className="tt1"> 관심 상품</div></div>
                       <div className="tt2">
                        관심상품으로 등록하신 상품의 목록을 보여드립니다.
                       </div>
                    </div>
                    <div className="box">
                    <div className="title">BOARD<div className="tt1"> 게시물 관리</div></div>
                       <div className="tt2">
                        고객님께서 작성하신 게시물을 관리하는 공간입니다. 
                       </div>
                       <div className="tt2">
                        고객님께서 작성하신 글을 한눈에 관리하실 수 있습니다.
                       </div>
                    </div>
                    <div className="box">
                    <div className="title">ADDRESS <div className="tt1"> 배송 주소록 관리</div></div>
                       <div className="tt2">
                            자주 사용하는 배송지를 등록하고 관리하실 수 있습니다.
                       </div>
                    </div>
                    <div className="box">
                    <div className="title">SECESSION<div className="tt1"> 회원탈퇴</div></div>
                       <div className="tt2">
                        더 이상 이용을 원치 않을 경우 회원 탈퇴를 하실 수 있습니다.
                       </div>   
                    </div>
                </Body>
            </InnerContainer>
            <Footer>
                <div className="fotbox">
              <div className="tt1">
              iMMUTABLE & Q / A
              </div>
              <div className="tt2">
              MON - FRI : AM 10:00 ~ PM 05:00 LUNCH TIME : PM 12:00 ~ PM 01:00 SAT.SUN.HOLIDAY CLOSED
                </div>
                <div className="tt2">
                카카오뱅크 : 3333-333-3333 예금주 : iMMUTABLE
                </div>
                </div>
            </Footer>
            </MainBody>
        </Container>
    )
}


export default Mypage;