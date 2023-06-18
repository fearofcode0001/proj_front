import React, { useState ,useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserInfo.js";
import PopupPostCode from "../api/PopupPostCode";
import AxiosFinal from "../api/AxiosFinal"
import { Link } from "react-router-dom";



const Container = styled.div`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
overflow-y: scroll;
`;
const InerContainer = styled.div`
display: flex;
flex-direction:column;
justify-content: space-evenly;
width: 400px;
height: 900px;
a{  
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    font-size:10px;
    text-decoration: none;
    color: black;
    background-color: white;
    &:hover{
        background-color: black;
        color:white;
    }
}
.top{
    font-weight: bolder;
    font-size: 50px;

}
.input {
   width: 100%;
}
input {
    width: 100%;
    height: 40px;
    margin-top: 20px;
    font-weight: bolder;
    font-size: 10px;
    border: 1px solid #ccc;
    &::placeholder {
        padding: 5px;
        font-size: 10px;
    };
}
.emailBtn,
.verifyBtn,
.addrBtn { 
    text-align: right;
    width: 50px;   
    font-size: 10px;
    background-color: white;
    border: none;
    &:hover{
        color: #CCC;
    }
    margin-bottom : 10px
}
.singUp {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 38px;
    margin-top: 20px;
    background-color: white;
    border: 1px solid black;
}

.hint {
      display: flex;
      margin: 5px 0px 0px 8px;
      justify-content:right;
      align-items:center;
      font-size: 12px;
      color: #999;
}
.addrFind {
    /* margin-bottom: 10px; */
    margin-right: 10px;
    width: 170px;
}

.addrBtn {
    height: 40px;
}

.success {
    color: royalblue;
}

.error {
    color: red;
}
.enable-button {
    width: 400px;
    height: 40px;
    font-size: 10px;
    color: black;
    border: 1px solid black;

}
.enable-button:active {

}
.disable-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    font-size: 10px;
    color: black;
    border: 1px solid #CCC;
    background-color: #CCC;
 
}
`;

const SignUp = () => {
   
    const navigate = useNavigate();

    // 키보드 입력 받기
    const [inputName, setInputName] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [code, setCode] = useState("");
    const [inputPw, setInputPw] = useState("")
    const [inputConPw, setInputConPw] = useState("");
    const [inputPhone, setInputPhone] = useState("");
    const [inputAddr, setInputAddr] = useState("")

    // 오류 메세지
    const [emailMessage, setEmailMessage] = useState("")
    const [codeMessage, setCodeMessage] = useState("")
    const [pwMessage, setPwMessage] = useState("");
    const [conPwMessage, setConPwMessage] = useState("");
    const [phoneMessage, setPhoneMessage] = useState("");
    const [verificationResult, setVerificationResult] = useState("")

    //유효성 검사
    const [isName, setIsName] = useState(false);
    const [isEmail, setIsEmail] = useState(false);
    const [isPw, setIsPw] = useState(false)
    const [isConPw, setIsConPw] = useState(false);
    const [isPhone, setIsPhone] = useState(false);
    const [isAddr, setIsAddr] = useState(false);

     //저장된 주소와 아이디값을 설정하여 주소는 받아오고 아이디값은 저장한다.
     const context = useContext(UserContext);
     const {addr, setSingUpEmail} = context;
     


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
    

    // 이름 정규식
    const onChangeName = (e) => {
        const inputNameRegex = /^[가-힣]{2,5}$/ // 이름은 한글로만 2자리 이상 5자리 미만
        const nameCurrent = e.target.value;
        setInputName(nameCurrent);
        if (!inputNameRegex.test(nameCurrent)) { // 이름은 잘못 입력 되었을 때
            setIsName(false);
        } else {
            setIsName(true);
        }
    }

     //메일 정규식
     const onChangeMail = (e) => {
        const inputEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        const emailCurrent = e.target.value;
        setInputEmail(emailCurrent);
        if (inputEmailRegex.test(emailCurrent)) { // 이메일 입력이 잘 못 되었을 때
            setEmailMessage('올바른 이메일 형식입니다.')
            setIsEmail(true);
        } else {
            setEmailMessage('이메일 형식이 올바르지 않습니다.')
            setIsEmail(false)
        } 
    }

    //비밀번호 정규식
    const onChangePw = (e) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,25}$/ // 비밀번호 정규식
        const passwordCurrent = e.target.value ;
        setInputPw(passwordCurrent);
        if (!passwordRegex.test(passwordCurrent)) {
            setPwMessage('숫자+영문자 조합으로 8자리 이상 입력해주세요!')
            setIsPw(false)
        } else {
            setPwMessage('안전한 비밀번호에요 : )')
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
            setConPwMessage('비밀 번호가 일치 합니다. )')
            setIsConPw(true);
        }      
    }

     //전화번호 정규식
     const onChangePhone = (e) => {
        const inputPhoneRegex = /^\d{3}\d{3,4}\d{4}$/
        const phoneCurrent = e.target.value;
        console.log(isPhone);
        setInputPhone(phoneCurrent);
        if (!inputPhoneRegex.test(e.target.value)) { // 전화번호 입력이 잘 못 되었을 때
            setPhoneMessage('전화번호 형식이 올바르지 않습니다.')
            setIsPhone(false)
        } else {
            setPhoneMessage('올바른 전화번호 형식입니다.')
            setIsPhone(true);
            console.log(isPhone);
        } 
    }

    // 주소 유효성
    const onChangeAddr = (e) => {
        setInputAddr(e.target.value);
        setIsAddr(true);
        console.log(isAddr)
    }

    const onClickLogin = async() => {
        console.log("Click 회원가입");
         // 가입 여부 우선 확인
         const memberReg = await AxiosFinal.memberReg(inputName, inputEmail, inputPw, inputAddr, inputPhone);
        //  const memberCheck = await AxiosFinal.memberRegCheck(inputEmail);
        //  console.log("가입 가능 여부 확인 : ", memberCheck.data);
        //  // 가입 여부 확인 후 가입 절차 진행
         
        //  if (memberCheck.data === true) {
        //      console.log("가입된 아이디가 없습니다. 다음 단계 진행 합니다.");

        //      const memberReg = await AxiosFinal.memberReg(inputName, inputEmail, inputPw, inputConPw, addr, inputPhone);
        //      console.log(addr);
        //      console.log(memberReg.data.result);
        //      if(memberReg.data === true) {
        //          navigate('/welcome');
        //      } else {
        //          alert("회원 가입에 실패 했습니다.");
        //      }
 
        //  } else {
        //      console.log("이미 가입된 회원 입니다.")
        //      alert("이미 가입된 회원 입니다.");
        //  } 
     }




   
    return(
        <Container>
            <InerContainer>
                <div className="top">
                    iMMUTABLE
                </div>
                <div className="input">
                    <div className="item">
                        <input type="text" placeholder="NAME" onChange={onChangeName}/>
                    </div>
                
                    <div className="item1">
                        <input className="email" type="email" placeholder="EMAIL"onChange={onChangeMail}/>
                        <button className="emailBtn">SEND</button>
                    </div>
                    <div className="hint">
                        {inputEmail.length > 0 && (
                        <span className={`message ${isEmail ? 'success' : 'error'}`}>{emailMessage}</span>)}
                    </div>
                    <div className="item1">
                        <input className="verify" type="text" placeholder="VERIFYCODE" />
                        <button className="verifyBtn">VERIFY</button>
                    </div>
                    <div className="hint">
                        {inputEmail.length > 0 && (
                        <span className={`message ${isEmail ? 'success' : 'error'}`}>{verificationResult}</span>)}
                    </div>

                    <div className="item">
                        <input type="password" placeholder="PWD" onChange={onChangePw}/>
                    </div>
                    <div className="hint">
                            {inputPw.length > 0 && (
                            <span className={`message ${isPw ? 'success' : 'error'}`}>{pwMessage}</span>)}
                    </div>
                    <div className="item">
                        <input type="password" placeholder="PWD CHECK" onChange={onChangeConPw}/>
                    </div>
                    <div className="hint">
                            {inputPw.length > 0 && (
                            <span className={`message ${isConPw ? 'success' : 'error'}`}>{conPwMessage}</span>)}
                    </div>
                    <div className="item">
                        <input type="phone" placeholder="PHONE" onChange={onChangePhone}/>
                    </div>

                    <div className="item">
                        <input type="text" placeholder="ADDRESS" className="addrInput" onChange={onChangeAddr}/>
                        <button className="addrBtn" onClick={openPostCode}>FIND</button>
                        <div id='popupDom'>
                            {isPopupOpen && (                    
                                    <PopupPostCode onClose={closePostCode} />
                            )} 
                        </div>
                    </div>
                    <div>
                    
                    {(isEmail && isPw && isConPw && isName && isPhone && isAddr) ? 
                    <button className="enable-button" onClick={onClickLogin}>CREATE</button> :
                    <button className="disable-button">notyet</button> }
                    </div>                                            
                </div>
                <Link to="/Login">LOGIN</Link>
            </InerContainer>
        </Container>
    );
};

export default SignUp