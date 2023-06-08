import React, {useState} from "react";
import styled from "styled-components";
import DropdownMenu from "./DropdownMenu";
import { useNavigate, Link } from "react-router-dom";
import test from "../img/test.webp";
import DropFiter from "./DropFiter";
import TOP from "./Top";    

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;    
    
`

const Mainboby=styled.div`
    width: 100%;
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
        width: 100%;
        display: flex;
        justify-content: space-between;
        
    }
    .nav1{
        width: 300px;
        /* border: 1px solid black; */
        display: flex;
        align-items: center;
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
        width: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bolder;
        font-size: 50px;
    }

    .nav3{
        width: 300px;
        display: flex;
        justify-content: flex-end;
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
`


const Article = styled.div`
    display: flex;
    width: 100%;
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



const MenuList = [
    {name : "iMMUTABLE"},
    {name : "CONTENTS"},
    {name : "LOOK"}
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

//카트 영역
const CartToggle=styled.div`
    width: 260px;
    height: 400px;
    display: flex;
    flex-direction: column;
    border: 1px solid #CCC;
    background-color: white;
    position: absolute;
    right: 2.8rem;
    top:3rem;

    a{
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 11px;
    text-decoration: none;
    background-color: black;
    color: white; 
    &:hover{
        background-color: #CCC;
        color: black;
    }   
  }


  .cartToggleItem{
    width: 100%;
    height: 100px;
    border-bottom: 1px solid #CCC;
    display: flex;
    img{
        height: 100px;
    }
  }
  .itemInfo{
    width: 200px;
    font-size: 11px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items:center
  }
  .itemName{
    height: 20px;
    font-weight: bolder;
    
  }
  .deleteItem{
    border: none;
    background-color: white;
    cursor: pointer;
    color: #CCC;
    &:hover{
        color: black;
    }
  }
  .count{
    display: flex;
  }
  .plus,.minus{
    height: 13px;
    width: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: white;
    cursor: pointer;
    &:hover{
        color: white;
        background-color: black;
    }
  }
  .countbutton{
    display: flex;
    flex-direction: column;
  }
  input{
    width: 20px;
    height: 20px;
  }
  .itemPrice{
  }
  
`

  const CartList=styled.div`
    width: 100%;
    height: 360px;
    overflow-y: scroll;
    ::-webkit-scrollbar {
    display: none;
    }
  `

  


const Shop = () => {
    const [selectedMenu, setSelectedMenu] = useState(null)
    const [isLogin, setIsLogin] = useState(true);
    const [isMenuClicked, setIsMenuClicked] = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    
     //카트 토글 여는 컴포넌트
     const [openCart, setOpenCart] = useState(false);
   
    





    const navigate = useNavigate();
    const onChangePage=(e)=>{
        console.log(e);
        if(e==="cart"){
            //카트 창 열리기
            setOpenCart(!openCart);
        }
        else if (e==="FAQ") {
            navigate("/FAQ")
        }
        else if(e==="logout"){
            setIsLogin(false);
        }
        else if(e==="SHOP"){
            navigate("/Shop");
            console.log(e);
        }
        else if(e==="mypage"){
            navigate("/Mypage")
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


      const handleFilter = () => {
        setIsFilterOpen(!isFilterOpen);
      };

    //수량 임의 설정
    const[number,setNumber]=useState(1);
    const countPlus=()=>{
        setNumber(number+1);
    }
    //상품 수량 줄이는 버튼
    const countMinus=()=>{
        setNumber(number-1);
        if(number <= 1){
            setNumber(1);
        }
    }

    return(
      <Container> 
        {openCart && <CartToggle>
                        <CartList>
                            <div className="cartToggleItem">
                                <div className="itemImg">
                                    <img src={test}/>
                                </div>
                                <div className="itemInfo">
                                    
                                    <div className="itemName">
                                    Sweat Shirt
                                    </div>
                                    <div className="count">
                                        <input type="text" value={number}/>
                                        <div className="countbutton">
                                        <button className="plus" onClick={countPlus}>∧</button>
                                        <button className="minus" onClick={countMinus}>∨</button>
                                        </div>
                                    </div>    
                                    <div className="itemPrice">
                                        1,043,000
                                    </div>
                                </div>
                                <button className="deleteItem">x</button>
                            </div>
                        
                         </CartList>
                            
                            <Link to="/Cart">장바구니</Link>
                    </CartToggle>}
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
                <div onClick={handleFilter}>
                    {isFilterOpen ? '정렬 기준 ▲' : '정렬 기준 ▼'}
                </div>
                    {isFilterOpen && <DropFiter/>}
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