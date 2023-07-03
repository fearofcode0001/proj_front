import React, { useState } from "react";
import styled from "styled-components";
import MyPageHeader from "../shopPage/MypageHeader";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`
const Mainbody = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;

`

const InnerContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`


const Title = styled.div`
    width: 100%;   
 
    .ti{
        font-size: 30px;
        font-weight: bold;
        justify-content: center;
        align-items: center;
        display: flex;
      
    }
  
`

const Article = styled.div`

    width: 1200px;
    height: 380px;
    display: flex;

    

    .header{
        font-size: 20px;
        font-weight: bold;
        height: 30px;
        border-bottom: 1.5px solid #ccc;
        width: 100%
    }

    .view{
        position: absolute;
        width: 1200px;
    }

    .viewTable{
        border-bottom: 1px solid #ccc;
        font-size: 15px;
        margin-top: 40px;
        width: 100%;
        .num{
            width: 5%;
        }
        .sub{
            width: 60%;
        }
        .writer{
            width: 10%;
        }
        .date{
            width: 10%;
        }
    }
   
    .textTable{
        width: 100%;
        border-bottom: 1px solid #ccc;
        td{
            text-align: center;
            font-size: 12px;
        }
        .textNum{
            width: 5%;
        }
        .textSub{
            width: 60%;
        }
        .textWriter{
            width: 10%;
        }
        .textDate{
            width: 10%;
        }

    }  
`


const Mypost = () => {


    return(

        <Container>
            <Mainbody>
                <MyPageHeader />
                <InnerContainer>
                    <Title>
                        <div className="ti">
                            내 게시물
                        </div>
                    </Title>
                    <Article>
                        <div className="header">
                            REVIEW
                        </div>
                        <div className="view">
                            <table className="viewTable">
                                <tr>
                                    <th className="num">NUM</th>
                                    <th className="sub">SUBJECT</th>
                                    <th className="writer">WRITER</th>
                                    <th className="date">DATE</th>
                                </tr>
                            </table>
                            <table className="textTable">
                                <tr>
                                    <td className="textNum">1</td>
                                    <td className="textSub">사이즈도 적당하고 마음에 들어요 :)</td>
                                    <td className="textWriter">김동규</td>
                                    <td className="textDate">2023.06.23</td>
                                </tr>
                            </table>
                        </div>
                    </Article>
                    <Article>
                        <div className="header">
                            Q & A
                        </div>
                        <div className="view">
                            <table className="viewTable">
                                <tr>
                                    <th className="num">NUM</th>
                                    <th className="sub">SUBJECT</th>
                                    <th className="writer">WRITER</th>
                                    <th className="date">DATE</th>
                                </tr>
                            </table>
                            <table className="textTable">
                                <tr>
                                    <td className="textNum">1</td>
                                    <td className="textSub">문의드립니다.</td>
                                    <td className="textWriter">김동규</td>
                                    <td className="textDate">2023.06.23</td>
                                </tr>
                            </table>
                        </div>  
                    </Article>
                </InnerContainer>
            </Mainbody>
        </Container>
    )
}


export default Mypost;