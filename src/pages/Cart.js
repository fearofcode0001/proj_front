import React, { useState } from "react";
import styled from "styled-components";

const Container=styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
const MainBody=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid black;
    width: 80%;
    height: 90%;
`
const Products = styled.div`
    width: 100%;
    height: 50%;
    overflow-y:scroll;
    ::-webkit-scrollbar {
    display: none;
    }

`
const Products_in=styled.div`
    width: 100%;    
    height: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    &:hover{
        background-color: rgba(0,0,0,0.1);
    }
    .checkBox{
        width: 20px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 10px;
    }
    .product_image{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 100%;
    }
    .itemName{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 40%;
        height: 100%;
        padding: 0 0 0 5px;
        font-size: 12px;
    }
    .count{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
    }
    input{
        width: 20px;
        height: 20px;
    }
    .countbutton{
        display: flex;
        flex-direction: column;
    }
    .plus,.minus{
        width: 15px;
        height: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        background-color: white;
        &:hover{
            background-color: black;
            color: white;
        }
    }
    .price{
        width: 120px;
        font-size: 12px;
    }
`
const Total=styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    border: 1px solid black;
    height: 20%;
`
const OrderInfo=styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 30%;
`


const Cart=()=>{
    const[number,setNumber]=useState(1);

    const countPlus=()=>{
        setNumber(number+1);
    }
    const countMinus=()=>{
        setNumber(number-1);
        if(number <= 1){
            setNumber(1);
        }
    }
    return(
        <Container>        
            <MainBody>
                <Products>
                    <Products_in>
                        <div className="checkBox">
                            <input type="checkbox"/></div>
                        <div className="product_image">
                            <img src ="#"/></div>                        
                        <div className="itemName">Sweat Shirts</div>
                        <div className="count">
                            <input type="text" value={number}/>
                            <div className="countbutton">
                                <button className="plus" onClick={countPlus}>∧</button>
                                <button className="minus" onClick={countMinus}>∨</button>
                            </div>
                        </div>
                        <div className="price">159,000 won</div>
                    </Products_in>

                   
                </Products>
                <Total>
                    
                </Total>
                <OrderInfo>

                </OrderInfo>
            </MainBody>        
        </Container>
    );
};

export default Cart;