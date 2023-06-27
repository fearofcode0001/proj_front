import React,{ useState } from "react";
import styled from "styled-components";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import AxiosFinal from "../api/AxiosFinal";
import axios from "axios";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { storage } from "./FireBase";


const Container=styled.div`
width: 100%;
height: 100%;

.inputImg{
  width: 500px;
  display: flex;
  border: 1px solid black;
  align-items: center;
}
  .upLoadName{
    display: flex;
    align-items: center;
    font-size: 11px;
  }

  .upLoadInput{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .upLoadInputHead{
    width: 100%;
    height: 180px;
    display: flex;
    flex-direction:column;
    justify-content: space-evenly;

  }
  .title-file2{
    width: 150px;
  }
  
  
  input{
    width: 300px;
    height: 25px;
    border: none;
    font-size: 13px;
    border-bottom:1px solid #CCC;
    display: flex;
    &:focus{
      outline: none;
    }
    ::file-selector-button {  
      width: 150px;
      height: 20px;
      background: #fff;
      border: 1px solid black;
      font-size: 11px;
      &:hover{
        background-color: black;
        color: white;
      }
    }
    ::placeholder{
      font-size:11px;
    }
  }
  select{
    height: 20px;
    border:none;
    font-size: 11px;
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
    height: calc(100vh - 430px);
  }
  .submit-button{
    border: 1px solid black;
    background-color: white;
    width:100%;
    height: 40px;
    font-size: 11px;
    cursor: pointer;
    &:hover{
        color: white;
        background-color: black;
    }
  }

  .filebox .upload-name {
    height: 20px;
    padding: 0 10px;
    vertical-align: middle;
    border: 1px solid #dddddd;
    width: 78%;
    color: #999999;
}

`

const DivImg = styled.div`
  display: flex;
  width: 100px;
  height: 50px;
  justify-content: center;
  align-items: center;
  font-size:13px;
  margin-left: 15px;
  border: 1px solid black;
  button {
    display: flex;
    justify-content: center;
    height: 15px;
    width: 10px;
    font-size: 5px;
    background-color: white;
    border-radius: 0.5rem;
    &:hover{
      background-color: black;
      color: white;
    }
   
  }`;
