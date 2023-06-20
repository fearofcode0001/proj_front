import React, { useState ,useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import AxiosFinal from "../api/AxiosFinal";

const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    overflow-y: scroll;
`;

const InnerContainer = styled.div`
    align-items: center;
    width: 400px;
    .top{
        justify-content: center;
        align-items: center;
        font-size: 50px;
        font-weight: bold;
    }
    .input {
        margin-top: 30px;
    }
    input {
        width: 100%;
        height: 40px;
        margin-top: 20px;
        font-size: 10px;
        border: 1px solid #ccc;
        &::placeholder {
            padding: 5px;
            font-size: 10px;
        };
    }
    .emailBtn,
    .verifyBtn{ 
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
    .changePwdBtn {
        width: 100%;
        height: 38px;
        margin-top: 30px;
        background-color: white;
        font-size: 10px;
        border: 1px solid black;
        &:hover{
        color: white;
        background-color: black;
        }
    }
    a {
        text-decoration: none;
        color: black;
    }
    .hint {
        width: 100%;
      display: flex;
      margin: 5px 0px 0px 8px;
      justify-content:right;
      align-items:center;
      font-size: 12px;
      color: #999;
    }
`;
const FindPwd = () => {
    const navigate = useNavigate();

    const [inputEmail, setInputEmail] = useState("");
    const [code, setCode] = useState("");
    const [inputPw, setInputPw] = useState("")
    const [inputConPw, setInputConPw] = useState("");

    const [emailMessage, setEmailMessage] = useState("")
    const [codeMessage, setCodeMessage] = useState("")
    const [pwMessage, setPwMessage] = useState("");
    const [conPwMessage, setConPwMessage] = useState("");

    const [isEmail, setIsEmail] = useState(false);
    const [isPw, setIsPw] = useState(false)
    const [isConPw, setIsConPw] = useState(false);
    const [isCode, setIsCode] = useState(false);

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

    const onClickEmailAuth = async() => { 
        console.log("이메일 인증 호출 : " + inputEmail);
        const res = await AxiosFinal.mailCode(inputEmail);
				// Axios를 이용하여 서버로 inputEmail 변수에 담긴 이메일 주소를 전송하고, 
				//서버에서 생성한 랜덤한 인증 코드를 받아오는 API를 호출
        console.log(res.data);

    }   


       // 이메일 인증코드 유효성 검사
       const onClickCode = async() => {
        console.log(inputEmail, code, code.length);
        console.log(typeof(code));
        const res = await AxiosFinal.mailCodeck(inputEmail, code);
        console.log(res.data);
        if (res.data) {
            setCodeMessage("인증이 완료되었습니다.");
        } else {
            setCodeMessage("인증 코드가 일치하지 않습니다.");
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


    return(
        <Container>
            <InnerContainer>
                <Link to="/">
                    <div className="top">
                        iMMUTABLE
                    </div>
                </Link>
                <div className="item1">
                        <input className="email" type="email" placeholder="EMAIL"onChange={onChangeMail}/>
                        <button className="emailBtn" onClick={onClickEmailAuth}>SEND</button>
                    </div>
                    <div className="hint">
                        {inputEmail.length > 0 && (
                        <span className={`message ${isEmail ? 'success' : 'error'}`}>{emailMessage}</span>)}
                    </div>
                    <div className="item1">
                        <input className="verify" type="text" value={code} onChange={e => setCode(e.target.value)} placeholder="VERIFYCODE" />
                        <button className="verifyBtn" onClick={onClickCode}>VERIFY</button>
                    </div>
                    <div className="hint">
                        {code.length > 0 && (
                        <span className={`message ${isCode ? 'success' : 'error'}`}>{codeMessage}</span>)}
                    </div>
                <div className="item">
                    <input type="password" placeholder="NEW PASSWORD" onChange={onChangePw}/>
                </div>
                <div className="item">
                    <input type="password" placeholder="PASSWORD CHECK" onChange={onChangeConPw}/>
                </div>
                <div className="changePwd">
                    <Link to="/Login"><button className="changePwdBtn">CHANGE PASSWORD</button></Link>
                </div>
            </InnerContainer>
        </Container>
    );
};

export default FindPwd;