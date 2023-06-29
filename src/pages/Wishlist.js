import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {Link , useNavigate} from 'react-router-dom';
import AxiosFinal from "../api/AxiosFinal";

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
    const [product, setProduct] = useState([]);
    const [wish, setWish] = useState(false);
    const navigate = useNavigate();
    const onChangePage=(e)=>{
        if(e==="logout"){
             setIsLogin(false);
             window.localStorage.setItem("userIdSuv", "");
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
    const id = window.localStorage.getItem("userIdSuv");
    console.log(id);
    useEffect(()=> {
        const wishItem = async() => {
            if(!id) {
                return;
            }
            const rsp = await AxiosFinal.wishItem(id);
            if(rsp.status === 200) setProduct(rsp.data);
            console.log(rsp.data);
        };
        wishItem();
    }, [wish]);

    const deleteWish = async(id, productId) => {
        const productLikeDelete = await AxiosFinal.deleteLikeProduct(id, productId);
        setWish(!wish);
    }

   const mergeProduct = {};

   product.forEach((e)=> {
    const{productName, userId} = e;
    if(!mergeProduct[productName]) {
        mergeProduct[productName] = {
            productName: e.productName,
            productImgFst: e.productImgFst,
            productPrice: e.productPrice
        };
    }
   });


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
                    {product && product.map((e)=> (
                    <div className="product" key={e.productId}>
                        <img src={e.productImgFst} alt="" />
                        <div className="wrapProduct">
                            <div className="productInfo">
                                <div className="name">{e.productName}</div>
                                <div className="price">{e.productPrice}</div>
                            </div>
                            <button onClick={()=>deleteWish(id, e.productId)}>X</button> 
                            </div> 
                        </div>
                       ))}  
                    {/* {Object.values(mergeProduct) && Object.values(mergeProduct).map((e)=> (
                    <div className="product" key={e.userId}>
                        <img src={e.productImgFst} alt="" />
                        <div className="wrapProduct">
                            <div className="productInfo">
                                <div className="name">{e.productName}</div>
                                <div className="price">{e.productPrice}</div>
                            </div>
                            <button onClick={()=> deleteWish(id, e.productId)}>X</button> 
                            </div> 
                        </div>
                       ))}  */}
                </div>
            </InnerContainer>
        </Container>
    );
}

export default Wishlist;