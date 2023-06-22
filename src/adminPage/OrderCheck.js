import React,{useContext,useState} from "react";
import styled from "styled-components";
import { UserContext } from "../context/UserInfo";
import AxiosFinal from "../api/AxiosFinal";
import { getValue } from "@testing-library/user-event/dist/utils";


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
    .order{
        width: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
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
    .orderAddr{
        width: 200px;
        display: flex;
        justify-content: center;
    }
    .orderDate{
        width: 70px;
        display: flex;
        justify-content: center;
    }
    .orderPrice{
        width: 50px;
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
        width: 75px;
        display: flex;
        justify-content: center;
        input{
            font-size: 11px;
            border: none;
        }
    }
    .invoiceTrace{
        width: 5px;
        display: flex;
        justify-content: center;
        a{
            
            background-color: white;
            color: black;
            text-decoration: none;
            font-size: 11px;
            &:hover{
                background-color: black;
                color: white;
            }
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
    //송장을 설정하는 useState
    const [putShipCode,setPutShipCode] = useState();
    //주문의 순서인 index를 설정하는 useState
    const [orderIndex,setOrderIndex] = useState();
    //송장 클릭시 index값이 들어와진다.
    const onSetIndex=(index)=>{
        setOrderIndex(index);
    }
    const onSendIndex=(index)=>{
        setPutShipCode(orderData[index].shipCode);
    }


    const addComma = (price) => {
        let returnString = price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return returnString;
    }
    
    const [orderStatue,SetOrderStatue] = useState();
    const getValue = (e) => {
        const { name } = e.target;
        SetOrderStatue({
            ...orderStatue,
            //name 키를 가진 값을 value로 설정
            [name]: e.target.value
          })
       
    console.log(orderStatue);
    // qnaSelect, qnaReply 각각 답이 담긴다. 
    }


    const onSubmitOrder =async(props)=>{
        SetOrderStatue({...orderStatue});  
        console.log(orderStatue);
        const response = AxiosFinal.orderUploadData(props,orderStatue.orderStatus,orderStatue.shipCode,orderStatue.shipCompany);
        
    }
    return(

        <Container>
            <OrderInfo>
                <div className="order">
                    순서
                </div>
                <div className="orderId">
                    주문 ID
                </div>
                <div className="orderName">
                    주문자
                </div>
                <div className="orderAddr">
                    주문주소
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
                <div className="invoiceTrace">
                    
                </div>
                <div className="submitBtn">
                    
                </div>
            </OrderInfo> 
            {orderData && orderData.map((o,index)=> <OrderInfo>
                <div className="order">
                    {index+1}
                </div>
                <div className="orderId">
                   {o.orderId}
                </div>
                <div className="orderName">
                {o.user}
                </div>
                <div className="orderAddr">
                {o.orderAddress}
                </div>
                <div className="orderDate">
                {o.orderDate}
                </div>
                <div className="orderPrice" >
                {o.totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </div>
                <div className="orderStatus">
                    <select name="orderStatus" onChange={getValue}>
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
                    <select name='shipCompany' onChange={getValue}>
                        <option value="">{o.shipCompany}</option>
                        <option value="CJ">CJ대한통운</option>
                        <option value="LOTTE">롯데 택배</option>
                        <option value="HANJIN">한진 택배</option>
                    </select>
                </div>
                <div className="invoiceNum">
                    <input type="text" className="invoiceNum" value={putShipCode} placeholder={o.shipCode}
                     onChange={getValue} name='shipCode'/>
                </div>
                <div className="invoiceTrace">
                    {o.shipCompany === null && <a href="#" target="blank">trace</a>}                
                    {o.shipCompany === "CJ" && <a href={'https://trace.cjlogistics.com/web/detail.jsp?slipno=/'+ o.shipCode} target="blank">trace</a>}
                    {o.shipCompany === "LOTTE" && <a href={'https://www.lotteglogis.com/home/reservation/tracking/linkView?InvNo=/'+ o.shipCode} target="blank">trace</a>}
                    {o.shipCompany === "HANJIN" && <a href={'https://smile.hanjin.co.kr:9080/eksys/smartinfo/m.html?wbl=/'+ o.shipCode} target="blank">trace</a>}
                </div>          
                <div className="submitBtn">
                    <button onClick={()=>{onSubmitOrder(o.orderId)}}>submit</button>
                </div>
            </OrderInfo>)}

            
          
        </Container>
    );
};

export default OrderCheck;
