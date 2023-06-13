import React from "react";
import styled from "styled-components";



const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const MainBody = styled.div`
    border: 1px solid black;
    width: 600px;
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;   
`

const Logo = styled.div`
    width: 100%;
    a{
        text-decoration: none;
        color: black;
    }

    .logo{
        justify-content: center;
        align-items: center;
        display: flex;
        height: 70px;
        font-weight: bolder;
        font-size: 50px;
    }
`

const Information = styled.div`
        border: 1px solid #ccc;
        width: 600px;
        display: flex;
        flex-direction: column;

        .info{
            display: flex;
            font-size: 12px;
            align-items: center;
            justify-content: center;
            /* color: #8b9192; */
            font-weight: bold;
        }

        .text{
            display: flex;
            font-size: 11px;
            align-items: center;
            justify-content: center;
            color: #8b9192;
        
        }
    
        .text2{
            display: flex;
            font-size: 12px;
            align-items: center;
            justify-content: center;
            color: red;
        }
`



const SelectOption = styled.div`
        flex-direction: column;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        span{
            font-size: 11px;
            color: #1d1d21;
        }

        .select{
        width: 300px;
        height: 25px;
        border: 1px solid black;
        }

`

const Input = styled.div`
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;

    input{
        color: black;
        width: 300px;
        height: 20px;
        font-size: 15px;
        border: 1px solid gray;
        &:focus {
            outline: 0.5px solid white;
        }
        &::placeholder {
            color: #ccc;
            font-size: 12px;
        }
    }

`

const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;

    .tt1{
        display: flex;
        align-items: center;
        justify-content: center;
        color: #8b9192;
        font-size: 12px;
        font-weight: 600;
    }


    .tt2{
        display: flex;
        align-items: center;
        justify-content: center;
        color: #c1c2c8;
        font-size: 10px;
    }
`



const Secession = () => {

    return(
        <Container>
            <MainBody>
            <Logo>
                <a href="/"><div className="logo" >
                     iMMUTABLE
                    </div></a>
                </Logo>
            
                <Information>
                    <p className="info">※ 회원탈퇴 안내 ※</p>
                    <p className="text">          
                    고객님 께서 회원 탈퇴를 원하신다니 저희 서비스가 많이 
                    부족하고 미흡했나 봅니다. 
                    <br/>
                    불편하셨던 점이나 불만 사항을 알려주시면 
                    적극반영해서 고객님의 불편함을 해결해 드리도록 노력하겠습니다.
                    </p>
                    <p className="info">※ 아울러 회원 탈퇴시의 아래 사항을 숙지하시기 바랍니다. ※</p>
                    <p className="text">
                        ㆍ 계정을 삭제하면 본인의 계정 활동에 대한 접근을 영구적으로 상실하게 됩니다. <br/>
                        ㆍ 회원탈퇴시 고객님의 정보는 소비자 보호에 관한 법률에 의거한 고객 정보보호 정책에 따라 관리됩니다.<br/>
                        ㆍ 탈퇴시 고객님께서 보유하신 등급은 모두 삭제 됩니다.<br/>
                        ㆍ 회원 탈퇴 후 30일간 재가입이 불가능합니다.
                       </p>
                    <p className="text2">*비밀번호 입력 시 회원정보가 탈퇴됩니다.*</p>
                </Information>

                <SelectOption>
                    <span>탈퇴하시는 사유를 선택해주세요!!</span><p/>
                    <select className="select">     
                        <option value="sel1">선택사항 없음</option>                   
                        <option value="sel2">단순 변심</option>
                        <option value="sel3">아이템이 많이 부족해요</option>
                        <option value="sel4">취향이 저랑 안 맞아요</option>
                        <option value="sel5">타 사이트 이용</option>
                    </select>
                </SelectOption>
               <Input>
                    <input type="password" placeholder="Password" />
               </Input>  
               <button>COMPLETE</button>
               <Footer>
                <div className="fotbox">
                    <div className="tt1">
                        iMMUTABLE & Q / A
                    </div>
                    <div className="tt2">
                        MON - FRI : AM 10:00 ~ PM 05:00 LUNCH TIME : PM 12:00 ~ PM 01:00 SAT.SUN.HOLIDAY CLOSED
                    </div>
                    <div className="tt2">
                        카카오뱅크 : 3333-333-3333 예금주 : iMMUTABLE
                    </div>
                </div>
            </Footer>
            </MainBody>
        </Container>
    )
}



export default Secession;