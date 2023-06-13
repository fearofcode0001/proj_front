import React from "react";
import styled from "styled-components";


const Container=styled.div`
    width: 100%;
    height: 100%;
`
const ItemInfo = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center; 
    font-size: 11px;
    border-bottom: 1px solid #ccc;
    .itemId{
        width: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .itemNm{
        width: 430px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .itemColor{
        width: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .itemSize{
        width: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .itemStock{
        width: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        input{
            border: none;
            font-size:11px;
            width: 30px;
        }
    }
    .itemSell{
        width: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        select{
            font-size: 11px;
            border: none;
        }
    }
`

const  Inventory = () =>{
    return(

        <Container>
           <ItemInfo>
               <div className="itemId">
                ID
               </div>
               <div className="itemNm">
                NAME
               </div>
               <div className="itemColor">
                COLOR
               </div>
               <div className="itemSize">
                SIZE
               </div>  
               <div className="itemStock">
                    STOCK            
               </div>
               <div className="itemSell">
                STATUS
               </div>  
           </ItemInfo>
           <ItemInfo>
               <div className="itemId">
                123498
               </div>
               <div className="itemNm">
                sweat hoodie
               </div>
               <div className="itemColor">
                black
               </div>
               <div className="itemSize">
               3
               </div>  
               <div className="itemStock">
                   
                <input type="text" value={20}/>
               </div>
               <div className="itemSell">                
                <select name ="">
                    <option value="">sell</option>
                    <option value="">hold</option>
                    <option value="">sold_out</option>
                </select>
               </div>  
           </ItemInfo>
        </Container>
    );
};

export default Inventory;