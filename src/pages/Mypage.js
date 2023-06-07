import React, {useState} from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    border: 1px solid black;
`

const TopButton = styled.button`
    border: none;
    background-color: white;
    &:hover{
        color: rgba(0,0,0,0.5);
    }
`  


const Boby = styled.div`
    width: 100%;

  
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
        width: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bolder;
        font-size: 50px;
    }

    .nav2{
        width: 300px;
        display: flex;
        justify-content: flex-end;
        font-size: 13px;
        
        div{
            margin-left: 20px;
        }
    }
`


const IsLoginFalse = [
    {name : "login"}
]

const IsLoginTrue = [
    { name : "logout"},
    { name : "cart"},
    { name : "FAQ"}
]


const Mypage = () =>{
    const[isLogin, setIsLogin] = useState(true);


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

    return(
        <Container>
            <Boby>
                <Head>
                <div className="nav">
                    <a href="/"><div className="nav1">
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
            </Boby>
        </Container>
    )
}


export default Mypage;