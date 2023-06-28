import React ,{useState,useContext} from "react";
import styled, {css} from "styled-components";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { UserContext } from "../context/UserInfo";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { storage } from "./FireBase";



const Container=styled.div`
    width: 100%;
    height: 100%;
    height: calc(100vh - 180px);
    overflow-y: scroll;
    ::-webkit-scrollbar {
        display: none;
        }
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
        cursor: pointer;
        img{
            position: absolute;
            width: 80px;
        }   
    }
    .itemNm{
        width: 430px;
        display: flex;
        justify-content: center;
            
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
            text-align: center;
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
    .fixButton{ 
        border-right: none;

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
    .parentContents{
        width: 100%;
        height: 0px;
        overflow: hidden;
        transition: height 0.35s ease;
        display: flex;
        flex-direction: column;
        justify-content: space-between;  
        ${props => props.active && css`   // *&* props가 active이면 css를 재정의 한다.
          height: 500px;
        `}     
    }
    .childContents{
        height: 500px;
        overflow-y: scroll;
        ::-webkit-scrollbar {
        display: none;
        }
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

    //아이템 정보 얻기
    const context = useContext(UserContext);
    const {inventoryData} = context;

    //호버상태를 체크한다.
    const [onHover,setOnHover] = useState(false);
    //마우스를 올리면 해당 상품 이미지가 나타남.
    const onPopUpImage=()=>{
        setOnHover(true)
        // console.log(onHover);
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

    //제목을 누르면 에디터가 넘어온다.
    //css에 active를 넘겨줄 값
    const[invenAccodian, setinvenAccodian] = useState("all"); 
    const onPopAccodian =(props)=>{
        console.log(props);
        //같은 버튼 클릭시 null로 바꿔주어 모든 css를 초기화한다
        if(props===invenAccodian){
            setinvenAccodian(null);
            // console.log(qnaAccodian);
        }else{
            setinvenAccodian(props);
        }        
    };

    //이미지를 추출할 데이터
    const [prodDetailImg, setProdDetailImg] = useState();
    const customUploadAdapter = (loader) => {
        return {
          upload() {
            return new Promise((resolve, reject) => {
              const formData = new FormData();
              loader.file.then((file) => {
                formData.append("file", file);
                  const storageRef = ref(storage, `uploadimg/${file.name}`);
                  const uploadTask = uploadBytes(storageRef, file);
                  uploadTask.then((snapshot) =>{
                    getDownloadURL(snapshot.ref).then((downloadURL) =>{
                      console.log("File avalable at",downloadURL);
                      setProdDetailImg(downloadURL);
                      alert("이미지 업로드가 완료 되었습니다. 기존 내용을 지워주세요.")
                    })
                  })
              });
            });
          },
        };
      };
    //ck에디터 이미지 업로드
    function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return customUploadAdapter(loader);
        };
    }

    //수정할 아이템의 정보
    const [fixProductData, setFixProductData] = useState({
        productSellStatus:'',
        itemStock:'',
        productName:''
        });

    const getValue = (e) => {
        const { name } = e.target;
        setFixProductData({
            ...fixProductData,
            //name 키를 가진 값을 value로 설정
            [name]: e.target.value
        })
    }
   
    const onFixOrder =(o)=>{  
        console.log(setFixProductData);      
    }


    return(
        <Container>
           <ItemInfoHead>
               <div className="itemId">ID</div>
               <div className="itemNm">NAME</div>
               <div className="itemColor">COLOR</div>
               <div className="itemSize">SIZE</div>  
               <div className="itemStock">STOCK</div>
               <div className="itemSell">STATUS</div>
               <div className="itemSubmit"></div>    
           </ItemInfoHead>
           {inventoryData && inventoryData.map((i)=> 
           <ItemInfo key={i.productId} active={invenAccodian === i.productId}>
            <div className="itemInfoTop">
                <div onMouseMove={(e)=>handleMouseMove(e)}>
                <div className="itemId" onMouseOver={onPopUpImage} onMouseLeave={onPopUpImageFalse}>
                    {i.productId}
                    {onHover === true &&  <img src={i.productImgFst} className="popUpImage" style={{left:xy.x,top:xy.y}} />}  
                </div>
               </div>
                <div className="itemNm"  onClick={()=>{onPopAccodian(i.productId)}}>                      
                    {i.productName} 
                </div>               
               <div className="itemColor">
               {i.productColor}
               </div>
               <div className="itemSize">
               {i.productSize}
               </div>  
               <div className="itemStock">                   
                <input type="text" className="stockInput" value={i.productStock}/>
                <input type="text" className="stockInput" placeholder="수정" onChange={(e)=>{getValue(e)}} name='itemStock'/>
               </div>
               <div className="itemSell">                
                <select name ='productSellStatus' onChange={getValue}>
                    <option value=""selected>{i.productSellStatus}</option>
                    <option value="SELL">sell</option>
                    <option value="HOLD">hold</option>
                    <option value="SOLD_OUT">sold_out</option>
                </select>
               </div> 
               <div className="itemSubmit">
                <button className="fixButton" onClick={()=>{onFixOrder(i)}}>fix</button>
                <button>submit</button>
               </div>
            </div>
            <div className="parentContents" >
                <div className="childContents">
                    <input className="title-input" type='text' placeholder='pleace enter fix name' name='productName' onChange={getValue}/>
                        <CKEditor className="info-input"
                            editor={ClassicEditor}
                            config={{
                                extraPlugins: [uploadPlugin]          
                            }}
                            data={"상세페이지: <br><br>"+ i.productImgDetail + "<br><br>상세 설명 : "+ i.productName}
                            onReady={editor => {
                            // You can store the "editor" and use when it is needed.
                            console.log('Editor is ready to use!', editor);
                            }}
                            onChange={(event, editor) => {
                            const data = editor.getData();
                            console.log({ event, editor, data,});
                            setFixProductData({
                                ...fixProductData,
                                content: data
                            })
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
           </ItemInfo>)}
        </Container>
    );
};

export default Inventory;