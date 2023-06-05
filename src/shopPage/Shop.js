import React, {useState} from "react";
import styled from "styled-components";
import DropdownMenu from "./DropdownMenu";
import { useNavigate, Link } from "react-router-dom";
import test from "../img/shop.webp"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;    
`

const Mainboby=styled.div`
    width: 100%;
    /* height: 100vh; */
    margin: 0px 40px 0px 40px;

    
    `

const TopButton = styled.button`
    border: none;
    background-color: white;
    &:hover{
        color: rgba(0,0,0,0.5);
    }
`    

const Head = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: column;

    a{
        text-decoration: none;
        color: black;
    }



    .nav{
        padding: 0 20px 0 10px;
        display: flex;
        justify-content: space-between;
        
    }
    .nav1{

        display: flex;
        margin-top: 40px;
        font-size: 13px;    
        cursor: pointer;
        
     
        div{
            margin-right: 20px;
            
            &:hover{
                color: rgba(0,0,0,0.5);
            }
        }
    }

    .nav2{
        font-weight: bolder;
        font-size: 50px;
    }
    .nav3{
        display: flex;
        margin-top: 40px;
        font-size: 13px;
        
        div{
            margin-left: 20px;
        }
    }

`

const Filter = styled.div`
    margin-top: 20px;
    color: black;
    float: right;
     cursor: pointer;
    &:hover{
        color: rgba(0,0,0,0.5);
    }
    
    
`


const Article = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;

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



const MenuList = [
    {name : "iMMUTABLE"},
    {name : "test1"},
    {name : "test2"}
]

const IsLoginFalse = [
    { name : "login"}
  ]
  const IsLoginTrue = [
    { name : "logout"},
    { name : "mypage"},    
    { name : "cart"},    
    { name : "FAQ"}
  ]

  


const Shop = () => {
    const [selectedMenu, setSelectedMenu] = useState(null)
    const [isLogin, setIsLogin] = useState(true);
    const [isMenuClicked, setIsMenuClicked] = useState(false);
    const navigate = useNavigate();

    const onChangePage=(e)=>{
        console.log(e);
        if(e==="cart"){
            navigate("/Cart")
        }
        else if(e==="logout"){
            setIsLogin(false);
        }
        else if(e==="SHOP"){
            navigate("/Shop");
            console.log(e);
        }
    }

    
    const handleMenuClick = (menuName) => {
        if (selectedMenu === menuName) {
          setSelectedMenu(null) // 이미 선택된 메뉴를 다시 클릭하면 닫힙니다.
          setIsMenuClicked(false)
        } else {
          setSelectedMenu(menuName);
          setIsMenuClicked(true)
        }
      };
    

    return(
      <Container> 
        <Mainboby>
            <Head>
                <div className="nav">
                    <div className="nav1">
                        {MenuList.map(v=>(
                            <div key={v.name}
                            onClick={() => handleMenuClick(v.name)} 
                            className={selectedMenu === v.name ? "active" : ""}>        
                            {v.name} 
                          </div>
                        ))}
                    </div>
                    <a href="/"><div className="nav2">
                        iMMUTABLE
                    </div></a>
                    <div className="nav3">
                    {IsLoginFalse.map(s=>( isLogin===false &&
                                        <TopButton key={s.name}>
                                            <Link to="/Login">{s.name}</Link>
                                        </TopButton>
                                    ))}
                           {IsLoginTrue.map(s=>( isLogin===true &&
                                        <TopButton key={s.name} onClick={()=>onChangePage(s.name)}>
                                            {s.name}
                                        </TopButton>
                                    ))}
                    </div>
                </div>
                {selectedMenu === "iMMUTABLE" && <DropdownMenu />} 
            </Head>
            <Filter>
                FILTER
            </Filter>
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


export default Shop;        