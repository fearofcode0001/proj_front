import React, { useContext, useState } from "react";
import styled from "styled-components";
import Header from "../shopPage/Header";
import Modal from "./Modal";
import {FaRegHeart} from "react-icons/fa";
import { UserContext } from "../context/UserInfo";
import { useNavigate } from "react-router-dom";


const Container = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

const InnerContainer = styled.div`
    width: 100%;
    height: 100vh;
    margin-top: 50px;
    
    .product {
        margin: 0 40px;
        display: flex;
        .productImg {
            display: flex;
            flex-direction: column;
            width: 70%;
            justify-content: center;
            align-items: center;
            img {
                display: flex;
                margin-bottom: 10px;
                width: 500px;
                height: 100%;
            }
           
        }
        .wholeDesc {
            width: 30%;
            display: flex;
            .descWrapper {
                position: sticky;
                top: 200px;
                width: 100%;
                height: 250px;
                display: flex;
                flex-direction: column;

                .productName {
                    font-size: 20px;
                    margin-bottom: 5px;
                    font-weight: bold;
                }
                .productPrice {
                    font-size: 12px;
                    margin-bottom: 5px;
                }
                .colorSize {
                    display: flex;
                    .productColor {
                        width: 155px;
                        height: 30px;
                        border: 1px solid black;
                        padding-left: 10px;
                        margin-right: 10px;
                    }
                    .productSize {
                        select {
                            width: 150px;
                            height: 32px;
                            border-radius: 0px;
                        }
                    }

                }
                .addBtn {
                    display: flex;
                    .heart {
                        background-color: white;
                        border: 1px solid black;
                        margin: 20px 0;
                        margin-right: 10px;
                        width: 50px;
                        height: 50px;
                        font-size: 20px;
                    }
                    .cart {  
                        width: 268px;
                        height: 50px;
                        margin: 20px 0;
                        border: 1px solid black;
                        background-color: black;
                        color: white;
                        &:hover {
                        background-color: white;
                        color: black;
                        }
                    }
                }
                .productDesc {
                    width: 350px;
                    font-size: 12px;
                }
                .detailWrapper {
                    p {
                        font-size: 12px; 
                        &:hover {
                            cursor: pointer;
                            color: gray;
                        }
                    }
                    .detail {
                        font-size: 12px;
                        ul {
                            width: 350px;
                            padding-left: 0;
                            margin-left: 15px;
                        }
                    }
                }
            }
        }
    }
`;


const Review = styled.div`
    width: 100%;
    height: 300px;
    margin-bottom: 30px;
    .review {
        margin: 0 40px;
        height: 100%;
        margin-top: 20px;
        .reviewBoard {
            height: 20px;
            padding-right: 20px;
            font-size: 14px;
            font-weight: bold;
        }
    }
`;

const ReviewTable = styled.table`
    width: 100%;
    tr {
        width: 100%;
        th {
            padding-bottom: 10px;
        }
        .Num {
            width: 10%;
        }
        .Title {
            width: 50%;
        }
        .User, .Date {
            width: 20%;
        }
        td {
            text-align: center;
        }
        
    }
`;

const QnA = styled.div`
    width: 100%;
    height: 300px;
    margin-bottom: 100px;
    .qna {
        margin: 0 40px;
        .qnaBoard {
            height: 20px;
            padding-right: 20px;
            font-size: 14px;
            font-weight: bold;
        }
        .qnaWrapper {
            display: flex;
            justify-content: space-between;
            .qnaWrite {
                font-size: 14px;
                &:hover {
                    cursor: pointer;
                    text-decoration: underline;
                }
            }
        }
    }
`;

const QnATable = styled.table`
    width: 100%;
    tr {
        width: 100%;
        th {
            padding-bottom: 10px;
        }
        .Num {
            width: 10%;
        }
        .Title {
            width: 50%;
        }
        .User, .Date {
            width: 20%;
        }
        td {
            text-align: center;
        }
        
    }
`;


const ProductInfo = () => {
    
    const nav = useNavigate();
    const {item, isLogin} = useContext(UserContext);
    console.log(item);

    const [click, setClick] = useState(false);
    const [qClick, setqClick] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    // const selectList = [item.sizes];     // DB에서 가져올 값
    const [select, setSelect] = useState(item.sizes[0]);
    const handleSelect = (e) => {
        setSelect(e.target.value);
    };

    const detailClick = () => {
        setClick(!click);
    }

    const onclick = () => {
        setqClick(!qClick);
    }

    const writeQna = () => {
        if (isLogin == true) {
            setModalOpen(true);
        } else {
            nav("/Login");
        }
        
    }

    const closeModal = () => {
        setModalOpen(false);
    }
    
    return (
        <Container>
                <Header />
            <InnerContainer>
                <div className="product">           
                    <div className="productImg">
                            <img src={item.productMainImg} alt="" />
                            <img src={item.productMainImg} alt="" />
                            <img src={item.productMainImg} alt="" />
                    </div>
                    <div className="wholeDesc">
                        <div className="descWrapper">
                            <div className="productName">{item.productName}</div>
                            <div className="productPrice">{item.productPrice}</div>
                            <div className="colorSize">
                                <div className="productColor">Cement</div>
                                <div className="productSize"><select onChange={handleSelect} value={select}>
                                    {item.sizes.map((item)=> (
                                        <option value={item} key={item}>
                                            {item}
                                        </option>
                                    ))}
                                    </select></div>
                            </div>
                            <div className="addBtn">
                                <button className="heart"><FaRegHeart/></button>
                                <button className="cart">ADD TO CART</button>
                            </div>
                            <div className="productDesc">product desc</div>
                            <div className="detailWrapper">
                                <p onClick={detailClick}>DETAILS  {click? "–" : "+"}</p>
                                {click && (<div className="detail">
                                    <ul>
                                        <li>{item.productDetail}</li>
                                    </ul></div>)}
                            </div>
                        </div>
                    </div>
                </div>
                <Review>
                    <div className="review"> 
                        <div className="reviewBoard">Review</div>
                        <hr />
                        <ReviewTable>
                            <tbody>
                                <tr>
                                    <th className="Num">Num</th>
                                    <th className="Title">Title</th>
                                    <th className="User">User</th>
                                    <th className="Date">Date</th>
                                </tr>
                            </tbody>
                            <tbody>                             {/*DB 값 가져오기*/}
                                <tr>
                                    <td className="number">1.</td>
                                    <td className="title">리뷰 작성</td>
                                    <td className="user">이***</td>
                                    <td className="date">2023-06-10</td>
                                </tr>
                            </tbody>
                        </ReviewTable>
                    </div>
                </Review>
                <QnA>
                    <div className="qna">
                        <div className="qnaWrapper">
                            <div className="qnaBoard">Q&A</div>
                            <div className="qnaWrite" onClick={writeQna}>문의 작성</div>
                        </div>
                        <Modal open={modalOpen} close={closeModal} header="문의 작성"/>
                        <hr />
                        <QnATable>
                            <tbody>
                                <tr>
                                    <th className="Num">Num</th>
                                    <th className="Title">Title</th>
                                    <th className="User">User</th>
                                    <th className="Date">Date</th>
                                </tr>
                            </tbody>
                            <tbody>                             {/*DB 값 가져오기*/}
                                <tr>
                                    <td className="number">1.</td>
                                    <td className="title" onClick={onclick}>문의작성</td>
                                    <td className="user">이***</td>
                                    <td className="date">2023-06-10</td>
                                </tr>
                            </tbody>
                        </QnATable>
                    </div>
                </QnA>
            </InnerContainer>
                
        </Container>
    )

}

export default ProductInfo;