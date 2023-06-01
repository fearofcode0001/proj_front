import React from "react";
import styled from "styled-components";

const Container=styled.div`
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
    height: 1000px;
`
const Products = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid black;
    width: 100%;
    height: 50%;
    overflow-y:scroll;
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
    border: 1px solid black;
`


const Cart=()=>{

    return(
        <Container>        
            <MainBody>
                <Products>

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