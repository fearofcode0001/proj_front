import React from "react";
import styled from "styled-components";


const Container=styled.div`
    width: 100%;
    height: 100%;
`

const CustomerInfo = styled.div`
    width: 100%;
    height: 27px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 11px;
    border-bottom: 1px solid #CCC;
    .customerId{
        width: 100px;
        display: flex;
        justify-content: center;
    }
    .customerName{
        width: 80px;
        display: flex;
        justify-content: center;
    }
    .customerAddr{
        width: 500px;
        display: flex;
        justify-content: center;
    }
    .customerPhone{
        width: 100px;
        display: flex;
        justify-content: center;
    }
    .customerGrade{
        width: 50px;
        display: flex;
        justify-content: center;
    }
    .customerDel{
        width: 70px;
        display: flex;
        justify-content: center;
    }
    button{
        width: 70px;
        border: none;
        background-color: white;
        font-size: 11px;
        &:hover{
            background-color: black;
            color:white;
        }
    }
`
const  CustomerMan = () =>{
    return(

        <Container>
            <CustomerInfo>
                <div className="customerId">
                    CustomerID
                </div>
                <div className="customerName">
                    Name
                </div>
                <div className="customerAddr">
                    Address
                </div>
                <div className="customerPhone">
                    Phone
                </div>
                <div className="customerGrade">
                    Grade
                </div>
                <div className="customerDel">
                    Del
                </div>
            </CustomerInfo>
            <CustomerInfo>
                <div className="customerId">
                    customer1597
                </div>
                <div className="customerName">
                    이태석
                </div>
                <div className="customerAddr">
                    서울시 강남구 강남동 강남아파트 강남동 강남호
                </div>
                <div className="customerPhone">
                    010-7777-8888
                </div>
                <div className="customerGrade">
                    3
                </div>
                <div className="customerDel">
                    <button>탈퇴</button>
                </div>
            </CustomerInfo>
        </Container>
    );
};

export default CustomerMan;