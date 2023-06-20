import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Header from "./Header";
import DropFiter from "./DropFiter";
import AxiosFinal from "../api/AxiosFinal";
import Pagenation from "../pages/Pagenation";

const Container = styled.div`
    width: 100%;
    display: flex;    
    flex-direction: column;

    

`

const Mainboby=styled.div`
    margin: 0px 40px 0px 40px;
    `

const Article = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    flex-wrap: wrap;



`

const Container_in = styled.div`
    height: 400px;
    width: 300px;
    margin-left: 10px;



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
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isBlurred, setIsBlurred] = useState(false);
    const [product, setProduct] = useState([]);

    const handleHeaderClick = () => {
      setIsBlurred(!isBlurred);
      console.log(isBlurred)
    };
  
    useEffect(() => {
        const getProduct = async() => {
           const rsp = await AxiosFinal.shop();
           if(rsp.status === 200) setProduct(rsp.data);
           console.log(rsp.data);
       };
       getProduct();
      }, []);
   

    
 
    
    const handleFilter = () => {
        setIsFilterOpen(!isFilterOpen);
      };
    

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
            {product.slice(offset, offset + limit).map((e) =>(      
            <Container_in key={e.id}> 
            <div className={isBlurred ? "blur" : ""}> 
                <div className="view">
                    <img
                        src={e.productMainImg}
                        />
                        <div className="logo">iMMUTABLE</div>    
                        <div className="info">{e.productName}</div>      
                        <div className="price">{e.productPrice.toLocaleString()}</div>
                </div>  
                </div>
            </Container_in>
            ))}
            </Article>
                <Pagenation
                total={product.length}
                limit={limit}
                page={page}
                setPage={setPage}
                />
        </Mainboby>
      </Container>  
      
    )
};


export default Shop;        