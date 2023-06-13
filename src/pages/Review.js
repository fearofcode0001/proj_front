import React, { useState } from "react";
import styled from "styled-components";
import {Link , useNavigate} from 'react-router-dom';
import { FaStar } from 'react-icons/fa';


const Container = styled.div`
    width: 100%;
    height: 100vh;
`;

const Head = styled.div`
    width: 100%;
    display: flex;
    
    a{
        text-decoration: none;
        color: black;
    }
    .nav{
        width: 100%;
        padding: 0 20px 0 10px;
        display: flex;
        justify-content: space-between;
    }
   
    .nav1{
        height: 70px;
        font-weight: bolder;
        font-size: 50px;
    }

    .nav2{
        display: flex;
        justify-content: center;
        align-items: center;
        color: rgb(100,100,100);
        font-size: 13px;
    }
`;

const TopButton = styled.button`
    border: none;
    background-color: white;
   
    &:hover{
        color: rgba(0,0,0,0.5);
    }
` ;

const InnerContainer = styled.div`
    width: 100%;
    margin-top: 50px;
    .header {
        margin: 0 40px;
        font-size: 25px;
        font-weight: bold;
        margin-bottom: 20px;
    }
`;

const Product = styled.div`
    width: 100%;
    .wrapper {
        margin: 40px 40px;
        display: flex;
        .product {
            width: 50%;
            display: flex;
            justify-content: center;
            .imgName {
                display: flex;
                flex-direction: column;
                img {
                    width: 400px;
                    height: 400px;
                    object-fit: cover;
                }
                .Name {
                    display: flex;
                    margin-top: 30px;
                    font-size: 20px;
                    justify-content: center;
                    font-weight: bolder;
                }
            }
        }
        .content {
            width: 50%;
            .star{
                margin-bottom: 50px;
                & svg {
                    color: #e6e6e6;
                    cursor: pointer;
                }
                /* :hover svg {
                    color: black;
                } */
                /* & svg:hover ~ svg {
                    color: #e6e6e6;
                } */
                .black {
                    color: black;
                }
            }
            .Title {
                margin: 20px 0;
                display: flex;
                .title {
                    font-size: 14px;
                    width: 20%;
                }
                input {
                    width: 400px;
                }
            }
            .rvCon {
                margin-bottom: 20px;
                display: flex;
                .rvContent {
                    width: 20%;
                    font-size: 14px;
                }
                textarea {
                    width: 400px;
                    height: 200px;
                    resize: none;
                }
            }
            .Btn {
                /* margin-top: 90px; */
                display: flex;
                justify-content: center;
                button {
                width: 410px;
                height: 40px;
                background-color: black;
                color: white;
                outline: none;
                cursor: pointer;
                }
            }
        }
    }
`;


const IsLoginFalse = [
    { name : "login"}
  ]
  const IsLoginTrue = [
    { name : "logout"},
    { name : "mypage"}, 
    { name : "cart"},    
    { name : "FAQ"}
  ]

const Review = () => {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();
    const onChangePage=(e)=>{
        if(e==="logout"){
             setIsLogin(false);
         }
         else if (e==="FAQ") {
             navigate("/FAQ")
         }
         else if (e==="cart") {
             navigate("/Cart")
         }
         else if(e==="mypage"){
             navigate("/Mypage")
         }
     }

    const [clicked, setClicked] = useState([false, false, false, false, false]);
    const array = [0, 1, 2, 3, 4];
    const starClick = (index) => {
        let clickStatus = [...clicked];
        for(let i = 0; i < 5; i++) {
            clickStatus[i] = i <= index ? true : false;
        }
        setClicked(clickStatus);
    }
    let score = clicked.filter(Boolean).length;
    console.log(score);

    return (
        <Container>
            <Head>
            <div className="nav">
                <a href="/"><div className="nav1" >
                     iMMUTABLE
                    </div></a>
                    <div className="nav2">
                    {IsLoginFalse.map(s=>( isLogin===false &&
                                        <TopButton key={s.name}>
                                            <Link to="/Login">{s.name}</Link>
                                        </TopButton>
                                    ))}
                           {IsLoginTrue.map(s=>( isLogin===true &&
                                        <TopButton key={s.name} onClick={()=>onChangePage(s.name)}>
                                            {s.name}
                                        </TopButton>
                                    ))}
                    </div>
                </div>
            </Head>
            <InnerContainer>
                <div className="header">후기 작성
                <hr />
                </div>
                <Product>
                    <div className="wrapper">
                        <div className="product">
                            <div className="imgName">
                                <img src="product.jpg" alt="" />
                                <div className="Name"><span>Viscose Tricot Crewneck</span></div>
                            </div>
                        </div>
                        <div className="content">
                            <div className="star">{array.map((e)=> (
                                <FaStar key={e}
                                onClick={()=> starClick(e)}
                                className={clicked[e] && 'black'}
                                size="30"
                                />
                            ))}</div>
                            <div className="Title">
                                <div className="title">제목</div>
                                <input type="text" placeholder="제목을 입력하세요"/>
                            </div>
                            <div className="rvCon">
                                <div className="rvContent">내용</div>
                                <textarea placeholder="내용을 입력하세요"/>
                            </div>
                            <div className="Btn">
                                <button>등록하기</button>
                            </div>
                        </div>

                    </div>
                </Product>
            </InnerContainer>
        </Container>
    );
}

export default Review;