import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AxiosFinal from "../api/AxiosFinal";
import Modal from "../pages/Modal"

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
    a{
    text-decoration: none;
    color: black;
    }
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
        font-size: 10px;
        border: 1px solid #ccc;
        &::placeholder {
            padding: 5px;
            font-size: 10px;
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
    // useState 이용하여 상태를 업데이트한다.
    const [inputName, setInputName] = useState(""); 
    const [inputEmail, setInputEmail] = useState("");
    const [modalOpen,setModalOpen] = useState(false);
    const [searchId, setSearchID] = useState("");

 
 
    // 모달 창 닫기 
    const closeModal = () =>{
        setModalOpen(false);
    };

    
    // inputName 업데이트
    const handleNameChange = (e) => {
        setInputName(e.target.value);
    };
    
    // inputEamil 업데이트
    const handleEmailChange = (e) => {
        setInputEmail(e.target.value);
    };

    const handleSearchId = async() =>{ 
        // 비동기 요청을 통해 서버로 부터 ID 검색 요청 
        const response = await AxiosFinal.searchId(inputName, inputEmail);   
        setSearchID(response.data[0].user_ID);  // 데이터에 저장된 ID를 가져와 searchId에 저장
        console.log(response.data[0].user_ID);
        setModalOpen(true);     // 모달 오픈 
    };

    return(
        <Container>
            <InerContainer>
                <Link to="/"><div className="top">
                    iMMUTABLE
                </div></Link>
                <div className="item">
                    <input type="email"  value={inputEmail} onChange={handleEmailChange} placeholder="EMAIL"/>
                </div>
                <div className="item">
                    <input value={inputName} onChange={handleNameChange} placeholder="NAME"/>
                </div>
                <div className="item">
                <Modal open={modalOpen} type={true}  close={closeModal} header="아이디찾기">{inputName}님의 아이디는{searchId} 입니다.</Modal>
                    <button className="findBtn" onClick={handleSearchId}>FIND</button>
                    <Link to="/FindPwd"><button className="findPwdBtn">FORGOT PASSWORD</button></Link>
                </div>
            </InerContainer>
        </Container>
    );
};

export default FindEmail;