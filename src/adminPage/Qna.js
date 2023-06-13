import React from "react";
import styled from "styled-components";


const Container=styled.div`
width: 100%;
height: 100%;
`
const QnaInfo = styled.div`
    width: 100%;
    height: 27px;
    font-size: 11px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-bottom: 1px solid #CCC;
    .qnaId{
        width: 50px;
        display: flex;
        justify-content: center;
    }
    .itemId{
        width: 100px;
        display: flex;
        justify-content: center;
    }
    .userId{
        width: 100px;
        display: flex;
        justify-content: center;
    }
    .qnaNm{
        width: 420px;
        display: flex;
        justify-content: center;      
    }
    .qnaNmList{
        width: 420px;
        display: flex;
        //줄바꿈 방지
        white-space : nowrap;        
        // 넘침 숨기기
        overflow : hidden;
    }
    .answer{
        width: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        select{
            font-size: 11px;
            border: none;
        }
    }
`

const  Qna = () =>{
    return(

        <Container>
            <QnaInfo>
                <div className="qnaId">
                    ID
                </div>
                <div className="itemId">
                    itemID
                </div>
                <div className="userId">
                    userID
                </div>
                <div className="qnaNm">
                    QnA
                </div>
                <div className="answer">
                    ANSWER
                </div>
            </QnaInfo>
            <QnaInfo>
                <div className="qnaId">
                    qna1235
                </div>
                <div className="itemId">
                    item159731
                </div>
                <div className="userId">
                    user43227
                </div>
                <div className="qnaNmList">
                이거좀 빨리 고쳐주세요 칙쇼 이게 뭐죠?이거좀 빨리 고쳐주세요 칙쇼 이게 뭐죠?이거좀 빨리 고쳐주세요 칙쇼 이게 뭐죠?이거좀 빨리 고쳐주세요 칙쇼 이게 뭐죠?이거좀 빨리 고쳐주세요 칙쇼 이게 뭐죠?
                </div>
                <div className="answer">
                <select name ="">
                    <option value="">complete</option>
                    <option value="">hold</option>
                </select>
                </div>
            </QnaInfo>
        </Container>
    );
};

export default Qna;