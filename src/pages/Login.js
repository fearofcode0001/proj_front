import React from "react";
import styled from "styled-components";

const Container =styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Body = styled.div`
    font-size: 12px;
    width: 500px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border: 1px solid black; */
  
    .login{        
        width: 100%;
        display: flex;
        flex-direction: column;
        
    }
    input{
        border: 1px solid #CCC;
        margin: 20px 0 0 0;
        height: 40px;
        &::placeholder{
            padding: 5px;
            font-size: 10px;
        }
    }
    button{
        margin: 20px 0 0 0;
        height: 40px;
        font-size: 10px;
        border: 1px solid #CCC;
        background-color: white;
        &:hover{
            background-color: black;
            color: white;
        }        
    }
    a{  
        /* border: 1px solid black; */
        width: 150px;
        margin: 20px 0 0 0;
        height: 40px;
        font-size: 10px;
        cursor: pointer;
    }
    
`

const Login =()=>{

    return(
        <Container>
            <Body>
                LOGIN
                <div className="login">
                    <input type="text" placeholder="ID"/>
                    <input type="text" placeholder="PASSWORD"/>                 
                    <button>SIGN IN</button>
                    <a herf="#">FORGOT YOUR PASSWORD?</a>
                    <button>RESISTER AN ACCOUNT</button>
                </div>

            </Body>
        </Container>
    );
};

export default Login;