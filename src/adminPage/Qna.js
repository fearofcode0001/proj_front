import React, { useState, useContext  } from "react";
import styled, {css} from "styled-components";
import { UserContext } from "../context/UserInfo";
import AxiosFinal from "../api/AxiosFinal";


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
        height: 0px;
        overflow: hidden;
        transition: height 0.35s ease;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        ${props => props.active && css`   // *&* props가 active이면 css를 재정의 한다.
          height: 200px;
        `}
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
    //제목을 누르면 답변창(accodian)이 생성된다.
    //css에 active를 넘겨줄 값
    const[qnaAccodian, setQnaAccodian] = useState("all"); 
    //넘어오는 qndId값만 active를 통해 props를 CSS로 넘겨준다
    const onPopAccodian =(props)=>{
        // console.log(props);
        //같은 버튼 클릭시 null로 바꿔주어 모든 css를 초기화한다
        if(props===qnaAccodian){
            setQnaAccodian(null);
            // console.log(qnaAccodian);
        }else{
            setQnaAccodian(props);
        }        
    };
    //Qnadata를 가져옴
    const context = useContext(UserContext);
    const {qnaData} = context;

    //답변이 담길 상수
    const [qnaReply, setQnaReply] = useState();
    //input창에 쓰여지는 답변
    const onReply=(e)=>{
        //e.active 로 선택 된 값만 변경 되게 한다.
        setQnaReply(e.active && e.target.value)        
    }
    //답변 상태가 담길 상수
    const [qnaStatue, setQnaStatue] = useState();
    //답변 상태의 value가 담길 컴포넌트
    const getValue = (e) => {
        setQnaStatue(e.active && e.target.value);
    }
    //답변과 답변 상태를 비동기 통신으로 전달.
    const onSubmitQna =async(props)=>{
        const response = AxiosFinal.qnaUploadReply(props,qnaStatue,qnaReply);
        console.log("qna 답변 통신 ",response)
    }
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

            {qnaData && qnaData.map((q,index)=>
            <QnaInfo key={q.qnaId} active={qnaAccodian === q.qnaId}>
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
                    <div className="qnaNmList" onClick={()=>{onPopAccodian(q.qnaId)}}>
                        {q.qnaTitle}
                    </div>
                    <div className="answer" onChange={getValue}>
                        <select name ='qnaSelect'>
                            <option value="HOLD">hold</option>
                            <option value="COMPLETE">complete</option>                           
                        </select>
                    </div>
                    <div className="date">
                        20230620
                    </div>
                </div>
                <div className="parnetContents">
                    <div className="childContents">
                        {q.qnaContent}   
                    </div>                     
                     <div className="answerContents">
                        {q.reply}
                     </div>
                    <input type="text" placeholder="answer" value={qnaReply} onChange={(q) => onReply(q)}/>
                    <button onClick={()=>{onSubmitQna(q.qnaId)}}>submit</button>
                </div>
            </QnaInfo>
            )}

           
       

        </Container>
    );
};

export default Qna;