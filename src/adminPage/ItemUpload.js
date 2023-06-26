import React,{ useState } from "react";
import styled from "styled-components";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import AxiosFinal from "../api/AxiosFinal";
import axios from "axios";


const Container=styled.div`
width: 100%;
height: 100%;


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
  .title-file{
    
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
  justify-content: space-between;
  display: flex;
  border-radius: 0.3rem;
  border: 0.01rem solid #efeff1;
  display: flex;
  padding: 0.1rem;
  background-color: #efeff1;
  align-items: center;
  font-weight: 400;
  button {
    margin-left: 0.05rem;
    color: gray;
    background-color: white;
    border-radius: 0.5rem;
    height: 0.3rem;
  }`;
const  ItemUpload = () =>{
  

  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState();
  const onSelectFile = (e) => {
    console.log(e.target.files);
    e.preventDefault();
    e.persist();
    const selectedFiles = e.target.files;
    const fileUrlList = [...selectedFiles];
    for (let i = 0; i < selectedFiles.length; i++) {
      const nowUrl = URL.createObjectURL(selectedFiles[i]);
      fileUrlList.push(nowUrl[i]);
    }
    setSelectedFiles(fileUrlList);
    const selectedFileArray = Array.from(selectedFiles);
    const imageArray = selectedFileArray.map((file) => {
    return file.name;
  });
    setSelectedImages((previousImages) => previousImages.concat(imageArray));
    e.target.file = '';

  }
  
  const attachFile =
  selectedImages &&
  selectedImages.map((image) => {
    return (
      <DivImg key={image}>
        <div>{image}</div>
        <button onClick={() => setSelectedImages(selectedImages.filter((e) => e !== image))}>
       
        </button>
      </DivImg>
    );
  });




  
  const customUploadAdapter = (loader) => {
    return {
      upload() {
        return new Promise((resolve, reject) => {
          const formData = new FormData();
          loader.file.then((file) => {
            formData.append("file", file);
            // axios
            //   .post("http://localhost:3000/api/v0/file/upload", formData)
            //   .then((res) => {
            //     resolve({
            //       default: res.data.data.uri,
            //     });
            //     // console.log(res.data);
            //   })
            //   .catch((err) => reject(err));
          });
        });
      },
    };
  };

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
    console.log(uploadProdData);
    // const response =  await AxiosFinal.productUpload(uploadProdData.title,
    //                                                  uploadProdData.price,
    //                                                  uploadProdData.color,
    //                                                  uploadProdData.size,
    //                                                  uploadProdData.category,
    //                                                  uploadProdData.productImg,
    //                                                  uploadProdData.content)
                                               
    
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
                <input className="title-file2" type='file' onChange={(e)=>{getValue(e);
                                                                          onSelectFile(e)}} 
                 value={productImg} name='productImg'  multiple/>
                  <div>{attachFile}</div>
                
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