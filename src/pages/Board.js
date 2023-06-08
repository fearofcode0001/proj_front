import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    height: 100vh;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;
const Inner = styled.div`
    margin-top: 100px;
    p {
        font-size: 20px;
        font-weight: bolder;
    }
    label {
        margin-right: 8px;
        font-size: 12px;
    }
    .item {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }
    .item2 {
        display: flex;
        align-items: start;
    }
    .txtTitle {
        width: 400px;
        height: 18px;
        resize: none;
    }
    .txtContent {
        width: 400px;
        height: 200px;
        resize: none;
    }
    .btn {
        margin-top: 40px;
        float: right;
    }
    button {
        background-color: white;
        border-style: none;
        &:hover{
            color: gray;
        }
    }
    textarea::placeholder {
        font-size: 10px;
    }
`;
const Board = () => {

    const [openAlert, setOpenAlert] = useState(false);
    const onClickSubmit = (e) => {
        alert("FAQ를 추가하였습니다.")
        setOpenAlert(true)
    }
    return(
        <Container>
            <Inner>
                <p>FAQ 글쓰기</p>
                <div className="item">
                    <label className="title">제목</label>
                    <textarea className="txtTitle" name="board" id="board" 
                    cols="10" rows="30" placeholder="제목을 입력하세요"></textarea>
                </div>
                <div className="item2">
                <label className="content">본문</label>
                    <textarea className="txtContent" name="board" id="board" 
                    cols="60" rows="10" placeholder="내용을 입력하세요"></textarea>
                </div>
                <Link to="/FAQ">
                <div className="btn">
                    <button onClick={onClickSubmit}>글쓰기</button>
                </div>
                </Link>
            </Inner>
        </Container>
    );
};

export default Board;