const  ItemUpload = () =>{
  //서버에 보내지는 파일
  const [selectedFiles, setSelectedFiles] = useState([]);
  //업로드 할 이미지들.
  const onSelectFile = (e) => {
    
    //선택한 파일
    const imageLists = e.target.files;
    let imageURLlist = [...selectedFiles];
    Array.isArray(imageURLlist);
    if (e.target.files.length > 2) alert(`한번에 업로드 가능한 사진은 최대 2장 까지 입니다.`);
    
    for(let i = 0; i < 2; i++){
      const inputImage = imageLists[i];
      imageURLlist.push(inputImage);
      console.log(imageLists[i]);
    }
    setSelectedFiles(imageURLlist);
    // if(!imageURLlist) return null;
    // const storageRef = ref(storage, `uploadimg/${imageURLlist[0].name}`);
    // const uploadTask = uploadBytes(storageRef, imageURLlist[0]);

    // uploadTask.then((snapshot) =>{
    //   e.target.value="";
    //   getDownloadURL(snapshot.ref).then((downloadURL) =>{
    //     console.log("File avalable at",downloadURL);
    //     setImageURL(downloadURL);
    //     console.log(imgageURL);
    //   })
    // })
  }
  
  const handleDeleteImage = (index) => {
    setSelectedFiles(selectedFiles.filter((index) => index !== index));
  };

  

  //CK에디터 이미지 url추출
  const customUploadAdapter = (loader) => {
    return {
      upload() {
        return new Promise((resolve, reject) => {
          const formData = new FormData();
          loader.file.then((file) => {
            formData.append("file", file);
            // axios
            //   .post("http://210.114.22.83/home/img", formData)
            //   .then((res) => {
                // resolve({
                //   default: res.data.data.uri,
                // });
              //   const url = res.data.imageUrl;
              //   setImageUrl(url);
              //   console.log(url);
              // })
              // .catch((err) => reject(err));
          });
        });
      },
    };
  };
  //ck에디터 이미지 
  function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return customUploadAdapter(loader);
    };
  }

  //상품 여러 input을 한번에 관리하는 useState
  const [uploadProdData, setUploadProdData] = useState({
    title: '',
    price:'',
    color:'',
    size:'',
    productImg:'',
    category:'',
    content: ''
  })

  //비구조화 를 통해 값 추출
  const{title,price,color,size,category,productImg,content} = uploadProdData;
  //e.target으로 value 와 name추출
  const getValue = (e) => {
    const { value, name } = e.target;
    setUploadProdData({
      ...uploadProdData,
      //name 키를 가진 값을 value로 설정
      [name]: value
    })
    console.log(setUploadProdData)
  };

  const onCheck = async() =>{ 
    setUploadProdData({ ...uploadProdData});
    //여러 이미지 업로드 데이터.
    console.log(selectedFiles);
    console.log(uploadProdData);  

    const response =  await AxiosFinal.productUpload(uploadProdData.title,
                                                     uploadProdData.price,
                                                     uploadProdData.color,
                                                     uploadProdData.size,
                                                     uploadProdData.category,
                                                     uploadProdData.productImg,
                                                     uploadProdData.content)
                                               
    
  }

  const checklist=()=>{
    console.log("selectedfiles",selectedFiles);
   

  }
    return(

        <Container>
            <div className="upLoadInput">
              <div className="upLoadInputHead">
                <div className="upLoadName">
                  NAME : <input className="title-input" type='text' placeholder='pleace enter product name'  onChange={getValue} value={title} name='title'/>
                </div>
                <div className="upLoadName">
                PRICE :<input className="title-price" type='text' placeholder='pleace enter product price'  onChange={getValue} value={price} name='price'/>
                </div>
                <div className="upLoadName">
                COLOR :<input className="title-color" type='text' placeholder='pleace enter product color'  onChange={getValue} value={color} name='color'/>
                </div>
               <div className="upLoadName">
                SIZE : <select name='size' onChange={getValue}>
                            <option  value="" >size</option>
                            <option  value="S" >S</option>
                            <option  value="M" >M</option>
                            <option  value="L" >L</option>
                         </select>
                </div>
                <div className="upLoadName">
                CATEGORY : <select name='category' onChange={getValue} >
                            <option  value="" >category</option>
                            <option  value="TOP" >TOP</option>
                            <option  value="BOTTOM" >BOTTOM</option>
                            <option  value="OUTER" >OUTER</option>
                          </select>
                </div>
                
                  <div className="inputImg">
                    <input className="title-file2" type='file' onChange={(e)=>{getValue(e);
                                                                              onSelectFile(e);
                                                                            }} 
                    value={productImg} name='productImg'  multiple/>
                     {selectedFiles && selectedFiles.map((img,index) => {
                                <DivImg>
                                  <div>{img.name}</div>
                                  <button onClick={() => handleDeleteImage(index)}>X
                                  </button>
                                </DivImg>
                            })}
                    <button type="submit" onClick={checklist} >submit</button>
                  </div>
                 
              </div>
                  <CKEditor className="info-input"
                    editor={ClassicEditor}  
                    config={{
                      placeholder: "내용을 입력하세요.",extraPlugins: [uploadPlugin]

                  }}
                    data="<p></p>"
                    onReady={editor => {
                      // You can store the "editor" and use when it is needed.
                      console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      console.log({ event, editor, data,});
                      setUploadProdData({
                        ...uploadProdData,
                        content: data
                      })
                    }}
                    onBlur={(event, editor) => {
                      console.log('Blur.', editor);
                    }}
                    onFocus={(event, editor) => {
                      console.log('Focus.', editor);
                    }}

                  />
                <button className="submit-button" onClick={onCheck}>upload</button>
            </div>
           

        </Container>
    );
};

export default ItemUpload;