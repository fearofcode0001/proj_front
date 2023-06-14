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
    justify-content: center;
    align-items: center;
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

    width: 1200px;
    height: 380px;
    display: flex;

    

    .header{
        font-size: 20px;
        font-weight: bold;
        height: 30px;
        border-bottom: 1.5px solid #ccc;
        width: 100%
    }

    .view{
        position: absolute;
        width: 1200px;
    }

    .viewTable{
        border-bottom: 1px solid #ccc;
        font-size: 15px;
        margin-top: 40px;
        width: 100%;
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
        width: 100%;
        border-bottom: 1px solid #ccc;
        td{
            text-align: center;
            font-size: 12px;
        }
        .textNum{
            width: 5%;
        }
        .textSub{
            width: 60%;
        }
        .textWriter{
            width: 10%;
        }
        .textDate{
            width: 10%;
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
            navigate("/")
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
                            내 게시물
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
                                    <td className="textNum">1</td>
                                    <td className="textSub">사이즈도 적당하고 마음에 들어요 :)</td>
                                    <td className="textWriter">김동규</td>
                                    <td className="textDate">2023.06.23</td>
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
                                    <td className="textNum">1</td>
                                    <td className="textSub">문의드립니다.</td>
                                    <td className="textWriter">김동규</td>
                                    <td className="textDate">2023.06.23</td>
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