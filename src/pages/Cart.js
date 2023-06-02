import React from "react";
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

    return(
        <Container>        
            <MainBody>
                <Products>
                    <Products_in>
                        <input type="checkbox" />
                        <img src ="#"/>
                        <div className="itemName">Sweat Shirts</div>
                        <div className="count">
                            <input type="text"/>
                            <div className="countbutton">
                                <button className="plus">∧</button>
                                <button className="minus">∨</button>
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