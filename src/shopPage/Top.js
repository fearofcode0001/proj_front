import React, {useState} from "react";
import styled from "styled-components";
import test from "../img/test.png"




const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;    
`

const Mainboby=styled.div`
    width: 100%;
    margin: 0px 40px 0px 40px;  
    border: 1px solid black;
    display: flex;
   

    `






const Article = styled.div`
    display: flex;
    position: absolute;
    flex-wrap: wrap;
    border: 1px solid red;
    height: calc(100vh - 200px); 
        

    .blur{
        filter: blur(5px); 
        pointer-events: none; 
        opacity: 0.8; 
    }
    
   
`

const Container_in = styled.div`
    display: flex;
    height: 380px;
    width: 400px;
    align-items: center;    
    justify-content: center;
    color: black;
       
    
    img{
        display: block;
        width: 300px;
        height: 300px;
    }

    .logo{
        width: 200px;
        font-size: 15px;
        font-weight:bolder;
    
    }

    .price{
        width: 200px;
        font-size: 10px;
    }
`;



  


const TOP = () => {
    
    const [isMenuClicked, setIsMenuClicked] = useState(false);


      

    return(
        
      <Container>
        <Mainboby>
            <Article>
            <Container_in>
            <div className={isMenuClicked ? "blur" : ""}> 
            <div className="view">
                <img src={test}/>
                <div className="logo">iMMUTABLE</div>      
                <div className="info">Viscose Tricot Crewneck</div>
                <div className="price">₩‌1,043,000</div>
            </div>
            </div>
            </Container_in>
            <Container_in>
            <div className={isMenuClicked ? "blur" : ""}>
            <div className="view">
                <img src={test}/>
                <div className="logo">iMMUTABLE</div>      
                <div className="info">Viscose Tricot Crewneck</div>
                <div className="price">₩‌1,043,000</div>
            </div>
            </div>
            </Container_in>
            <Container_in>
            <div className={isMenuClicked ? "blur" : ""}>
            <div className="view">
                <img src={test}/>
                <div className="logo">iMMUTABLE</div>      
                <div className="info">Viscose Tricot Crewneck</div>
                <div className="price">₩‌1,043,000</div>
            </div>
            </div>
            </Container_in>
            <Container_in>
            <div className={isMenuClicked ? "blur" : ""}>
            <div className="view">
                <img src={test}/>
                <div className="logo">iMMUTABLE</div>      
                <div className="info">Viscose Tricot Crewneck</div>
                <div className="price">₩‌1,043,000</div>
            </div>
            </div>
            </Container_in>
            <Container_in>
            <div className={isMenuClicked ? "blur" : ""}>
            <div className="view">
                <img src={test}/>
                <div className="logo">iMMUTABLE</div>      
                <div className="info">Viscose Tricot Crewneck</div>
                <div className="price">₩‌1,043,000</div>
            </div>
            </div>
            </Container_in>
            <Container_in>
            <div className={isMenuClicked ? "blur" : ""}>
            <div className="view">
                <img src={test}/>
                <div className="logo">iMMUTABLE</div>      
                <div className="info">Viscose Tricot Crewneck</div>
                <div className="price">₩‌1,043,000</div>
            </div>
            </div>
            </Container_in>
            <Container_in>
            <div className={isMenuClicked ? "blur" : ""}>
            <div className="view">
                <img src={test}/>
                <div className="logo">iMMUTABLE</div>      
                <div className="info">Viscose Tricot Crewneck</div>
                <div className="price">₩‌1,043,000</div>
            </div>
            </div>
            </Container_in>
            <Container_in>
            <div className={isMenuClicked ? "blur" : ""}>
            <div className="view">
                <img src={test}/>
                <div className="logo">iMMUTABLE</div>      
                <div className="info">Viscose Tricot Crewneck</div>
                <div className="price">₩‌1,043,000</div>
            </div>
            </div>
            </Container_in>
            </Article>
        </Mainboby>
      </Container>  
    )
};


export default TOP;    