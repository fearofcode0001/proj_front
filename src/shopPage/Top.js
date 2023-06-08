import React, {useState} from "react";
import styled from "styled-components";
import Header from "./Header";
import toptest from "../img/TOP.webp"




const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;    
    flex-direction: column;
`

const Mainboby=styled.div`
 
    margin: 0px 40px 0px 40px;    
    `


const Article = styled.div`
    display: flex;
    
    flex-wrap: wrap;

    .blur{
        filter: blur(4px); 
        pointer-events: none; 
    }
    
   
`

const Container_in = styled.div`
    height: 500px;
    width: 300px;
    margin-left: 10px;
    color: black;    

    .blur {
        filter: blur(5px); /* 흐릿한 효과를 원하는 정도로 조절합니다. */
    }
    

    img{
        height: 400px;
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
    
    const [isBlurred, setIsBlurred] = useState(false);

    const handleHeaderClick = () => {
      setIsBlurred(!isBlurred);
      console.log(isBlurred)
    };
  


      

    return  (
     
      <Container>
           <Header onClick={handleHeaderClick}/>
        <Mainboby>
            <Article>
            <Container_in>
            <div className={isBlurred ? "blur" : ""}> 
            <div className="view">
                <img src={toptest}/>
                <div className="logo">iMMUTABLE</div>      
                <div className="info">Viscose Tricot Crewneck</div>
                <div className="price">₩‌1,043,000</div>
            </div>
            </div>
            </Container_in>
            <Container_in>
            <div className={isBlurred ? "blur" : ""}>
            <div className="view">
                <img src={toptest}/>
                <div className="logo">iMMUTABLE</div>      
                <div className="info">Viscose Tricot Crewneck</div>
                <div className="price">₩‌1,043,000</div>
            </div>
            </div>
            </Container_in>
            <Container_in>
            <div className={isBlurred ? "blur" : ""}>
            <div className="view">
                <img src={toptest}/>
                <div className="logo">iMMUTABLE</div>      
                <div className="info">Viscose Tricot Crewneck</div>
                <div className="price">₩‌1,043,000</div>
            </div>
            </div>
            </Container_in>
            <Container_in>
            <div className={isBlurred ? "blur" : ""}>
            <div className="view">
                <img src={toptest}/>
                <div className="logo">iMMUTABLE</div>      
                <div className="info">Viscose Tricot Crewneck</div>
                <div className="price">₩‌1,043,000</div>
            </div>
            </div>
            </Container_in>
            <Container_in>
            <div className={isBlurred ? "blur" : ""}>
            <div className="view">
                <img src={toptest}/>
                <div className="logo">iMMUTABLE</div>      
                <div className="info">Viscose Tricot Crewneck</div>
                <div className="price">₩‌1,043,000</div>
            </div>
            </div>
            </Container_in>
            <Container_in>
            <div className={isBlurred ? "blur" : ""}>
            <div className="view">
                <img src={toptest}/>
                <div className="logo">iMMUTABLE</div>      
                <div className="info">Viscose Tricot Crewneck</div>
                <div className="price">₩‌1,043,000</div>
            </div>
            </div>
            </Container_in>
            <Container_in>
            <div className={isBlurred ? "blur" : ""}>
            <div className="view">
                <img src={toptest}/>
                <div className="logo">iMMUTABLE</div>      
                <div className="info">Viscose Tricot Crewneck</div>
                <div className="price">₩‌1,043,000</div>
            </div>
            </div>
            </Container_in>
            <Container_in>
            <div className={isBlurred ? "blur" : ""}>
            <div className="view">
                <img src={toptest}/>
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