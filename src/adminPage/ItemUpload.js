import React,{ useState } from "react";
import styled from "styled-components";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';



const Container=styled.div`
width: 100%;
height: 100%;

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
    height: 200px;
    display: flex;
    flex-direction:column;
    justify-content: space-evenly;

  }
  .title-file{
    
  }
  
  
  input{
    width: 100%;
    height: 22px;
    border: none;
    font-size: 17px;
    border-bottom:1px solid #CCC;
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
    height: calc(100vh - 500px);
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
`
const  ItemUpload = () =>{

  const [uploadProdData, serUploadProdData] = useState({
    title: '',
    content: ''
  })

  const getValue = e => {
    const { name, value } = e.target;
    serUploadProdData({
      ...uploadProdData,
      [name]: value
    })

  };

  const onCheck=()=>{
    console.log(uploadProdData);
  }
    return(

        <Container>
            <div className="upLoadInput">
              <div className="upLoadInputHead">
                <input className="title-input" type='text' placeholder='pleace enter product name'  onChange={getValue} name='title'/>
                <input className="title-price" type='text' placeholder='pleace enter product price'  onChange={getValue} name='price'/>
                <input className="title-color" type='text' placeholder='pleace enter product color'  onChange={getValue} name='color'/>
                <input className="title-size" type='text' placeholder='pleace enter product size'  onChange={getValue} name='size'/>
                <input className="title-file" type='file' placeholder='pleace enter product productmg'  onChange={getValue} name='productmg'/>  
                <input className="title-file2" type='file' placeholder='pleace enter product productmg'  onChange={getValue} name='productmg'/>  
                <div className="filebox">
                    <input class="upload-name" value="첨부파일" placeholder="첨부파일"/>
                    <label value="productmg">파일찾기</label> 
                    <input className="title-file2" type='file' onChange={getValue} name='productmg'/>  
               </div>
              </div>
                  <CKEditor className="info-input"
                    editor={ClassicEditor}  
                    config={{
                      placeholder: "내용을 입력하세요.",

                  }}
                    data="<p></p>"
                    onReady={editor => {
                      // You can store the "editor" and use when it is needed.
                      console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      console.log({ event, editor, data,});
                      serUploadProdData({
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