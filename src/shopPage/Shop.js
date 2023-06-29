import React, {useContext, useEffect, useState} from "react";
import styled from "styled-components";
import Header from "./Header";
import DropFiter from "./DropFiter";
import AxiosFinal from "../api/AxiosFinal";
import Pagenation from "../pages/Pagenation";
import { UserContext } from "../context/UserInfo";
import { useNavigate } from "react-router-dom";



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
    const {item, setItem} = useContext(UserContext);;
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isBlurred, setIsBlurred] = useState(false);
    const [product, setProduct] = useState([]);
    const nav = useNavigate();


    const handleHeaderClick = () => {
      setIsBlurred(!isBlurred);
    };
  
    useEffect(() => {
        const getProduct = async() => {
           const rsp = await AxiosFinal.sellitems();
           if(rsp.status === 200) setProduct(rsp.data);
           console.log(rsp.data);
       };
       getProduct();
      }, []);
    
    const mergeProduct = {};

    product.forEach((e) => {
    const { productName, productSize, productId } = e;

    if (!mergeProduct[productName]) {
        mergeProduct[productName] = {
            productId: e.productId,
            productName: e.productName,
            productImgFst: e.productImgFst,
            productImgSnd: e.productImgSnd,
            productImgDetail: e.productImgDetail,
            productPrice: e.productPrice,
            productDetail : e.productDetail,
            sizes: [],
        };
    }

    if (!mergeProduct[productName].sizes[productSize]) {
        mergeProduct[productName].sizes[productSize] = productId;
    }
    });

    const handleFilter = () => {
        setIsFilterOpen(!isFilterOpen);
      };

    const onclick = (e) => {
        console.log(e);
        setItem(e);
        nav("/ProductInfo");
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
            {Object.values(mergeProduct).slice(offset, offset + limit).map((e)=> (
                <Container_in key={e.productName} onClick={()=>onclick(e)}>
                    <div className={isBlurred ? "blur" : ""}>
                        <div className="view">
                            <img src={e.productImgFst} />
                            <div className="logo">iMMUTABLE</div>
                            <div className="info">{e.productName}</div>
                            <div className="price">{e.productPrice}</div>
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