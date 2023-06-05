import React from "react";
import styled from "styled-components";



const Container = styled.div`
    background-color: white;
    margin-top: 20px;
    margin-left: 10px;
    display: flex;
    z-index: 100;
`


const Head = styled.div`
    margin-right: 15%;
    cursor: pointer;

    .top{
        font-size: 14px;
        margin: 5px;
        color: black;
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
        margin-bottom: 20px;
        color: #ccc;
        font-size: 12px;
        padding: 20px 5px 0px 5px ;
        :hover{
            color: black;
        }
    }

    a{
        text-decoration: none;
    }
`




const DropdownMenu = () => {

    return(
        <Container> 
            <Head>
                <a href="SHOP"><div className="top">SHOP</div></a>
                <div className="list">NEW RELEASRS</div>
                <a href="TOP"><div className="list">TOPS</div></a>
                <div className="list">OUTERWEAR</div>
                <div className="list">BOTTOMS</div>
                <div className="list">FOOTWEAR</div>
                <div className="list">ACCESSORIES</div>
                <div className="list2">SHOP ALL</div>
            </Head>
            <Head>
                <div className="top">COLLECTION</div>
                <div className="list">LOOKS</div>
                <div className="top" style={{marginTop: '20px'}}>THE ETERNAL COLLECTION</div>
                <div className="list">SHOP ETERNAL</div>
                <div className="list">OVERVIEW</div>
                <div className="list">FILM</div>
                <div className="list">SECOND DELIVERY</div>
            </Head>
        </Container>
        
    )
}


export default DropdownMenu