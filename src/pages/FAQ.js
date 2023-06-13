import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Accordion, AccordionItem } from '@szhsin/react-accordion';


const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const TopButton = styled.button`
    border: none;
    background-color: white;
   
    &:hover{
        color: rgba(0,0,0,0.5);
    }
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
const Body = styled.div`
     width: 100%;

    
    h1 {
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
       
    }
    a {
        text-decoration: none;
        color: black;
    }
    p {
        font-size: 12px;
        color: gray;
    }

    button {
        border-style: none;
        background-color: rgba(0, 0, 0, 0);
    }
    .deleteBtn {
        float: right;
        &:hover{
            color: red;
        }
    }
     
`

const InnerContainer = styled.div`
    margin: 50px 0 50px 0;
    width: 700px;
    display: flex;
    position: absolute;
    flex-direction: column;
    margin-top: 15%;

`;



const Button = styled.button`
    margin: 60px 0 20px 0;
    float: right;
    background-color: rgba(0, 0, 0, 0);
    border: none;
        a {
            color : black;
            text-decoration: none;
            &:hover{
                color: gray;
            }
        }
    
`;

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
    { name : "mypage"}
  ]

const FAQ = () => {

    const [isLogin, setIsLogin] = useState(true);

    const navigate = useNavigate();
    const onChangePage=(e)=>{
       if(e==="logout"){
            setIsLogin(false);
        }
        else if (e==="mypage") {
            navigate("/mypage")
        }

    }
    
 

    return (
        <Container>
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
                <h1>FAQ</h1>
                
                    <div className="FAQ">
                        <Accordion>
                            <AccordionItem header="Q.택배를 받았는데 상품이 누락되거나 분실된 것 같아요">
                                <hr />
                                <p>A. (마이페이지-주문내역) 에서 주문하신 상품이 배송중 상태인데 실제 일부 상품만 
                                수령하신 경우에는 고객센터 또는 게시판으로 문의 부탁드립니다 포장의 뜯김이나 훼손 여부 확인하시어 상품의 
                                사이나 박스 및 폴리백의 안쪽까지 잘 살펴봐주세요 CCTV로 모든 배송과정을 촬영하고 있기 때문에 배송과정 
                                분실로 추정되는 경우에는 택배사로 확인하여 보상 받아보실수 있도록 안내 도와드리고 있습니다.</p>
                                <button className="deleteBtn"> 삭제</button>
                            </AccordionItem>
                        </Accordion>
                    </div>

                    <div className="FAQ">
                        <Accordion>
                            <AccordionItem header="Q.배송 전 취소 또는 변경은 어떻게 하나요?">
                                <hr />
                                <p className="coment">
                                (취소)
                                - 상품 취소는 상품 발송 전 룩파인을 통하여 Q&A 게시판 및 고객센터로 의사를 
                                밝혀 주셔서 처리 가능합니다.
                                <br />
                                - 전산에 반영되는 소요 시간으로 인해 상품 준비중 상태더라도 이미 배송이 진행될 수 있으며, 
                                이 경우 취소 처리는 어려운 점 양해 부탁드립니다. 
                                <br />
                                - 환불은 결제 수단으로만 처리됩니다, 
                                <br />
                                (부득이하게 결제 수단으로 환불이 어려울시, 별도 안내 도와드리고 있습니다.)
                                <br />
                                (변경)
                                - 상품 변경을 원하실 경우 상품 발송전에 게시판 또는 고객센터로 문의 부탁드립니다. 
                                <br />
                                - 간혹의 경우 변경 상품이 품절될 수 있으며 이 경우 별도 안내 연락드립니다.
                                <br />
                                - 차액 발생시 결제 수단은 무통장 입금만 가능합니다.
                                </p>
                                <button className="deleteBtn">삭제</button>
                            </AccordionItem>
                        </Accordion>
                    </div>

                    <div className="FAQ">
                        <Accordion>
                            <AccordionItem header="Q.상품 교환했는데 언제 받을 수 있나요?">
                                <hr />
                                <p className="coment">A. 보내주신 상품이 iMUTABLE에 도착 완료된 시기부터 주로 2~3일(주말,공휴일제외)내로
                                발송 도와드리고 있으며, 교환 상품의 재고량 입고기간에 따라 배송 시실이 소요되는 점 
                                참고 부탁드립니다. 
                                </p>
                                <button className="deleteBtn">삭제</button>
                            </AccordionItem>
                        </Accordion>
                    </div>

                    <div className="FAQ">
                        <Accordion>
                            <AccordionItem header="Q.교환 반품은 어떻게 접수하나요?">
                                <hr />
                                <p className="coment">- iMUTABLE은 택배기사 픽업 서비스를 제공하지 않습니다. 
                                - 교환 또는 반품을 원하시는 고객님께서는 
                                CJ 대한통운 앱 또는 사이트를 통해 직접 접수하여 상품 보내주셔야 처리가능합니다. 
                                <br />
                                - 모든 교환반품 상품 (불량상품 포함)은 7일 이내 룩파인을 통하여 Q&A 및 게시판에 의사를 
                                밝혀 주셔야 가능합니다. 
                                <br />
                                - 미 도착시 청약철회을 취소하는 것으로 간주, 반품 및 교환 처리가 불가능합니다. 
                                <br />
                                - 10일 이후 수령된 제품 또는 미접수 택배는 무통보 반송됩니다. 
                                <br />
                                - 교환 및 반품의 모든 배송 비용은 계좌입금입니다. 
                                <br />
                                - 타 택배 (편의점포함) 이용시 선불로 보내주셔야 합니다. 
                                <br />
                                - 휴대폰 결제시 당월 취소 가능하며, 부분취소가 아닌 전체취소만 가능합니다. 
                                <br />
                                - 불량 반품을 가장한 교환 or 무분별한 불량 교환등을 요청시, 자동 환불 또는 손해배상  청구될 수 있습니다.
                                <br />
                                (대한통운 택배 접수 방법) 
                                전화접수 (1588-1255) - ARS 1번(반품) - 운송장번호 *입력 - 주소확인 - 2번(착불접수)
                                의점 택배 이용 시 요금은 선불로 결제 부탁드립니다. 
                                </p>
                                <button className="deleteBtn">삭제</button>
                            </AccordionItem>
                        </Accordion>
                    </div>

                    <div className="FAQ">
                        <Accordion>
                            <AccordionItem header="Q.주문자와 입금자 이름이 달라요">
                                <hr />
                                <p className="coment">A. 무통장 주문시 입금확인은 자동화 시스템으로 1-2시간 이내에 입금 연결됩니다.  
                                <br />
                                입금자명 혹은 금액이 다른 경우에는 입금 확인이 되지 않으니 고객센터 또는 게시판을 통해 문의 바랍니다.
                                입금하신 은행, 입금 날짜, 금액, 입금자명 확인하시어 Q&A 게시판으로
                                문의 남겨주시면 더욱 빠른 처리가 가능하십니다.
                                </p>
                                <button className="deleteBtn">삭제</button>
                            </AccordionItem>
                        </Accordion>
                    </div>

                    <Button>
                        <Link to="/Board">
                        FAQ추가
                        </Link>
                    </Button>
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
            </Container>
        );
};

export default FAQ;