import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
    height: 380px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;  
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
        width: 500px;
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
        width: 100%;
        margin: 20px 0 0 0;
        height: 15px;
        font-size: 10px;
        cursor: pointer;
        text-decoration: none;
        color: black;
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
                    <Link to="/FindEmail">FORGOT YOUR PASSWORD?</Link>
                    <Link to="/SignUp"><button>RESISTER AN ACCOUNT</button></Link>
                </div>

            </Body>
        </Container>
    );
};

export default Login;