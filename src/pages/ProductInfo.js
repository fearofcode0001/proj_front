import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../shopPage/Header";
import Modal from "./Modal";
import {FaRegHeart, FaHeart} from "react-icons/fa";
import { UserContext } from "../context/UserInfo";
import { useNavigate } from "react-router-dom";
import AxiosFinal from "../api/AxiosFinal";
import { Accordion, AccordionItem } from '@szhsin/react-accordion';


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
                    .faHeart {
                        color: red;
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
    table-layout: fixed; /* 테이블 크기 고정 */
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

    const [click, setClick] = useState(false);
    const [qClick, setqClick] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [select, setSelect] = useState();
    const [likeClick, setlikeClick] = useState(false);
    const [productId, setProductId] = useState(item.sizes["S"]);

    const id = window.localStorage.getItem("userIdSuv");

    const handleSelect = (e) => {
        const size = e.target.value;
        const productId = item.sizes[size];
        setSelect(size);
        setProductId(productId);
    };

    const detailClick = () => {
        setClick(!click);
    }

    const clickLike = async(id, productId) => {
        const productLike = await AxiosFinal.likeProduct(id, productId);
        setlikeClick(true);
    }

    const clickLikeDelete = async(id, productId) => {
        const productLikeDelete = await AxiosFinal.deleteLikeProduct(id, productId);
        setlikeClick(false);
    }

    const onclick = () => {
        setqClick(!qClick);
    }

    const writeQna = () => {
        // if (isLogin == true) {
        //     setModalOpen(true);
        // } else {
        //     nav("/Login");
        // }
        setModalOpen(true);
        
    }
    
    useEffect(()=> {
        const heartView = async(id, productId) => {
            const rsp = await AxiosFinal.viewHeart(id, productId);
            if(rsp.data) {
                setlikeClick(true);
            } else { 
                setlikeClick(false);
            }
        }
        heartView(id, productId);
    }, []);

    

    const closeModal = () => {
        setModalOpen(false);
    }

    return (
        <Container>
                <Header />
            <InnerContainer>
                <div className="product">           
                    <div className="productImg">
                            <img src={item.productImgFst} alt="" />
                            <img src={item.productImgSnd} alt="" />
                            <img src={item.productImgDetail} alt="" />
                    </div>
                    <div className="wholeDesc">
                        <div className="descWrapper">
                            <div className="productName">{item.productName}</div>
                            <div className="productPrice">{item.productPrice}</div>
                            <div className="colorSize">
                                <div className="productColor">Cement</div>
                                <div className="productSize">
                                    <select onChange={handleSelect} value={select}>
                                        {Object.keys(item.sizes).map((size) => (
                                        <option value={size} key={item.sizes[size]}>
                                            {size}
                                        </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="addBtn">
                               {likeClick? <button className="heart" onClick={()=>clickLikeDelete(id, productId)}><FaHeart className="faHeart"/></button> : <button className="heart" onClick={()=>clickLike(id, productId)}><FaRegHeart/></button>}
                                <button className="cart">ADD TO CART</button>
                            </div>
                            <div className="productDesc">product desc</div>
                            <div className="detailWrapper">
                                <p onClick={detailClick}>DETAILS  {click? "–" : "+"}</p>
                                {click && (<div className="detail">
                                    <ul>
                                        <li>{item.productContent}</li>
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
                            <Accordion>
                                <tbody style={{width: '100%'}}>                             {/*DB 값 가져오기*/}
                                        <tr >
                                            <td className="number"style={{ paddingBottom: '10px' }}>1.</td>
                                            <td className="title" onClick={onclick} style={{ width: '50%' }}>문의작성</td>
                                            <td className="user" style={{ width: '20%' }}>이***</td>
                                            <td className="date" style={{width: '20%'}}>2023-06-10</td>
                                        </tr>
                                    </tbody>
                                <AccordionItem>
                                    
                                </AccordionItem>
                            </Accordion>
                            
                        </QnATable>
                    </div>
                </QnA>
            </InnerContainer>
                
        </Container>
    )

}

export default ProductInfo;