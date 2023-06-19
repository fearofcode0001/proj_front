import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SaleDate from "./SaleDate";
import OrderCheck from "./OrderCheck";
import ItemUpload from "./ItemUpload";
import Inventory from "./Inventory";
import Qna from "./Qna";
import CustomerMan from "./CustomerMan";
import AxiosFinal from "../api/AxiosFinal";


const Container=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    position: fixed;
`
const Head = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 175px;
    margin-top: 5px;
    .headTop{
        width: 98%;
        height: 20px;
        display: flex ;
        justify-content: space-between;
        align-items: center;
        button{
            font-size: 12px;
            border: none;
            background-color: white;
            &:hover{
                color: #CCC;
            }
        }
        a{
            font-size: 12px;
            text-decoration: none;
            color: black;
            &:hover{
                color: #CCC;
            }
        }
    }
    .headFooter{
        margin-top:5px;
        width: 98%;
        height: 120px;
        display: flex;
        border-top:  1px solid #CCC;
        .newOrder,.shipTrack{
            width: 33%;
            height: 100%;
            margin-right: 3px;
            font-size: 15px;
            display: flex;
            justify-content: center;
            align-items: center;       
        }
        .customerAlert{
            width: 33%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
           

        }
        span{
            color: red;
            font-size:20px;
            font-weight: bolder;
            &:hover{
                color: #CCC;
            }
    
        }
    }
`
const Sidemenu = [
    //버튼을 카테고리로 분류하여 값을 쉽게 가져오기 위해 name으로 설정한다.
    { name : "saleDate"},
    { name : "orderCheck"},    
    { name : "itemUpload"},
    { name : "inventory"},
    { name : "qna"},
    { name : "customer Management"},
    { name : "coming soon"}
  ]

const MainBody = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 98%;
    height: 100%;
    margin-bottom: 10px;
    .sideMenu{
        width: 200px;
        height: 100%;
        margin-right: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .body{
        width: 100%;
        height: 100%;
        border-top: 1px solid #CCC;
        
    }
`
const SideBustton=styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    border-top: 1px solid #CCC;
    justify-content: center;
    align-items: center;
    font-size: 11px;
    cursor: pointer;
    &:hover{
        color: #CCC;
    }

`
const AdminPage=()=>{

    //임시 주문건 입력
    const [neworder,setNewOrder] = useState(1);

    const [changeMenu,setChangeMenu] =useState();

    const onChangePage =(e)=>{
        setChangeMenu(e);
        
    }
    //전체회원조회 컴포넌트
    const onLoadCustomer=(e)=>{
        if(e==="customer Management"){
            console.log("customer Management");
            const response = AxiosFinal.customerManage();
        }
    }
    return(
        <Container>
            <Head> 
                <div className="headTop">
                    <button>logout</button>
                    <Link to="/">home</Link>
                </div>
                
                <div className="headFooter">
                    <div className="newOrder">
                        신규 주문 &nbsp; <span>{neworder}</span>&nbsp;건
                    </div>
                    <div className="shipTrack">
                        배송 현황 &nbsp;<span>{neworder}</span>&nbsp;건  
                    </div>
                    <div className="customerAlert">
                        고객 문의  &nbsp;<span>{neworder}</span>&nbsp;건 
                    </div>
                </div>
                
            </Head>

            <MainBody> 
                <div className="sideMenu">
                    {Sidemenu.map(s=>(<SideBustton key={s.name} onClick={()=>{onChangePage(s.name);
                                                                               onLoadCustomer(s.name);}}>
                        {s.name}
                    </SideBustton> ))}

                </div>
                <div className="body">
                    {changeMenu ==="saleDate" &&<SaleDate/>}                    
                    {changeMenu ==="orderCheck" &&<OrderCheck/>}
                    {changeMenu ==="itemUpload" &&<ItemUpload/>}
                    {changeMenu ==="inventory" &&<Inventory />}
                    {changeMenu ==="qna" &&<Qna/>}                    
                    {changeMenu ==="customer Management" &&<CustomerMan />}       
                    

                </div>

            </MainBody>
        </Container>
    );
};

export default AdminPage;