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

    border-top: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 80%;
    height: 90%;
`
const Products = styled.div`
    width: 100%;
    height: 100%;
    overflow-y:scroll;
    ::-webkit-scrollbar {
    display: none;
    }

`
const Products_in=styled.div`
    width: 100%;    
    height: 110px;
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
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    height: 80px;
    font-size: 12px;
`

const OrderInfo=styled.div`
    display: flex;
    flex-direction: row;    
    width: 100%;
    height: 300px;
    border-bottom: 1px solid #ccc;
    color:rgba(80,80,80);
    font-size: 12px;
    .shippingInfo{
        /* border: 1px solid black; */
        padding: 0 0 0 10px;
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        .addr{
            margin: 10px 0 10px 0;
        }
    }
`


const Cart=()=>{
    const[number,setNumber]=useState(1);
    //가격 임의 설정
    const price = 1000;
    //토탈 가격 임의 설정
    const[totalPrice,setTotalPrice]=useState(1);
    //상품 수량 늘리는 버튼
    const countPlus=()=>{
        setNumber(number+1);
        setTotalPrice(price*number);
    }
    //상품 수량 줄이는 버튼
    const countMinus=()=>{
        setNumber(number-1);
        if(number <= 1){
            setNumber(1);
        }
        setTotalPrice(price*number);
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
                        <div className="price">{totalPrice} won</div>
                    </Products_in>   <Products_in>
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
                        <div className="price">{totalPrice} won</div>
                    </Products_in>   <Products_in>
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
                        <div className="price">{totalPrice} won</div>
                    </Products_in>   <Products_in>
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
                        <div className="price">{totalPrice} won</div>
                    </Products_in>   <Products_in>
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
                        <div className="price">{totalPrice} won</div>
                    </Products_in>   <Products_in>
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
                        <div className="price">{totalPrice} won</div>
                    </Products_in>     


                </Products>
                <Total>
                    <div>
                    {totalPrice}
                    </div>
                    - 
                    <div>
                        6000원
                    </div>
                    = 
                    <div>
                    {totalPrice-6000}
                    </div>
                    
                </Total>
                <OrderInfo>
                    <div className="shippingInfo">
                            <div className="name">leetaetae</div>
                            <div className="addr">46, Samosil-gil,Nam-myeon, Gimcheon-si, <br/> Gyeongsangbuk-do, Republic of Korea</div>
                            <div className="phone">+821010004000</div>
                    </div>
                </OrderInfo>
            </MainBody>        
        </Container>
    );
};

export default Cart;