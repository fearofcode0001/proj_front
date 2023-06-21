import React,{useContext} from "react";
import styled from "styled-components";
import { UserContext } from "../context/UserInfo";


const Container=styled.table`
    width: 100%;
    height: 100%;
    overflow-y: scroll;

`

const OrderInfo=styled.tr`
    width: 100%;
    height: 27px;    
    border-bottom: 1px solid #CCC;
    display: flex;
    justify-content: space-around;
    align-items: center;    
    font-size: 11px;
    .orderId{
        width: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .orderName{
        width: 50px;
        display: flex;
        justify-content: center;
    }
    .orderPrice{
        width: 100px;
        display: flex;
        justify-content: center;
    }
    .orderStatus{
        width: 50px;
        display: flex;
        justify-content: center;
        select{
            font-size: 11px;
            border: none;
        }
    }
    .invoiceCom{
        width: 80px;
        display: flex;
        justify-content: center;
        select{
            font-size: 11px;
            border: none;
        }
    }
    .invoiceNum{
        width: 100px;
        display: flex;
        justify-content: center;
        input{
            font-size: 11px;
            border: none;
        }
    }
    .submitBtn{
        width: 50px;
        display: flex;
        justify-content: center;
        button{
            border: 1px solid black;
            background-color: white;
            font-size: 11px;
            &:hover{
                background-color: black;
                color: white;
            }
        }
    }
   
    
`
const  OrderCheck = () =>{
      //orderdata를 가져옴
      const context = useContext(UserContext);
      const {orderData} = context;
    
    return(

        <Container>
            <OrderInfo>
                <div className="orderId">
                    주문 ID
                </div>
                <div className="orderName">
                    주문자
                </div>
                <div className="orderDate">
                    주문일
                </div>
                <div className="orderPrice">
                    가격
                </div>
                <div className="orderStatus">
                    주문 상태
                </div>
                <div className="invoiceCom">
                    택배회사
                </div>
                <div className="invoiceNum">
                    송장 번호
                </div>
                <div className="submitBtn">
                    
                </div>
            </OrderInfo> 
            {orderData && orderData.map((o)=> <OrderInfo>
                <div className="orderId">
                   {o.orderId}
                </div>
                <div className="orderName">
                {o.user}
                </div>
                <div className="orderDate">
                {o.orderDate}
                </div>
                <div className="orderPrice">
                {o.totalPrice}
                </div>
                <div className="orderStatus">
                    <select name="orderStatus">
                        <option value="" selected>{o.orderStatus}</option>
                        <option value="CHECK">주문 확인</option>
                        <option value="READY">상품 준비중</option>
                        <option value="SHIP">배송중</option>
                        <option value="DONE">배송 완료</option>
                        <option value="HOLD">판매 보류</option>
                        <option value="CANCEL">주문 취소</option>
                        <option value="REFUND">환불 완료</option>
                    </select>
                    
                </div>
                <div className="invoiceCom">
                    <select name="">
                        <option value="">{o.shipCompany}</option>
                        <option value="">CJ대한통운</option>
                        <option value="">롯데 택배</option>
                        <option value="">한진 택배</option>
                    </select>
                </div>
                <div className="invoiceNum">
                    <input type="text" className="invoiceNum" value={o.shipCode}/>
                </div>          
                <div className="submitBtn">
                    <button>submit</button>
                </div>
            </OrderInfo>)}

            
          
        </Container>
    );
};

export default OrderCheck;
