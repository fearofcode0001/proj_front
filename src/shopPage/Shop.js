import React, {useContext, useEffect, useState} from "react";
import styled from "styled-components";
import Header from "./Header";
import DropFiter from "./DropFiter";
import AxiosFinal from "../api/AxiosFinal";
import { UserContext } from "../context/UserInfo";



const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;    
    flex-direction: column;
`

const Mainboby=styled.div`

    margin: 0px 40px 0px 40px;
    `

const Article = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    /* justify-content: center;  */

`

const Container_in = styled.div`
    height: 500px;
    width: 300px;
    margin-left: 10px;
    color: black;    

    .blur {
        filter: blur(5px); /* 흐릿한 효과를 원하는 정도로 조절합니다. */
    }

    img{
        height: 400px;
    }

    .logo{
        width: 200px;
        font-size: 15px;
        font-weight:bolder;
    
    }

    .price{
        width: 200px;
        font-size: 10px;
    }
`;  



const Filter = styled.div`
    width: 100px;
    margin-top: 20px;
    font-size: 13px;
    color: black;
    float: right;
    display: flex;
    cursor: pointer;    
`


  


const Shop = () => {
    const context = useContext(UserContext);
    const {test, isLogin} = context;
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isBlurred, setIsBlurred] = useState(false);
    const [product, setProduct] = useState([]);

    const handleHeaderClick = () => {
    //   setIsBlurred(!isBlurred);
    };
  
   useEffect(() => {
     const getProduct = async() => {
        const rsp = await AxiosFinal.shop();
        if(rsp.status === 200) setProduct(rsp.data);
    };
    getProduct();
   }, []);

    const handleFilter = () => {
        setIsFilterOpen(!isFilterOpen);
      };

    
    const onclick = (x) => {
        // console.log(x);
        // setTest(ssss);
    }

    return(
      <Container>
        <Header onClick={handleHeaderClick}/>
       
        <Mainboby >
            <Filter>
                <div onClick={handleFilter}>
                    {isFilterOpen ? '정렬 기준 ▲' : '정렬 기준 ▼'}
                    {isFilterOpen && <DropFiter/>}
                </div>
                  
            </Filter>  
            <Article >
            {product && product.map((x) => (    
            <Container_in key={x.productId} onClick={()=>onclick(x)}>
            <div className={isBlurred ? 'blur' : ''}>
                <div className="view">
                    <img src={x.productMainImg}/>
                    <div className="logo">iMMUTABLE</div>      
                    <div className="info">{x.productName}</div>
                    <div className="price">{x.productPrice}</div>
                </div>
            </div>
            </Container_in>
            ))}
            </Article>
        </Mainboby>
      </Container>  
      
    )
};


export default Shop;        