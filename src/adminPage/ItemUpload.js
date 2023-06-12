import React from "react";
import styled from "styled-components";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


const Container=styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 1px solid black;
.title-input{
  height: 30px;
  border: none;
  font-size: 15px;
}
.ck.ck-editor__editable:not(.ck-editor__nested-editable) {
  height: 500px;
}
.submit-button{
  border: 1px solid black;
  background-color: white;
  width:500px;
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
    return(

        <Container>
            <div className="upLoadInput">
                <input className="title-input" type='text' placeholder='상품명' />
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
                <button className="submit-button">upload</button>
            </div>
           

        </Container>
    );
};

export default ItemUpload;