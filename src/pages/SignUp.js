import React, { useState ,useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";



const Container = styled.div`
height: 100vh;
display: flex;
justify-content: space-evenly;
text-align: center;
overflow-y: scroll;
`;
const InerContainer = styled.div`
align-items: center;
width: 400px;
.top{
    margin-top: 150px;
    font-weight: bolder;
    font-size: 50px;
}
.input {
    margin-top: 30px;
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
        font-size: 12px;
    };
}

.email,
.verify {
    width: 80%;
}

.emailBtn,
.verifyBtn { // 위치가 안맞아요 고쳐주세요 ;(
    width: 15%;
    height: 40px;
    margin-left: 5px;
    font-size: 12px;
    font-weight: bolder;
    background-color: white;
    border: 1px solid #ccc;
}
.singUp {
    width: 100%;
    height: 38px;
    margin-top: 20px;
    background-color: white;
}
.goToLogin {
    width: 100%;
    height: 38px;
    margin-top: 50px;
    background-color: white;
}
.enable-button {

}
.enable-button:active {

}
.disable-button {

}
`;

const SignUp = () => {
   
    const navigate = useNavigate();

    // 키보드 입력 받기
    const [inputName, setInputName] = useState("");
    const [inputEMail, setInputEmail] = useState("");
    const [code, setCode] = useState("");
    const [inputPw, setInputPw] = useState("")
    const [inputConPw, setInputConPw] = useState("");
    const [inputPhone, setInputPhone] = useState("");

    // 오류 메세지

   
    return(
        <Container>
            <InerContainer>
                <div className="top">
                    iMMUTABLE
                </div>
                <div className="input">
                    <div className="item">
                        <input type="text" placeholder="NAME"/>
                    </div>
                
                    <div className="item1">
                        <input className="email" type="email" placeholder="EMAIL"/>
                        <button className="emailBtn">전송</button>
                    </div>
                    <div className="item1">
                        <input className="verify" type="text" placeholder="VERIFYCODE"/>
                        <button className="verifyBtn">인증</button>
                    </div>

                    <div className="item">
                        <input type="password" placeholder="PWD"/>
                    </div>
                    <div className="item">
                        <input type="password" placeholder="PWD CHECK"/>
                    </div>
                    <div className="item">
                        <input type="phone" placeholder="PHONE"/>
                    </div>
                    <div className="item">
                        <input type="address" placeholder="ADDRESS"/>
                    </div>
                    <div>
                        <button className="singUp">CREATE</button>
                    </div>
                    <div>
                        <button className="goToLogin">LOGIN</button>
                    </div>
                </div>
                
            </InerContainer>
        </Container>
    );
};

export default SignUp