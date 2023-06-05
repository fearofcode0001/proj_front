import React from "react";
import styled from "styled-components";

const Head = styled.div`
    margin-right: 15%;
    cursor: pointer;
`
const Container = styled.div`
    margin-top: 20px;
    margin-left: 10px;
    height: 100vh;
    display: flex;
    border: 1px solid blue;

    .top{
        font-size: 14px;
        margin: 5px;
    }
    .list{
        color: #ccc;
        font-size: 12px;
        padding: 5px;
        :hover{
            color: black;
        }
    }
    

    .list2{
        color: #ccc;
        font-size: 12px;
        padding: 20px 5px 0px 5px ;
        :hover{
            color: black;
        }
    }
`



const Dropdown2 = () => {

    return(
        <Container>
            <Head>
                <div className="top">SHOP</div>
                <div className="list">NEW RELEASRS</div>
                <div className="list">TOPS</div>
                <div className="list">OUTERWEAR</div>
                <div className="list">BOTTOMS</div>
                <div className="list">FOOTWEAR</div>
                <div className="list">ACCESSORIES</div>
                <div className="list2">SHOP ALL</div>
            </Head>
        </Container>
        
    )
}


export default Dropdown2