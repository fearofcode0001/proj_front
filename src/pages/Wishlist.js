import React, { useState } from "react";
import styled from "styled-components";
import {Link , useNavigate} from 'react-router-dom';

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
    .wrapper {
        margin: 0 40px;
        display: flex;
        flex-wrap: wrap;
        .product {
            margin: 15px 15px;
            img {
                height: 400px;
            }
            .wrapProduct {
                display: flex;
                justify-content: space-between;
                .name {
                    font-weight: bold;
                }
                button {
                    background-color: white;
                    font-size: 15px;
                    border: none;
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

const Wishlist = () => {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();
    const onChangePage=(e)=>{
        if(e==="logout"){
             setIsLogin(false);
             navigate("/")
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
                <div className="header">나의 위시리스트
                <hr />
                </div>
                <div className="wrapper">   
                    <div className="product">
                        <img src="product.jpg" alt="" />
                        <div className="wrapProduct">
                            <div className="productInfo">
                                <div className="name">Viscose Tricot Crewneck</div>
                                <div className="price">₩‌1,054,800</div>
                            </div>
                            <button>X</button> 
                        </div> 
                    </div>
                    <div className="product">
                        <img src="product.jpg" alt="" />
                        <div className="wrapProduct">
                            <div className="productInfo">
                                <div className="name">Viscose Tricot Crewneck</div>
                                <div className="price">₩‌1,054,800</div>
                            </div>
                            <button>X</button> 
                        </div> 
                    </div>
                    <div className="product">
                        <img src="product.jpg" alt="" />
                        <div className="wrapProduct">
                            <div className="productInfo">
                                <div className="name">Viscose Tricot Crewneck</div>
                                <div className="price">₩‌1,054,800</div>
                            </div>
                            <button>X</button> 
                        </div> 
                    </div>
                    <div className="product">
                        <img src="product.jpg" alt="" />
                        <div className="wrapProduct">
                            <div className="productInfo">
                                <div className="name">Viscose Tricot Crewneck</div>
                                <div className="price">₩‌1,054,800</div>
                            </div>
                            <button>X</button> 
                        </div> 
                    </div>
                    <div className="product">
                        <img src="product.jpg" alt="" />
                        <div className="wrapProduct">
                            <div className="productInfo">
                                <div className="name">Viscose Tricot Crewneck</div>
                                <div className="price">₩‌1,054,800</div>
                            </div>
                            <button>X</button> 
                        </div> 
                    </div>
                    <div className="product">
                        <img src="product.jpg" alt="" />
                        <div className="wrapProduct">
                            <div className="productInfo">
                                <div className="name">Viscose Tricot Crewneck</div>
                                <div className="price">₩‌1,054,800</div>
                            </div>
                            <button>X</button> 
                        </div> 
                    </div>
                </div>

            </InnerContainer>
        </Container>
    );
}

export default Wishlist;