import React, { useState, useContext } from "react";
import styled from "styled-components";
import PopupPostCode from "../api/PopupPostCode";
import { UserContext } from "../context/UserInfo";


const Container = styled.div`
    width: 100%;
    display: flex;
`

const MainBody = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Logo = styled.div`
    width: 100%;

    a{
        text-decoration: none;
        color: black;
    }

    .logo{
        justify-content: center;
        align-items: center;
        display: flex;
        height: 70px;
        font-weight: bolder;
        font-size: 50px;
    }
`

const Title = styled.div`
    width: 100%;
    margin-top: 50px;    

    .ti{
        font-weight: bold;
        justify-content: center;
        align-items: center;
        display: flex;
        height: 20px;
    }
  
`

const Info = styled.div`
    margin-top: 20px;
    display: flex;
    width: 1200px;
    height: 120px;
    border: 1px solid #ccc;

    .userInfo {
        margin-left: 10px;
        justify-content: center;
        align-items: center;
        display: flex;
    }

    .profileImg{
        border: 1px solid #ccc  ;
        border-radius: 50%;
        display: flex;
        width: 60px;
        height: 60px;
    }

    .line{
        margin: 0px 10px 0px 10px;
        border-left: 1px solid #ccc;
        height: 60px;
    }
    .content{
        display: flex;
        font-size: 12px;
    }
`

const InnerContainer = styled.div`
    width: 100vw;
    width: 1200px;
    height: 100%;
    margin-top: 30px;
   

    .t1{
        width: 100px;
        float: left;
      
    }
    .t2{
        font-size: 12px;
        display: flex;
        width: 80px;
        float: right;
    }

    .btn{
        margin: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .modify-btn{
        width: 100px;
        height: 40px;
        border: none;
        background-color: black;
        margin-right: 10px;
        color: white;
        
        :hover{
            color: #646166;
        }
    }
    
    .cancle-btn{
        width: 100px;
        height: 40px;
        border: none;
        background-color: #ccc;
        margin-right: 10px;
        color: white;
        
        :hover{
            color: #646166;
        }
    }


    
`

const Body = styled.div`
    display: flex;
    width: 1200px;

    .input{
        flex-direction: column;
        margin-top: 10px;
        border-top: 2px solid #ccc;
        display: flex;
        width: 1200px;

        input::placeholder{
            font-size: 6px; 
        }
        
    }

    .item{
        padding: 18px 0px 15px 0px;
        border-bottom: 1px solid #ccc;
        display: flex;
        height: 20px;
        width: 1200px;
    }

    label{
        font-size: 13px;
        width: 150px;
        display: flex;
    }
    
    .hint{
        font-size: 10px;
        width: 250px;
        margin-top: auto;
        margin-left: 10px;
    }


    Button{
        background-color: white;
        border: 1px solid #ccc;
        margin-left: 10px;
    }

    .addrBtn{
        font-size: 10px;
    }
`


const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;

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

const ModifyingInfo = () => {
    // 키보드 입력 받기 
    const [inputPw, setInputPw] = useState("")
    const [inputConPw, setInputConPw] = useState("");

    // 오류 메세지
    const [conPwMessage, setConPwMessage] = useState("");
    const [pwMessage, setPwMessage] = useState("");
    // 유효성 검사
    const [isId, setIsId] = useState(false);
    const [isPw, setIsPw] = useState(false)
    const [isConPw, setIsConPw] = useState(false);
    const [isName, setIsName] = useState(false);
    const [isEmail, setIsEmail] = useState(false);
    const [isPhone, setIsPhone] = useState(false);
    
      //저장된 주소와 아이디값을 설정하여 주소는 받아오고 아이디값은 저장한다.
      const context = useContext(UserContext);
      const {addr} = context;

     //주소찾기 영역
     const [isPopupOpen, setIsPopupOpen] = useState(false);

     // 팝업창 열기
     const openPostCode = () => {
         setIsPopupOpen(true);
     }
      
     // 팝업창 닫기
     const closePostCode = (e) => {
         setIsPopupOpen(false);
     }

     // 비밀번호 정규식
     const onChangePw = (e) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,25}$/ // 비밀번호 정규식
        const passwordCurrent = e.target.value ;
        setInputPw(passwordCurrent);
        if (!passwordRegex.test(passwordCurrent)) {
            setPwMessage('숫자+영문자 조합으로 8자리 이상 입력해주세요!')
            setIsPw(false)
        } else {
            setPwMessage("")
            setIsPw(true);
        }        
    }

     //비밀번호 확인
     const onChangeConPw = (e) => {
        const passwordCurrent = e.target.value ;
        setInputConPw(passwordCurrent)
        if (passwordCurrent !== inputPw) {
            setConPwMessage('비밀 번호가 일치하지 않습니다.') // 입력한 비밀번호가 일치해야 함
            setIsConPw(false)
        } else {
            setConPwMessage('비밀 번호가 일치 합니다.')
            setIsConPw(true);
        }      
    }

    return(

        <Container>
            <MainBody>
                <Logo>
                <a href="/"><div className="logo" >
                     iMMUTABLE
                    </div></a>
                </Logo>
                <Title>
                    <div className="ti">
                        회원 정보 수정
                    </div>
                </Title>
                <Info>
                <div className="userInfo">
                        <input className="profileImg" placeholder="프로필 사진 자리"/> 
                        <div className="line"></div>
                        <div className="content">
                        저희 쇼핑몰을 이용해 주셔서 감사합니다. 
                        <br/>
                        User님의 변경하실 정보를 입력해주세요. 
                        </div>
                    </div>
                </Info>
                <InnerContainer>
                <div className="t1">기본정보</div>
                    <div className="t2"><div style={{color:'red'}}>*</div>필수입력사항</div>
                    <Body>
                    <div className="input">
                        <div className="item">
                            <label >이름 <div style={{color:'red'}}>*</div></label>
                            <input type="text" placeholder="Name" />
                        </div>
                        <div className="item">
                            <label >비밀번호 <div style={{color:'red'}}>*</div></label>
                            <input type="password" placeholder="PWD" onChange={onChangePw}/>
                        <div className="hint">
                            {inputPw.length > 0 && (
                            <span className={`message ${isPw ? 'success' : 'error'}`}>{pwMessage}</span>)}
                        </div>
                        </div>
                        <div className="item">
                            <label>비밀번호확인 <div style={{color:'red'}}>*</div></label>
                            <input type="password" placeholder="PWD CHECK" onChange={onChangeConPw}/>   
                        <div className="hint">
                            {inputPw.length > 0 && (
                            <span className={`message ${isConPw ? 'success' : 'error'}`}>{conPwMessage}</span>)}
                        </div>
                        </div>
                        <div className="item">
                            <label >주소 </label>
                            <input type="text" placeholder="ADDRESS" className="addrInput" value={addr}/>
                            <button className="addrBtn" onClick={openPostCode}>주소찾기</button>
                            <div id='popupDom'>
                                {isPopupOpen && (                    
                                        <PopupPostCode onClose={closePostCode} />
                                )} 
                            </div>
                        </div>
                        <div className="item">
                            <label>휴대전화 <div style={{color:'red'}}>*</div></label>
                            <input type="phone" placeholder="Phone" />
                        </div>
                        <div className="item">
                            <label>이메일 <div style={{color:'red'}}>*</div></label>
                            <input type="email" placeholder="Emali" />
                        </div>
                    </div>
                    </Body>
                    <div className="btn">
                        <button className="modify-btn" >회원정보수정</button>
                        <button className="cancle-btn">취소</button>
                    </div>
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



export default ModifyingInfo;