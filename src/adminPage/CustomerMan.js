import React ,{ useContext }from "react";
import styled from "styled-components";
import { UserContext } from "../context/UserInfo";


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
        border: 1px solid black;
        background-color: white;
        font-size: 11px;
        &:hover{
            background-color: black;
            color:white;
        }
    }
    .parnetContents{
        width: 100%;
        overflow: hidden;
        transition: height 0.35s ease;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .childContents{
        height: 110px;
        overflow-y: scroll;
        ::-webkit-scrollbar {
        display: none;
        }
    }
`
const  CustomerMan = () =>{

    const context = useContext(UserContext);
    const {customerData} = context;
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
            
            {customerData && customerData.map((x, index) =>
                <CustomerInfo>
                    <div className="customerId">
                        {x.userId}
                    </div>
                    <div className="customerName">
                        {x.userName}
                    </div>
                    <div className="customerAddr">
                        {x.userAddr}
                    </div>
                    <div className="customerPhone">
                        {x.userPhone}
                    </div>
                    <div className="customerGrade">
                        {x.authority}
                    </div>
                    <div className="customerDel">
                        <button>탈퇴</button>
                    </div>
                </CustomerInfo>
            )}
            
        </Container>
    );
};

export default CustomerMan;