import React from "react";
import styled from "styled-components";

const Container=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: beige;
`
const Head = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 175px;
    .headTop{
        width: 98%;
        height: 20px;
        border: 1px solid black;
    }
    .headFooter{
        margin-top:5px;
        width: 98%;
        height: 135px;
        border: 1px solid black;
    }
`
const MainBody = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 98%;
    height: 100%;
    .sideMenu{
        width: 200px;
        height: 100%;
        border: 1px solid black;
        margin-right: 10px;
    }
    .body{
        width: 100%;
        height: 100%;        
        border: 1px solid black;

    }
`
const AdminPage=()=>{

    return(
        <Container>
            <Head> 
                <div className="headTop">
                    관리자 로그인 홈 등
                </div>
                <div className="headFooter">
                    신규 주문건 배송 고객문의
                </div>
            </Head>
            <MainBody> 
                <div className="sideMenu">
                    상품업로드 상품수정 상품현황 
                </div>
                <div className="body">
                    바뀌는 페이지
                </div>

            </MainBody>
        </Container>
    );
};

export default AdminPage;