import React, { useState ,useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

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
    }
    .input {
        margin-top: 30px;
    }
    input {
        width: 100%;
        height: 40px;
        margin-top: 10px;
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
        &:hover{
        color: white;
        background-color: black;
        }
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
    const [verificationResult, setVerificationResult] = useState("")

    const [isEmail, setIsEmail] = useState(false);
    const [isPw, setIsPw] = useState(false)
    const [isConPw, setIsConPw] = useState(false);

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


    return(
        <Container>
            <InnerContainer>
                <div className="top">
                    iMMUTABLE
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