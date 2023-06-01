import React from "react";
import styled from "styled-components";

const SignUp = () => {
    const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    overflow-y: scroll;
    `;
    const InerContainer = styled.div`
    align-items: center;
    .top{
        margin-top: 150px;
        font-weight: bolder;
        font-size: 50px;
    }
    .input {
        margin-top: 30px;
    }
    input {
        width: 250px;
        height: 35px;
        margin-top: 10px;
        font-weight: bolder;
    }
    .email {
        width: 197px;
    }
    .verify {
        width: 197px;
    }
    .emailBtn {
        width: 50px;
        height: 38px;
        margin-left: 3px;
        font-weight: bolder;
        background-color: white;
    }
    .verifyBtn {
        width: 50px;
        height: 38px;
        margin-left: 3px;
        font-weight: bolder;
        background-color: white;
    }
    .singUp {
        width: 258px;
        height: 38px;
        margin-top: 20px;
        background-color: white;
        font-weight: bolder;
    }
    `;
    return(
        <Container>
            <InerContainer>
                <div className="top">
                    iMMUTABLE
                </div>
                <div className="input">
                    <div className="item">
                        <input className="email" type="email" placeholder="EMAIL"/>
                        <button className="emailBtn">전송</button>
                    </div>
                    <div className="item">
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
                        <button className="singUp">회원가입</button>
                    </div>
                </div>
                
            </InerContainer>
        </Container>
    );
};

export default SignUp