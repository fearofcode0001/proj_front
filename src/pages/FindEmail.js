import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    overflow-y: scroll;
`;
const InerContainer = styled.div`
    align-items: center;
    width: 400px;
    .top{
        justify-content: center;
        align-items: center;
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
    .findPwdBtn,
    .findBtn {
        margin-top: 20px;
        text-align: center;
        width: 200px;   
        font-size: 10px;
        background-color: white;
        border: none;
        &:hover{
            color: #CCC;
        }
        margin-bottom : 10px
    }
`;
const FindEmail = () => {

    return(
        <Container>
            <InerContainer>
                <div className="top">
                    iMMUTABLE
                </div>
                <div className="item">
                    <input type="text" placeholder="EMAIL"/>
                </div>
                <div className="item">
                    <input type="text" placeholder="NAME"/>
                </div>
                <div className="item">
                    <button className="findBtn">FIND</button>
                    <Link to="/FindPwd"><button className="findPwdBtn">FORGOT PASSWORD</button></Link>
                </div>
            </InerContainer>
        </Container>
    );
};

export default FindEmail;