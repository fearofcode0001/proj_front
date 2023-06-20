import React, { useState, useContext  } from "react";
import styled from "styled-components";
import { UserContext } from "../context/UserInfo";


const Container=styled.div`
width: 100%;
height: calc(100vh - 180px);
overflow-y: scroll;
::-webkit-scrollbar {
        display: none;
        }
    .qnaHead{
        width: 100%;
        height: 27px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #CCC;
    }
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
    .date{
        width: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
const QnaInfoHead=styled.div`
    width: 100%;
    height: 27px;
    font-size: 11px;
    display: flex;
    flex-direction: column;
   
`

const QnaInfo = styled.div`
    width: 100%;
    font-size: 11px;
    display: flex;
    flex-direction: column;
    .qnaNmList{
        width: 420px;
        display: flex;
        //줄바꿈 방지
        white-space : nowrap;        
        // 넘침 숨기기
        overflow : hidden;
        cursor: pointer;
    }
    .parnetContents{
        width: 100%;
        overflow: hidden;
        transition: height 0.35s ease;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .childContents{
        height: 110px;
        overflow-y: scroll;
        ::-webkit-scrollbar {
        display: none;
        }
    }
    .answerContents{
        width: 100%;
        height: 40px;
        background-color: #CCC;
    }               
    input{
        height: 15px;
        width: 100%;
        border: none;
    }
    button{
        height: 34px;
        background-color: white;
        border: 1px solid black;
        font-size: 12px;
        &:hover{
            background-color: black;
            color: white;
        }
    }

`


const Qna = () =>{


    //제목을 누르면 답변창(accodian이 생성된다.
    const [accodianPop,setAccodianPop] = useState(0);
    const onPopAccodian =()=>{
        if(accodianPop===0){
            setAccodianPop(200);
        } else if(accodianPop===200){
            setAccodianPop(0);
        }
    };
    //Qnadata를 가져옴
    const context = useContext(UserContext);
    const {qnaData} = context;

    return(

        <Container>
            <QnaInfoHead>
                <div className="qnaHead">
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
                    <div className="date">
                        DATE
                    </div>
                </div>
            </QnaInfoHead>

            {qnaData && qnaData.map((q)=>
            <QnaInfo>
                <div className="qnaHead">
                    <div className="qnaId">
                        {q.qnaId}
                    </div>
                    <div className="itemId">
                        {q.product}
                    </div>
                    <div className="userId">
                        {q.user}
                    </div>
                    <div className="qnaNmList" onClick={onPopAccodian}>
                        {q.qnaTitle}
                    </div>
                    <div className="answer">
                        <select name ="">
                            <option value="">complete</option>
                            <option value="">hold</option>
                        </select>
                    </div>
                    <div className="date">
                        20230620
                    </div>
                </div>
                <div className="parnetContents" style={{height: `${accodianPop}px`}}>
                    <div className="childContents">
                        {q.qnaContent}   
                    </div>                     
                     <div className="answerContents">
                        {q.reply}
                     </div>
                    <input type="text" placeholder="answer"/><button>submit</button>
                </div>
            </QnaInfo>
            )}

           
       

        </Container>
    );
};

export default Qna;