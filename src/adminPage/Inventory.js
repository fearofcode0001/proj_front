import React ,{useState} from "react";
import styled from "styled-components";
import testimg from "../img/test.png"
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


const Container=styled.div`
    width: 100%;
    height: 100%;
        
    .itemInfoTop{    
    width: 100%;
    height: 27px;
    display: flex;
    justify-content: space-evenly;
    align-items: center; 
    font-size: 11px;
    }

    .itemId{
        width: 50px;
        display: flex;
        justify-content: center;
    }
    .itemNm{
        width: 430px;
        display: flex;
        justify-content: center;
        img{
            position: absolute;
            width: 80px;
        }       
    }
    .itemColor{
        width: 70px;
        display: flex;
        justify-content: center;
    }
    .itemSize{
        width: 30px;
        display: flex;
        justify-content: center;
    }
    .itemStock{
        width: 40px;
        display: flex;
        justify-content: center;
        input{
            border: none;
            font-size:11px;
            width: 30px;
        }
    }
    .itemSell{
        width: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        select{
            font-size: 11px;
            border: none;
        }
    }
    .itemSubmit{
        width: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    button{
        width: 50px;
        background-color: white;
        border: 1px solid black;
        font-size: 12px;
        &:hover{
            background-color: black;
            color: white;
        }
    }
`
const ItemInfoHead = styled.div`
    width: 100%;
    height: 27px;
    display: flex;
    justify-content: space-evenly;
    align-items: center; 
    font-size: 11px;
    border-bottom: 1px solid #ccc;

`
const ItemInfo=styled.div`
    width: 100%;
    font-size: 11px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #ccc;
    .parnetContents{
        width: 100%;
        overflow: hidden;
        transition: height 0.35s ease;
        display: flex;
        flex-direction: column;
        justify-content: space-between;       
    }
    .title-input{
        width: 100%;
        border: none;
        &:focus{
            outline: none;
        }
    }
    /* .ck.ck-editor__editable:not(.ck-editor__nested-editable) {    
    height: 500px;
    } */
    //에디터 넓이
    .ck.ck-editor{
        min-width: 100%;
    }
    //에디터 높이
    .ck.ck-editor__editable{
        height: 447px;
}
`

const  Inventory = () =>{
    //호버상태를 체크한다.
    const [onHover,setOnHover] = useState(false);
    //마우스를 올리면 해당 상품 이미지가 나타남.
    const onPopUpImage=()=>{
        setOnHover(true)
        console.log(onHover);
    }
    //마우스 떼면 이미지가 사라짐
    const onPopUpImageFalse=()=>{
        setOnHover(false)
    }
    //마우스 따라서 이미지가 움직임
    const [xy,setXY]=useState({x:0,y:0})
    const handleMouseMove=(e)=>{
        setXY({x:e.clientX,y:e.clientY});
    }

    //마우스 클릭시 상품 수정 
    const [upadatePop,setUpdatePop] = useState(0);
    const onUpdatePop=()=>{
        if(upadatePop===0){
            setUpdatePop(500);
        } else if(upadatePop===500){
            setUpdatePop(0);
        }
    };

    return(

        <Container>
           <ItemInfoHead>
               <div className="itemId">
                ID
               </div>
               <div className="itemNm">
                NAME
               </div>
               <div className="itemColor">
                COLOR
               </div>
               <div className="itemSize">
                SIZE
               </div>  
               <div className="itemStock">
                    STOCK            
               </div>
               <div className="itemSell">
                STATUS
               </div>
               <div className="itemSubmit">
               
               </div>    
           </ItemInfoHead>
           <ItemInfo>
            <div className="itemInfoTop">
               <div className="itemId">
                123498
               </div>
               <div onMouseMove={(e)=>handleMouseMove(e)}>
                <div className="itemNm" onMouseOver={onPopUpImage} onMouseLeave={onPopUpImageFalse} onClick={onUpdatePop}>
                    sweat hoodie organic change                     
                    {onHover &&  <img src ={testimg} className="popUpImage" style={{left:xy.x,top:xy.y}} />}                          
                </div>
               </div>
               
               <div className="itemColor">
                black
               </div>
               <div className="itemSize">
               3
               </div>  
               <div className="itemStock">                   
                <input type="text" value={20}/>
               </div>
               <div className="itemSell">                
                <select name ="">
                    <option value="">sell</option>
                    <option value="">hold</option>
                    <option value="">sold_out</option>
                </select>
               </div> 
               <div className="itemSubmit">
                <button>submit</button>
               </div>
            </div>
            <div className="parnetContents" style={{height: `${upadatePop}px`}}>
                <div className="childContents">
                    <input className="title-input" type='text' placeholder='pleace enter product name' />
                        <CKEditor className="info-input"
                            editor={ClassicEditor}
                            data="<p></p>"
                            onReady={editor => {
                            // You can store the "editor" and use when it is needed.
                            console.log('Editor is ready to use!', editor);
                            }}
                            onChange={(event, editor) => {
                            const data = editor.getData();
                            console.log({ event, editor, data });
                            }}
                            onBlur={(event, editor) => {
                            console.log('Blur.', editor);
                            }}
                            onFocus={(event, editor) => {
                            console.log('Focus.', editor);
                            }}
                        />      
                </div>  
            </div>
           </ItemInfo>
        </Container>
    );
};

export default Inventory;