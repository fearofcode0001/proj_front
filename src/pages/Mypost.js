import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate, Link} from "react-router-dom"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`
const Mainbody = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;

`

const Head = styled.div`
      width: 100%;
    display: flex;
    
    a{
        text-decoration: none;
        color: black;
    }
    .nav{
        width: 100%;
        padding: 0 20px 0 10px;
        display: flex;
        justify-content: space-between;
    }
   
    .nav1{
        height: 70px;
        font-weight: bolder;
        font-size: 50px;
    }

    .nav2{
        display: flex;
        justify-content: center;
        align-items: center;
        color: rgb(100,100,100);
        font-size: 13px;
    }
`

const TopButton = styled.button`
    border: none;
    background-color: white;
   
    &:hover{
        color: rgba(0,0,0,0.5);
    }
`  

const InnerContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`


const Title = styled.div`
    width: 100%;   
 
    .ti{
        font-size: 30px;
        font-weight: bold;
        justify-content: center;
        align-items: center;
        display: flex;
      
    }
  
`

const Article = styled.div`
    width: 100%;
    height: 380px;
    display: flex;


    .header{
        margin: 5px 0px 0px 10px;
        font-size: 30px;
        font-weight: bold;
        height: 40px;
        border-bottom: 1.5px solid #ccc;
        width: 100%
    }

    .view{
        position: absolute;
        width: 100%;
    }

    .viewTable{
        font-size: 15px;
        margin-top: 60px;
        width: 100%;
        border-bottom: 1px solid #ccc;
        .num{
            width: 5%;
        }
        .sub{
            width: 60%;
        }
        .writer{
            width: 10%;
        }
        .date{
            width: 10%;
        }
    }
   
    .textTable{
        margin-top: 10px;
        width: 100%;
        .textNum{
            width: 5%;
            font-weight: 400;
            font-size: 12px;
        }
        .textSub{
            width: 60%;
            font-weight: 400;
            font-size: 12px;
        }
        .textWriter{
            width: 10%;
            font-weight: 400;
            font-size: 12px;
        }
        .textDate{
            width: 10%;
            font-weight: 400;
            font-size: 12px;
        }

    }
   
 
  
`



const IsLoginFalse = [
    { name : "login"}
  ]
  const IsLoginTrue = [
    { name : "logout"},
    { name : "mypage"}, 
    { name : "cart"},    
    { name : "FAQ"}
  ]


const Mypost = () => {

    const [isLogin, setIsLogin] = useState(true); 


    const navigate = useNavigate();
    const onChangePage=(e)=>{
       if(e==="logout"){
            setIsLogin(false);
        }
        else if (e==="FAQ") {
            navigate("/FAQ")
        }
        else if (e==="cart") {
            navigate("/Cart")
        }
        else if(e==="mypage"){
            navigate("/Mypage")
        }
    }

    return(

        <Container>
            <Mainbody>
                <Head>
                <div className="nav">
                <a href="/"><div className="nav1" >
                     iMMUTABLE
                    </div></a>
                    <div className="nav2">
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
                </Head>
                <InnerContainer>
                    <Title>
                        <div className="ti">
                            MY POST
                        </div>
                    </Title>
                    <Article>
                        <div className="header">
                            REVIEW
                        </div>
                        <div className="view">
                            <table className="viewTable">
                                <tr>
                                    <th className="num">NUM</th>
                                    <th className="sub">SUBJECT</th>
                                    <th className="writer">WRITER</th>
                                    <th className="date">DATE</th>
                                </tr>
                            </table>
                            <table className="textTable">
                                <tr>
                                    <th className="textNum">1</th>
                                    <th className="textSub">사이즈도 적당하고 마음에 들어요 :)</th>
                                    <th className="textWriter">김동규</th>
                                    <th className="textDate">2023.06.23</th>
                                </tr>
                            </table>
                        </div>
                    </Article>
                    <Article>
                        <div className="header">
                            Q & A
                        </div>
                        <div className="view">
                            <table className="viewTable">
                                <tr>
                                    <th className="num">NUM</th>
                                    <th className="sub">SUBJECT</th>
                                    <th className="writer">WRITER</th>
                                    <th className="date">DATE</th>
                                </tr>
                            </table>
                            <table className="textTable">
                                <tr>
                                    <th className="textNum">1</th>
                                    <th className="textSub">문의드립니다.</th>
                                    <th className="textWriter">김동규</th>
                                    <th className="textDate">2023.06.23</th>
                                </tr>
                            </table>
                        </div>  
                    </Article>
                </InnerContainer>
            </Mainbody>
        </Container>
    )
}


export default Mypost;