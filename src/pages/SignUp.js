import React, { useState ,useContext } from "react";
import styled from "styled-components";
import { useNavigate,Link }  from "react-router-dom";



const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    text-align: center;
    overflow-y: scroll;
`;
const InerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 450px; 
a{
    text-decoration: none;
    color: black;
    }
.top{
    font-weight: bolder;
    font-size: 30px;
}
.input {
    margin-top: 5px;
   
}
input {
    width: 450px;
    height: 40px;
    margin-top: 20px;
    font-size: 10px;
    border: 1px solid #ccc;
    &::placeholder {
        padding: 5px;
        font-size: 10px;
    };
}

.email,
.verify {
    width: 400px;
}

.emailBtn,
.verifyBtn {
    text-align: right;
    width: 50px;   
    font-size: 10px;
    background-color: white;
    border: none;
    &:hover{
        color: #CCC;
    }
    
}
.singUp {
    font-size: 10px;
    width: 100%;
    height: 38px;
    margin-top: 20px;
    background-color: white;
    border: 1px solid black;
    &:hover{
        color: white;
        background-color: black;
    }
}
.goToLogin {
    width: 100%;
    height: 38px;
    margin-top: 50px;
    font-size: 10px;
    border: 1px solid black;
    background-color: white;
    &:hover{
        color: white;
        background-color: black;
    }
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
                    <Link to="/">iMMUTABLE</Link>
                </div>
                <div className="input">
                    <div className="item">
                        <input type="text" placeholder="NAME"/>
                    </div>
                
                    <div className="item1">
                        <input className="email" type="email" placeholder="EMAIL"/>
                        <button className="emailBtn">SEND</button>
                    </div>
                    <div className="item1">
                        <input className="verify" type="text" placeholder="VERIFYCODE"/>
                        <button className="verifyBtn">VERIFY</button>
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
                        <Link to="/Login"><button className="goToLogin">LOGIN</button></Link>
                    </div>
                </div>
                
            </InerContainer>
        </Container>
    );
};

export default SignUp